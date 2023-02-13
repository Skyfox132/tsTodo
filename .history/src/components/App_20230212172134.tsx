import React from 'react';
import { useState, useEffect} from 'react';
import { ITodo } from './types/types';
import  TodoList  from './TodoList'



function App():JSX.Element {
  // initial items from localStorage
  const getLocalStorage = (key:string, defaultValue:[]=[]) =>{
    try {
      let localValue = JSON.parse(localStorage.getItem(key) || "")
      return localValue
    }
    catch {
      let emptyLocalValue  = localStorage.setItem("tasks", "n")
      return emptyLocalValue
    }

    
  }
  
  //states

  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>(getLocalStorage("tasks") || "")




  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(todos))
  },[todos])

  //methods
  const changeValue = (event: React.FormEvent<HTMLInputElement>):void => {
    setValue(event.currentTarget.value)
  }

  const addToTask = (e:React.SyntheticEvent):void => {
    e.preventDefault()
    let todo = {
      value: value,
      id: Math.floor(Math.random()*100000),
      status: false,
    }
    let newTodo = [...todos, todo]
    value !=="" ? (setTodos(newTodo)) : (console.log())
    setValue("")
    

  }

  const deleteTask = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const changeStatus = (id:number) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) {
        return todo
      } 
      return {
        ...todo,
        status: !todo.status
      }
    }))
  }


const sortingTodo = ()=> {
  const sortTodo = [...todos].sort((a:ITodo , b:ITodo):number=> {
      if (a.status === false) {
        return -1
      } else if (a.status === true) {
        return 1
      }
      return 0
  })
  setTodos(sortTodo)
}




  //shadowDom
  return (
    <div className="App">
      <h1>Just do it:</h1>
      <form action="submit">
       <div className='todo-container'>
          <input
              className='todo-input'
              type="text"
              onChange={changeValue}
              value={value}
              placeholder={"Enter the task..."}
              />
            <button 
              className='create-btn btn'
              type='submit'
              onClick={addToTask}
            >Create task</button>
            <button
              className='btn sort'
              type='button'
              onClick={sortingTodo}
            >
              Sort Tasks
            </button>
       </div>

      </form>

      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />

    </div>
  );
}

export default App;
