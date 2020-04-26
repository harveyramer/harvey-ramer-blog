---
templateKey: blog-post
title: 'Get the Drop on the Cloud: NodeJS and Azure'
date: 2020-04-08T16:27:23.655Z
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

Let's take care of some things before we begin:

1. [Create a free Azure account](https://azure.microsoft.com/en-us/free/)
2. [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
3. [Install Visual Studio Code (VS Code)](https://code.visualstudio.com/docs/setup/setup-overview)
4. [Add the Azure Tools Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) to Visual Studio Code
5. [Install NodeJS](https://www.harveyramer.com/blog/2020-04-08-configure-a-nodejs-development-environment-on-windows-10/)

![Azure App Service Extension Installed](/img/installed-azure-tools.png "Azure App Service Extension Installed")

### Log In to Azure

#### The CLI

Open your terminal in VS Code (``Ctrl+` ``) and enter `az login`. This will launch a browser window you will use to log in with the credentials from your new Azure account.

![Logging in to Azure](/img/gkpaytxsfy.png "Logging in to Azure")

#### Azure Tools

In VS Code, open the command palette (`Ctrl+P`) and enter `> Azure: Sign In`. You will be prompted to log in via a browser window. When complete, you will see your subscriptions listed in your Azure panel.

![Signing in to Azure with VS Code](/img/log-in-to-azure-vscode.png "Signing in to Azure with VS Code")

### Start Coding

First, select a folder in VS Code (`Ctrl+K Ctrl+O`). If you need to create and select one, you can do that in the dialog that opens. I have opened the folder containing the COVID-19 Tracker used in some JavaScript tutorials.\[^1] 

#### Installing the COVID-19 Tracker

If you already have a Node.js app using the Express framework, skip this step. Otherwise:

1. clone or download the repository (`git clone git@github.com:harveyramer/covid-19-demo-express-js-app.git`)
2. Navigate in your terminal to the root directory (`cd covid-19-demo-express-js-app`)
3. Check out this branch (`git checkout tutorial-2`)
4. Install the project (`npm install`)
5. Start the server (`npm start`)
6. Navigate to your project in a browser ([http://localhost:3000](http://localhost:3000/))

Featured Image Credit: [Stebbes87](https://commons.wikimedia.org/wiki/File:Sunshine_above_clouds.jpg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)

## Footnotes

\[^1]: [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/) and [Making an Even-More-Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-10-making-an-even-more-useful-covid-19-tracker-with-node-js/)