---
title: "Setting Up MongoDB in Express.Js"
date: "2025-03-16"
tags: ["MongoDB", "Node.js", "Guides"]
---

# MongoDB
MongoDb is Database software that has an api that can be used by http servers to store and retrive data related to application.

## Usage
There are different ways to run mongodb.
We can run it on cloud or as a localhost server, or a container.

### Cloud 
MongoDb provides a cloud service where we can create a database in a cluster. To use this service First log in to MongoDb account and create a cluster. Then setup allocated ip's(use access anywhere if you dont have static ip) and create user for the database and give users role.

After this you'll see a connect button. This allows you to make changes in your database or access it.

There are many ways to connect to mongoDB, easiest one is Compass, that lets us see and access our database.

after you have connected through compass, its time for us to use mongoDb in HTTP server.
In express install npm library `mongoose` using 
```bash
npm install mongoose
```
and then require the library using
```javascript
const mongoose = require('mongoose');
```
 
 after this when it comes to define your database, the structure of database, you need to define schema, it is nothing but the way your data will look like, now its not necessary but a good practice. To define schema use new keyword like 
```javascript
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean
});
```

To use this schema 
```javascript
const Course = mongoose.model('Course', courseSchema);
```
this will make sure the data we are putting in database is similar.

After this comes main part, to connect mongoDb to your app.
```javascript
mongoose.connect(
  'mongodb+srv://<user>:<pass>@cluster0.hny5grp.mongodb.net/courses'
);
```
we can get 
`mongodb+srv://<user>:<pass>@cluster0.hny5grp.mongodb.net/courses` 
in the mongoDB cloud connect panel.
