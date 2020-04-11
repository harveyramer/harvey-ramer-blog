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

## Adding a Global Summary

### New Data for Our Template

The data our API call returns has both a `Countries` *array* and a `Global` *object*. You can learn more [about JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics). We need to pass all the data to our Home Page. Open the **routes.js** file and change the render call for the Home Page Route.

```
      res.render("home", {
        appName: "My COVID-19 Tracker",
        pageName: "COVID-19 Cases",
        data: response.data, // previously: response.data.Countries
      });
```

This change will break our Home Page view because it expects to be given an *array* of countries, and not an *object* containing Global data and an *array* of Countries. Replacing lines 5-6 of our **home.pug** file fixes that bug.

```
        h2 By Country
        .cards
            // Our Countries array is now at data.Countries.
            each val, index in data.Countries
```

This adds a new heading **By Country** and looks for the countries list inside the **data** object.

### Displaying the Global Summary

To display the new Global Summary data, we will add a new section above the list of countries in the **home.pug** template. 

```
    .centered
        h2 Global
        .centered
            .cards.large
                .card
                    .row
                        .cases
                            .row
                                .new 
                                    h4 New Cases
                                    .count #{data.Global.NewConfirmed}
                                .total 
                                    h4 Total Cases
                                    .count  #{data.Global.TotalConfirmed}
                        .deaths
                            .row
                                .new 
                                    h4 New Deaths
                                    .count  #{data.Global.NewDeaths}
                                .total
                                    h4 Total Deaths
                                    .count  #{data.Global.TotalDeaths}
                        .recovered
                            .row
                                .new 
                                    h4 New Recovered
                                    .count  #{data.Global.NewRecovered}
                                .total
                                    h4 Total Recovered
                                    .count  #{data.Global.TotalRecovered}
```

### Update Styles

The country data in our previous tutorial was displayed using a FlexBox Grid. However, CSS also has a specification for grid layout that is more effective for our purposes.

You can learn about:

* [FlexBox Grid](https://css-tricks.com/dont-overthink-flexbox-grids/)
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

 Replace the entire contents of your **style.css** file with the code below and save your changes.

```
html,
body {
    margin: 0;
    padding: 0;
}
html {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}
.container {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
}
section {
    padding: 1rem;
}

.cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
}

.card {
    flex: 1 0 500px;
    box-sizing: border-box;
    margin: 0.5rem 0.5rem;
    padding: 1rem;
    background-color: #e5e5e5;
    border-radius: 0.5rem;
}
.row {
    overflow: hidden;
}
.row > * {
    width: 33.33%;
    float: left;
}
.card h2 {
    margin-top: 0;
}
.card h4 {
    text-align: center;
    margin: 0;
    padding: .5rem .5rem;
}
.card .count {
    font-weight: bold;
    text-align: center;
    padding: .25rem 0 1rem;
    font-size: 1.25rem;
}
.card .new,
.card .total {
    width: 48%;
    margin-right: 2%;
    padding: 0;
    border-radius: 0.5rem;
    border: 1px solid black;
    box-sizing: border-box;
}
.card .new {
    background-color: #fff;
}
.card .total {
    color: #fff;
    background-color: gray;
}
.card .deaths .total {
    color: #fff;
    background-color: black;
}
.card .recovered .total {
    color: #fff;
    background-color: green;
}

@media screen and (min-width: 60rem) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
    .cards.large {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media screen and (min-width: 100rem) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
    }
    .cards.large {
        grid-template-columns: repeat(1, 1fr);
    }
}


@media screen and (min-width: 140rem) {
    .cards {
        grid-template-columns: repeat(4, 1fr);
    }
    .cards.large {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### Check Your Work

Verify this change by starting your server (`npm start` in your Terminal) and navigating to <http://localhost:3000>. If it is already running, restart it (`Ctrl+C` followed by `npm start`). The global data and list of countries from our previous tutorial should display.

![Global and country data](/img/chrome_msr65echxo.png "Global and country data")

### Save Your Work

In your Terminal save your changes with Git.

```
git add .
git commit -m "Adding global summary data."
```

![Committing changes with Gid](/img/code_b9hpp6nmfy.png "Committing changes with Gid")

## One Country At a Time

If a user could begin typing the name of a country and see only countries that match in the list, some of the confusion and clutter would be removed.

<br />
<br />

Featured Image Credit: [Khara Woods kharaoke](https://commons.wikimedia.org/wiki/File:Art_supplies_clutter_(Unsplash).jpg) / CC0