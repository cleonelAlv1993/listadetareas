import { createStore } from 'redux';
import taskReducer from './reducer';

// Crear la tienda de Redux
const store = createStore(taskReducer);

export default store;
