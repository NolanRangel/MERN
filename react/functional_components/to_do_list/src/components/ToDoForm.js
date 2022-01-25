import React, { useState } from 'react'
import styles from './StyleForm.module.css'


// child to, App


// takes in form data and set task to form input and adds 1 to the id and deefaults completed to false
const ToDoForm = ({ addToDo }) => {
    const [todo, setTodo] = useState({
        id: 0,
        task: "",
        completed: false,
    });

    // sets state as its typed (onChange)
    // takes data from the input as its typed through onChange and updates it through state along with adding 1 the id number
    const handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value, id: todo.id += 1 });
    }

    // defaults to prevent form submission. takes data from onSubmit and checks if there is input text then it calls the addToDo function thats located on App.js and it passes the data as a spreded object. Then it resets the form
    const handleSubmit = (e) => {
        // defaults form from automatically submitting
        e.preventDefault();
        // checks for text
        if(todo.task){
            // console.log(typeof todo.id);
            // console.log(typeof {...todo});
            addToDo({ ...todo});
            //  task reset
            setTodo({ ...todo, task:"" });
            
        }
    }

    // uses the onSubmit and onChange synthetic events
    return (
        <div className='bg-dark mx-auto'>

            <form onSubmit={handleSubmit}>

                <input className='form-control' type="text" name="task" onChange={handleTaskInputChange} value={todo.task} placeholder='Add a Task...'/>

                <button type='submit' className='btn btn-warning d-flex my-4' disabled={todo.task.length < 2}>Add Task</button>
            </form>
        </div>
    )
}


export default ToDoForm





