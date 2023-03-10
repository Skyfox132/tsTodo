import Pomodoro from './Pomodoro';
import { ITodo } from './types/types';

 export interface ITodoItemProps extends ITodo {
    deleteTask: (id:number)=> void
    changeStatus: (id:number)=> void

}



export default function TodoItem({value, id, status, deleteTask, changeStatus}:ITodoItemProps):JSX.Element {



    return (
        <>
            <div className="todo-item__wrapper">
                <span className={status ? ("task-value done") : ("task-value undone")} onClick={()=> changeStatus(id)}>{value}</span>   
                {/* <span>{id}</span> */}
 
            <button className="btn-delete"
                    onClick={()=>deleteTask(id)}
            >Delete</button>
            </div>
            <Pomodoro/>
        </>
    )
}