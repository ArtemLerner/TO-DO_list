import {Form} from "../components/Form/Form.tsx";
// import {Header} from "../components/Header/Header.tsx";
import {TaskRender} from "../components/Task/Task.tsx";
import {useTask} from "../hooks/tasks.tsx";

export function HomePage() {
    const {tasks, addTask, deleteTask, completedTask} = useTask();


    return (
        <>
            {/*<Header/>*/}
            <main>
                <div className="list_task">
                {
                    tasks.map(item => (
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
                <Form addTask={addTask}/>
            </main>
        </>
    )
}