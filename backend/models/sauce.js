
//create data model for this app using Mongoose's  Schema  method which lets you create a data schema for our MongoDB database. for sauces routes.
const mongoose = require('mongoose');
//cerate data Schema
const sauceSchema = mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    description: {type: String, required: true},
    mainPepper: {type: String, required: true},
    imageUrl: {type: String, required: true},
    heat: {type: Number, required: true},
    likes: {type: Number, required: true},
    dislikes: {type: Number, required: true},
    usersLiked: {type: Array, required: true},
    usersDisliked: {type: Array, required: true},
});
//corresponding Schema 
module.exports = mongoose.model('Sauce', sauceSchema);
