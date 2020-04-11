---
templateKey: blog-post
title: Making an Even-More-Useful COVID-19 Tracker with Node.js
date: 2020-04-10T20:45:37.468Z
description: >-
  How do you fix a cluttered user interface? When a programmer queries an API or
  database, a list of information is returned. It is tempting to simply render
  that list to the screen. Imagine if an artist transferred the clutter of her
  studio directly to the canvas. There is a better way.
featuredpost: false
featuredimage: /img/art_supplies_clutter_-unsplash-.jpg
tags:
  - software
  - node.js
  - tutorial
  - api
---
In our previous tutorial, we [created a COVID-19 Tracker](/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/). The user interface was much like that cluttered artist studio. Rather than helping the user focus, we bombarded them with information. 

![Our cluttered user interface](/img/chrome_8yyl9m8idf.png "Our cluttered user interface")

What can we do to make this information easier to digest?

## Prerequisites

Before completing this tutorial, you will either need to either complete the first tutorial, or take a shortcut by cloning the [Github repository for the tutorial](https://github.com/harveyramer/covid-19-demo-express-js-app/tree/tutorial-1).

You will start to see comments in the code examples. Comments allow developers to leave context for those who follow, but have no impact on the execution of code.

Comments look like this:
```
/*
Here is a block comment.
It spans multiple lines.
*/
// This is a single line comment.
```

## Providing Context and Focus

There are some simple things we can do:

1. Provide summary information by displaying the global statistics
2. Remove some information from the cards in the list
3. Allow our users to filter countries by name to reduce the feeling of information overload
4. Let users navigate to country details

Let's get started.

## Global Summary

The data our API call returns has both a `Countries` _array_ and a `Global` _object_. We need to pass all the data to our Home Page. Open the **routes.js** file and change the render call for the Home Page Route.
```
      res.render("home", {
        appName: "My COVID-19 Tracker",
        pageName: "COVID-19 Cases",
        data: response.data, // previously: response.data.Countries
      });
```
