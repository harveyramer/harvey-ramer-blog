---
templateKey: blog-post
title: "Focus on the Easy Bits: CI/CD with Azure and Github"
date: 2020-05-04T03:13:26.247Z
description: Continuous integration and continuous deployment (CI/CD) are often
  talked about, but perhaps you wonder what all the fuss is about. This tutorial
  will get you started with a basic CI/CD workflow using Github Actions to
  deploy a Web application to Azure.
featuredpost: false
featuredimage: /img/factory-automation.jpg
tags:
  - software
  - azure
  - ci/cd
---
## Prerequisites

1. [Github account configured to use SSH](https://help.github.com/en/github/getting-started-with-github/set-up-git#next-steps-authenticating-with-github-from-git)
2. If you are unfamiliar with Node.js, please review the my COVID-19 Tracker tutorials:
    * [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/)
    * [Making an Even-More-Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-10-making-an-even-more-useful-covid-19-tracker-with-node-js/)
3. Install the Azure CLI
    * [On Windows](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest)
    * [On Mac](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest)
    * [Others](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
4. Log in to your Azure account in the CLI `az login`

## What Is CI/CD?

CI/CD is an acronym representing *continuous integration* and *continuous delivery*. According to CI/CD, the quality of software is directly related to how often it is deployed. If the deployment process is difficult, the quality of software will inevitably be low. 

### Basic Concepts

Underpinning CI/CD are some straightforward concepts that may need definition for the uninitiated. 

* **Distributed Version Control**: It is nearly impossible to implement CI/CD without a distributed version control system [(DVCS)](https://en.wikipedia.org/wiki/Distributed_version_control) such as [Git](https://git-scm.com/). It is easier for a team to make changes in Git than in older version control systems like [SVN](https://subversion.apache.org/).
* **Trunk**: The version of files representing the latest deployable copy of software
* **Cut a Branch**: Make a copy of the software that can be changed independently
* **Feature Branch**: A copy of the software created for the purpose of making and testing changes before integrating with trunk
* **Pull Request**: Tools such as [Github](https://github.com/) and [Bitbucket](https://bitbucket.org/) allow a developer to signal to their team that their work is completed and ready for review. On approval, a pull request is merged to trunk. 
* **Unit Test**: A simple program that proves program inputs reliably return expected outputs.

### Continuous Delivery

Continuous delivery is a way of moving software changes to production. When it is implemented, software changes go live with a minimum manual intervention and very little deployment pain. Continuous delivery requires business practices such as **building quality in**, **working in small batches**, **automating repetitive tasks**, **continuous improvement**, **sharing responsibility** and **collaborating across departments**.[^1]

### Continous Integration

Continuous integration helps us achieve continuous delivery. It is a method of writing software that prevents rework and long-lived, divergent projects. To achieve continuous integration, break work into small batches. These batches should be completed in a day or less. The developer starts their work by cutting a feature branch. When she completes the work, she opens a pull request and invites team review, then merges the feature into trunk. This reduces errors, increases developer learning, and facilitates collaboration.

Testing is key to the success of continuous integration. This includes automated unit tests and automated deployment to a testing environment on merging a pull request to trunk. Not everything relies on automation, however. Developers must manually verify their changes in the testing environment when they are deployed. 

This is often called **trunk-based development**. 

> At the end of each development interval, we must have integrated, tested, working, and potentially shippable code, demonstrated in a production-like environment, **created from trunk using a one-click process, and validated with automated tests**.[^2]

## Basic Continous Integration with Node.js and Azure



## Footnotes
[^1]: Ferguson, Nicole Phd., Humble, Jez and Gene Kim. _Accelerate: Building High Performing Technology Organizations_. IT Revolution, 2018, p. 43
[^2]: Kim, Gene., Jez Humble, Patrick Dubois, and John Willis. _The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations_. IT Revolution, 2016, p. 149