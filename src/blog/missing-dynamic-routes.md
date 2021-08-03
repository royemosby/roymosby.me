---
title: "React Router: Handling 404's on Dynamic Routes"
date: 2021-07-04
extract: "Namespaces provide a means to logically group and re-route controllers within a Rails app. Setting up a namespace consists of defining the namespace and then..."
description: "Handling missing dynamic routes in React using React-Router"
social_preview: "/images/og/rb.jpg"
tags: ['javascript', 'react', 'router', 'pattern', 'project']
---
*A [repository for RecipeBook](https://github.com/royemosby/RecipeBook) can be found on my GitHub*

<img src="/images/og/rb.jpg" alt="Ruby on Rails Newsroom Logo" alt="screenshot of my app, RecipeBook">

*note: I exclude imports, exports, and portions of code irrelevant to the discussion. Please do not think of each code block as a complete component!*

## Intro

For our capstone project, we set out to create a single-page application (SPA) written in React using Redux and Router. An SPA is a type of web page that approximates the functionality of a computer application but runs in a web browser. Navigation around a SPA differs from a website in that there are no page reloads. Interactions are fluid and it feels faster than navigating the web. A generous amount of JavaScript and in this case React, aids the coordination between user interactions, fetching and sending data, and updating content on the screen.

On top of React, React Router is needed so that the app has the same benefits from URL navigation as is found on a traditional website- browsing history, bookmarking, etc. It encapsulates certain configurations of state to be activated by a URL. For my application, I associated URLs with a landing screen, a profile screen, a list of recipes, and individual recipes. Each one of these application "states" consists of a component and sometimes unique logic needed for that particular route.

With the niceties of having URL navigation, there are developer responsibilities to protect the user from accidentally navigating to a bad route. Should a user navigate to an incorrect URL, the application may crash in the browser, leaving the user stranded with an ominous, incomprehensible error page.

## 92.875% solution

React Router provides several mechanisms that help out, particularly the `NoMatch` component. Much as its name describes, it gives the Router something to work with if none of the named Routes match. It does so by being paired up with a catch-all route at the end of a series of named routes. The star will match anything in the URL and so will render the NoMatch component should all the other Routes not meet the criteria of the URL.

```javascript
//extract showing the Router component taken from App.js 

<Router>
<div>
  <Header />
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/user" component={ShowUser} />
    <Route exact path="/user/new" component={NewUser} />
    <Route exact path="/recipes"><Redirect to="/" /></Route>
    <Route exact path="/recipes/new" component={NewRecipe} />
    <Route exact path="/recipes/:recipeId/edit"component={EditRecipe} />
    <Route exact path="/recipes/:recipeId" component={ShowRecipe} />
    <Route path="*"> //this catches any route that isn't already matched above
      <NoMatch />    //this component tells the application how to handle it
    </Route>
  </Switch>
  </div>
</Router>
```

## The big challenge

In the above snippet, the `<Route path="*"...` is the catch-all that handles a significant portion of url-mismatch issues. Not all of them, however. One significant challenge that I ran into is that it could not accurately handle recipe ids. React Router translates the colon and the word immediately following it as an argument to feed the component that it is rendering. It does not know anything about the data stored in the application. It can see that there is some information in the URL that is standing in as a recipe id but it has no way of checking its validity.

Let's say I had a list of recipes in my application:

1. Name: Turkey Sandwiches
   - Description: Post-Thanksgiving classic
   - ID: 1234
2. Name: Butter Biscuits
   - Description: Makes 8-10 tender American biscuits
   - ID: 5678
3. Name: Porterhouse Steak
   - Description: Perfectly seared steak for 2-4 people
   - ID: 9012

My application is happy to navigate to 'https://fake-url.com/recipes/1234' which will render out the components needed to show the Turkey Sandwiches recipe. It's also fine with ids '5678' and '9012' which renders their recipes. It too will navigate to '/recipes/7418' but will crash the application because there is no recipe associated with that id. Oddly enough, there's nothing directly baked into React Router that handles this.

## Catching non-existent IDs ( the other 7.125%)

The component that renders a recipe already has enough logic in it that I did not want to make it any more complex. Instead, I developed an evaluation component named RouteOrRedirect that renders a route to the recipe contingent on its existence. If the recipe does not exist, it redirects the user to a working page and displays an error message to tell them what went wrong. Given a little refinement, I would be able to easily re-use the component on other resources should I expand upon my application.

```javascript
// pertinent extract of the RouteOrRedirect.js

const RouteOrRedirect = (props) => {
  return (
    <div>
      {isMatch(props) ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <>{handleRedirect(props)}</>
      )}
    </div>
  )
}

const handleRedirect = (props) => {
  return <Redirect to="/">{props.recipeNotFound()}</Redirect>
}

const isMatch = (props) => {
  const targetRecipe = props.computedMatch.params.recipeId
  const matched = props.recipes.some((recipe) => {
    return recipe.id === targetRecipe
  })
  return matched
}

```

The component has two supporting functions that break the logic down into manageable chunks. By order of operation they are:

1. `isMatch`: this performs the matching logic. It compares the params that ReactRouter is sending into the Route component to the application's store which holds all the recipes. `props.recipes.some(...` is a normal method in javascript that will return true or false if it finds the recipe. `isMatch`, therefore returns true or false.
2. `handleRedirect`: this function returns a Redirect component (nothing fancy; it tells Router where to automatically navigate to.) and calls a dispatch method, `props.recipeNotFound()`. This dispatch method is specific to my application since I am also using Redux. Any other means of notifying the user may be used in its place.
3. `RouteOrRedirect` is the component that ties everything together. If `isMatch` is true, then it returns a Route component. If `isMatch` is false, it invokes `handleRedirect` which itself returns a Redirect component.

To use the RouteOrRedirect component in the list of routes in App.js, it's just a matter of substitution:

```javascript
//extract from App.js 

///...
<Route exact path="/recipes"><Redirect to="/" /></Route>
<Route exact path="/recipes/new" component={NewRecipe} />
<RouteOrRedirect path="/recipes/:recipeId/edit"component={EditRecipe} />
<RouteOrRedirect path="/recipes/:recipeId" component={ShowRecipe} />
<Route path="*">
  <NoMatch />
</Route>
///...
```

## Some Big Caveats

I constructed this solution myself- nothing I saw in Redux documentation met my exact needs. The component does not take async operations into account. If you need to confirm the lack of an asset from a remote location before rendering out the route/redirect `RouteOrRedirect` will need to behave differently. It probably will not win a "best practice" award but it works. The nice thing about learning to code is that it is never done! I figured out how to do something that I previously did not know how to do. I am sure that I will run across a better way to handle this eventually but it's more important that I delivered a completed, working project than have perfect code in an incomplete project.
