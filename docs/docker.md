---
id: docker
title: Docker
sidebar_label: Docker
---

## Prerequisites
You MAY need [VirtualBox](virtualbox.html).

## How do I install Docker?
Go to the [Docker Tutorial](https://github.com/rubyonracetracks/tutorial-docker-stretch).

## Why is Docker so great?
* Docker provides a virtual development environment that is independent of the host OS. Docker images with pre-installed Ruby on Rails can be created and used for working on Ruby gems and Rails projects. Because the software is pre-installed in Docker images, you can reset your Docker container to its original conditions in just a few SECONDS, not hours. By using a custom Docker image in tandem with a 1-step build script in your app’s source code, you can reset your development environment to its original conditions AND be back in business in just a few minutes, not hours.
* Because you have the ability to reset and rebuild everything in just a few minutes, it’s easy to make sure that your 1-step build script in your project works properly. Because you can check your 1-step build process frequently, you can always be on top of ALL of your app’s dependencies and avoid the infamous "but it works on my machine" problem.
* If you need to install your project manually in the production environment, the scripts used to create the Docker image combined with the 1-step build script in the source code double as a giant cheat sheet.
* Anyone who joins your project can be ready to roll in minutes, not hours or days.

## Why are your Docker images based on Debian’s stable branch?
Debian is a very widely used Linux distro, and the Debian-based distros are what I’m used to using. Because Debian is widely used, support is excellent, and help is easy to find. Debian Stable is lower in maintenance needs than Debian Testing. Debian is lighter, faster, and lower in maintenance needs than its Ubuntu derivative.

## How do you use Docker?
* I use Docker as a replacement for the Vagrant virtual machines I previously used. I use a Docker image to include all major dependencies of each project. This Docker image includes the project’s current Ruby version, the Ruby version I expect to upgrade to, the project’s current Rails version, the Rails version I expect to upgrade to, and selected other gems. Setting up the project is MUCH faster when the proper versions of Ruby and Rails are pre-installed. Installing a new version of Ruby or Rails involves a long wait.
* I use Bash scripts for starting a Docker container from a Docker image. There’s a script for downloading the latest Docker image available online, for resetting a Docker container to its original image setup, and for resuming a Docker container that I previously exited (analogous to rebooting).
* Once I’m in the Docker container, I don’t have to do anything in the host machine to directly work on my project. However, I put my projects in the Docker container’s shared directory, the directory that I have access to through either the host or virtual environment. Thus, I can use the Geany editor (my preferred editor) in the host OS to edit my code. I also have Docker set up to use port forwarding so that I can view the local server output and the PostgreSQL database.

## Why aren’t you using Docker in the same manner as everyone else?
Other people use multiple Docker containers per project. They have a Ruby on Rails Docker container, a PostgreSQL Docker container, and other specialized Docker containers. I find it confusing to keep track of all that, and the Docker images don't come with Rails and other big gems pre-installed. Therefore, I rely on a custom Docker image for each project and include all major dependencies so that I can get started quickly. In other words, I use Docker as a replacement for Vagrant.

## Why is Docker better than Vagrant?
Docker is faster, because it provides a virtual environment but not a virtual machine. A virtual machine is a heavy user of memory and processing power and needs a few minutes to boot up. Docker bypasses that overhead, and this allows you to enter your Ruby on Rails development environment in no more than a few seconds.

## Why do you support 32-bit Docker when everyone else uses 64-bit Docker?
The Ruby on Racetracks system relies heavily on tmux in Docker. Using tmux in 64-bit Docker requires a computer that uses a processor that offers VT-d (Intel Virtualization Technology for Directed I/O).  Many computers support 64-bit systems but not VT-d.
