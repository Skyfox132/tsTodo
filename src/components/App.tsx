import React from 'react';
import { useState } from 'react';
import { ITodo } from './types/types';
import  TodoList  from './TodoList'



function App():JSX.Element {
  //states
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])


  //methods
  const changeValue = (event: React.FormEvent<HTMLInputElement>):void => {
    setValue(event.currentTarget.value)
  }

  const addToTask = (e:React.SyntheticEvent):void => {
    e.preventDefault()
    let todo = {
      value: value,
      id: Math.floor(Math.random()*100000)
    }
    let newTodo = [...todos, todo]
    // console.log(value, newTodo);
    
    value !=="" ? (setTodos(newTodo)) : (console.log())
    setValue("")

  }


  //shadowDom
  return (
    <div className="App">
      <h1>Just do it:</h1>
      <form action="submit">

        <input
          type="text"
          onChange={changeValue}
          value={value}
          placeholder={"Enter the task..."}
          />
        <button 
          type='submit'
          onClick={addToTask}
        >Create task</button>

      </form>

      <TodoList
        todos={todos}
      />

    </div>
  );
}

export default App;
