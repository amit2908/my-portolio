import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Root from './screens/Root';
import Projects from './screens/Projects';
import Resume from './screens/Resume';
import ContactMe from './screens/ContactMe';
import HireMe from './screens/HireMe';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Root} />
        <Switch>
          <Route path='/Projects' component={Projects} />
          <Route path='/Resume' component={Resume} />
          <Route path='/ContactMe' component={ContactMe} />
          <Route path='/HireMe' component={HireMe} />
          <Route path='/' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
