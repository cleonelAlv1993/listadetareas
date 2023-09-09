import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Importa tu componente principal
import TaskDetails from './TaskDetails'; // Importa el componente de detalles de tarea si es necesario

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Ruta para la página principal */}
        <Route path="/" exact component={App} />

        {/* Ruta para la página de detalles de tarea si es necesario */}
        <Route path="/task/:taskId" component={TaskDetails} />

        {/* Otras rutas si es necesario */}
        {/* <Route path="/otra-pagina" component={OtraPagina} /> */}
        
        {/* Ruta por defecto si ninguna ruta coincide */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
