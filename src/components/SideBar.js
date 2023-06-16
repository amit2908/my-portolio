import React from 'react';
import PropTypes from 'prop-types'
import R from '../res/index'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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

                <Link key={menus[0].key}
                        onClick={() => props.handleMenuSelection(0)}
                        className={0 === props.selectedIndex ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[0].link}
                    >
                       <div style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'trophy'})} />
                            {menus[0].title}
                        </div>
                    </Link>

                    <Link key={menus[1].key}
                        onClick={() => props.handleMenuSelection(1)}
                        className={1 === props.selectedIndex ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[1].link}
                    >
                       <div style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'file-arrow-down'})} />
                            {menus[1].title}
                        </div>
                    </Link>

                    <Link key={menus[2].key}
                        onClick={() => props.handleMenuSelection(2)}
                        className={2 === props.selectedIndex ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[2].link}
                    >
                       <div style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'user'})} />
                            {menus[2].title}
                        </div>
                    </Link>

                    <Link key={menus[3].key}
                        onClick={() => props.handleMenuSelection(3)}
                        className={3 === props.selectedIndex ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[3].link}
                    >
                       <div style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'phone'})} />
                            {menus[3].title}
                        </div>
                    </Link>
                
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