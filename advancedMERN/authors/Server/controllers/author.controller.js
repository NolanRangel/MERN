// imports the Author object model from the model folder
const { Author } = require('../models/author.model')

// 

// Get all 
module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
        
};


// get one
module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json({author: author}))
        .catch(err => response.json(err))
}

// Create
module.exports.createAuthor = (request, response) => {
    const { author } = request.body;
    Author.create({
        author,
    })
        .then(author=>response.json(author))
        .catch(err=>response.status(400).json(err))
}

// Update
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new:true, runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err=>response.status(400).json(err))
}

// Delete
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

