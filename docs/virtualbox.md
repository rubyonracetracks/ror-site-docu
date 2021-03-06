---
id: virtualbox
title: VirtualBox
sidebar_label: VirtualBox
---

## How do I install a Linux virtual machine?
Go to the [VirtualBox Tutorial](http://www.virtualboxtutorial.com/).

## What is a virtual machine?
A virtual machine is a simulated second computer within your physical computer. Like a physical machine, a virtual machine can be booted up and have an OS installed to it.

## Do I need to install VirtualBox?
A virtual machine is required if any of the following circumstances apply to you:
* You are on a Windows machine, and getting rid of Windows is not an option.
* You are a Mac user, and you want to use Docker.

## What's wrong with installing Ruby on Rails in MacOS?
* Installing Ruby on Rails directly in the host OS of your machine is a slow and bureaucratic process.
* You cannot reset your development environment on a whim, because it requires uninstalling Ruby on Rails and then enduring the slow and bureaucratic installation process all over again.  If anything weird happens, you won't be able to quickly rule out the possibility of a broken system.

## What's wrong with using Docker for Mac?
Docker for Mac is slow.  Docker runs faster on a Linux virtual machine within VirtualBox.

## What's wrong with installing Ruby on Rails in Windows?
* This has the drawbacks of installing Ruby on Rails in MacOS PLUS additional issues.
* Very few people work on Ruby on Rails projects in a Windows environment.  Even among the heaviest hitters of the Ruby on Rails community, very few people have successfully installed Ruby on Rails in Windows.  This means that there is very little help for you, and the procedures you find are likely to be incomplete and/or outdated.
* Windows is very finicky, and the proprietary nature of it compounds this issue.  This is the OS with the infamous Blue Screen of Death that can appear for no apparent reason.
* In other words, installing Ruby on Rails in Windows is a task best left to Chuck Norris.

## What's wrong with using Docker for Windows?
The Ruby on Racetracks way relies on Bash scripts to start up Docker containers.  Unfortunately, I was unable to get Bash scripts to work in Windows.  (The cygwin program didn't work.)

## Why do you prefer SparkyLinux as the host system containing Docker?
* SparkyLinux is fast, lightweight, well-polished, well-supported, and user-friendly. It's so fast and lightweight that it even runs quite well on 10-year-old PCs.
* I use a stable edition of SparkyLinux for maximum stability and minimum maintenance.
* When Debian first released Debian Stretch as the new Debian Stable, SparkyLinux was the first to provide a new release based on it.

## Why don't you use Ubuntu?
* The Ubuntu base has a high overhead, which means that it requires far more memory, processor speed, and other resources than SparkyLinux Linux and other Debian-based distros that bypass the Ubuntu base. This high overhead is especially significant if your computer is more than a few years old, or if you're relying on a virtual machine.
* The GNOME desktop is heavier and slower than most other desktop environments.
