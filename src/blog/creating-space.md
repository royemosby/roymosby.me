---
title: Creating Space (Working with Namespaces)
date: 2021-05-02
extract: "Namespaces provide a means to logically group and re-route controllers within a Rails app. Setting up a namespace consists of defining the namespace and then..."
description: "Using namespaces to separate areas of functionality in a Rails app"
---

For my phase 3 Ruby on Rails project, I decided to create a newsroom app. RoR Newsroom focuses on the publishing workflow found inside of a multi-user new-producing venture. I wanted the project to be structured so that visitors can peruse published articles and give the editorial team a platform on which to work. I also wanted to keep the two uses separate from each other- users should not be able to see non-published drafts or make any changes to any content.

Enter namespaces. Namespaces provide a means to logically group and re-route controllers within a Rails app. Setting up a namespace consists of defining the namespace and then passing in the controllers that are to be grouped.

```ruby
#inside /config/routes.rb
Rails.application.routes.draw do
 
 resources :news, only: [:index, :show]
 resources :staff, only: [:index, :show]
 # etc etc

 namespace :workspace do
  resources :articles
  resources :editor_revisions
  resources :employees
  # etc, etc
 end
 
end
```

The code above is an example of what Rails uses in the `routes.rb` to determine how to route browser requests. If this application was hosted at `ror-newsroom.com`, the resources `:news` and `:staff` could be found at `ror-newsroom.com/news` and `ror-newsroom.com/staff`, respectively. The namespace `:workspace` separates the `:articles`, `:editor_revisions`, and `:employees` from the first two by nesting their actions into a workspace route. This means that to get to articles, one would have to use the url `ror-newsroom.com/workspace/articles`.

Since Ruby on Rails favors convention, this effect ripples across the application, changing file structures and some code that is expected along the way. While this may sound daunting at first, it helps with the organization of a larger project.

Here is a short list of things that change. The rest of this article will illustrate examples of each to get you up and going.

1. The controllers are nested in a `workspace` folder
2. The resources that go with the controllers are similarly nested into a `workspace` folder in their respective locations throughout the app (styles, partials, helpers, tests, and so on...)
3. The controllers' classes are namespaced under `Workspace::`
4. Form helpers have to be passed both the namespace and the object when working with a particular model instance
5. Controller generator is smart! (well, this is not a change, but certainly helps out as a good friend should)

## Controllers are nested in a `workspace` folder

This is easy enough to show. Note in the image how there are controllers found under the workspace folder under the controllers folder. Because of convention, that `workspace` name will show up wherever directories or code is changed.

![Namespaced Controllers](/images/namespaced-controllers.png)

## Resources similarly nested in their own `workspace` folders

Wherever resources are usually found, they should be nested similarly to the controllers; inside a workspace folder.

![Namespaced Views](/images/namespaced-views.png)

![Namespaced Helpers](/images/namespaced-helpers.png)

Even Rspec will create tests in the correct directory when a controller generator makes a namespaced route.

![Namespaced RSpec](/images/namespaced-rspec.png)

## Controller classes namespaced under workspace

Normally, a controller's code looks like the following example:

```ruby
class NewsController < ApplicationController

 def index
  @articles = Article.status_published
 end
 
 def show
     @article = Article.find_by(id: params[:id])
   end
end
```

When a namespace is used it will look more like:

```ruby
class Workspace::ArticlesController < ApplicationController
 
 before_action :logged_on #makes sure users are logged in before
        #having access to any of these actions

 def index
  @articles = Article.status_draft
 end
 
 def show
     @article = Article.find_by(id: params[:id])
   end
 
 def new
  @article = Article.new
 end
 
 def create
  @article = Article.new(article_params)
  #...more code follows...
 end
 #... more code follows...
end
```

As an aside, you may note that I am referencing the same model, Article, in both of these controllers. This allows me to handle an article instance differently, depending on the context of the actions being performed on the Article resource. In this case, the NewsController is focused on presenting visitors with published articles. Workspace::ArticlesController is tasked with allowing only RoR Newsroom employees to work on articles.

## Form helpers need more information

For a form-helper to do its magic, it has to know information about what it is working on and where it is supposed to direct requests. Normally, they can pick up enough information by being given just a model instance to work with. By convention, it knows where the controllers are and what actions to use. Namespaces complicate this a bit so the form_helpers need just a little bit more information so that they know how to set up requests.

Here is an example Rails form template using form_with

```ruby
<%= form_with model: @article do |f| %>

 <%= f.label :title %>
 <%= f.text_field :title %>
 <br>
 <%= f.label :content%>
 <%= f.text_area :content, size: "100x30" %>
 <br>

    <%= f.submit %>
<% end %>
```

If this code above was used in a form, the application would throw an error to the effect that a route could not be found. By Rails convention, when given a model instance- `@article` in this case- it will look for an `AriclesController`. The form helper does not know to look in the Workspace:: namespace for the controller class with which to work. On the form, it will attempt to make the post (or update) action to `ror-newsroom.com/articles`. The desired route with the namespace is `ror-newsroom.com/workspace/articles`. Luckily, it only requires minor modification to get the helper the information that it needs.

```ruby
<%= form_with model: [:workspace, @article] do |f| %>

 <%= f.label :title %>
 <%= f.text_field :title %>
 <br>
 <%= f.label :content%>
 <%= f.text_area :content, size: "100x30" %>
 <br>

    <%= f.submit %>
<% end %>
```

The model also accepts an array of values, where one can designate a namespace on top of a model instance from which to work. It can now build the form to correctly handle the post(or update) request. `form_for` and `form_tag` if used, have to be created with the same considerations taken with form_with.

## Controller generators are smart

If they are being used to generate namespaced controllers, they are flexible enough to automatically namespace controller classes and place all generated files in the correctly nested locations.

Normally one would use a generator like:

```bash
rails generate controller Articles
```

To namespace, combine the namespace with the article as if it was a directory structure

```bash
rails generate controller Workspace/Articles
```

## Closing Thoughts

The use of namespaces is a convenient way to structure a Rails app. They can separate controllers and views inside the application into logical groups. There are more details that go into using namespaces, but with the information provided in this article, it is easy to get started.
