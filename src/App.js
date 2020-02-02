import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
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
        <Route component={Root} />
        <Switch>
          <Route path='/Projects' component={Projects} />
          <Route path='/Resume' component={Resume} />
          <Route path='/ContactMe' component={ContactMe} />
          <Route path='/AboutMe' component={AboutMe} />
          <Route path='/HireMe' component={HireMe} />
          <Route path='/' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
