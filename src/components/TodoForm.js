import React, {useState} from "react";
import uuid from "uuid";


function TodoForm({addTodo}){

    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });

    function handleTaskInputChange(e){
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({...todo, task: e.target.value})
    }

    //handle submit function which also takes events from the DOM

     function handleSubmit(e){
         e.preventDefault()
         if(todo.task.trim()){
             addTodo({...todo, id: uuid.v4() })
             //reset task input
             //calling setTodo with a new object that has the old property spread on it and the updated task property with an empty string
             setTodo({ ...todo, task:" " })
         }
     }

    return(

        <form onSubmit={handleSubmit}>
            <input 

            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            
            />
            <button type="submit">Submit </button>

        </form>
    );
}


export default TodoForm;