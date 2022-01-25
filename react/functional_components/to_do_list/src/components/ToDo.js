import React from 'react'


// child to ToDoList


// takes in { todo, toggleComplete, removeTodo } that are passed as props from ToDoList. toggleComplete and removeTodo remain as functions and can pass data to App.js even though it is not it's parent.
const ToDo = ({ todo, toggleComplete, removeTodo }) => {
// console.log(typeof toggleComplete);

// handles the onClick synthetic event from the input tag with a type of checkbox. 
// goes to App.js to update the todos state of completed which causes the item to have a line-through or not
// passes the toggleComplete function, located on App.js, the todo id and its completed status
    const handleCheckboxClick = () => {
        // console.log(todo.id);
        toggleComplete(todo.id, todo.completed);
    }


// passes thje removeToDo function ,located on App.js, the todo id and its completed status
    const handleRemoveClick = () => {
        removeTodo(todo.id, todo.complete);
    }

    return (
        <div className='list'>
            
            <li
            style={{
                // if completed is true then line-through else none
                textDecoration: todo.completed ? "line-through" : "none"
            }}
            >{todo.task}</li>

            {/* calls the handleCheckBox function to toggle line-through */}
            <input className='mx-3' type="checkbox" onClick={handleCheckboxClick}/>

            {/* calls the handleRemoveClick function to remove task */}
            <button className='btn btn-warning mx-2' onClick={handleRemoveClick}>x</button>
        </div>
    )
}

export default ToDo
