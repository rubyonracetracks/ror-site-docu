# Ruby on Racetracks Web Site

[![Build Status](https://semaphoreci.com/api/v1/jhsu802701/ror-site-docu/branches/master/badge.svg)](https://semaphoreci.com/jhsu802701/ror-site-docu)

Welcome to the source code of the Ruby on Racetracks web site!  This app was created with the aid of Docusaurus Neutrino, which automatically creates a new Docusaurus app from scratch.  It's like Rails Neutrino but for Docusaurus instead.

## Scripts
* clean.sh: Run this script to remove the website/build, website/i18n, and website/node_modules directories.  The files in these directories are automatically created when you build the app and are NOT part of the source code.  Deleting these directories makes it easier to do a keyword search of the source code.
* all.sh: This script runs test_app.sh and test_code.sh.
* credentials.sh: Run this script after you reset your Docker container to enter your Git name and email address.
* test_app.sh: This script runs the commands "npm install" and "npm test" in the website directory.
* test_code.sh: This script runs commands that check this app for outdated and insecure npm packages.
* server.sh: This script displays your app on your local server. Please note that the port number will be something other than 3000 if you used a non-zero offset.
* git_check.sh: Run this script before making a Git commit.

## Setup Procedure
* If you are using Docker, you need at least two tmux windows.  If you have Docusaurus installed directly in your host OS, you'll need at least two terminal windows or tabs.
* In the first window, enter this app's root directory and enter the command "sh all.sh; sh server.sh".
* In the second window, enter this app's root directory.  Use this window for running the scripts and entering Git commands.

## Entering NPM Commands
* Please note that "npm commands" should be executed within the website directory and NOT in this project's root directory.  You may need a third window for this.
* The above scripts take care of this detail for you.
