
# Front End Setup

## Views (4):

- Index page/View: this will list the athletes in my db(route: "/")
- Detail Page/View: A page to actually see the details of an athlete with links to edit/delete (route: "/:id")
- Create page/view: A form to create an Athlete (route: "/create")
- Edit Page/View: A page to edit an athlete in the db with a delete button as well (route: "/:id/edit")

## Components (2):

- Form: The form that we will use on the create page and the edit page
- Delete Button: Which will make an api call to delete an athlete

##

**dont forget to install react-router in react file
1. Build views folder
2. build components folders
3. build App.js Routes

# Back End Setup

## Requests (5):

- Get request: "/api/athletes": Return all athletes in the db
- Get requestt: "/api/athletes/:id": retrieve a specific athlete
- Post request: "/api/athletes": Create a new Athlete
- Put request: "/api/athletes/:id": update a specific athlete
- Delete request: "/api/athletes/:id": delete a specific athlete

1. setup server.js
2. Build Server folder
3. add files to folders
    1. config (talks to db)
    2. model (structures info to inject into db)    
    3. controller (gets data from front end and does queries for db and sends to model)
    4. routes ()
4. Build out backend folders
    1. config
    2. model
    3. controllers
    4. routes
    