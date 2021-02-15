---
title: Dealing with multiple table relations 
date: 2021-02-14
extract: "To design my object relation model, I have to consider two types of data in RecipeSwap: users and recipes. I also have to determine how those two types relate to eacho ther."
---

"And all the men and women merely players; They have their exits and their entrances, And one man in his time plays many parts..." -Shakespeare, As You Like It

[RecipeSwap](https://github.com/egomadking/RecipeSwap), a Ruby project built with Sinatra and ActiveRecord for my Flatiron class, is a recipe sharing community. Users of the RecipeSwap are able to create recipes and can curate other's recipes through favoriting them. Before going any further, this article assume familiarity with Ruby and basic structured database concepts. 

## Obect Relation Model

To design my object relation model, I have to consider two types of data in RecipeSwap: users and recipes. I also have to determine how those two types relate to each other. On one hand, I have users who posts recipes. A recipe can only be authored by one user. On the other hand, I have users that are able to favorite recipes. A recipe can be favorited by any number of users. Like Shakespeare's players, I have to get `user` and `recipe` each to play more than one part.

These roles in database relational terms:

1. `user` HAS MANY `recipes` and `recipe` BELONGS TO `user`
2. `user` HAS MANY `recipes` and `recipe` HAS MANY `users`

**BUT WAIT!** That is confusing! How can these relations be differentiated? It is ambiguous to the user and it would cause my program to fail. Something has to be re-named. To give the second relation more context, I am going to think re-word them as:

1. `user` HAS MANY `recipes` and `recipe` BELONGS TO `user`
2. `collector` HAS MANY `favorites` and `favorite` HAS MANY `collectors`

Much better!

## Relation #1: One-to-Many

The first relation is one to many. The database tables can be associated by placing a foreign key to the user on the recipe. This foreign key is a reference on the recipe's record back to the user record to identify who owns it. The ActiveRecord migration files that establish the tables in my database look something like:

```ruby
#user migration...

class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :password_digest
    end
  end
end

#recipe migration...

class CreateRecipe <ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string   name
      t.string   description
      t.string   ingredients
      t.string   instructions
      t.integer  servings
      t.integer  user_id #foreign key for user
      t.datetime created_at
      t.datetime updated_at
    end
  end
end
```

When working with ActiveRecord, the second half of establishing a working object relational model is to create Ruby classes to represent each one of the tables. These classes are used to build associations with each other to allow the programmer to work with the application's data without having leave the Ruby programming language. The database tables and the model classes make up the "Model" in Model View Controller (MVC) architecture. The below code show the model classes upto this point.

```ruby
# user model

class User <ActiveRecord::Base
  has_many :recipes
  has_secure_password # don't focus on this...
                      # it forces a user to have a password
                      # and stores it securely.
end

# recipe model

class Recipe < ActiveRecord::Base
  belongs_to :user
end
```

## Relation #2: Many-to-Many

As I previously discussed, I chose to think of the many-to-many relation as `collectors` and `favorites`. This differentiates itself from the first relationship. Several steps have to be completed e to get ActiveRecord and the database to understand this new relation.

As with all many-to-many relations, I will need a join table. A join table brings together foreign keys from records on two separate tables and creates its own record to represent a relationship. This allows the database to make many collector-favorite connections. Following ActiveRecord convention, this table is named `collector_favorites` as shown below.

```ruby
class CreateCollectorFavorites < ActiveRecord::Migration
  def change
    create_table :collector_favorites do |t|
      t.integer :collector_id, foreign_key: {to_table: 'users'}
      t.integer :favorite_id, foreign_key: {to_table: 'recipes'}
    end
  end
end
```

### ActiveRecord Naming Conventions

There is much more going on with this migration file than with the previous `users` and `recipes` tables. Much of the magic in Active Record comes from naming conventions. Through consistent naming, ActiveRecord is able tie together different files with database tables without much effort on the developer's part. The following are basic ActiveRecord naming guidelines:

- a record on a table is a singular noun: `user` or `recipe`
- a table's name is a pluralized version of the records' name: `users` or `recipes`
- a foreign key is on a table is singular and has a "\_id" appended: `user_id` or `recipe_id`
- the model class is singular and uses PascalCase: `User` or `Recipe`
- the filenames containing the classes must be singular and in lowercase or snake\_case: `user.rb` or `recipe.rb`
- in a one-to-many relationship
  - the class that is the one in one-to-many declares its ownership of the other: `has_many :recipes`
  - the class that is the many in one-to-many declares its owner by using: `belongs_to :user`
- join table used by many-to-many relationship (we will get to the name changes shortly...)
  - join table name is the singular name of the first table and the pluralized name of the second table combined with an underscore: `collector_favorites`. Which table comes first is a matter of developer preference.
  - the foreign keys are singular and have "\_id" appended: `collector_id` and `favorite_id`
  - The model class is combines the singular names of both joined tables using PascalCase: `CollectorFavorite`
  - The file containing each model class uses snake\_case: `collector_favorites.rb` (same name as database table plus file extension)
  - The model classes each delcare ownership of the join table: `has_many :collectors` (this is a bit incomplete but I promise we will get to renaming in just a moment!)
  - The join table model then declares its relation to the other two models: `belongs_to :collector` and `belongs_to :favorite`
  - The both original model classes finally declare ownership of eachother through the join table: `has_many :collectors, through: :collector_favorites` and `has_many :favorites, through: :collector_favorites`
  
### Renaming Relationship Keywords

Here is the model code that I will be working with that make the second relationship work alongside the first:

```ruby
#user model

class User <ActiveRecord::Base
  has_many :recipes
  has_many :collector_favorites, foreign_key: "collector_id"
  has_many :favorites, class_name: "Recipe", through: :collector_favorites
  has_secure_password
end

#collector_favorites model

class CollectorFavorite <ActiveRecord::Base
  belongs_to :collector, class_name: "User"
  belongs_to :favorite, class_name: "Recipe"
end

#recipe model

class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :collector_favorites, foreign_key: "favorite_id"
  has_many :collectors, class_name: "User", through: :collector_favorites
end
```

Here is the join table migration again...

```ruby
class CreateCollectorFavorites < ActiveRecord::Migration
  def change
    create_table :collector_favorites do |t|
      t.integer :collector_id, foreign_key: {to_table: 'users'}
      t.integer :favorite_id, foreign_key: {to_table: 'recipes'}
    end
  end
end
```

Let's focus on the join table first. It consists of 3 keys. First an `id` key that ActiveRecord automatically makes so is not defined. The remaining two keys, `collector_id` and `favorite_id` are foreign keys to `users` and `recipes` respectively. Since they do not match the ActiveRecord naming conventions, we have to give some extra information. The additional argument, `foreign_key: {to_table: 'XXXXXX')` is a hash that lets ActiveRecord know that this key, regardless of its name, is being used as a foreign key for "XXXXXX" table.

The next step to making the `collector_favorites` table is to create the model class, CollectorFavorite. As an object that represents a join table, this uses `belongs_to` twice to associate it to `collector` and `favorite`. ActiveRecord would normally look for a `collectors` and `favorites` table but this is not what I want. So that it looks for the correct objects, I include their name as a value for the hash, `class_name`: ...`foreign_key: {to_table: 'users'}` and ...`foreign_key: {to_table: 'recipes'}`.

I now need to do some work on the User and Recipe objects to finalize the association. When creating associations through a join table, I often think about the processes as "walking through" through my model until I get to my destination object.

On each, User and Recipe, I declare the association `has_many :collector_favorites`. It is here I also define the name of the foreign key associated with this part of my model. In other words, I am telling active record that I want `user_id` to be known as `collector_id` and `recipe_id` to be known as `favorite_id`. This allows the current association to coexist with the first.

The final step on the "walk through" the model in creating the many-to-many association between the two destination objects. Each has a `has_many` relation to the other but refers to them through `collectors` and `favorites`. Since neither of these are tables in our database, we have to tell ActiveRecord what classes we are referring to. This is done through the `class_name:` hash. I also have to tell it that these associations are made `through: :collector_favorites`.

It was quite a journey to make two associations work independently on the same tables. By renaming the resources in one relation, RepiceSwap users can make recipes and favorite them too. Like Hamlet said, "Suit the action to the word, the word to the action..."

