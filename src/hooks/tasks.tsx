import { useState, useEffect } from "react";
import type {Task} from "../shared/types/Task.ts";
// import type {Filter} from "../shared/types/Task.ts";

function loadTasks() {
    try{
       const storage = localStorage.getItem('tasks');
       return storage ? JSON.parse(storage): [];
    }
    catch {
        return []
    }
}


export function useTask(){

    const [tasks, setTasks] = useState<Task[]>(loadTasks())
    // const [filterArray, setFilter] = useState<Filter>('All');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (newTask: Task) =>{
        setTasks(prevTask => [...prevTask, newTask]);
    }

    const deleteTask = (id: string) => {
        setTasks(prevTask => prevTask.filter(task => task.id !== id))
    }
    const completedTask = (id: string) =>{
        setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed}: task));
    }


    return{ tasks, addTask, deleteTask, completedTask}
}
