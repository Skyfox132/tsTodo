import React, { FC, ReactNode } from 'react';
import { ITodo } from './types/types';
import TodoItem from './TodoItem'

export interface ITodoListProps {
    todos: ITodo[],
    children?: ReactNode
    deleteTask: (id:number)=> void
    changeStatus: (id:number)=> void
}






export default function TodoList ({todos, deleteTask, changeStatus}:ITodoListProps):JSX.Element {
  return (
    <>
    {
        todos.length !==0 ? ( todos.map((item:ITodo):JSX.Element | void=>{
            // console.log(item.value, item.id);
           return (<TodoItem key = {item.id} 
            id={item.id} 
            value={item.value} 
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            status={item.status}
            />)
            
        })) : (console.log("arr > 0"))
    }
    </>
  );
}

