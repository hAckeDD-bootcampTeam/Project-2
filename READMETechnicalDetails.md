# CACHE-IT TECHNICAL DESCRIPTION


## Description

Our app is a playground for users to store, sort, and find information relating to Bookmarks and information in general. For programmers, this information can include code repositories and snippets as well.

## Motivation

Derek Irwin, our teammate found reddit.com a great source of inspiration. We decided to dvelop an app where users can search and store information in their profile, based on their specific interests and criteria. Being stored in user's profile, this information can be accessed and used later, at user's dicretion.

## Result

Using node.JS and Express Handlebars; Reddit API; Sequelize ORM; and MySQL and Heroku JawsDB MySQL, we developed Cache-It. Our app allows users to search and store information in their profile, at their discretion.  

## Team Efforts

* David was responsible for creating the UI. 
* Elizabeth was responsible for writing the sequelize code. 
* Derek was responsible for writing the database code. 
* I was responsible for writing the code that communicated with the Reddit API; and the Mocha Chai tests.

## Individual Responsibilities
* In particular David developped a polished UI and file structure, in line wtth the MVC model.
* Elizabeth created specific sequelize code by mapping database entries to objects and vice versa, to provide database synchronization mechanisms.
* Derek created specific database code that was used on the front-end and back-end.
* Angelina used jQuery, one of the most populat JavaScript library, to write the API code used by David on the front-end.

## Challenges
* Elizabeth
* Derek
* David
* I (Angelina) realized that When creating an OAuth 2 app, the most important decision to make is 'the type of app'. Different application types have different API access patterns, and there are differences in how the reddit servers treat an app. Given the short timeframe to develop the Project, I built a code that uses the open Reddit API. In the future, I want to enhance the app by creating an OAuth2 app feature that allows users to use reddit to authenticate on non-reddit websites and applications.

## Technical requirements

Our project, Cache-IT app:

* Uses a node.JS and Express Web Server;

* Uses MySQL Database and Sequelize ORM;

* Includes Reddit API;

* It is deployed using Heroku (with Data);

* Has a polished frontend / UI;

* Has folder structure that meets MVC Paradigm;

* Meets good quality coding standards (indentation, scoping, naming).

* Does not expose sensitive API key information on the server.
