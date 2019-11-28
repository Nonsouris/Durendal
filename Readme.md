Node.js Durendal
==================================

## Code style
Standard Node.js and webapp

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# Overview of project

Our project, takes images using the camera every predefined seconds, feeds it into a cloud bucket and performs image recognition on it. It has been preconfigured to identify faces and highlight them. Currently it is performing the function of security camera, thus when it recognises a person, it will email the owner and issue a verbal warning to the visitor.It has been attached to servos to allow movement of the camera however this application is infinitely dynamic, allowing it to be used for a variety of other purposes such as as being able to be configured for Optical character recognition and other artificial intelligence purposes.


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