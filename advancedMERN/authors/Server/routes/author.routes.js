// imports the controllers file
// five main different database requests. Basic requests for full crud
const AuthorController = require('../controllers/author.controller');



// gets recognized by the '/api' then goes to the PersonController controller and looks for whatever function is called after AuthorController
module.exports = function(app){
    // get all
    app.get("/api/authors", AuthorController.findAllAuthors);
    // get one
    app.get("/api/author/:id", AuthorController.getAuthor);
    // create new
    app.post('/api/author/new', AuthorController.createAuthor);
    // Update
    app.put('/api/author/:id', AuthorController.updateAuthor);
    // Delete
    app.delete('/api/author/:id', AuthorController.deleteAuthor);






}

