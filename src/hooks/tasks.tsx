import { useState, useEffect } from "react";
import type {Task} from "../shared/types/Task.ts";
import type {Filter} from "../shared/types/Task.ts";

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
    const [filter, setFilter] = useState<Filter>("All")

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
    const buttonFiltering = tasks.filter(task => {
            if (filter === "All") return tasks;
            if (filter === "Completed") return task.completed;
            if (filter === "Active") return !task.completed;
        })
    const taskCompletedCalc = tasks.filter(task=>{
        return task.completed
    })
    const clearCompleted = ()=>{
        setTasks( prev => prev.filter(t => !t.completed))
    }
    const editTask = (id: string, name: string) =>{
        setTasks(prev => prev.map(task => task.id === id ? { ...task, name: name}: task));

    }
    return{tasks, addTask, deleteTask, completedTask,
        buttonFiltering, setFilter, taskCompletedCalc,
        clearCompleted, editTask, filter}
}
