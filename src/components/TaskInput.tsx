import React, { useState } from 'react'
import { Task } from './Types'
import { useTaskContext } from '../context/TaskContext'

// type Props = {
//     setTasks: React.Dispatch<React.SetStateAction<Task[]>>
//     tasks: Task[]
// }
 
const TaskInput = () => {

    const context = useTaskContext()

    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(context.tasks.length + 1)
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
 
    const handleSubmit = () => {
        setCount(count + 1)
         
        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }
         
        context.setTasks([newTask, ...context.tasks])
        setInputTitle('')
 
    }
 
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={inputTitle}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>
    )
}
 
export default TaskInput