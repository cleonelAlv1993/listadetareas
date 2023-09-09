// TaskForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Importa styled-components si es necesario
import { connect } from 'react-redux';
import { addTask } from './redux/actions';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TaskForm = ({ onAddTask, tasks }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    if (tasksFromLocalStorage) {
      const parsedTasks = JSON.parse(tasksFromLocalStorage);
      parsedTasks.forEach((task) => onAddTask(task));
    }
  }, [onAddTask]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Agregar nueva tarea"
          value={task}
          onChange={handleTaskChange}
        />
        <Button type="submit">Agregar</Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddTask: (task) => dispatch(addTask(task)),
});

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
