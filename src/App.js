import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewCta from './components/auth/NewCta';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';

function App() {
  return (
    <ProjectState>
      <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NewCta}/>
            <Route exact path="/projects" component={Projects}/>
          </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
