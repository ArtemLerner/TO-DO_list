import {Form} from "../components/Form/Form.tsx";
import {TaskRender} from "../components/Task/Task.tsx";
import {useTask} from "../hooks/tasks.tsx";
import {FilterButton} from "../components/Filters/Filter.tsx";

export function HomePage() {
    const {tasks, addTask, deleteTask, completedTask,
        buttonFiltering, setFilter ,taskCompletedCalc
        ,clearCompleted, editTask, filter} = useTask();


    return (
            <main>
                <div className="list_task">
                {
                    buttonFiltering.length === 0 ?
                        (<p>Нет задач</p>):
                        buttonFiltering.map(item => (
                        <TaskRender
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            completed={item.completed}
                            onCompleted={completedTask}
                            onDelete={deleteTask}
                            editTask={editTask}
                        />
                    ))
                }
                </div>
                <div className="form-block">
                    <Form addTask={addTask}/>
                    <FilterButton
                        buttonFiltering={setFilter}
                        filter={filter}
                    />
                    <form action="">
                        <button
                            onClick={(e)=>{
                                e.preventDefault();
                                clearCompleted();
                            }}
                        >Clear Completed</button>
                    </form>
                    <div className="flex">
                        <p>All = {tasks.length}</p>
                        <p>Completed = {taskCompletedCalc.length} </p>
                    </div>
                </div>
            </main>
    )
}