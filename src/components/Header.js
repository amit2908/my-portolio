import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
    return (
        <div className="App-header-bg">
            <div className="Header-title">
                <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                <span className="header-title-text">{props.title}</span>
            </div>
            <header className="App-header">
                <nav className='App-header-link-bg'>
                    <a className="App-header-link" href="/projects">Projects</a>
                    <a className="App-header-link" href="/resume">Resume</a>
                    <a className="App-header-link" href="/contactMe">Contact Me</a>
                    <a className="App-header-link" href="/hireMe">Hire Me!</a>
                </nav>
            </header>
       </div>
    );
}
  
export default Header;