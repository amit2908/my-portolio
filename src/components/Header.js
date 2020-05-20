import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import R from '../res/index'

const Header = (props) => {
    return (
        <div className="App-header-bg">
            <div className="Header-title">
                <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                <span className="header-title-text">{props.title}</span>
            </div>
            <header className="App-header">
                <nav className='App-header-link-bg'>
                    <Link className="App-header-link" to="/projects">   { R.string.trans.menus[0] }  </Link>
                    <Link className="App-header-link" to="/resume">     { R.string.trans.menus[1] }  </Link>
                    <Link className="App-header-link" to="/hireMe">     { R.string.trans.menus[2] }  </Link>
                    <Link className="App-header-link" to="/contactMe">  { R.string.trans.menus[3] }  </Link>
                    <Link className="App-header-link" to="/aboutMe">    { R.string.trans.menus[4] }  </Link>
                    <Link className="App-header-link" to="/hireMe">     { R.string.trans.menus[5] }  </Link>
                </nav>
            </header>
       </div>
    );
}
  
export default Header;