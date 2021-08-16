---
title: Creating Space (Working with Namespaces)
date: 2021-05-02
extract: "Namespaces provide a means to logically group and re-route controllers within a Rails app. Setting up a namespace consists of defining the namespace and then..."
description: "Using namespaces to separate areas of functionality in a Rails app"
social_preview: "/images/og/ror-newsroom.jpg"
tags: ['ruby', 'rails', 'pattern', 'namespace']
---

*[Project repo on Github](https://github.com/royemosby/RoR-Newsroom)*

*[Demo of RoR Newsroom on Heroku]()* (it sometimes takes a moment to open)

<img src="/images/ror_newsroom.svg" alt="Ruby on Rails Newsroom Logo">

For my phase 3 Ruby on Rails project, I decided to create RoR Newsroom.  This newsroom application is platform for readers to read published articles and gives a place where RoR Newsroom employees can work on articles before they are published.

- Readers would go to ror-newsroom.com to read(not a real website!)
  - They do not have accounts so do not need to log on
  - They can read published articles
  - The can browse article tags and see associated published articles
  - They can see a staff page and an about page
  - They CANNOT see any articles that are not yet published
  - They CANNOT make any changes
- Newsroom employees would go to ror-newsroom.com/workspace to work
  - They have to log in with username/password our using GitHub's OAuth authentication
  - They can update their account information
  - They can view articles by status (new, approved, draft, review, etc.)
  - They can interact with non-published articles (create, view, edit, publish)
  - They can provide editorial review comments on draft articles
  - They can still see the published articles, tags, etc. by navigating to routes accessible to readers

## Minimizing logic in controllers

Enter namespaces. Namespaces provide a means to group controllers and re-route requests within a Rails app. By separating one of the uses off into a namespace, it allows me to work with the same model data in different ways without having to bog my controller actions down excessive logic. I am displaying articles to readers and employees but they are doing it for different purposes. Rather than increase the logic in my controller to determine who is visiting and for what purpose, I nest my ArticlesController in `workspace`. I then create a NewsController that a reader interacts with to see published articles. I also split interaction with my Employee model into StaffController and EmployeesController for much the same purpose.

Namespacing starts by drawing the namespace in the routes and then nesting the controllers that are to be grouped together.

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

The code above is an example of what Rails uses in the `routes.rb` to determine how to route browser requests. Some controllers and special-use routes have been omitted to keep the example concise.

If this application was hosted at `ror-newsroom.com`, that URL would be the one that users go to see all the published articles. The resources `:news` and `:staff` could be found at `ror-newsroom.com/news` and `ror-newsroom.com/staff`, respectively.

The `:workspace` nests the controllers `:articles`, `:editor_revisions`, and `:employees` to keep them separated from `news` and `staff`. They are accessible only through that namespace. The homepage for employees after they log in is `ror-newsroom.com/workspace`.

## Rails simplifies design decisions with conventions

Since Ruby on Rails favors convention over configuration, inclusion of a namespace changes some file structures and and a little code. While this may sound daunting at first, respecting convention helps with the organization of a larger project. In short, as a Rails developer, I've been provided tools that allow me to focus on the behavior inside the project rather than having to invent frameworks for those behaviors myself.

Excluding the routes at the beginning of the article, here are the salient changes to a Rails app. The rest of this article will provide examples of each to get you up and going.

1. The controllers are nested in a `workspace` folder.
2. The resources that work with controllers are nested into a `workspace` folder in their respective location (styles, partials, helpers, tests, and so on...).
3. The controllers' classes are namespaced under `Workspace::`.
4. Form helpers have to be passed the namespace and the object instead of just an object.
5. Rails' controller generator is smart! Well, this is not a change, but certainly helps out like a good friend should.

## Controllers are nested in a `workspace` folder

This is easy enough to show. Note in the image how there are controllers found under the workspace folder under the controllers folder. Because of convention, that `workspace` name will show up wherever directories or code is changed.

![Namespaced Controllers](/images/namespaced-controllers.png)

## Resources similarly nested in their own `workspace` folders

Wherever resources are usually found, they should be nested similarly to the controllers; inside a workspace folder.

![Namespaced Views](/images/namespaced-views.png)

![Namespaced Helpers](/images/namespaced-helpers.png)

Even Rspec, when used, will create tests in the correct directory when a controller generator makes a namespaced route.

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

## Form helpers need more information

In order for a form-helper to do its magic, it has to know information about what it is working on and where it is supposed to direct requests. Normally, they have enough information when supplied a model instance to work with. By convention, it knows where the controllers are and what actions to use. Namespaces complicate this a bit so the form-helpers need just a little bit more information so that they know how to set up requests.

Here is an example typical Rails form template using form_with

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

If this code above was used in a form referenced by a namespaced controller, the application would throw an error to the affect that a route could not be found. When given a model instance- `@article` in this case- it will look for an `ArticlesController`. The form helper does not know to look in the Workspace:: namespace yet. The form will attempt to make the post action route to `ror-newsroom.com/articles` which does not exist. The desired route with the namespace is `ror-newsroom.com/workspace/articles`. Luckily, it only requires minor modification to get the helper the information that it needs.

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

The `form_with` method also accepts an array of values, where one can designate a namespace and a model instance from which to work. The form builder can now correctly handle the post(or update) request. If `form_for` or `form_tag` are used, the same considerations must be taken into account.

## Controller generators are smart

If a generator is being used, they are flexible enough to automatically namespace controller classes and place all generated files in the correctly nested locations.

Normally one would use a generator like:

```bash
rails generate controller Articles
```

To namespace, combine the namespace with the article as if it was a directory structure

```bash
rails generate controller Workspace/Articles
```

This approach will place all the controllers and associated files in the correct directories. What is more, the controller's class will be declared correctly namespaced. Same with helper modules. Rails almost codes itself at times!

## Closing Thoughts

The use of namespaces are a convenient way to structure a Rails app. They can separate controllers and views inside the application into logical groups. With the information provided in this article, it is easy to get started.
