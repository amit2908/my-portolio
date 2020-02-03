import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="App-header-bg">
            <div className="Header-title">
                <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                <span className="header-title-text">{props.title}</span>
            </div>
            <header className="App-header">
                <nav className='App-header-link-bg'>
                    <Link className="App-header-link" to="/projects">Projects</Link>
                    <Link className="App-header-link" to="/resume">Resume</Link>
                    <Link className="App-header-link" to="/contactMe">Contact Me</Link>
                    <Link className="App-header-link" to="/aboutMe">About Me</Link>
                    <Link className="App-header-link" to="/hireMe">Hire Me!</Link>
                </nav>
            </header>
       </div>
    );
}
  
export default Header;