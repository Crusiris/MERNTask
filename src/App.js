import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewCta from './components/auth/NewCta';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import ValidationState from './context/validation/validationState';
import AuthState from './context/auth/authState';

function App() {
console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProjectState>
      <TaskState>
        <ValidationState>
          <AuthState>
              <Router>
                  <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/nueva-cuenta" component={NewCta}/>
                    <Route exact path="/proyectos" component={Projects}/>
                  </Switch>
              </Router>
        </AuthState>
        </ValidationState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
