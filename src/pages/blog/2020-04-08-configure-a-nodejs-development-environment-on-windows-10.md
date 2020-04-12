---
templateKey: blog-post
title: Configure a Node.js Development Environment on Windows 10
date: 2020-04-08T22:36:23.975Z
description: >-
  Don't get lost in the woods on your way to learning Node.js. Everything you
  need to get started writing server side JavaScript on Windows 10 is right
  here.
featuredpost: false
featuredimage: /img/brussels_zonienwoud.jpg
tags:
  - software
  - node.js
  - tutorial
---
## Overview

If you want to learn programming, get set up can be a confusing barrier to entry. In this tutorial, I offer a straightforward way to install all the tools you will need to start working with Node.js on Windows 10.

**Note**: When a simple command should produce an output of a certain type, you will see `command` → `output`. 

## Install Chocolatey: the Windows Package Manager

[Chocolatey](https://chocolatey.org/) allows us to download and install open source packages from the Web. Chocolatey is as secure as the practices of the user. Mitigate risk by downloading known safe packages for your development machine.

We will use [Windows PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-7) to install Chocolatey. 

To launch PowerShell enter `PowerShell` in your Windows Start Menu and choose "Run as Administrator" from the menu.

![](/img/sc5ox6zxr9.png)

In your PowerShell terminal, enter the command:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Expect output like this:

![](/img/powershell_Wb8r3lS2bU.png)

## Install Node Version Manager (NVM)

Now we can use our Chocolatey Package Manager to download and install [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)! It is common to work on projects that require different versions of Node.js. If we installed Node.js directly, switching between such projects would present a conundrum. But NVM will make that an easy problem to solve.

This time, use Windows Terminal. Type \`cmd\` in the Windows Start Menu and choose "Run as Administrator".

To install NVM, enter the command:

```
choco install -y nvm
```

Expect output like this:

![](/img/cmd_4rbXM91m6u.png)

Close that terminal window and open a new one (again, as Administrator). This allows the terminal to look up environment information and see our newly installed package manager.

Try the command `nvm version` → `1.1.7`. If you get a numeric version result, we're good!

Let's install Node.js next.

## Install Node.js

Now we can use NVM to download and install [Node.js](https://nodejs.org/en/about/)! Open the Windows Terminal again (you should not need Administrator privileges). Enter the command:

```
nvm install node@13.12.0
```

Expect output like this:

![](/img/cmd_pN3qtBIZHC.png)

Before celebrating too much, let's set our default Node.js version with the command, `nvm use 13.12.0`.

Validate your install:

 `node -v` → `v13.12.0`\
 `npm -v` → `6.14.4`

You are ready to write code to test Node.js!

## Hello World!

In your Windows Terminal, enter `node`. This will launch the Node REPL terminal. 

In the terminal enter the command:

```
console.log("Hello World!")
```

Your "Hello World" statement will be printed to the terminal 

Then, exit the REPL, by entering `.exit`.

![Hello World!](/img/cmd_SHOGeflu9a.png "Hello World!")

## Add More Versions of Node.js (optional)

As I mentioned earlier, it is common to contribute to multiple Node.js projects requiring different versions of Node.js. For example, you could choose to write your own project in Node.js version **13.12.0**, but need to help another developer working on a project using Node.js **12.16.2**. This will help you with that problem.

To add another version of Node, open Windows Terminal:

```
nvm install node@12.16.2
nvm use 12.16.2
```

Validate your newest install:

 `node -v` → `v12.16.2`\
 `npm -v` → `6.14.4`

To switch back to version 13, after this, we would once again use the command: `nvm use 13.12.0`.

At any time, you can see your locally installed versions of Node.js with `nvm ls`.

![See local Node.js versions](/img/cmd_RycmFqBtls.png "See local Node.js versions")

## Install Git

In most cases, you will write code that requires version control. For that purpose, nothing works better than Git. Let's do that before we wrap up. It will be easy. I promise. 

[Download the latest installer](https://git-scm.com/download/win) from the Git website (download should start automatically).

When the download completes, install using the defaults. No fuss. We can configure Git later. You'll finish in a flash.

![Happy install dialog](/img/Git-2.26.0-64-bit.tmp_gcNQ427NNs.png)



When the installation completes. Open a new Windows Terminal and enter the command `git --version` → `git version 2.26.0.windows.1`. If you see a version as described, Git is configured correctly.

## Install Visual Studio Code

Visual Studio Code is my preferred development environment for Node.js. There are many excellent guides on [getting started](https://code.visualstudio.com/docs/introvideos/basics).

In short, download the latest binary of [Visual Studio Code](https://code.visualstudio.com/) for windows.

![Downloading Visual Studio Code](/img/chrome_9n74ygwamo.png "Downloading Visual Studio Code")

When the download completes, install using the defaults. No fuss. 

One final step, visit the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/VSCode), and install:

* [Node.js Modules Intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)
* [Node.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack)

![Install Node.js Modules Intellisense](/img/chrome_rtjxzfmak7.png "Install Node.js Modules Intellisense")

![Install Node.js Extension Pack](/img/chrome_1klnojkfy0.png "Install Node.js Extension Pack")

When those are both installed, restart Visual Studio Code and poke around on to get a sense of the tools available to you.

## You're Finished!

You have configured NVM to manage two versions of Node.js. You installed Git to make sure you never lose any of your code changes. To top it off, you added and configured your own code editor. Congratulations!

Ready for a new challenge? [Start Here to Make a Useful COVID-19 Tracker with Node.js](https://www.harveyramer.com/blog/2020-04-09-start-here-to-make-a-useful-covid-19-tracker-with-node-js/).

And please [contact me](https://www.harveyramer.com/contact) if you have any questions or feedback. 

<br />
<br />

Featured Image Credit: [Donar Reiskoffer](https://commons.wikimedia.org/wiki/File:Brussels_Zonienwoud.jpg)  / [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/)