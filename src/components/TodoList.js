import React from "react"
import Todo from "./Todo"


//desctructures todos and render in the return statement

function TodoList({todos,toggleComplete , removeTodo}){

return(
    <ul>
        {todos.map(todo => (
            //todo component with the to 
            //object passed in as a property
            <Todo 
            key={todo.id} 
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            />
        ))}
    </ul>
)

}


export default TodoList