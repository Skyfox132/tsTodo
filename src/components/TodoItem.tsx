import { ITodo } from './types/types';





export default function TodoItem({value, id}:ITodo):JSX.Element {



    return (
        <>
            <div>
                {value}    
            </div>     

            <div>
                {id}
            </div>       
        </>
    )
}