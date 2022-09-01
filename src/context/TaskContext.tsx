import { createContext, useContext,ReactNode } from 'react'
import { Task } from '../components/Types'
import useLocalStorage from '../hooks/useLocalStorage'

interface Props {
  children: ReactNode;
}

const defaultContextTask = [
  {
      id: 2,
      title: '次にやるやつnext',
      done: false
  },{
      id: 1,
      title: 'はじめにやるやつnext',
      done: true
  }
]

const TaskContext = createContext({} as {
  tasks: Task[]
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>
})


export function useTaskContext() {
  return useContext(TaskContext);
}

export const TaskProvider: React.FC<Props> = (props) => {
  const [tasks, setTasks] = useLocalStorage('todo_app',defaultContextTask)
  const { children } = props 
  const value = {tasks,setTasks}

  return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
  );
}