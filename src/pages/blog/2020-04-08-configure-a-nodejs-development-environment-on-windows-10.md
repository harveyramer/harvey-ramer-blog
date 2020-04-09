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
  - nodejs
---
**Note**: When a command should produce an output of a certain type, you will see `command` → `output`. 

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

Now we can use our Chocolatey Package Manager to download and install [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)!

This time, use Windows Terminal. Type \`cmd\` in the Windows Start Menu and choose "Run as Administrator".

To install NVM, enter `choco install -y nvm` in the terminal.

Expect output like this:

![](/img/cmd_4rbXM91m6u.png)

Close that terminal window and open a new one (again, as Administrator). This allows the terminal to look up environment information and see our newly installed package manager.

Try this commmand: `nvm version` → `1.1.7`. If you get a numeric version result, we're good!

Let's install node next.

## Install NodeJS

Now we can use NVM to download and install [NodeJS](https://nodejs.org/en/about/)! Open the Windows Terminal again (you should not need Administrator privileges). Enter the command:

`nvm install node@13.12.0`

Expect output like this:

![](/img/cmd_pN3qtBIZHC.png)

Before celebrating too much, let's set our default NodeJS version with the command, `nvm use 13.12.0`.

Validate your install:

 `node -v` → `v13.12.0`\
 `npm -v` → `6.14.4`

You are ready to write code to test NodeJS!

## Hello World!

In your PowerShell terminal, enter `node`. This will launch the Node REPL terminal. 

In the terminal enter `console.log("Hello World!")` and you will see your statement printed for you. 

To exit the REPL, enter`.exit`.

![Hello World!](/img/cmd_SHOGeflu9a.png "Hello World!")

## Adding More Versions of NodeJS (optional)

To add a newer version of Node, we would do the following in Windows Terminal:

```
nvm install node@12.16.2
nvm use 12.16.2
```

Validate your newest install:

 `node -v` → `v12.16.2`\
 `npm -v` → `6.14.4`

To switch back to version 13, after this, we would once again use the command: `nvm use 13.12.0`.

At any time, you can see your locally installed versions of NodeJS with `nvm ls`.

![See local NodeJS versions](/img/cmd_RycmFqBtls.png "See local NodeJS versions")

## Installing Git

In most cases, you will write code that requires version control. For that purpose, nothing works better than Git. Let's do that before we wrap up. It will be easy. I promise. 

[Download the latest installer](https://git-scm.com/download/win) from the Git website (download should start automatically).

When the download completes, install using the defaults. No fuss. We can configure Git later. You'll finish in a flash.

![Happy install dialog](/img/Git-2.26.0-64-bit.tmp_gcNQ427NNs.png)

When the installation completes. Open a new PowerShell terminal as Administrator and enter the command `git --version`. It should output something like `git version 2.26.0.windows.1`.

## You're Finished!

You have configured NVM to manage two versions of NodeJS. To top it off, you installed Git to make sure you never lose any of your code changes. Congratulations!

<br />
<br />

Featured Image Credit: [Donar Reiskoffer](https://commons.wikimedia.org/wiki/File:Brussels_Zonienwoud.jpg)  / [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/)
