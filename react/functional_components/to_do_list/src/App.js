import React, { useEffect, useState } from 'react';
import './App.css';
// import ToDo from './components/ToDo'; 
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

// used in the useEffect hook to prevent list from resetting on reloading
// gets updated with state. quotes can be empty, text is filler.
const LOCAL_STORAGE_KEY = "react-todo-list-todos";




// Parent to [ToDoForm, ToDoList] 

function App() {
  // to do list
  const [todos, setToDos] = useState([]);
  

// useEffect accepts two arguments. The second argument is optional.
  // useEffect(<function>, <dependency>)
  // useEffect uses local storage to store data as a key value pair with no expiration date
  // gets the value of the specified local storage variable which is (LOCAL_STORAGE_KEY) and then uses parse
  // when recieving data from a web server, the data is always a string. parsing the data turns it into an object
  // turns the parsed data into a variable and checks it for text then uses state to set todos to the newly created variable
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setToDos(storageTodos);
      // console.log(storageTodos, '**');
    }
  }, []);

  // sets localStorage which is the LOCAL_STORAGE_KEY with a key, value pair.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


// CREATE
  // adds to the front of the to do list. put spread operator in fron to add to the end  of the list
  // gets sent to ToDoForm as a function and returns an object filled with the form data from the handleSubmit function
  const addToDo = (todo) => {
    // logs as object
    // console.log(typeof todo);
    // console.log([todo, ...todos]);
    setToDos([todo, ...todos]);
  }

// DELETE
  // gets passed as a function from app.js to ToDoList where it gets passed down as a prop? to ToDo where it gets destructured in ToDo and then called in the handleRemoveClick function and takes in (todo.id, todo.completed)
  const removeTodo = (id) => {
    // console.log(completed);
    // filters by id to "delete from the list"
    setToDos(todos.filter(todo => todo.id !== id));
  }


  // UPDATE...?
  // needs to be on this page because it is using state to update todos
  // toggles the line-through decoration on the listed item
  // gets data from ToDo through the handleCheckboxClick function(called from a Input type checkbox)
  // Then 
  // data is passed as a function to ToDoList and then as a prop? to ToDo (gets destructured in ToDo then gets callled as a function that takes in the to do id and to do completed) , Sends data back tp app.js where it can update the to do 
  const toggleComplete = (id) => {
    console.log( id);
    setToDos(
      todos.map((todo) => {
        // console.log(todo.id, todo.completed);
        // changes completed to true if false
        if (todo.id === id && todo.completed === false) {
          return {...todo, completed: true}
        }

        // changes completed to false if true
        else if (todo.id === id && todo.completed === true) {
          return {...todo, completed: false}
        }

        // returns todo (seems redundent but return is needed)
        else {
          return todo;
        }
      })
    );
  }





  return (
    <div className="App container bg-dark h-auto ">
      <h2 className='text-warning m-5 text-decoration-underline'>To Do List</h2>
      <ToDoForm addToDo={addToDo} />

      {/* ToDo is called and mapped in ToDoList */}
      <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      
    </div>
  );
}

export default App;


