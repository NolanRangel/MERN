// establishes connection with config file?
const mongoose = require('mongoose');


// creates object model for the data to be entered in to the database
// make sure to declare the type and validations
// pay attention to structure
const AuthorSchema = new mongoose.Schema({
    author: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, " Name must be longer then 3 characters"]
    }
}, { timestamps: true });


// exports the object model so it can be used in the controllers file as whatever name its being declared as below
module.exports.Author = mongoose.model('Author', AuthorSchema);

