export interface Task {
    id: string,
    name: string,
    completed: boolean;
}

export const FILTER = ['All', 'Completed', 'Proses'] as const;

export type Filter = typeof FILTER[number]
