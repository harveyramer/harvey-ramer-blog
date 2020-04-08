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
## Install Node Version Manager (NVM) and NodeJS

Though we can install NodeJS on a Windows 10 computer, it is better to use a package manager. Versions change often, so we need to make it easy to switch between them. 

To install NVM, launch Powershell. In your Windows Start Menu, enter `Powershell` and choose "Run as Administrator" from the menu.

![](/img/sc5ox6zxr9.png)

To install remote packages, you will need the **RemoteSigned** execution policy. When the terminal opens, type the following commands to configure security:

1. `Get-ExecutionPolicy` should return `RemoteSigned`. If not, 
2. `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Confirm`

Now that you have the required execution policy, enter these commands:

1. `Install-Module nvm`
2. `Install-NodeVersion 12`
3. `Set-NodeVersion 12`
4. When that completes, 

   * `node -v` should output `v12.16.2`
   * `npm -v` should output `6.14.4`

You are ready to write code to test NodeJS!

## Hello World!

In your PowerShell terminal, enter `node`. This will launch the Node REPL terminal. 

In the terminal enter `console.log("Hello World!")` and you will see your statement printed for you. 

To exit the REPL, enter`.exit`.

![](/img/chrome_t4wfpemoyk.png)

## Adding More Versions of NodeJS (optional)

To add a newer version of Node, we would do the following:

1. `Install-NodeVersion 13`
2. `Set-NodeVersion 13`
3. Then,

   * `node -v` → `v13.12.0`
   * `npm -v` → `6.14.4`

To switch back to version 12, after this, we would once again use the command: `Set-NodeVersion 12`

## Installing Git

In most cases, you will write code that requires version control. For that purpose, nothing works better than Git. Let's do that before we wrap up. It will be easy. I promise. 

[Download the latest installer](https://git-scm.com/download/win) from the Git website (download should start automatically).

When the download completes, install using the defaults. No fuss. We can configure Git later. You'll finish in a flash.

![Happy install dialog](/img/Git-2.26.0-64-bit.tmp_gcNQ427NNs.png)

When the installation completes. Open a new Powershell terminal as Administrator and enter the command `git --version`. It should output something like `git version 2.26.0.windows.1`.

## You're Finished!
You have configured NVM to manage multiple versions of NodeJS and installed Git to allow effective versioning of your code. Congratulations!

<br />
<br />

Featured Image Credit: [Donar Reiskoffer](https://commons.wikimedia.org/wiki/File:Brussels_Zonienwoud.jpg)  / [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/)
