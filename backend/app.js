//mongodb password: Ecy9UjZnUc3SzdmW
//mongodb connection: mongodb+srv://Bishwa:<password>@cluster0.phwqeet.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//
// const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect('mongodb+srv://Bishwa:Ecy9UjZnUc3SzdmW@cluster0.phwqeet.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff' , (req,res,next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'saved successfully'
    });
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
                _id: 'bishwa',
                name: 'bpariyar',
                manufacturer: 'bpariyar',
                description: 'bpariyar',
                heat: '1234',
                likes: '1234',
                dislikes: '1234',
                imageUrl: 'bpariyar',
                mainPepper: 'bpariyar',
                usersLiked: 'pariyar',
                usersDisliked: 'pariyar',
                userId: 'pariyar',
              
        }
    ]
    res.status(200).json(stuff);
});
app.use('/api/auth', userRoutes);
module.exports = app;