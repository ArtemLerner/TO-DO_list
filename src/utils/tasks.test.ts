import { describe, it, expect } from 'vitest';
import { completedTask, buttonFiltering } from './tasks.ts';

const tasks = [
    { id: '1', name: 'Молоко', completed: false },
    { id: '2', name: 'React', completed: true },
];

describe('completedTask', () => {
    it('переключает completed у нужной задачи', () => {
        const result = completedTask(tasks, '1');
        expect(result[0].completed).toBe(true);
    });

    it('не трогает остальные задачи', () => {
        const result = completedTask(tasks, '1');
        expect(result[1]).toEqual({ id: '2', name: 'React', completed: true });
    });

    it('не меняет исходный массив', () => {
        completedTask(tasks, '1');
        expect(tasks[0].completed).toBe(false);
    });
});

describe('buttonFiltering', () => {
    it('All возвращает все задачи', () => {
        expect(buttonFiltering(tasks, 'All')).toHaveLength(2);
    });

    it('Completed возвращает только выполненные', () => {
        const result = buttonFiltering(tasks, 'Completed');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('React');
    });

    it('Active возвращает только невыполненные', () => {
        const result = buttonFiltering(tasks, 'Active');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Молоко');
    });
});