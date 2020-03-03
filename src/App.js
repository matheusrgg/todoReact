import React,{useEffect, useState} from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './App.css';

const LOCAL_ST0RAGE_KEY = "react-todo-list-todos"
function App() {

  console.log("usestate", useState(["dasdsa"]));
  const [todos, setTodos ] = useState([]);

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_ST0RAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  }, [])

  useEffect(()=>{
      localStorage.setItem(LOCAL_ST0RAGE_KEY, JSON.stringify(todos))
  },[todos])

  
//   useEffect(()=>{
//     localStorage.setItem(LOCAL_ST0RAGE_KEY, JSON.stringify(startTimer))
// },[todos])

 // add to To do to the List
 //calling setTodos function and then passing array and pass it to the function , and the old to do arrays spread over it
  function addTodo(todo){
     // adds new todo to beginning of todos array
    setTodos([todo,...todos])
  }

  function toggleComplete(id){
    setTodos(
      setTodos.map(todo=>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          };
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
          <p>react todo</p>
          <TodoForm addTodo={addTodo} />
          <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo}
          />
      </header>
    </div>
  );
}

export default App;
