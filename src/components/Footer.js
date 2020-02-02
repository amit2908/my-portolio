import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Footer = (props) => {
    return (
        <div className="App-footer-bg">
            <div className="footer-title">
                <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                <span className="footer-title-text">{props.title}</span>
            </div>
            <footer className="App-footer">
                <nav className='App-footer-link-bg'>
                    <a className="App-footer-link" href="/projects">Projects</a>
                    <a className="App-footer-link" href="/resume">Resume</a>
                    <a className="App-footer-link" href="/contactMe">Contact Me</a>
                    <a className="App-footer-link" href="/hireMe">Hire Me!</a>
                </nav>
            </footer>
       </div>
    );
}
  
export default Footer;