import type {Task} from "../../shared/types/Task.ts";
import {useState} from "react";
import type {KeyboardEvent} from "react"

import "./Task.mоdule.less"

interface PropsTask extends Task {
    onDelete(id: string): void;
    onCompleted(id: string): void
    editTask(id: string, name: string): void
}

export function TaskRender({name, id, completed, onDelete, onCompleted, editTask}: PropsTask) {
    const [edit, onEdit] = useState(false);
    const [draft, setName] = useState(name);

    const setEdit = () =>{
        setName(name);
        onEdit(true)
    }

    const save = (e: KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === 'Enter') {
            if (draft.trim() !== ''){
                editTask(id,  draft);
                onEdit(false)
            }
        }else if (e.key === 'Escape') {
            onEdit(false)
        }
    }

    return (
            <div className={completed ? 'completed task-block ':'task-block'}>
                {edit ?
                    (
                        <input type="text"
                               className="task-edit"
                               value={draft}
                               onChange={(e)=> setName(e.target.value)}
                               onKeyDown={save}
                    />) :
                    <p className="task" onClick={setEdit}
                    >{name}</p>
                }

                <div className="task-actions">
                    <label className="task-check ">
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
            </div>
    )
}
