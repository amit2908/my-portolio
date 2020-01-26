import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
    return (
        <div className="App-header-bg">
            <div className="Header-title">
                <MenuIcon style={{ padding: 10}}/>
                {props.title}
           </div>
        <header className="App-header">
           <nav className='App-header-link-bg'>
               <a class="App-header-link" href="/projects">Projects</a>
               <a class="App-header-link" href="/resume">Resume</a>
               <a class="App-header-link" href="/contactMe">Contact Me</a>
               <a class="App-header-link" href="/hireMe">Hire Me!</a>
           </nav>
        </header>
       </div>
    );
}
  
export default Header;