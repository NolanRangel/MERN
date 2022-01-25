// imports the controllers file
// five main different database requests. Basic requests for full crud
const ProductController = require('../controllers/product.controller');



// gets recognized by the '/api' then goes to the PersonController controller and looks for whatever function is called after ProductController
module.exports = function(app){
    // get all
    app.get("/api/products", ProductController.findAllProducts);
    // get one
    app.get("/api/product/:id", ProductController.getProduct);
    // create new
    app.post('/api/product/new', ProductController.createProduct);
    // Update
    app.put('/api/product/:id', ProductController.updateProduct);
    // Delete
    app.delete('/api/product/:id', ProductController.deleteProduct);






}

