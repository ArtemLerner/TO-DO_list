import type {Task, Filter} from "../shared/types/Task.ts";

export function completedTask(tasks: Task[], id: string): Task[]{
    return tasks.map(task => task.id === id ? {...task, completed: !task.completed}: task);
}
export function buttonFiltering(tasks: Task[], filter: Filter): Task[]{
    return tasks.filter(task => {
        if (filter === "Completed") return task.completed;
        if (filter === "Active") return !task.completed;
        return true;
    })
}