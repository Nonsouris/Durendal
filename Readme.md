Node.js Durendal
==================================

## Code style
Standard Node.js and webapp

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# Overview of project

Durandal uses tensorflow and opencv for facial image recognition, it requests access to camera and is accessable from a ip address. From here it will load a image model that has been generated from the facial image model file. The opencv javascript will be loaded client side to reduce the heavy load that will happen server side.

Quick Start
-----------

In order to run this project, you first need to go through the following steps:

1. `Git clone the repository.`
2. `Cd into Durendal`
3. `Put images into the file to create a model`
4. `Run Server.js`

##Supported Python Versions

Python >= 2.7

#Deprecated Python Versions

Python == 2.7. Python 2.7 support will be removed on January 1, 2020.

## Installation

To properly use this program, please install all the requirements in the requirements.txt as well as node.js and any other possible installations

```bash
sudo pip install -r requirements.txt 
```