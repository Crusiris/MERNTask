import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/signin/Login';
import NewCta from './components/auth/signup/NewCta';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import ValidationState from './context/validation/validationState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';
import RouterPrivate from './components/router/routerPrivate';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themeConfig';

//Revisando si tenemos token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {
console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ThemeProvider theme={theme}>
      <ProjectState>
        <TaskState>
          <ValidationState>
            <AuthState>
                <Router>
                    <Switch>
                      <Route exact path="/" component={Login}/>
                      <Route exact path="/nueva-cuenta" component={NewCta}/>
                      <RouterPrivate exact path="/proyectos" component={Projects}/>
                    </Switch>
                </Router>
          </AuthState>
          </ValidationState>
        </TaskState>
      </ProjectState>
    </ThemeProvider>
  );
}

export default App;
