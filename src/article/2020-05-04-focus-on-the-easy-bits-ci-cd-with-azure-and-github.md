---
layout: post
title: "Focus on the Easy Bits: CI/CD with Azure and Github"
date: 2020-05-04T03:13:26.247Z
author: Harvey Ramer
social_quote: This tutorial will get you started with a basic CI/CD workflow using Github Actions to deploy a Web application to Azure.
description: This tutorial will get you started with a basic CI/CD workflow using Github Actions to deploy a Web application to Azure.
tags:
  - technology
---

This tutorial will get you started with a basic CI/CD workflow using Github Actions to deploy a Web application to Azure.

## CI/CD Overview

CI/CD is an acronym representing _continuous integration_ and _continuous delivery_. According to CI/CD, the quality of software is correlated to how often it is deployed. If the deployment process is difficult, the quality of software will inevitably be low. If it is easy to make small changes and deploy them without much risk, software quality increases over time. It all starts with the practices and tools we use to create and manage software code.

### Basic Version Control Concepts

- **Distributed Version Control**: It is difficult to implement CI/CD without a distributed version control system [(DVCS)](https://en.wikipedia.org/wiki/Distributed_version_control) such as [Git](https://git-scm.com/). Git fosters collaboration by allowing developers to make changes independently and reconcile those changes effectively. Older version control systems like [SVN](https://subversion.apache.org/) are less flexible. Complicated merges often make deployment difficult.
- **Trunk**: the copy of files representing the latest deployable version of software
- **Cut a Branch**: Make a copy of the software that can be changed independently
- **Feature Branch**: A copy of the software created for the purpose of making and testing changes before integrating with trunk
- **Pull Request**: Tools such as [Github](https://github.com/) and [Bitbucket](https://bitbucket.org/) allow a developer to signal to their team that their work is completed and ready for review. On approval, a pull request is merged to trunk.
- **Merge Conflict**: Developers sometimes make changes to the same lines of code independently. This causes a conflict when a pull request requires a code merge.

### Continuous Delivery

Continuous delivery is a way of moving software changes to production. When it is implemented, software changes go live with a minimum manual intervention and very little deployment pain. Continuous delivery requires business practices such as **building quality in**, **working in small batches**, **automating repetitive tasks**, **continuous improvement**, **sharing responsibility** and **collaborating across departments**.[^1]

### Continuous Integration

Continuous integration helps us achieve continuous delivery. It is a method of writing software that prevents rework and long-lived, divergent projects. To achieve continuous integration, break work into small batches. These batches should be completed in a day or less. The developer starts their work by cutting a feature branch. When she completes the work, she opens a pull request and invites team review, then merges the feature into trunk. This reduces errors, increases developer learning, and facilitates collaboration.

Testing is key to the success of continuous integration. This includes automated unit tests and automated deployment to a testing environment on merging a pull request to trunk. Not everything relies on automation, however. Developers must manually verify their changes in the testing environment when they are deployed.

This is often called **trunk-based development**.

> At the end of each development interval, we must have integrated, tested, working, and potentially shippable code, demonstrated in a production-like environment, **created from trunk using a one-click process, and validated with automated tests**.[^2]

### Unit Tests

Unit tests are simple programs that prove the program behaves predictably. A critical part of continuous integration is the assurance that if code is broken, unit tests will fail. This, in turn, means the deployment will fail. Broken code will not make it to production.

## Prerequisites

1. [Github account configured to use SSH](https://dev.to/bdbch/setting-up-ssh-and-git-on-windows-10-2khk)
2. If you are unfamiliar with Node.js, please review the my COVID-19 Tracker tutorials:
   - [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/)
   - [Making an Even-More-Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-10-making-an-even-more-useful-covid-19-tracker-with-node-js/)
   - [Get the Drop on the Cloud: Node.js and Azure](https://www.harveyramer.com/blog/2020-04-26-get-the-drop-on-the-cloud-nodejs-and-azure/)
3. Install the Azure CLI
   - [On Windows](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest)
   - [On Mac](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest)
   - [Others](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
4. Log in to your Azure account in the CLI `az login`

## Manage the Code

Since you want Github to deploy on your behalf, create your own repository for it.

```shell-script
git clone git@github.com:harveyramer/covid-19-demo-express-js-app.git
cd covid-19-demo-express-js-app
```

![Make a Github Repository](https://www.harveyramer.com/img/make-a-repository.png "Make a Github Repository")

Name it whatever you wish, choose to make it public or private, and create your repository.

Replace the origin of this project (git@github.com:harveyramer/covid-19-demo-express-js-app.git) with your own and push this code to your repository. Assuming your name is **John Doe** and you named your repository **My Repository**, your commands will be the following.

```shell-script
git remote set-url origin git@github.com:johndoe/my-repository.git
git push
```

To check out the latest branch and install the project, execute the following commands.

```shell-script
git checkout tutorial-3
npm install
```

### Run the Tests

This project uses the [Jest](https://jestjs.io/) unit testing framework to run two simple unit tests. One verifies that a `getData` function calls a specified API Url. The other checks to see that an HTML render function uses the data provided to it. Go ahead and run the unit tests to verify that this project is ready to deploy.

```shell-script
npm run test
```

![Unit Test Success](https://www.harveyramer.com/img/unit-test-success.png "Unit Test Success")

## Configure Continuous Integration

### Authorizing Azure

At the outset of this tutorial, you logged in to Azure with the command `az login`. This redirected you to a browser and authorized your local command line to access resources on your behalf. Now you will create a [Service Principal](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest) which will be used to authorize Github to deploy on your behalf. If you followed along on our [previous tutorial](/blog/2020-04-26-get-the-drop-on-the-cloud-nodejs-and-azure), you already have an application running in Azure. Replace the tokens `{My App Name}`, `{My Azure Subscription Id}`, and `{My App Service Plan Id}` then execute the following command.

```shell-script
// Your command will look like this:
// az ad sp create-for-rbac --name "covid19tutorial" --role contributor --scopes /subscriptions/7d806f61-8462-123456789-101112-985277452dd7/resourceGroups/appsvc_linux_centralus --sdk-auth
az ad sp create-for-rbac --name "{My App Name}" --role contributor --scopes /subscriptions/{My Azure Subscription Id}/resourceGroups/{My App Service Plan Id} --sdk-auth
```

The App Service blade in Azure provides all the information you need to configure and run the command above.

![App Service Blade](https://www.harveyramer.com/img/data-for-your-app.png "The App Service Blade")

When your Service Principal is created, a JSON object is output in the CLI.

1. Copy the Service Principal object
2. In a Web browser, go to your Github repository
3. Navigate to your repository's _Settings_ page and select _Secrets_ from the menu it provides.
4. In the _Secrets_ view, select **Add a new secret**.
5. Name the secrete `AZURE_CREDENTIALS` and paste your JSON service principal into the _Value_ field.
6. Add the secret.

![Adding a Github Secret](https://www.harveyramer.com/img/adding-a-github-secret.png "Adding a Github Secret")

### Set Up a Github Workflow

Open the workflow file at `.github/worflows/azure.yml` and change line 7. It should use the same Application Name you provided when creating the Service Principal.

![Editing the Azure YAML file](https://www.harveyramer.com/img/azure-yml.png "Editing the Azure YAML file")

## Deploy with Github Actions

On pushing these code changes to the **master** branch, our Github workflow will kick off. To make that happen, we will push our code to Github and merge our changes to the **master** branch. To do that, we'll be on the command line for a bit. Bear with me.

```shell-script
git add .
git commit -m "Configuration changes for Github workflows."
git push
git checkout master
git pull origin tutorial-3
git push
```

Navigate to the Actions tab of your Github repository. If all is well, in about 5 minutes, your Web app will deploy to Azure.

![Successful deployment of Node.js to Azure with Github](https://www.harveyramer.com/img/successful-deployment.png "Successful deployment of Node.js to Azure with Github")

### Verify Deployment

Open the `/src/views/about.pug` file and add the following line to the end of the file, then save it.

```pug
    p Deployed by Github to Azure
```

Next, commit the change and push it up to master.

```shell-script
git add .
git commit -m "Verify Github deployment."
git push
```

Check out your Actions tab to monitor deployment. On completion, visit your Web app's About page (for example, **\*covid19tutorial-myname**.azurewebsites.net/about\*) to see the paragraph you just deployed.

![Successful deployment](https://www.harveyramer.com/img/success-verification.png "Successful deployment")

## Conclusion

This tutorial introduced CI/CD concepts and showed an example of _Continuous Integration_ by deploying changes made in a feature branch to Azure. We skipped over some other concepts such as [Pull Requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests), [forking Github repos](https://help.github.com/en/github/getting-started-with-github/fork-a-repo), and the [benefits of breaking large tasks into small chunks](https://blog.trello.com/microproductivity-break-tasks-into-smaller-steps). These, you are encouraged to investigate on your own.

## Extra Credit

### Add an Environment Variable

If you would like to run this project locally, you will need to add an environment variable. On line 6 of the `/src/index.js` file, you can see why. The `process.env` property holds all environment variables exposed to this program.

```javascript
const port = process.env.PORT;
```

To expose a port to our application, create a `.env` file in the root of the project. Enter the following line into the file.

```shell-script
PORT=3000
```

This completes our local configuration. Start the local server.

```shell-script
npm run start
```

Verify the project is available at `http://localhost:3000`.

## Footnotes

[^1]: Ferguson, Nicole Phd., Humble, Jez and Gene Kim. _Accelerate: Building High Performing Technology Organizations_. IT Revolution, 2018, p. 43
[^2]: Kim, Gene., Jez Humble, Patrick Dubois, and John Willis. _The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations_. IT Revolution, 2016, p. 149
