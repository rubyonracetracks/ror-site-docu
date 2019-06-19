---
id: ref_git
title: Git Cheat Sheet
sidebar_label: Git
---

## Syncing a Fork

### What does this mean?
Syncing your fork means updating it in accordance with the upstream repository.  The master branch of your fork should have EXACTLY the same code as the upstream repository, and the ONLY change you should be making is updating it.  (If you want to do things differently, make the changes in the other branches of your fork.)  The steps are:
1. Setting the upstream branch
2. Fetching and merging the upstream branch
 
### Setting the Upstream Branch
* In the terminal, use the "git clone" command to download the source code of your fork (NOT the mainline app).
* Use the "cd" command to enter the root directory of the app.
* Enter the command "git remote -v" to verify the URL.
* Enter the following command:
```
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
# NOTE: In other words, set "upstream" to the URL of the original repository, NOT your fork.
```
* Enter the command "git remote -v" to verify the URL of your fork and the original repository.

### Fetching and Merging the Upstream Branch
* Enter the command "git fetch upstream".
* Enter the command "git checkout master".
* Enter the command "git merge upstream/master".  This merges the changes in the upstream repository into your fork.
* If there are merge conflicts, resolve them.
* Enter the command "git push origin master".

## Cloning the Remote Branch (alt_branch)

    git checkout alt_branch
	
## Updating the Remote Branch to Include Master Branch Changes

    git checkout alt_branch
    git merge master
    git push origin alt_branch
    
## Deleting Remote Branch

    git push origin --delete alt_branch

## Pushing Project to Non-Empty Repository
```
# cd into the project directory
git init
git remote add origin <Git URL>
git fetch
git branch master origin/master
git checkout master
git add .
git commit -m 'Initial commit'
git push origin master
