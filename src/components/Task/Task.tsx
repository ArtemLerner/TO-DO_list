import type {Task} from "../../shared/types/Task.ts";
import "./Task.mоdule.less"

interface PropsTask extends Task {
    onDelete(id: string): void;
    onCompleted(id: string): void
}

export function TaskRender({name, id, completed, onDelete, onCompleted}: PropsTask) {
    return (
            <div className="task-block">
                <p className="task">{name}</p>
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
