import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';


// have home screen load a select tag with two options(people, planets)
// have an input that takes in a number
// onchange update a state variable with the target.value thats created by user input (select option and number input)
// somehow send form data from Home.jsx and bring it in to App.js (calling a function from app.js in onSubmit on Home.jsx?)
// take that form data and send it through the BrowserRouter to the correct component
// in the component check for person or planet and display info accordingly

function App() {

  return (
    <div className='container'>

      <BrowserRouter>
            <Home />
            
        <Switch>
          <Route path="/:select/:num">
            <Display />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
