
const express = require("express");
const app = express();
// Requiring faker module
const faker = require('@faker-js/faker');



// In order to be able to access POST data, we need to be able to pull it out of the request object. 
// To do this, we first have  nto add a new setting to our server.js file:
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



class Users {
    constructor() {
        this.uuid = faker.datatype.uuid();
        this.firstname = faker.name.firstname();
        this.lastname = faker.name.lastname();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
// console.log(new Users());


class Companies {
    constructor() {
        this.uuid = faker.datatype.uuid();
        this.name = faker.name.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        }
    }
}
// console.log(new Companies());


app.get("/api/:user/new", (req, res) => {
    // console.log(new Users());
    res.json(new Users());
});

app.get("/api/:company/new", (req, res) => {
    // console.log(new Companies());
    res.json(new Companies());
});

app.get("/api/:company/new", (req, res) => {
    // console.log(new Users());
    // console.log(new Companies());
    res.json({company: new Companies(), user: new Users()});
});








const port = 8000;


// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));



// notes:
//  it's best practice to start every such route with "/api" which will help us avoid route collisions with React's client-side routing.