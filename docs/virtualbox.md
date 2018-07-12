---
id: virtualbox
title: VirtualBox
sidebar_label: VirtualBox
---

## How do I install a Linux virtual machine?
Go to the [VirtualBox Tutorial](https://github.com/rubyonracetracks/tutorial-virtualbox).

## Do I need to install VirtualBox?
* A virtual machine is required if any of the following circumstances apply to you:
  * You are on a Windows machine, and getting rid of Windows is not an option.
  * You are a Mac user.
  * Your host OS is 64-bit Linux, but your computer's processor does not support VT-d.  If you are not sure if your processor supports VT-d, go to [Intel's list of processors supporting VT-d](https://ark.intel.com/Search/FeatureFilter?productType=processors&VTD=true).  If your processor is NOT on this list, you need to install a 32-bit distro on a virtual machine.
* A virtual machine is recommended if you are using a Linux distro that is not based on Debian Stable.  You can still install Docker, but you must do it manually, because the automated script used under the Ruby on Racetracks way relies on a Linux distro based on Debian Stable.

## What's wrong with 64-bit Linux on a machine with a processor that does not support VT-d?
The Ruby on Racetracks way relies on a tool called tmux within the Docker container.  Unfortunately, tmux does not work in a 64-bit Docker container if the processor does not support VT-d.  If your processor does not support VT-d, you must use a 32-bit Docker container in a 32-bit OS.  If replacing your 64-bit host OS with a 32-bit host OS is not an option, then you must rely on a 32-bit guest OS in VirtualBox.

## What's wrong with installing Ruby on Rails in MacOS?
* Installing Ruby on Rails directly in the host OS of your machine is a slow and bureaucratic process.
* You cannot reset your development environment on a whim, because it requires uninstalling Ruby on Rails and then enduring the slow and bureaucratic installation process all over again.  If anything weird happens, you won't be able to quickly rule out the possibility of a broken system.

## What's wrong with using Docker for Mac?
Docker for Mac is slow.  Docker runs faster on a Linux virtual machine within VirtualBox.

## What's wrong with installing Ruby on Rails in Windows?
* This has the same drawbacks on installing Ruby on Rails in MacOS PLUS additional issues.
* Very few people work on Ruby on Rails projects in a Windows environment.  Even among the heaviest hitters of the Ruby on Rails community, very few people have successfully installed Ruby on Rails in Windows.  This means that there is very little help for you, and the procedures you find are likely to be incomplete and/or outdated.
* Windows is very finicky, and the proprietary nature of it compounds this issue.  This is the OS with the infamous Blue Screen of Death that can appear for no apparent reason.
* In other words, installing Ruby on Rails in Windows is a task best left to Chuck Norris.

## What's wrong with using Docker for Windows?
The Ruby on Racetracks way relies on Bash scripts to start up Docker containers.  Unfortunately, I was unable to get Bash scripts to work in Windows.  (The cygwin program didn't work.)
