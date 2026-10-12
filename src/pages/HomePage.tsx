import {Form} from "../components/Form/Form.tsx";
// import {Header} from "../components/Header/Header.tsx";
import {TaskRender} from "../components/Task/Task.tsx";
import {useTask} from "../hooks/tasks.tsx";
import {FilterButton} from "../components/Filters/Filter.tsx";

export function HomePage() {
    const {addTask, deleteTask, completedTask, buttonFiltering, setFilter} = useTask();


    return (
        <>
            {/*<Header/>*/}
            <main>
                <div className="list_task">
                {
                    buttonFiltering.map(item => (

                        <TaskRender
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            completed={item.completed}
                            onCompleted={completedTask}
                            onDelete={deleteTask}
                        />
                    ))
                }
                </div>
                <div className="form-block">
                    <Form addTask={addTask}/>
                    <FilterButton buttonFiltering={setFilter}/>
                    <p>All tasks = {buttonFiltering.length} </p>
                </div>
            </main>
        </>
    )
}