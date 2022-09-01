//import React,{useState} from 'react';
import React from 'react';
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import Test from './components/Test'
// import { Task } from './components/Types'
import { TaskProvider } from './context/TaskContext';

import './App.css'

  // const initialState: Task[] = [
  //   {
  //       id: 2,
  //       title: '次にやるやつ',
  //       done: false
  //   },{
  //       id: 1,
  //       title: 'はじめにやるやつ',
  //       done: true
  //   }
  // ]

  const App: React.FC = () => {
  //  const [tasks, setTasks] = useState(initialState)

    return (
      <div>
          <TaskProvider>
            {/* <Test /> */}
            {/* <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList setTasks={setTasks} tasks={tasks} /> */}
            <TaskInput />
            <TaskList />
          </TaskProvider>
      </div>
    )
  } 


export default App;
