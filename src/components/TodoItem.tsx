import { ITodo } from './types/types';

 export interface ITodoItemProps extends ITodo {
    deleteTask: (id:number)=> void
}



export default function TodoItem({value, id, deleteTask}:ITodoItemProps):JSX.Element {



    return (
        <>
            <div className="todo-item__wrapper">
                <span>{value}</span>   
                {/* <span>{id}</span> */}
 
            <button className="btn-delete"
                    onClick={()=>deleteTask(id)}
            >Delete</button>
            </div>
        </>
    )
}