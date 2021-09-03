import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import R from '../res/index'

class Header extends Component{

    render(){
        let props = this.props
        let menus = R.string.trans.menus
        return (
            <div className="App-header-bg">
                <div className="Header-title">
                    <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                    <span style={{ margin: 10}}>{props.title}</span>
                </div>
                <header className="App-header">
                    <nav className='App-header-link-bg'>
                        {menus.map((menu, i) => {
                            return (<Link key={menu.key}
                                onClick={() => props.handleMenuSelection(i)}
                                className={i === props.selectedIndex ? 'Bubble-Out' : 'Normal App-header-link'}
                                to={menu.link}
                            >
                                {menu.title}
                            </Link>);
                        })}
                    </nav>
                </header>
           </div>
        );
    }
}

Header.propTypes = {
    handleMenuButtonClick: PropTypes.func,
    title: PropTypes.string,
    selectedIndex: PropTypes.number.isRequired,
    handleMenuSelection: PropTypes.func.isRequired
}


export default Header;