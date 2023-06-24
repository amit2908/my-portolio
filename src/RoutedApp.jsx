import React, { useContext } from 'react';
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
import ThemeContext from './contexts/ThemeContext';

function RoutedApp() {
    const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === 'dark' ? 'Global' : 'Global-light'}`}>
      <Route component={Root} basename="" />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contactMe" component={ContactMe} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/blogs" component={Blogs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default RoutedApp
