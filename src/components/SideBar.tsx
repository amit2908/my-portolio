import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import R from '../res/index'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import NavContext from '../contexts/NavContext';

function SideBar(props: { title: string, hidden: boolean, handleMenuSelection: (index: number) => void, style: {} }){
        const menus = R.string.trans.menus
        const { navState, handleMenuSelection } = useContext(NavContext);

        if (props.hidden) {
            return null
        }else
        return (
            <div className="SideBar-bg" style={props.style}> 
                <h2 style={{padding: 10}}>Welcome!</h2> 

                <Link key={menus[0].key}
                        onClick={() => {
                            handleMenuSelection(0)
                            props.handleMenuSelection(0)
                        }}
                        className={navState === 0 ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[0].link}
                    >
                       <div style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'trophy'})} />
                            {menus[0].title}
                        </div>
                    </Link>

                    <Link key={menus[1].key}
                        onClick={() => {
                            handleMenuSelection(1)
                            props.handleMenuSelection(1)
                        }}
                        className={1 === navState ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[1].link}
                    >
                       <div style={{alignItems: 'center'}}>
                            <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'file-arrow-down'})} />
                            {menus[1].title}
                        </div>
                    </Link>

                    <Link key={menus[2].key}
                        onClick={() => {
                            handleMenuSelection(2)
                            props.handleMenuSelection(2)
                        }}
                        className={2 === navState ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
                        to={menus[2].link}
                    >
                       <div style={{alignItems: 'center'}}>
                        <FontAwesomeIcon style={{marginRight:10}} icon={icon({name: 'user'})} />
                            {menus[2].title}
                        </div>
                    </Link>

                    <Link key={menus[3].key}
                        onClick={() => {
                            handleMenuSelection(3)
                            props.handleMenuSelection(3)
                        }}
                        className={3 === navState ? 'Bubble-Out-Sidebar App-header-link-bg' : 'Normal App-header-link App-header-link-bg'}
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
  
export default SideBar;