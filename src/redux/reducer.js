import { ADD_TASK } from './actions';
import { ELIMINAR_TAREA } from './actions';

// Estado inicial
const initialState = {
  tasks: [],
};

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ELIMINAR_TAREA:
    // Filtrar las tareas para eliminar la que corresponde al índice
    const newTasks = state.tasks.filter((_, index) => index !== action.payload);
    return {
        ...state,
        tasks: newTasks,
    };
    default:
      return state;
  }
};

export default taskReducer;
