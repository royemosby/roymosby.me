---
title: Memoization in JavaScript
date: 2021-07-15
extract: "Memoization allows a developer to cache responses from a computationally expensive function. The memoized function only has to be run once with a given input. If ran again with the same input, the result is pulled from the cache rather than recalculated."
description: "How to use memoization to avoid repeating expensive computations"
social_preview: "/images/og/memoize.jpg"
---

<img src="/images/og/memoize.jpg" alt="article hero image with a memozied function">

## Intro

Memoization allows a developer to cache responses from a computationally expensive function. The memoized function only has to be run once with a given input. If ran again with the same input, the result is pulled from the cache rather than recalculated.

## Basic memo

This basic version uses a globally declared variable as a caching mechanism. Adding 10 to another number is trivial but acts as a stand-in for something much more complex. I favor contrived examples like this to avoid distraction while homing in on the concepts at hand. Let's dive right in...  

```javascript

const cache = {}

function add10(num){
  return num + 10
}

function memoizeAdd10(num) {
  if (num in cache) {
    console.log("pulled from cache")
    return cache[num]
  } else {
    console.log("calculating")
    cache[num] = add10(num)
    return cache[num]
  }
}

memoizeAdd10(13)
// logs to console: "calculating"
// returns: 23

memoizeAdd10(13)
// logs to console: "pulled from cache"
// returns 23

memoizeAdd10(7)
// logs to console: "calculating"
// returns: 17
```

This is a start but has several drawbacks. The first is that it does not follow the best practice of saving as little as possible to the global scope. Where `const cache = {}` is declared adds to the global namespace pollution. This could conflict with other parts of the codebase or imported libraries, inadvertently overwriting values used somewhere else.

## Using closures to clean up global scope

It would be better to encapsulate the cache so that it is accessible to the memoizing function but not the rest of the JavaScript codebase. Enter closures! Closures are a means to make the parts of a function accessible, in a very controlled manner to code outside of the function. Put differently, it's a way of packaging a function and some references in another function. This 'package' function then returns the internal function which, through the lexical scope, maintains access to those references contained in the 'package' function.

It may sound confusing but it is taking advantage of several features found in JavaScript. One is that JavaScript treats functions as if they were objects (they are). That means that functions can be passed around as arguments or they can be returned from other functions. The second is that the returned function maintains access to the cache declared in the same function because of closure.

```javascript
function add10(num){
  return num + 10 
}

function createClosureAdd10() {
  const cache = {}
  return (num) => {
    if (num in cache) {
      console.log("pulled from cache")
      return cache[num]
    } else {
      console.log("calculating")
      cache[num] = add10(num)
      return cache[num]
    }
  }
}

const memoizeAdd10 = createClosureAdd10()

memoizeAdd10(13)
// logs to console: "calculating"
// returns: 23

memoizeAdd10(13)
// logs to console: "pulled from cache"
// returns 23

memoizeAdd10(7)
// logs to console: "calculating"
// returns: 17

```

A few things to note with this approach:

1. When declaring `memoizeAdd10`, it is executing `createClosureAdd10()`. This function **returns** the anonymous memo function (the anonymous arrow function returned on line 7) but does not execute it. That aspect of this approach was my big hangup when first exposed to closures.
2. `memoizeAdd10` references the memo function and can be used just like a function. In other words, it can be invoked with an argument and will execute.
3. Since the memo function, which `memoizeAdd10` is referencing was declared within `createClosureAdd10`, along with the cache variable, `memoizeAdd10` maintains access to this cache variable. The function was declared in the same lexical environment where the cache variable resides. Remember that access to scope goes from in to out.

```javascript
// a brief sidetrack into scope...

const globalVariable = "global"

function normalFunction() {
  const scopedVariable = "scoped to normalFunction"

  function closureFunction() {
    //has access to: globalVariable, scopedVariable
  }
  // has access to globalVariable, scopedVariable
  return closureFunction
}

//has access to globalVariable. Cannot access: scopedVariable

const closureFunctionReference = normalFunction()

// closureFunctionReference maintains access to scopedVariable
```

## Shrinking the codebase using and IIFE

If the memoize function is guaranteed only to be used in one place, the function creating the closure can be turned into an immediately invoked function expression -aka- and IIFE, pronounced "iffy". This can tidy up the codebase a little.

```javascript
function add10(num) {
  return num + 10
}

const memoizeAdd10 = ((num) => {
  const cache = {}
  return (num) => {
    if (num in cache) {
      console.log("pulled from cache")
      return cache[num]
    } else {
      console.log("calculating")
      cache[num] = add10(num)
      return cache[num]
    }
  }
})()

memoizeAdd10(13)
// logs to console: "calculating"
// returns: 23

memoizeAdd10(13)
// logs to console: "pulled from cache"
// returns 23

memoizeAdd10(7)
// logs to console: "calculating"
// returns: 17
```

Note the extra opening (`((num)...`) and closing bracket `})...` around anonymous function expression and then the additional opening and closing brackets immediately following. The brackets enveloping the function and then open/close brackets pair call the function on the spot. Thus the name IIFE.

## Decoupling memoize from working function

Another shortcoming  in the examples above is that the function that does the work, `add10(num)` is still directly referenced inside of the memoize function. This tightly couples the code and prevents re-use. Let's take this one step further and make a more generalized memoize function that takes a callback. Again, JavaScript treats functions as objects so we can pass them around just the same.

```javascript
function add10(num) {
  return num + 10
}

function squared(num) {
  return num ** 2
}

function concatBang(phrase) {
  return `${phrase}!`
}

function memoize(callback) {
  const cache = {}
  return (num) => {
    if (num in cache) {
      console.log("pulled from cache")
      return cache[num]
    } else {
      console.log("calculating")
      cache[num] = callback(num)
      return cache[num]
    }
  }
}

const memoizeAdd10 = memoize(add10)
const memoizeSquared = memoize(squared)
const memoizeConcatBang = memoize(concatBang)

memoizeAdd10(13)
// logs to console: "calculating"
// returns: 23

memoizeAdd10(13)
// logs to console: "pulled from cache"
// returns 23

memoizeSquared(12)
// logs to console: "calculating"
// returns: 144

memoizeConcatBang("I learned something")
// logs to console: "calculating"
// returns: "I learned something!"

memoizeConcatBang("I learned something")
// logs to console: "pulled from cache"
// returns: "I learned something!"


```

I threw in `squared` and `concatBang` to demonstrate this approach's versatility. As long at the callback function requires one argument, this approach can be used to optimize your codebase. Memozing can be further generalized to take in account functions that take 0 arguments or more than one argument. At this point, I will let the gentle reader use what they learned here today to figure that out on their own. Happy coding!
