---
title: "Laravel + WSL2: Setting Up a Development Environment"
date: 2021-01-18T03:46:55.911Z
description: Laravel Development Under Windows
img: /img/blog/2020-11-24-windows-terminal.png
alt: my first blog post
imgsm: /img/blog/2020-11-24-windows-terminal_sm.png
tags: laravel
author: Danny Festor
---

# Laravel in WSL2

## Introduction

Developing [Laravel](https://www.laravel.org/) on Windows is really simple. Just grab the latest version of [Laragon](https://laragon.org/) and get started. This will be all you really need to do to start developing, but sometimes you want more control. Or you want to practice staging an environment that is close to a production environment.

## Installing WSL2

[Microsoft](https://docs.microsoft.com/en-us/windows/wsl/install-win10) has an excellent guide on installing WSL2 onto your Windows 10 installation. You need a somewhat up-to-date version of Windows 10, so make sure to install the appropriate update. I chose to develop under Ubuntu 20.04 (the latest version available to me at writing of this post).

## Installing required packages

So you are in the WSL2 command line, what now? First of all, let us start by installing latest updates for your distribution. You do this by using apt:

```bash
$ sudo apt update -y && sudo apt upgrade -y
```

This will make sure you have all the latest repositories.

### Installing PHP

Now, you need to install a PHP version that laravel supports.

```bash
$ sudo apt install php-zip php-mbstring php-xml
$ sudo apt install php-pgsql php7.4-pgsql
```
