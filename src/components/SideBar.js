import React from 'react';
import PropTypes from 'prop-types'
import R from '../res/index'

class SideBar extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            bubbleOut: false,
            index : 0
        }
    }


    render(){
        let props = this.props
        let menus = R.string.trans.menus
        if (props.hidden) {
            return null
        }else
        return (
            <div className="SideBar-bg" style={props.style}>
                <nav className='SideBar-link-bg'>
                {menus.map(function(menu, i){
                                return <a className="SideBar-link" href={menu.link}> { menu.title }  </a>;
                    })}
                </nav>
           </div>
        );

    }

    
}

SideBar.propTypes = {
    handleMenuButtonClick: PropTypes.func,
    title: PropTypes.string.isRequired
}
  
export default SideBar;