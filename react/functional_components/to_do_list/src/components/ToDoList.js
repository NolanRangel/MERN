import React from 'react'
import ToDo from './ToDo'
import styles from './StyleForm.module.css'



// Parent to [ToDo]
// child to, App


// takes in todos as a prop and it takes toggleComplete and removeToDo in as functions that live on the App.js
// since ToDo is a child of ToDoList the { todos, toggleComplete, removeTodo } is passed through the prop system to ToDo and destructured in ToDo(toggleComplete and removeToDo remaain as functions even though they highlight as props). Once called it can pass data back up to the parent to toggle line-through and remove item
// todos is used to map over to do and passes each single todo as the prop todo
const ToDoList = ({ todos, toggleComplete, removeTodo }) => {
    // console.log(todos);
    // console.log(typeof toggleComplete);
    // logs as object
    return (
        <div className='d-flex flex-column '>
            <ul className='text-warning'>
                {todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
