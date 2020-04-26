---
templateKey: blog-post
title: 'Get the Drop on the Cloud: NodeJS and Azure'
date: 2020-04-08T16:27:23.655Z
description: >-
  Deploying applications to the cloud can be intimidating. Don't worry though,
  this guide will stick to the bare essentials. When you've finished here, you
  will know the simplest way to get a NodeJS web application running on Azure.
featuredpost: true
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
5. Install NodeJS

![Azure App Service Extension Installed](/img/o16ldo5k8g.png "Azure App Service Extension Installed")

**Note:** Screenshots and shortcuts are all Windows specific.

### Log In to Azure CLI

Open your terminal in VS Code (``Ctrl+` ``) and enter `az login`. This will launch a browser window you will use to log in with the credentials from your new Azure account.

![Logging in to Azure](/img/gkpaytxsfy.png "Logging in to Azure")

### Start Coding

First, select a folder in VS Code (`Ctrl+k Ctrl+o`). If you need to create and select one, you can do that in the dialog that opens. I have created and selected the folder `nodejs-azure`. 

In our open terminal panel, let's initialize a node project:

Featured Image Credit: [Stebbes87](https://commons.wikimedia.org/wiki/File:Sunshine_above_clouds.jpg) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)