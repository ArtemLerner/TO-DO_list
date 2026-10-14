import './Form.module.less'
import {useState} from "react";
import type {SyntheticEvent} from "react";
import type {Task} from '../../shared/types/Task.ts'

interface FormProps {
    addTask: (TaskName: Task) => void;
}

export function Form({addTask}: FormProps) {
    const [name, setName] = useState<string>('')

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.trim() !== ''){
            addTask({id: crypto.randomUUID(), name: name, completed: false});
        }
        setName('');
    }

    return (
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="New task..."
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <button type="submit" disabled={name.trim() === ''}>submit</button>
            </form>
    )
}