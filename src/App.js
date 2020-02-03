import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Root from './screens/Root';
import Projects from './screens/Projects';
import Resume from './screens/Resume';
import ContactMe from './screens/ContactMe';
import HireMe from './screens/HireMe';
import AboutMe from './screens/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Root} basename=''/>
        <Switch>
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contactMe' component={ContactMe} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/hireMe' component={HireMe} />
          <Route path='/' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
