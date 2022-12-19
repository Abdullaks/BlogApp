# BlogApp
## Table of contents

- [Introduction](#introduction)
- [Demo](#Demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction

A Blog app using Node js, Express js, MySQL and Angular.

NOTE: Please read the RUN section before opening an issue.

## Demo

![screenshot](https://github.com/Abdullaks/BlogApp/blob/main/blogApp-register.png)
![screenshot](https://github.com/Abdullaks/BlogApp/blob/main/blogApp-login.png)
![screenshot](https://github.com/Abdullaks/BlogApp/blob/main/blogapp-home.png)
![screenshot](https://github.com/Abdullaks/BlogApp/blob/main/blogApp-createNew.png)

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- JWT_SECRET:     This is the jwt secret_Id (string).

- CLOUD_NAME:This is the cloud name of cloudinary account(string)

- CLOUD_API_KEY:This is the api key of cloudinary account(string)

- CLOUD_API_SECRET:This is the capi secret of cloudinary account(string)

- PORT:This is the port of the api side(Number)

After you've set these environmental variables in the .env file at the backend of the project,

Enter the backend of the project using  `cd Api`,and intsall node modules using  `npm install`,
Now you can run `npm start` in the terminal and the application should work in the Api-side.

Enter the frontend of the project using  `cd Client`,and intsall node modules using  `npm install`,
Now you can run `ng serve` in the terminal and the application should work in the Client-side.


## Technology

The application is built with:

- Node.js 
- Express.Js 
- MySQL
- Angular 
- Angular Material
- Cloudinary


## Features

The application displays a Blog app  platform.

Users can do the following:

- User authentication using JWT and password.
- Blogs can be viewed from landing page.
- can create and edit blogs.
- can delete blogs.


## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [Abdulla KS](https://github.com/Abdullaks/)
