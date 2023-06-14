import React from 'react';
import PropTypes from 'prop-types'
import R from '../res/index'
import { Link } from 'react-router-dom';

class SideBar extends React.Component{

    render(){
        let props = this.props
        let menus = R.string.trans.menus
        if (props.hidden) {
            return null
        }else
        return (
            <div className="SideBar-bg" style={props.style}> 
                <h2 style={{padding: 10}}>Welcome!</h2>               
                {menus.map(function(menu, i){
                    
                  return (<Link key={menu.key}
                        onClick={() => props.handleMenuSelection(i)}
                        className={i === props.selectedIndex ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menu.link}
                    >
                        {menu.title}
                    </Link>);
                    })}
                
           </div>
        );

    }

    
}

SideBar.propTypes = {
    title: PropTypes.string,
    selectedIndex: PropTypes.number.isRequired,
    handleMenuSelection: PropTypes.func.isRequired
}
  
export default SideBar;