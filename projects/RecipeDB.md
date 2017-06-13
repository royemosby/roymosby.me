---
layout: project
title: Recipe Database
project: artifact
published: true
updated: 31 May, 2017
---


## Database objective

The database presented in this document allows the user to choose dinner main courses and sides from a list. Through the use of queries based on user input, the database is able to output a shopping list that includes all the major ingredients. The grocery list is arranged so that items that fall on it go in order from one side of the store to the other- it will list items aisle by aisle in the grocery store instead of alphabetically.

## Initial Study

### Current situation

One of the weekly activities that this house conducts is generating a shopping list. The list creation involves choosing the main courses for a weekly menu. From menu chosen for the week, a part of the grocery list completed by cross-referencing with recipes the family keeps online or in cooking books. After this process, survey of the kitchen is completed to identify items such as spices and other lesser-used components are needed. Finally, the two halves are combined to form a completed weekly shopping list.

While developing the list, an attempt is made to keep things in grocery aisle order. Fresh fruit is first, salad items second, canned goods third, and so on. If items on the list are out of order, they are sometimes overlooked until much later in the store. Tracking back to get the forgotten item slows down the shopping trip. Under the current system, the items are hand-written, so is not easy to insert grocery list items in between each other if they are thought of out of order.

### Problems and constraints

In designing the database a balance must be struck between the detail provided in the database and ease of use. It would be easy to completely break down a recipe and create entries for all of the ingredients. However, this could cause the grocery list to contain items that do not need to be purchased every time they come up. Several examples would include salt, spices, small amounts of sugar, and other relatively common items used in small quantities. To prevent unnecessary grocery list entries, the recipes inside the database will only reference major ingredients kept inside the database.

Since the database will be used in a home environment, a DBMS and interface have to be chosen that are appropriate for the family. A self-contained, single user database that does not require dedicated resources, such as Microsoft Access or LibreOffice’s Base could be a likely choice. A self-contained database would also provide user interface elements through the use of forms. The shopping list would take the form of a report. This approach would be fast to set up, easier to develop, but would lack interface design flexibility.

Another option would be to host the database on an inexpensive platform that can run a lightweight DBMS such as MySQL. A good example of this is the Raspberry Pi (elinux.org, 2014). This sub-$40 device is capable of hosting a LAMP (Linux, Apache, MySQL, and PHP) stack and can be accessed by LAN. Interfacing with this database would be more complex. One would have to develop a user interface either using Java or PHP and HTML. With the increased complexity, more design freedom is allowed.

For the sake of this project, however, MS SQL will be used; this is the DBMS that has been used throughout this course. A user interface would be required so that the database had full utility but that is beyond the scope of this project. Several sample queries will be provided with the database to illustrate how user input is interpreted to generate the grocery lists. In a fully completed information system, these queries would be shaped by the menu selections of the user

## Database schema

### Schema overview

The database schema centers on two existence-independent tables-Recipe and Ingredient. The first table contains the database’s recipe, which consists of the recipe’s name, preparation directions, and the amount of people it serves. The second table contains all the individual ingredients as well as the unit of measure used in its handling. Ingredient\_List acts as a bridging entity between these two tables.

A functionally dependent table, Season, is placed off of the Recipe table. This serves to assign recipes a certain season should the user wish to search for meals that are appropriate only during a certain time of year.

Unit and Unit\_Type both are placed off of the Ingredient table to provide a means to measure the ingredient. Unit acts as a bridging element between Ingredient and Unit\_Type to allow for a future feature, which will allow the conversion between different units. It limits conversion between compatible units of volume, mass, or component measures. For example, it will allow the conversion of cups to teaspoons or to milliliters but not to pounds. A cup is a measure of volume, not mass.

A final set of tables Aisle and Ingredient\_Aisle serve to provide a spatial location for the ingredient inside the grocery store. Aisle contains the aisle name as well as a numerical designation to allow for a ORDER BY query to sort the grocery list according to the store’s layout.

The following entity relation diagram illustrates the elements of the database and their corresponding relations.

&&&& ERD

### Dependencies

The following diagrams portray the functional dependencies of the database.

&&&& Func Depend

### Database content

Since the primary use of this database is to generate a shopping list based on the selection of several meal main courses it primarily performs data retrieval functions. The database is already populated with a variety of recipes and ingredients. This information was gathered over the course of several years by retaining all the weekly menus and the shopping lists that result. A brief survey of these shopping lists reveals that most of the meals made have been made repeatedly. A sample of this information is pre-populated in the database.

The interface, when developed, will provide the user with a means to enter recipes that have been used before as well as new ingredients. As stated previously in the problems and constraints, this portion will not be addressed by this project.

## Desired output

The DBMS will use the menu selections to build a query to return the appropriate items in a report. Any ingredients that show up more than once will have their amounts added together. These items will also be sorted to follow the general layout of the grocery store. Since much of the functionality rests with the interface and outside of the DBMS, several example queries are provided as if they are generated by the user interface.

## TransactSQL Source Code:

	USE [master]
	GO
	/****** Object:  Database [RecipeDB]    Script Date: 6/28/2015 9:40:47 PM ******/
	CREATE DATABASE [RecipeDB]
	 CONTAINMENT = NONE
	 ON  PRIMARY
	( NAME = N'RecipeDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\RecipeDB.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
	 LOG ON
	( NAME = N'RecipeDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\RecipeDB_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
	GO
	ALTER DATABASE [RecipeDB] SET COMPATIBILITY_LEVEL = 110
	GO
	IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
	begin
	EXEC [RecipeDB].[dbo].[sp_fulltext_database] @action = 'enable'
	end
	GO
	ALTER DATABASE [RecipeDB] SET ANSI_NULL_DEFAULT OFF
	GO
	ALTER DATABASE [RecipeDB] SET ANSI_NULLS OFF
	GO
	ALTER DATABASE [RecipeDB] SET ANSI_PADDING OFF
	GO
	ALTER DATABASE [RecipeDB] SET ANSI_WARNINGS OFF
	GO
	ALTER DATABASE [RecipeDB] SET ARITHABORT OFF
	GO
	ALTER DATABASE [RecipeDB] SET AUTO_CLOSE OFF
	GO
	ALTER DATABASE [RecipeDB] SET AUTO_CREATE_STATISTICS ON
	GO
	ALTER DATABASE [RecipeDB] SET AUTO_SHRINK OFF
	GO
	ALTER DATABASE [RecipeDB] SET AUTO_UPDATE_STATISTICS ON
	GO
	ALTER DATABASE [RecipeDB] SET CURSOR_CLOSE_ON_COMMIT OFF
	GO
	ALTER DATABASE [RecipeDB] SET CURSOR_DEFAULT  GLOBAL
	GO
	ALTER DATABASE [RecipeDB] SET CONCAT_NULL_YIELDS_NULL OFF
	GO
	ALTER DATABASE [RecipeDB] SET NUMERIC_ROUNDABORT OFF
	GO
	ALTER DATABASE [RecipeDB] SET QUOTED_IDENTIFIER OFF
	GO
	ALTER DATABASE [RecipeDB] SET RECURSIVE_TRIGGERS OFF
	GO
	ALTER DATABASE [RecipeDB] SET  DISABLE_BROKER
	GO
	ALTER DATABASE [RecipeDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
	GO
	ALTER DATABASE [RecipeDB] SET DATE_CORRELATION_OPTIMIZATION OFF
	GO
	ALTER DATABASE [RecipeDB] SET TRUSTWORTHY OFF
	GO
	ALTER DATABASE [RecipeDB] SET ALLOW_SNAPSHOT_ISOLATION OFF
	GO
	ALTER DATABASE [RecipeDB] SET PARAMETERIZATION SIMPLE
	GO
	ALTER DATABASE [RecipeDB] SET READ_COMMITTED_SNAPSHOT OFF
	GO
	ALTER DATABASE [RecipeDB] SET HONOR_BROKER_PRIORITY OFF
	GO
	ALTER DATABASE [RecipeDB] SET RECOVERY FULL
	GO
	ALTER DATABASE [RecipeDB] SET  MULTI_USER
	GO
	ALTER DATABASE [RecipeDB] SET PAGE_VERIFY CHECKSUM  
	GO
	ALTER DATABASE [RecipeDB] SET DB_CHAINING OFF
	GO
	ALTER DATABASE [RecipeDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF )
	GO
	ALTER DATABASE [RecipeDB] SET TARGET_RECOVERY_TIME = 0 SECONDS
	GO
	EXEC sys.sp_db_vardecimal_storage_format N'RecipeDB', N'ON'
	GO
	USE [RecipeDB]
	GO
	/****** Object:  Table [dbo].[Aisle]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	SET ANSI_PADDING ON
	GO
	CREATE TABLE [dbo].[Aisle](
		[Aisle_ID] [int] NOT NULL,
		[Aisle_Name] [varchar](50) NOT NULL,
		[Aisle_Numb] [numeric](5, 2) NOT NULL,
	 CONSTRAINT [PK_Aisle] PRIMARY KEY CLUSTERED
	(
		[Aisle_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	SET ANSI_PADDING OFF
	GO
	/****** Object:  Table [dbo].[Ingredient]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	SET ANSI_PADDING ON
	GO
	CREATE TABLE [dbo].[Ingredient](
		[Ingredient_ID] [int] NOT NULL,
		[Unit_Symbol] [char](10) NOT NULL,
		[Ingredient] [nvarchar](50) NOT NULL,
	 CONSTRAINT [PK_Ingredient] PRIMARY KEY CLUSTERED
	(
		[Ingredient_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	SET ANSI_PADDING OFF
	GO
	/****** Object:  Table [dbo].[Ingredient_Aisle]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	CREATE TABLE [dbo].[Ingredient_Aisle](
		[Aisle_ID] [int] NOT NULL,
		[Ingredient_ID] [int] NOT NULL,
	 CONSTRAINT [PK_Ingredient_Aisle] PRIMARY KEY CLUSTERED
	(
		[Aisle_ID] ASC,
		[Ingredient_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	/****** Object:  Table [dbo].[Ingredient_List]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	CREATE TABLE [dbo].[Ingredient_List](
		[Ingredient_ID] [int] NOT NULL,
		[Recipe_ID] [int] NOT NULL,
		[AMT] [numeric](18, 2) NOT NULL,
	 CONSTRAINT [PK_Ingredient_List] PRIMARY KEY CLUSTERED
	(
		[Ingredient_ID] ASC,
		[Recipe_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	/****** Object:  Table [dbo].[Recipe]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	CREATE TABLE [dbo].[Recipe](
		[Recipe_ID] [int] NOT NULL,
		[Recipe] [nvarchar](50) NOT NULL,
		[Recipe_Directions] [ntext] NOT NULL,
		[Serves_AMT] [int] NOT NULL,
		[Season_ID] [int] NULL,
	 CONSTRAINT [PK_Recipe] PRIMARY KEY CLUSTERED
	(
		[Recipe_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

	GO
	/****** Object:  Table [dbo].[Season]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	CREATE TABLE [dbo].[Season](
		[Season_ID] [int] NOT NULL,
		[Season] [nvarchar](50) NOT NULL,
	 CONSTRAINT [PK_Season] PRIMARY KEY CLUSTERED
	(
		[Season_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	/****** Object:  Table [dbo].[Unit]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	SET ANSI_PADDING ON
	GO
	CREATE TABLE [dbo].[Unit](
		[Unit_Symbol] [char](10) NOT NULL,
		[Unit_Name] [varchar](50) NOT NULL,
		[Unit_Type_ID] [int] NOT NULL,
	 CONSTRAINT [PK_Unit] PRIMARY KEY CLUSTERED
	(
		[Unit_Symbol] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	SET ANSI_PADDING OFF
	GO
	/****** Object:  Table [dbo].[Unit_Type]    Script Date: 6/28/2015 9:40:47 PM ******/
	SET ANSI_NULLS ON
	GO
	SET QUOTED_IDENTIFIER ON
	GO
	CREATE TABLE [dbo].[Unit_Type](
		[Unit_Type_ID] [int] NOT NULL,
		[Unit_Type] [nvarchar](50) NOT NULL,
	 CONSTRAINT [PK_Unit_Type] PRIMARY KEY CLUSTERED
	(
		[Unit_Type_ID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	GO
	ALTER TABLE [dbo].[Ingredient]  WITH CHECK ADD  CONSTRAINT [FK_Ingredient_Unit] FOREIGN KEY([Unit_Symbol])
	REFERENCES [dbo].[Unit] ([Unit_Symbol])
	GO
	ALTER TABLE [dbo].[Ingredient] CHECK CONSTRAINT [FK_Ingredient_Unit]
	GO
	ALTER TABLE [dbo].[Ingredient_Aisle]  WITH CHECK ADD  CONSTRAINT [FK_Ingredient_Aisle_Aisle] FOREIGN KEY([Aisle_ID])
	REFERENCES [dbo].[Aisle] ([Aisle_ID])
	GO
	ALTER TABLE [dbo].[Ingredient_Aisle] CHECK CONSTRAINT [FK_Ingredient_Aisle_Aisle]
	GO
	ALTER TABLE [dbo].[Ingredient_Aisle]  WITH CHECK ADD  CONSTRAINT [FK_Ingredient_Aisle_Ingredient] FOREIGN KEY([Ingredient_ID])
	REFERENCES [dbo].[Ingredient] ([Ingredient_ID])
	GO
	ALTER TABLE [dbo].[Ingredient_Aisle] CHECK CONSTRAINT [FK_Ingredient_Aisle_Ingredient]
	GO
	ALTER TABLE [dbo].[Ingredient_List]  WITH CHECK ADD  CONSTRAINT [FK_Ingredient_List_Ingredient] FOREIGN KEY([Ingredient_ID])
	REFERENCES [dbo].[Ingredient] ([Ingredient_ID])
	GO
	ALTER TABLE [dbo].[Ingredient_List] CHECK CONSTRAINT [FK_Ingredient_List_Ingredient]
	GO
	ALTER TABLE [dbo].[Ingredient_List]  WITH CHECK ADD  CONSTRAINT [FK_Ingredient_List_Recipe] FOREIGN KEY([Recipe_ID])
	REFERENCES [dbo].[Recipe] ([Recipe_ID])
	GO
	ALTER TABLE [dbo].[Ingredient_List] CHECK CONSTRAINT [FK_Ingredient_List_Recipe]
	GO
	ALTER TABLE [dbo].[Recipe]  WITH CHECK ADD  CONSTRAINT [FK_Recipe_Season] FOREIGN KEY([Season_ID])
	REFERENCES [dbo].[Season] ([Season_ID])
	GO
	ALTER TABLE [dbo].[Recipe] CHECK CONSTRAINT [FK_Recipe_Season]
	GO
	ALTER TABLE [dbo].[Unit]  WITH CHECK ADD  CONSTRAINT [FK_Unit_Unit_Type] FOREIGN KEY([Unit_Type_ID])
	REFERENCES [dbo].[Unit_Type] ([Unit_Type_ID])
	GO
	ALTER TABLE [dbo].[Unit] CHECK CONSTRAINT [FK_Unit_Unit_Type]
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Locations within the grocery store' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Aisle'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Component item of a recipe' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Ingredient'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Location of ingredient in store' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Ingredient_Aisle'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Bridge entity between Ingredient and Recipe' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Ingredient_List'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Provides instruction in creation of a dish' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Recipe'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Provides seasons for seasonally appropriate recipes' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Season'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Provides a measurement type for ingredient' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Unit'
	GO
	EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Provides type of measurement for conversion' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Unit_Type'
	GO
	USE [master]
	GO
	ALTER DATABASE [RecipeDB] SET  READ_WRITE
	GO

**References**

Coronel, C. (2015). *Database systems: design, implementation, and management* (11th ed.). United States: Cengage Learning.

RPi a simple Wheezy LAMP install. (Oct, 2014). Retrieved June 28, 2015 from [ http://elinux.org/RPi\_A\_Simple\_Wheezy\_LAMP\_install ](#)
