import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import R from '../res/index'

class Header extends Component{


    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
        
    }



    render(){
        let { bubbleOut, index } = this.state
        let props = this.props
        console.log(props)
        console.log(this.tempProperty)
        let menus = R.string.trans.menus
        return (
            <div className="App-header-bg">
                <div className="Header-title">
                    <MenuIcon className="menu-icon" onClick={props.handleMenuButtonClick}/>
                    <span className="header-title-text">{props.title}</span>
                </div>
                <header className="App-header">
                    <nav className='App-header-link-bg'>


                    {menus.map((menu, i) => {
                            return (<Link className={index == i ? 'Bubble-Out': 'Normal App-header-link'} 
                                         to={menu.link} 
                                         onClick={() => this.setState({ index: i })}> 
                                         { menu.title }  
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
    title: PropTypes.string
}


export default Header;