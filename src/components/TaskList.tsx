import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'
import { useTaskContext } from '../context/TaskContext';

// type Props = {
//     tasks: Task[]
//     setTasks: React.Dispatch<React.SetStateAction<Task[]>>
// }
 
const TaskList = () => {
    const context = useTaskContext()

    const handleDone = (task: Task) => {
        context.setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, done: !task.done }
                : t
        ))
    }
 
    const handleDelete = (task: Task) => {
        context.setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }
 
    return (
        <div className="inner">
        {
            context.tasks.length <= 0 ? '登録されたTODOはありません。' :
            <ul className="task-list">
            { context.tasks.map( task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                />
            )) }
            </ul>
        }
        </div>
    )
}
 
export default TaskList