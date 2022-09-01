import React from 'react';
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { TaskProvider } from './context/TaskContext';
//import Test from './components/Test'

import './App.css'

  const App: React.FC = () => {
    return (
      <div>
          <TaskProvider>
            {/* <Test /> */}
            <TaskInput />
            <TaskList />
          </TaskProvider>
      </div>
    )
  } 


export default App;
