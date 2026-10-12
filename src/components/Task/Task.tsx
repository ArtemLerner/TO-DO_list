import type {Task} from "../../shared/types/Task.ts";
// import {useState} from "react";
import "./Task.mоdule.less"

interface PropsTask extends Task {
    onDelete(id: string): void;
    onCompleted(id: string): void
    // editTask(id: string, name: string): void
}

export function TaskRender({name, id, completed, onDelete, onCompleted}: PropsTask) {
    // const [edit, setEdit] = useState(false);
    // const [oldName, newName] = useState(name);
    //
    // const startEdit = () => {
    //     newName(name)
    //     setEdit(true)
    // }



    return (
            <div className="task-block">
                <p className="task"
                onClick={(e)=>{
                    e.preventDefault();
                }}
                >{name}</p>
                <label className="task-check">
                <input type="checkbox"
                       checked={completed}
                       onChange={()=>{
                           onCompleted(id)
                       }}
                /> complete
                </label>
                <button className='delete_task' id={id}
                        onClick={() => {
                            onDelete(id);
                        }}>
                    delete task
                </button>
            </div>
    )
}
