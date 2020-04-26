---
templateKey: blog-post
title: 'Get the Drop on the Cloud: Node.js and Azure'
date: 2020-04-26T04:45:00.000Z
description: >-
  Deploying applications to the cloud can be intimidating. Don't worry though,
  this guide will stick to the bare essentials. When you've finished here, you
  will have a web application running on Azure.
featuredpost: false
featuredimage: /img/sunshine_above_clouds.jpg
tags:
  - software
  - azure
---
## Prerequisites

Take care of some things before you begin:

1. [Create a free Azure account](https://azure.microsoft.com/en-us/free/)
2. [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
3. [Install Visual Studio Code (VS Code)](https://code.visualstudio.com/docs/setup/setup-overview)
4. [Add the Azure Tools Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) to Visual Studio Code
5. [Install NodeJS](https://www.harveyramer.com/blog/2020-04-08-configure-a-nodejs-development-environment-on-windows-10/)

![Azure App Service Extension Installed](/img/installed-azure-tools.png "Azure App Service Extension Installed")

### Log In to Azure

#### The CLI

Open your terminal in VS Code (``Ctrl+` ``) and enter `az login`. This will launch a browser window you will use to log in with the credentials from your new Azure account.

![Logging in to Azure](/img/login-az-cli.png "Logging in to Azure")

#### Azure Tools

In VS Code, open the command palette (`Ctrl+P`) and enter `> Azure: Sign In`. You will be prompted to log in via a browser window. When complete, you will see your subscriptions listed in your Azure panel.

![Signing in to Azure with VS Code](/img/log-in-to-azure-vscode.png "Signing in to Azure with VS Code")

## Start Coding

### Installing the COVID-19 Tracker

1. clone or download the repository (`git clone git@github.com:harveyramer/covid-19-demo-express-js-app.git`)
2. Navigate in your terminal to the root directory (`cd covid-19-demo-express-js-app`)
3. Check out this branch (`git checkout tutorial-2`)
4. Install the project (`npm install`)
5. Start the server (`npm start`)
6. Navigate to your project in a browser ([http://localhost:3000](http://localhost:3000/))

### Preparing for Deployment

Since Azure's App Service uses dynamically configured Docker containers, you cannot specify a port in our code. Instead, rely on an environment variable. 

If you started the local server, stop it (`Ctrl+C`).

Open the `src/index.js` file and update line 5.

```
const port = process.env.PORT
```

## Deploying to Azure App Service

The extensions in the Azure Tools pack you installed make it easy to deploy a Web app. 

To show the Azure panel in VS Code, click on the Azure logo on the left. Then, click the *Deploy to Azure* arrow button in the App Service menu bar.

![Deploy to Azure App Service](/img/deploy-to-azure.png "Deploy to Azure App Service")

The Azure App Service extension's wizard will help you deploy your app.

1. Select the _covid19-tracker_ folder to zip and deploy
2. Choose *Create new Web App...*
3. Next enter a unique name for your Web app. (`my-app-name`)
4. Select runtime *Node 12 LTS*
5. Wait a few minutes while Azure provisions the resources for your Web app
6. When asked, "Would you like to update your workspace configuration to run build commands on the target server?" Answer, *"Yes."*
7. To monitor the build process, show the output window.

![Show Azure deployment output window](/img/show-build-output.png "Show Azure deployment output window")

When deployment finishes, browse to your new website. It is located at https://**my-app-name**.azurewebsites.net. In my case, that is https://**covid19tutorial**.azurewebsites.net.

Don't be surprised if it doesn't respond or it displays an application error. You will need to add an _Application Setting_ that is required for Node.js on Azure App Service. 

* Expand your subscription, Web app, and right-click on **Application Settings**
* Choose *Add New Setting*
* For your setting key, enter `WEBSITE_NODE_DEFAULT_VERSION`
* For your setting value, enter `12-lts`

![Add WEBSITE_NODE_DEFAULT_VERSION application setting](/img/add-application-setting.png "Add WEBSITE_NODE_DEFAULT_VERSION application setting")

Adding a new application setting causes the App Service to restart, which can take several minutes. If your Web app does not start, see Troubleshooting below.

### Monitoring your App with Logs

Since it takes several minutes for your app to warm up after being deployed to Azure, it helps to monitor the Log Stream for your application. To do that, Expand your application's *Logs (Read-only)* folder and click *Connect to Log Stream...* An output panel in the terminal will allow you to monitor your application's progress.

![](/img/monitor-application-logs.png)

When you see *Example app listening at http://localhost:8080* your app is warmed up and ready to take some requests. 

### Success!

Your first deployment of a Web app with Node.js to Azure can be a bit tricky. Please feel free to contact me with any questions or critical feedback on this tutorial. When you succeed, your [COVID-19 Tracker](https://covid19tutorial.azurewebsites.net/) will be live for the world to see. 

If you want to share it with friends, you may want to upgrade from the [free App Service Plan](https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage), which only runs for an hour each day. 

![Your deployed Web app](/img/your-deployed-web-app.png "Your deployed Web app")

### Troubleshooting

If your deployment fails on the first try, as mine did, it is likely a timing issue. Some resources your Web app depends on are likely still not fully provisioned.

![The service is unavailable](/img/service-unavailable.png "The service is unavailable")

Try completing all the steps above, including adding the *WEBSITE_NODE_DEFAULT_VERSION* application setting to see if this resolves your problem. If not, I have found that deleting your Web Application and starting over resolves the problem.

Featured Image Credit: [Stebbes87](https://commons.wikimedia.org/wiki/File:Sunshine_above_clouds.jpg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)

## Footnotes

[^1]: [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/) and [Making an Even-More-Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-10-making-an-even-more-useful-covid-19-tracker-with-node-js/)