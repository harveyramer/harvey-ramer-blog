---
layout: post
title: "Get the Drop on the Cloud: Node.js and Azure"
date: 2020-04-26T04:45:00.000Z
author: Harvey Ramer
social_quote: Deploying applications to the cloud can be intimidating. Don't worry though, this guide will stick to the bare essentials. When you've finished here, you will have a web application running on Azure.
description: >-
  Deploying applications to the cloud can be intimidating. Don't worry though, this guide will stick to the bare essentials. When you've finished here, you will have a web application running on Azure.
tags:
  - technology
---

Deploying applications to the cloud can be intimidating. Don't worry though, this guide will stick to the bare essentials. When you've finished here, you will have a web application running on Azure.

Take care of some things before you begin. The tools below will allow you to complete the tutorial work. There may be other VS Code extensions that will do the same job, so feel free to try any tools that make sense to you.

1. [Create a free Azure account](https://azure.microsoft.com/en-us/free/)
2. [Install Visual Studio Code (VS Code)](https://code.visualstudio.com/docs/setup/setup-overview)
3. [Add the Azure Tools Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) to Visual Studio Code
4. [Install NodeJS](https://www.harveyramer.com/article/2020-04-08-configure-a-nodejs-development-environment-on-windows-10/)

![Azure App Service Extension Installed](https://www.harveyramer.com/img/installed-azure-tools.png "Azure App Service Extension Installed")

### Log In to Azure

In VS Code, open the command palette (`Ctrl+Shift+P`) and enter `> Azure: Sign In`. You will be prompted to log in via a browser window. When complete, you will see your subscriptions listed in your Azure panel.

![Signing in to Azure with VS Code](https://www.harveyramer.com/img/log-in-to-azure-vscode.png "Signing in to Azure with VS Code")

## Start Coding

### Installing the COVID-19 Tracker

For this project, use the COVID-19 Tracker project.[^1]

1. clone or download the repository (`git clone git@github.com:harveyramer/covid-19-demo-express-js-app.git`)
2. Navigate in your terminal to the root directory (`cd covid-19-demo-express-js-app`)
3. Check out this branch (`git checkout tutorial-2`)
4. Install the project (`npm install`)
5. Start the server (`npm start`)
6. Navigate to your project in a browser ([http://localhost:3000](http://localhost:3000/))

### Preparing for Deployment

Since Azure's App Service uses dynamically configured [Docker containers](https://docker-curriculum.com/), you cannot specify a port in our code. Instead, rely on an [environment variable](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa).

1. Make sure your local server is not running (`Ctrl+C`).
2. Open the `src/index.js` file and update line 5.

```
const port = process.env.PORT
```

## Deploying to Azure App Service

The extensions in the Azure Tools pack you installed make it easy to deploy a Web app. To show the Azure panel in VS Code, click on the Azure logo on the left. Then, click the _Deploy to Azure_ arrow button in the App Service menu bar.

![Deploy to Azure App Service](https://www.harveyramer.com/img/deploy-to-azure.png "Deploy to Azure App Service")

The Azure App Service extension's wizard will help you deploy your app.

1. Select the _covid19-tracker_ folder to zip and deploy
2. Choose _Create new Web App..._
3. Next enter a unique name for your Web app. (`covid19tutorial-myname`)
4. Select runtime _Node 12 LTS_
5. Wait a few minutes while Azure provisions the resources for your Web app
6. When asked, "Would you like to update your workspace configuration to run build commands on the target server?" Answer, _"Yes."_
7. To monitor the build process, show the output window.

![Show Azure deployment output window](https://www.harveyramer.com/img/show-build-output.png "Show Azure deployment output window")

When deployment finishes, browse to your new website. It will use the unique name you specified, for example, _**covid19tutorial-myname**.azurewebsites.net_. Your app will not respond and may display an application error. This is normal. We have one more configuration step.

### Add an Application Setting

You will need to add an _Application Setting_ to tell Azure App Service what version of Node.js to use.

- Expand your subscription, Web app, and right-click on **Application Settings**
- Choose _Add New Setting_
- For your setting key, enter `WEBSITE_NODE_DEFAULT_VERSION`
- For your setting value, enter `12-lts`

![Add WEBSITE_NODE_DEFAULT_VERSION application setting](https://www.harveyramer.com/img/add-application-setting.png "Add WEBSITE_NODE_DEFAULT_VERSION application setting")

Adding a new application setting causes the App Service to restart, which can take several minutes. If your Web app does not start in 10 minutes, see [Troubleshooting](#troubleshooting) below.

### Monitoring your App with Logs

Since it takes several minutes for your app to warm up after being deployed to Azure, it helps to monitor the Log Stream for your application. To do that, Expand your application's _Logs (Read-only)_ folder and click _Connect to Log Stream..._ An output panel in the terminal will allow you to monitor your application's progress.

![](https://www.harveyramer.com/img/monitor-application-logs.png)

When you see _Example app listening at http://localhost:8080_ your app is warmed up and ready to take some requests.

### Success

Your first deployment of a Web app with Node.js to Azure can be a bit tricky. When you succeed, your [COVID-19 Tracker](https://covid19tutorial.azurewebsites.net/) will be live for the world to see. If you want to share it with friends, you may want to upgrade from the [free App Service Plan](https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage), which only runs for an hour each day.

![Your deployed Web app](https://www.harveyramer.com/img/your-deployed-web-app.png "Your deployed Web app")

### Troubleshooting {#troubleshooting}

If your deployment fails on the first try, as mine did, it is likely a timing issue. Some resources your Web app depends on were not provisioned when it tried to start.

![The service is unavailable](https://www.harveyramer.com/img/service-unavailable.png "The service is unavailable")

Make sure you have completed all the steps above. If your app still does not start after 10 minutes, either dig into Azure's [Node.js troubleshooting documentation](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide), or use the nuclear option. I have found that deleting your Web Application and starting over resolves the problem.

## Footnotes

[^1]: [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/article/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/) and [Making an Even-More-Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/article/2020-04-10-making-an-even-more-useful-covid-19-tracker-with-node-js/)
