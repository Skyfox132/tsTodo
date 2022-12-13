import React, { FC, ReactNode } from 'react';
import { ITodo } from './types/types';
import TodoItem from './TodoItem'

interface ITodoListProps {
    todos: ITodo[],
    children?: ReactNode
}






export default function TodoList ({todos}:ITodoListProps):JSX.Element {
  return (
    <>
    {
        todos.length !==0 ? ( todos.map((item:ITodo):JSX.Element | void=>{
            // console.log(item.value, item.id);
           return (<TodoItem key = {item.id} id={item.id} value={item.value}/>)
            
        })) : (console.log("arr > 0"))
    }
    </>
  );
}

