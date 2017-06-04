---
layout: page
title: Recipe Database Reflection
project: reflection
published: true
updated: 31 May, 2017
---

## IT-489-01: Solve technology-related problems using effective and appropriate methods, tools, and critical soft-skills

### IT330: Recipe database

The presented artifact is a recipe database that I completed for IT330- Database design and Management from May to July 2015.  It allows a user to select a list of recipes then outputs all of the needed ingredients in a grocery list format. This project focused primarily on the relational model and the use of structured query language (SQL) to create a functioning MSSQL database. Because of this limited scope, no user interface was created and requires MS Server Management Studio to manipulate.
Prior to this class, I had understood the importance of reducing redundancy in data. In terms of decreasing the dataset’s size and not having multiple places to update a single point of data, I was unsure how to address this issue. I also had no practical exposure to SQL, its syntax or how it related to databases. IT330 addressed this knowledge gap by providing an introduction to relational database concepts. It taught me how to normalize data, develop a relational database layout and use structured queries to retrieve that data.
This project demonstrates my ability to create and manipulate a working database using data definition language (DDL) and data manipulation language (DML). It also shows usage of the relational model through the normalization of the data that the database contains. The database consists of tables that store recipes, ingredients, units of measure, season (good for seasonal cooking base on availability of local ingredients), and grocery store aisle numbers.
I used primary keys and associative tables (many-to-many relationships) so that the user can work with the data in a number of useful ways. In addition to building a grocery list from selected recipes, the use of DML allow the user to determine the amount of each ingredient, where that ingredient resides in a grocery store, and whether it is seasonally appropriate.
I include this artifact in the portfolio because of my interest in the relational model. I believe that an understanding of the relational model informs my perspective of how IT systems and the data that they work with inter-relate. Normalization can be seen in encapsulation, atomicity in methods and properties, cartesian products can be seen in polymorphism. Even outside of programming, I can draw other parallels.
To improve on this project, I would create an in interface that was omitted in the project. I would also choose to use MySQL since it is open-source. Using a front-end framework and Node.js with node-mysql driver installed, I would allow for user manipulation of the database through forms. For example, I would allow them to craft new recipes and add new ingredients.
