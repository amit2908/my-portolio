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
import AboutMe from './screens/AboutMe';
import Footer from './components/Footer';
import Blogs from './screens/Blogs';

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
          <Route path='/blogs' component={Blogs} />
          <Route path='/' component={Projects} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
