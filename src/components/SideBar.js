import React from 'react';

const SideBar = (props) => {
    if (props.hidden) {
        return null
    }else
    return (
        <div className="SideBar-bg" style={props.style}>
           <nav className='SideBar-link-bg'>
               <a className="SideBar-link" href="/projects">Projects</a>
               <a className="SideBar-link" href="/resume">Resume</a>
               <a className="SideBar-link" href="/contactMe">Contact Me</a>
               <a className="SideBar-link" href="/aboutMe">About Me</a>
               <a className="SideBar-link" href="/hireMe">Hire Me!</a>
           </nav>
       </div>
    );
}
  
export default SideBar;