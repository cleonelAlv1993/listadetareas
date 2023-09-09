// TaskList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { eliminarTarea } from './redux/actions'; // Asegúrate de importar la acción adecuada
import styles from './TaskList.module.css';

function TaskList({ tasks, eliminarTarea }) {
  const handleEliminarTarea = (index) => {
    eliminarTarea(index);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles['task-list-container']}>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles['task-item']}>
            {task}
            <button className={styles['delete-button']} onClick={() => handleEliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { eliminarTarea })(TaskList);
