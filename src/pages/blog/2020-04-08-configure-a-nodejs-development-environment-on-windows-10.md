---
templateKey: blog-post
title: Configure a NodeJS Development Environment on Windows 10
date: 2020-04-08T22:36:23.975Z
description: >-
  Everything you need to get started writing server side JavaScript on Windows
  10.
featuredpost: false
featuredimage: /img/brussels_zonienwoud.jpg
tags:
  - software
  - azure
---
## Install NVM and NodeJS

Though we can install NodeJS on a Windows 10 computer, it is better to use a package manager. Versions change often, so we need to make it easy to switch between them. 

To install NVM, we will use Windows PowerShell. To do so, we need to run Powershell as Administrator. In your Windows Start Menu, type "Powershell" and choose "Run as Administrator" from the menu.

![](/img/sc5ox6zxr9.png)

When the terminal opens, type the following commands:

1. `Install-Module nvm`
2. `Install-NodeVersion 12`
3. `Set-NodeVersion 12`
4. When that completes, 

   * `node -v` should output `v12.16.2`
   * `npm -v` should output `6.14.4`

You are ready to write code with NodeJS!

## Hello World!

In your PowerShell terminal, enter `node`. This will launch the Node REPL terminal. 

In the terminal enter `console.log("Hello World!")` and you will see your statement printed for you. 

To exit the REPL, enter`.exit`.

![](/img/chrome_t4wfpemoyk.png)

Congratulations, your work has paid off!

## Adding More Versions of NodeJS

To add a newer version of Node, we would do the following:

1. `Install-NodeVersion 13`
2. `Set-NodeVersion 13`
3. Then,

   * `node -v` should output `v13.12.0`
   * `npm -v` should output `6.14.4`

To switch back to version 12, after this, we would once again use the command: `Set-NodeVersion 12`

Featured Image Credit: [Donar Reiskoffer](https://commons.wikimedia.org/wiki/File:Brussels_Zonienwoud.jpg)  / [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/)