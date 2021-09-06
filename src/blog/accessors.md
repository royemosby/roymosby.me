---
title: "Accessors in JavaScript"
date: 2021-09-4
extract: "Aside from data properties, objects also have another category of properties called accessors. These are methods referred to as \"getters\" and \"setters\" that allow the program to retrieve or set a value"
description: "Using accessor properties inside of a Javascript object"
tags: ["javascript", "accessors", "getter", "setter", "fundamentals"]
---

An object is a versatile tool for JavaScript developers. They can contain information (data properties), be asked to perform work (methods which are another type of data property), and passed around inside of a program as a tidy package.

Aside from data properties, objects also have another category of properties called accessors. These are methods referred to as "getters" and "setters" that allow the program to retrieve or set a value inside of the object. While one can grab a property using dot ( `object.prop`) or bracket ( `object["prop"]`) notation, an accessor can perform additional work on the data it references before it is saved or returned. Some examples that highlight their usefulness are: accessing a private values, tweaking input values, and combining/splitting compound data properties.

Through this article, I am going to work with a person object:

```javascript
const person = {
  firstName: "Tim",
  lastName: "Berners-Lee",
  pocketChange: 3.5
}
```


## Accessing a private value

In JavaScript is no way to encapsulate values internal to an object so that they are inaccessible by the program that surrounds them. I can approximate this intent though convention. Commonly, the name of a private data property will start with an underscore.

```javascript
const person = {
  _firstName: "Tim",
  _lastName: "Berners-Lee",
  _pocketChange: 3.5,
  get firstName(){
    return this._firstName;
  },
  set firstName(name){
    this._firstName = name;
  }
}
```

`_firstName` is still accessible by calling `person._lastName` but it is understood this is a private value and should be accessed in another way. Inside the object are  accessors `get` and `set` which provide access to `_firstName`. `set` takes an argument since it expects some information to work with. Since `get` and `set` special keywords, they are not called like methods.  They are referenced just the same as a data property through dot/bracket notation or with assignment. 

``` javascript
// referencing firstName calls the get accessor
person.firstName //=> "Tim"

// setting the property to a new value references the set accessor
person.firstName = "Conway" //=> "Conway"

```

## Conditioning input

Since accessors are methods under the hood, they can be used to change data so the input or output is different. For a person object, a perfect use case would be capitalizing a name as it is set. As a new value is passed in, it can be put into title case before being stored in the private data property.

```javascript
const person = {
  _firstName: "Tim",
  _lastName: "Berners-Lee",
  _pocketChange: 3.5,
  get firstName(){
    return this._firstName;
  },
  set firstName(name){
    this._firstName = name[0].toUpperCase + name.slice(1);
  },
  get pocketChange(){
    return `$${this._pocketChange.toFixed(2)}`
  },
  set pocketChange(val){
    if(typeof val === "string"){
      val = + val.slice(val.indexOf("$") + 1) //+ converts string to number
    }
    if(isNaN(val)){
      throw 'val is not a number'
    } else {
      this._pocketChange = Math.round(val*100)/100 //keeps 2 decimal places
    }
  }
}
```

Also shown above, using a setter for pocketChange allows the input to be more flexible. `person.pocketChange = x` permits `x` to be either a number or a string of numbers with or without a dollar sign and a dot separator. I also added a user-defined exception `if(isNan(val))...` that throws when the input cannot be translated into a dollar amount.

## Combining/splitting data attributes or inputs

Another case where getters and setters are useful is combining values. Should I want to reference a person object's first and last name, we can make a `fullName` getter that does the work of joining the names inside the object. We can also use a setter to split a full name into a first and last name.

```javascript
const person = {
  _firstName: "Tim",
  _lastName: "Berners-Lee",
  _pocketChange: 3.5,
  get fullName(){
    return `${this._firstName} ${this._lastName}`;
  },
  set fullName(name){
    this._firstName = name.slice(0, name.indexOf(" "))
    this._lastName = name.slice(name.indexOf(" "))
  }
}
```

These are just a few examples of how to use getters and setters inside JavaScript.

