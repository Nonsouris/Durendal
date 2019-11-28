Python Gungnir
==================================

## Code style
Standard Python code

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# Overview of project

Our project, takes images using the camera every predefined seconds, feeds it into a cloud bucket and performs image recognition on it. It has been preconfigured to identify faces and highlight them. Currently it is performing the function of security camera, thus when it recognises a person, it will email the owner and issue a verbal warning to the visitor.It has been attached to servos to allow movement of the camera however this application is infinitely dynamic, allowing it to be used for a variety of other purposes such as as being able to be configured for Optical character recognition and other artificial intelligence purposes.


Quick Start
-----------

In order to run this project, you first need to go through the following steps:

1. `Select or create a Cloud Platform project.`
2. `Enable billing for your project.`
3. `Set up the RPI as per the image shown below`
3. `Git clone the repository.`
4. `Cd into IOT/IOTv2-Electric-Boogaloo/mqtt.`
5. `Run the authentication`
6. `Run the main.py file`
7. `Run the dataup.py`

##Supported Python Versions

Python >= 2.7

#Deprecated Python Versions

Python == 2.7. Python 2.7 support will be removed on January 1, 2020.

## Installation

To implement the google cloud functions, the libraries need to be installed on the Raspberry Pi. 
Install Google Cloud Storage (https://pypi.org/project/google-cloud-storage/)

```bash
sudo pip install google-cloud-storage
```