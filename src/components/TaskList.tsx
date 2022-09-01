import React, {useState} from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'
import { useTaskContext } from '../context/TaskContext';

// type Props = {
//     tasks: Task[]
//     setTasks: React.Dispatch<React.SetStateAction<Task[]>>
// }
 
const TaskList = () => {
    const context = useTaskContext()
    const [filter, setFilter] = useState([true,false])
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
    
    const handleDoneFilter = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.target.checked === true ? setFilter([true, ...filter]) : setFilter(filter.filter(done => done!==true))
    }

    const handleYetFilter = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.target.checked === true ? setFilter([false, ...filter]) : setFilter(filter.filter(done => done!==false))
    }

    return (
        <div className="inner">
        {
            <>
                <span>完了</span>
                <input
                 type="checkbox"
                 className="checkbox-list"
                 onChange={handleDoneFilter}
                 defaultChecked={true}
                />
                <span>未完了</span>
                <input
                 type="checkbox"
                 className="checkbox-list"
                 onChange={handleYetFilter}
                 defaultChecked={true}
                />

            </>
        }
        {
            context.tasks.length <= 0 ? '登録されたTODOはありません。' :
            <ul className="task-list">
            { 
            context.tasks
                .sort( (first:Task,second:Task) => { if(first.done===false && second.done===true){return -1} return 0})
                .filter(task => filter.includes(task.done))
                .map( task => (
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