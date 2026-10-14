export interface Task {
    id: string,
    name: string,
    completed: boolean;
}

export const FILTER = ['All', 'Completed', 'Active'] as const;

export type Filter = typeof FILTER[number]
