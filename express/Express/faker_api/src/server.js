import Faker from 'faker'
const express = require("express");
const pathe = require('path');

const app = express();



// In order to be able to access POST data, we need to be able to pull it out of the request object. 
// To do this, we first have to add a new setting to our server.js file:
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `$${faker.commerce.price()}`;
        this.department = faker.commerce.department();
    }
}
console.log(new Product());


// GET (Read All)
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World " });
});

// GET (Read one)
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});

// POST (Create)
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});


// PUT (Update)
// updating data using a put request:
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: "ok" });
});

// DELETE (Destroy)
// deleting data using a delete request.
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


const port = 8000;


// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));



// notes:
//  it's best practice to start every such route with "/api" which will help us avoid route collisions with React's client-side routing.




