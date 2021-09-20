---
title: island challenge
date: 2021-09-28
extract: "A coding that I faced recently during a technical interview was called the island counting challenge. It goes by several other similar names- island hopper, number of islands challenge, etc. What it amount to is that the testee is is supposed to find the number of islands in a text-based grid."
description: "Solving the island counting challenge with recursion"
tags: ["javascript", "challenge", "pattern", "recursion"]
---

A coding that I faced recently during a technical interview was called the island counting challenge. It goes by several other similar names- island hopper, number of islands challenge, etc. What it amount to is that the testee is is supposed to find the number of islands in a text-based grid. The input is usually given as an array of arrays filled with "L"s (land) and "W"s (water).  When stacked, they make a grid similar to the following:

```javascript
const test1 = [
	["W", "L", "W", "W"],
	["W", "L", "L", "W"],
	["W", "L", "W", "L"],
	["W", "W", "W", "W"],
]
```

There are versions that give the testee a single string and the dimensions of the grid. Regardless of the input details, the rules of the challenge are the same.

1. An island consists of an "L" or a  group of "L"s  that neighbor each other above, below, to the right or to the left. Adjacent "L"s are not neighbors, unless they have another "L" connecting them together vertically and horizontally.
2. The solution should return a count of the number of islands in the input.
3. It should be assumed that the grid is surrounded by water.

To keep terminology simple, I will refer to the input text as a grid since that is the shape it embodies. I will also relate the location of individual characters in terms of rows and columns. Rows and columns are relatable to anyone who has worked with a spreadsheet. It is also much easier to reason with than talking about an items in sub-arrays of an array (that's very chewy). 

Since the islands can be of any size, from a sole character all the way up to the entire grid, we need to find a way to describe how we identify an island. Doing so is fairly intuitive and can lead an adequate solution to this challenge. The first step to making an island is identifying the first piece of land. This is a matter of iterating through each character in each row until an "L" is encountered.

After this first land is identified, the algorithm must see if there are any other lands connected. It should do so by examining each of its direct neighbors- up, right, down, left. As new land characters are identified, they need to be grouped with the first land to make up the whole island. The algorithm must also check these new land characters in the same manner to see if they have neighbors too.

After every single letter from the land mass has been identified, the algorithm should note it is an island and then continue iterating through the rest of the characters, repeating as needed until the end of the input. The algorithm should have a count of all the islands found and then return that as the solution.

Because of the variable nature of the size of an island, the algorithm must have the flexibility to continue to execute until all characters of an island have been identified. Like the coin solution that I worked on before, this problem lends itself perfectly to recursion. The same set of steps can be performed repeatedly, and in parallel to branch out from the first "L" to find all the neighbors.

So that I can control how the recursion executes, I have to set some boundary conditions on the algorithm.

1. It does not need to check a character already identified as an island.
2. It does not examine a row above the first row.
3. It does not examine a row below the last row.
4. It does not look before the first column.
5. It does not look after the last column.

The first condition can be addressed using a caching object that takes a note of the column and row of the "L" character checked. Conditions 2 and 4 can be addressed by examining no row with an index lower of 0 or higher than the index of the last row. Conditions 3 and 5 can be addressed by ensuring that the examination does not look beyond the left-most or right-most column.

After determining the boundary conditions where I want the recursion to stop, I then decide what I need the algorithm to do when it finds a new land character. This can be put simply:

1. Add the current character's coordinates into the caching object
2. Push the current character into the current island array.
3. Check the current character's neighbors with a function called `sweep()` to see if they are an island character.
3. perform steps 1-4 on positively identified neighbors, letting the algorithm branch (recurse) out to find all connected land characters.
5. When there are no more characters to add to the current island array, add that island into an island counting mechanism (another array called islands). Conversely, islands could be an integer that starts at 0 and is incremented for every island found.
6. Continue to the next unchecked character...

The final code for this particular solution:

```javascript

const leet = [["1","1","1","1","0"],
              ["1","1","0","1","0"],
              ["1","1","0","0","0"],
              ["0","0","0","0","0"]]

const lee2 = [["1","1","0","0","0"],
              ["1","1","0","0","0"],
              ["0","0","1","0","0"],
              ["0","0","0","1","1"]]
              
const numIslands = function(grid) {

  let islands = []
  let marked = {}
  // scaffold marked's rows 
  for(let y = 0; y < grid.length; y++){
    marked[y] = {}
  }

  const sweep = (island, xy) => {
    const [x, y] = xy

    //check right
    if( x < grid[y].length && !marked[y][x + 1] && grid[y][x + 1] === "1"){
      island.push(`${x + 1}:${y}`)
      marked[y][x + 1] = "."
      sweep(island, [x + 1, y]);
    }
    //check below
    if(y < grid.length - 1 && !marked[y+ 1][x] && grid[y+1][x] === "1"){
      island.push(`${x}:${y+1}`)
      marked[y+1][x] = "."
      sweep(island, [x, y+1]);
    }

    //check left
    if( x > 0 && !marked[y][x - 1] && grid[y][x - 1] === "1"){
      island.push(`${x - 1}:${y}`)
      marked[y][x - 1] = "."
      sweep(island, [x - 1, y]);
    }
    
    //check above
    if(y > 0 && !marked[y-1][x] && grid[y-1][x] === "1"){
      island.push(`${x}:${y-1}`)
      marked[y-1][x] = "."
      sweep(island, [x, y-1]);
    }

  }
  
  // [{row: y, column: x}...]
    for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++){
      if(grid[y][x] === "1" && !marked[y][x]){
        marked[y][x] = "."
        islands.push([`${x}:${y}`])
        sweep(islands[islands.length - 1], [x,y])
      }
    }
  }
        
  return islands.length
};


let results = numIslands(leet)
```
