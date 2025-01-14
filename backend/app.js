
//mongopassword : qCj8T5d9PwDejUjQ
//mongo username: mongodb+srv://BishwaP:<password>@cluster0.ec47hit.mongodb.net/?retryWrites=true&w=majority

//import express framwork for our app which contain our express app
const express = require('express');

 //intercept every request json content have in the body
const bodyParser = require('body-parser');

//connect  Mongoose to build RESTfull API 
const mongoose = require('mongoose');

const path = require('path');

// create sauce route and user route for our app
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const cors = require('cors');

//create app
const app = express();

//connect to MongoDb using Mongoose
mongoose.connect('mongodb+srv://BishwaP:qCj8T5d9PwDejUjQ@cluster0.ec47hit.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
// create piece of middleware 
//  CORS which will stop preventing accessing  http request between server and frontend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 //intercept every request json content have in the body
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
//  CORS which will stop preventing accessing  http request between server and frontend
app.use(cors());  

app.use(bodyParser.json());
  
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

//exported app to run our app in node server
module.exports = app;