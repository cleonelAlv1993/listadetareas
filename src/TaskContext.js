import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  return useContext(TaskContext);
};

export { TaskProvider, useTaskContext };
