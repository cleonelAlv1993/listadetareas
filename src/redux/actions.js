// Definir acciones
export const ADD_TASK = 'ADD_TASK';
export const ELIMINAR_TAREA = 'ELIMINAR_TAREA'; 

// Acción para agregar una tarea
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Acción para eliminar una tarea
export const eliminarTarea = (index) => ({
    type: ELIMINAR_TAREA,
    payload: index,
  });