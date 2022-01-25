// establishes connection with config file?
const mongoose = require('mongoose');


// creates object model for the data to be entered in to the database
// make sure to declare the type and validations
// pay attention to structure
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Item is required"],
        minLength: [1, " Item must be longer then 1 character"]
    },
    price: { 
        type: String,
        min: [1, "Item cost must be greaterr then 1 dollar"],
        max: [15, " Item cost cannot be that high. You're not that rich"] 
    },
    description: { 
        type: String,
        required: [true, " Description is required"]
    }
}, { timestamps: true });


// exports the object model so it can be used in the controllers file as whatever name its being declared as below
module.exports.Product = mongoose.model('Product', ProductSchema);

