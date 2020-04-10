---
templateKey: blog-post
title: Start Here to Make a Useful COVID-19 Tracker with Node.js
date: 2020-04-09T16:57:36.723Z
description: >-
  Why not let worry spur you to action? Let's build a Web application to display
  the latest COVID-19 statistics. Don't worry, we'll make it simple and fun.
featuredpost: false
featuredimage: /img/stop_coronavirus_covid-19.jpg
tags:
  - software
  - node.js
  - tutorial
  - api
---
## Prerequisites

Before beginning this tutorial, you will need [Node.js](https://nodejs.org/), [NPM](https://npmjs.org), [Git](https://git-scm.org), and [Visual Studio Code](https://code.visualstudio.com/) installed. For help, use my tutorial on [configuring a development environment](/blog/2020-04-08-configure-a-nodejs-development-environment-on-windows-10/).

## Getting Started

Open your Terminal (Windows users type `cmd` in your Windows Start Menu to find it). Make a directory for your new app, and open it:

```
mkdir covid19-tracker
cd covid19-tracker
```

Then, open it in Visual Studio Code:

```
code .
```

Then, open the Terminal in Visual Studio Code (``Ctrl+` ``).

![Open the Terminal in Visual Studio Code](/img/code_qck1owdhjr.png "Open the Terminal in Visual Studio Code")

In our terminal, we will initialize our new project.

```
npm init -y
git init
```

![Initializing a new Node.js project](/img/code_vr7kovcecm.png "Initializing a new Node.js project")

Now that we've initialized the project, we'll install some dependencies.

## Install Express.js, Axios, and Pug

[Express ](https://expressjs.com/)is a simple-to-use framework for building Web applications in Node.js. We will use it to handle our HTTP requests and direct URL routes to our Node.js functions. 

[Axios](https://github.com/axios/axios) is a powerful tool for making requests to other servers. We will use Axios to retrieve our COVID-19 data from a public API.

[Pug](https://pugjs.org/api/getting-started.html) compiles data to HTML. It will be useful.

To do this, we will use our Visual Studio Code Terminal.

```
npm install express axios pug --save
```

![Installing express and axios](/img/code_cpv5ebkavw.png "Installing express and axios")

## Hello World!

Create an empty **index.js** file in the terminal.

```
mkdir src
cd src
echo NUL > index.js
```

This command will display some errors as it creates your file, but it will succeed. This is a handy shortcut for creating files in code. It may come in handy later.

You will see your new `src` directory and file in the File Explorer. 

Open your empty **index.js** file and let's start writing some code!

### Our First Code

Copy and paste (Ctrl+C Ctrl+V) the following code, and save your **index.js** file.

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
```

Next, open the **package.json** file and add `"start": "node src/index",` to the `scripts` block. The result should look like this:

```
{
  "name": "covid19-tracker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.2",
    "express": "^4.17.1"
  }
}
```

Remember to save both your **index.js** and **package.json** files.

### Test the Hello World App

In the Visual Studio Terminal, start the Express server via the NPM script we created.

```
npm start
```

![Running server](/img/chrome_lgnp0rdpe8.png "Running server")

Open <http://localhost:3000> in your browser.

![Hello World in browser](/img/chrome_bqk5uaxq7h.png "Hello World in browser")

Ok. Now that you've tested your app, let's shut down your server. In the terminal, `Ctrl+C` and your server will stop running.

### Handle Multiple Routes

In your `src` directory, create a file named **routes.js**. In your terminal, if you are already in the `src` directory, do this.

```
echo NUL > routes.js
```

Next, open your **routes.js** file, and paste this code:

```
var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Hello World. Learn <a href="/about">about this app</a>');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this COVID-19 Tracker. Go <a href="/">home</a>');
})

module.exports = router;
```

As you can see, this defines two routes. One at `/` and the other at `/about`.

Open **index.js** and make the following changes.

```
const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
```
Above, we are importing our new **routes.js** file as a module. We have also configured the application to use our **routes.js** module with an `app.use` function call.

To test these changes we will start our server again.

```
npm start
```

Open http://localhost:3000 in your browser and click the **about this app** link to load the **About** page.

These simple pages demonstrate a fully-functioning Web server responding to HTTP requests. This the foundation on which the Web is built!

![Our grown-up Hello World app with multiple routes](/img/chrome_r6cetpk0lp.png "Our grown-up Hello World app with multiple routes")

## Housekeeping: Versioning Our Code

Before we move on to write some more substantial code, let's commit our files to Git so we can make changes without losing any of our past work. In Visual Studio Code Terminal make sure you are in the root of your project. The path in your terminal should look something like `C:\Users\hramer\covid19-tracker` and not like `C:\Users\hramer\covid19-tracker\src`. If it looks like the latter, `cd..` will fix your problem. 

Let's commit our code changes.

```
git add .
git commit -m "A hello  world Web app"
```

![Adding files to Git](/img/code_e8crgvguuy.png "Adding files to Git")

## COVID-19 Tracker

Now it's time to get real. We have created the framework on which our COVID-19 Tracker can be built. Let's build the real thing!

First, let's make this look more like a real Web app. In Visual Studio Code Terminal, let's use a library called Pug to help us manage our HTML. We used NPM to install Pug when we started this tutorial.

If you are interested, you can learn more about [getting started with Pug](https://pugjs.org/api/getting-started.html). 

Let's add our Pug views: one for each page, and a layout helper to manage the code shared by both views.

```
cd src
mdkir views
cd views
echo NUL > home.pug
echo NUL > about.pug
echo NUL > layout.pug
cd..
mkdir public
cd public
echo NUL > style.css
cd..
```

You should see your new Pug files in the `src/views` directory, and an empty **style.css** file in the `src/public` directory.

Copy the code below into your **style.css** file and save it.

```html,
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
    display: flex;
    flex-wrap: wrap;
}

.card {
    flex: 1 0 500px;
    box-sizing: border-box;
    margin: 1rem 0.25em;
    padding: 0.5rem 1rem 1rem;
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
.card h4 {
    margin: 0;
}
.card .count {
    font-weight: bold;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.25rem;
}
.card .new,
.card .total {
    width: 48%;
    margin-right: 2%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    box-sizing: border-box;
}
.card .new {
    background-color: #fff;
}
.card .total {
    color: #fff;
    background-color: #000;
}
.card .recovered .total {
    color: #fff;
    background-color: green;
}

@media screen and (min-width: 70em) {
    .card {
        max-width: calc(50% - 1em);
    }
}

@media screen and (min-width: 110em) {
    .card {
        max-width: calc(25% - 1em);
    }
}
```

Copy the code below into your **layout.pug** file and save it.

```
html
    head
        title #{appName}
        style
            include ../public/style.css
    body
        .container
            h1 #{pageName}

            block content
                p This page doesn't have any content yet.
```

Copy the code below into your **about.pug** file and save it.

```
extends layout

block content
    p This COVID-19 Tracker uses the publicly available REST API provided by 
        a(href='https://www.covid19api.com') covid19api.com
    p Visit the  
        a(href='/') home page
```

Copy the code below into you **home.pug** file and save it.

```
extends layout

block content
    .centered
        .cards
            .card
                h2 Afghanistan
                .row
                    .cases
                        h3 Confirmed Cases
                        .row
                            .new 
                                h4 New
                                .count 6
                            .total 
                                h4 Total
                                .count 24
                    .deaths
                        h3 Deaths
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
                    .recovered
                        h3 Recovered
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
            .card
                h3 United States
                .row
                    .cases
                        h3 Confirmed Cases
                        .row
                            .new 
                                h4 New
                                .count 6
                            .total 
                                h4 Total
                                .count 24
                    .deaths
                        h3 Deaths
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
                    .recovered
                        h3 Recovered
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
            .card
                h3 Germany
                .row
                    .cases
                        h3 Confirmed
                        .row
                            .new 
                                h4 New
                                .count 6
                            .total 
                                h4 Total
                                .count 24
                    .deaths
                        h3 Deaths
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
                    .recovered
                        h3 Recovered
                        .row
                            .new 
                                h4 New
                                .count 1
                            .total
                                h4 Total
                                .count 3
    p Visit the  
        a(href='/about') about page
```

There is quite a bit going on in these files, feel free to investigate to your heart's content. We are going on to bigger things.

First, stop your server if it's running (Ctrl+C in the Visual Studio Code Terminal) and restart it (`npm start`). When you browse to [localhost:3000](http://localhost:3000), you should see something like the view below.

![Static data mocking up the user interface](/img/chrome_sxmi7gwakd.png "Static data mocking up the user interface")

This data is static. We added it inside the **home.pug** file. Next we will get real data from an API.

Before we move on, let's commit our changes. Navigate to the root directory of your project (see above, Housekeeping: Versioning Our Code).

```
git add .
git commit -m "Static files mocking up our COVID-19 data"
```

## Setting the Stage for Real Data

Open the **routes.js** file and replace the Home Page Route with this code.

```
// Home page route.
router.get('/', (req, res) => {
  const countries = [
      {
          "Country": "ALA Aland Islands",
          "CountryCode": "AX",
          "Slug": "ala-aland-islands",
          "NewConfirmed": 0,
          "TotalConfirmed": 0,
          "NewDeaths": 0,
          "TotalDeaths": 0,
          "NewRecovered": 0,
          "TotalRecovered": 0,
          "Date": "2020-04-09T23:21:34Z"
      },
      {
          "Country": "Afghanistan",
          "CountryCode": "AF",
          "Slug": "afghanistan",
          "NewConfirmed": 21,
          "TotalConfirmed": 444,
          "NewDeaths": 0,
          "TotalDeaths": 14,
          "NewRecovered": 11,
          "TotalRecovered": 29,
          "Date": "2020-04-09T23:21:34Z"
      },
      {
          "Country": "Albania",
          "CountryCode": "AL",
          "Slug": "albania",
          "NewConfirmed": 17,
          "TotalConfirmed": 400,
          "NewDeaths": 0,
          "TotalDeaths": 22,
          "NewRecovered": 23,
          "TotalRecovered": 154,
          "Date": "2020-04-09T23:21:34Z"
      },
      {
          "Country": "Algeria",
          "CountryCode": "DZ",
          "Slug": "algeria",
          "NewConfirmed": 104,
          "TotalConfirmed": 1572,
          "NewDeaths": 12,
          "TotalDeaths": 205,
          "NewRecovered": 124,
          "TotalRecovered": 237,
          "Date": "2020-04-09T23:21:34Z"
      },
  ];
  res.render("home", {
    appName: "My COVID-19 Tracker",
    pageName: "COVID-19 Cases",
    data: countries,
  });
});
```

The **routes.js** file now creates an ***array*** (list) of country objects with the properties, *Country*, *CountryCode*, *Slug*, *NewConfirmed*, *TotalConfirmed*, *NewDeaths*, *TotalDeaths*, *NewRecovered*, *TotalRecovered*, and *Date*. We will use most of these properties in our view.

Now we need to update the **home.pug** file to take this list of data instead of our hard-coded one. Replace the contents of that file with the code below.

```
extends layout

block content
    .centered
        .cards
            each val, index in data
                .card
                    h2 #{val.Country}
                    i As of #{val.Date.split('T')[0]}
                    .row
                        .cases
                            h3 Confirmed
                            .row
                                .new 
                                    h4 New
                                    .count #{val.NewConfirmed}
                                .total 
                                    h4 Total
                                    .count  #{val.TotalConfirmed}
                        .deaths
                            h3 Deaths
                            .row
                                .new 
                                    h4 New
                                    .count  #{val.NewDeaths}
                                .total
                                    h4 Total
                                    .count  #{val.TotalDeaths}
                        .recovered
                            h3 Recovered
                            .row
                                .new 
                                    h4 New
                                    .count  #{val.NewRecovered}
                                .total
                                    h4 Total
                                    .count  #{val.TotalRecovered}
    p Visit the  
        a(href='/about') about page
```

The view created in **home.pug** now uses ***iteration*** to loop over each of the records in the country list we passed to it in **routes.js**.

## Loading Data from the COVID-19 API

We are almost done with our COVID-19 Dashboard. 

Open the **routes.js** file, and replace the entire Home Page Route (including that big *countries* array) with the following code.

```javascript
// Home page route.
router.get('/', (req, res) => {
  const apiUrl = "https://api.covid19api.com/summary";
  const countries = axios.get(apiUrl).then((response) => {
      res.render("home", {
        appName: "My COVID-19 Tracker",
        pageName: "COVID-19 Cases",
        data: response.data.Countries,
      });
    })
    .catch(function (err) {
      return console.error(err);
    });
});
```

This code makes an asynchronous call to the COVID-19 API and returns the data for our view. When you restart your server and browse to [localhost:3000](http://localhost:3000), you should see something like this.

![A list of COVID-19 cases by country](/img/chrome_8yyl9m8idf.png "A list of COVID-19 cases by country")

## What We Have Learned

I hit you hard with this tutorial. We have introduced 

* installing Node.js packages via NPM
* using Git to version code
* using Express.js as a Web server
* styling HTML with CSS
* compiling HTML with dynamic data via Pug
* requesting data from an API with Axios

You may have found interesting jumping-off-places to learn more, and I hope you did. You should have your first Web application running. [Let me know if you succeeded or if you need help](/contact). 

What should to improve the utility of this demonstration application? Make a list of things, and give it a try. Keep coding. It's always a challenge, but it gets easier.

[A complete archive of code for this Web app](https://github.com/harveyramer/covid-19-demo-express-js-app) is available on Githb.


<br />
<br />


Featured Image Credit: [Drug Addiction Clinic Vita](https://commons.wikimedia.org/wiki/File:Stop_Coronavirus_COVID-19.jpg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0)