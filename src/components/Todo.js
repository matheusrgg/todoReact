//checkbox
//the task
//button

import React from "react"
import Stopwatch from "./Stopwatch";

function Todo({ todo, toggleComplete, removeTodo }){

    function handleCheckboxClick(){
        toggleComplete(todo.id)
    }


    function handleRemoveClick(){
        removeTodo(todo.id)
    }
    return (
       <div style={{display: "flex"}}>

        <input type="checkbox" onclick={handleCheckboxClick} />
        <li style={{
            color:"white",
            textDecoration:todo.completed ? "line-through" : null
        }}

        
        
        >{todo.task}</li>
        
        <button onClick={handleRemoveClick}>X</button>
        <Stopwatch />
        </div>


    )
}

export default Todo