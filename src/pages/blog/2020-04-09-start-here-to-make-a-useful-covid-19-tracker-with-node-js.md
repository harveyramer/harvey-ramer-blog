---
templateKey: blog-post
title: Start Here to Make a Useful COVID-19 Tracker with Node.js
date: 2020-04-09T16:57:36.723Z
description: >-
  Why not let worry spur you to action? Learn Node.js while building a simple
  Web application that loads the latest COVID-19 statistics from a public REST
  API. Don't worry, we'll make it simple and fun.
featuredpost: false
featuredimage: /img/stop_coronavirus_covid-19.jpg
tags:
  - software
  - node.js
  - tutorial
  - api
---
## Prerequisites

Before beginning this tutorial, you will need Node.js, NPM, Git, and Visual Studio Code installed. For help, use my tutorial on [configuring a development environment](/blog/2020-04-08-configure-a-nodejs-development-environment-on-windows-10/).

## Getting Started

Open your Windows Terminal (Type `cmd` in your Windows Start Menu to find it). Make a directory for your new app, and open it:

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

In our terminal, we will initialize our new Node.js project.

```
npm init -y
git init
```

![Initializing a new Node.js project](/img/code_vr7kovcecm.png "Initializing a new Node.js project")

Now that we've initialized the project, we'll install some dependencies.

## Install Express.js and Axios

Express is a simple-to-use framework for building Web applications in Node.js. We will use it to handle our HTTP requests and direct URL routes to our Node.js functions. 

Axios is a powerful tool for making requests to other servers. We will use Axios to retrieve our COVID-19 data from a public API.

To do this, we will use our Visual Studio Code Terminal.

```
npm install express axios --save
```

![Installing express and axios](/img/code_cpv5ebkavw.png "Installing express and axios")

## Hello World!

Create an empty **index.js** file in the terminal.

```
mkdir src
cd src
type null > index.js
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

In the Visual Studio Terminal, start the Express server via the NPM script we just created.

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
type null > routes.js
```

Next, open your routes.js file, and paste this code:

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

With these changes, we are importing the `./routes` module we just created, and rather than implementing the router in this file, we are now configuring the application to use the router with an `app.use` function call.

To test these changes we will start our server again.

```
npm start
```

Open http://localhost:3000 in your browser and click the **about this app** link to load the **About** page.

These pages don't look like much, but they demonstrate a fully functional Web server responding to HTTP requests. This the foundation on which the Web is built!

![Our grown-up Hello World app with multiple routes](/img/chrome_r6cetpk0lp.png "Our grown-up Hello World app with multiple routes")

## COVID-19 Tracker

 Now it's time to get real. We have created the framework on which our COVID-19 Tracker can be built. But before we move on, let's commit our files to Git so we can make changes without losing any of our past work. In Visual Studio Code Terminal make sure you are in the root of your project. The path in your terminal should look something like `C:\Users\hramer\covid19-tracker` and not like `C:\Users\hramer\covid19-tracker\src`. If it looks like the latter, `cd..` will fix your problem. 

Let's commit our code changes.

```
git add .
git commit -m "A hello  world Web app"
```

![Adding files to Git](/img/code_e8crgvguuy.png "Adding files to Git")

Featured Image Credit: [Drug Addiction Clinic Vita](https://commons.wikimedia.org/wiki/File:Stop_Coronavirus_COVID-19.jpg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0)