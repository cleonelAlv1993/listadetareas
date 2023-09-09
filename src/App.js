import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore(rootReducer);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TaskForm} />
        </Switch>
        <TaskList />
      </div>
    </Router>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;
