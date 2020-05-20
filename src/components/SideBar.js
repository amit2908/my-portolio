import React from 'react';
import R from '../res/index'

const SideBar = (props) => {
    if (props.hidden) {
        return null
    }else
    return (
        <div className="SideBar-bg" style={props.style}>
            <nav className='SideBar-link-bg'>
                <a className="SideBar-link" href="/projects">   {R.string.trans.menus[0]}  </a>
                <a className="SideBar-link" href="/resume">     {R.string.trans.menus[1]}  </a>
                <a className="SideBar-link" href="/hireMe">     {R.string.trans.menus[2]}  </a>
                <a className="SideBar-link" href="/contactMe">  {R.string.trans.menus[3]}  </a>
                <a className="SideBar-link" href="/aboutMe">    {R.string.trans.menus[4]}  </a>
                <a className="SideBar-link" href="/hireMe">     {R.string.trans.menus[5]}  </a>
            </nav>
       </div>
    );
}
  
export default SideBar;