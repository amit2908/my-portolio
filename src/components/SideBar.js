import React from 'react';

const SideBar = () => {
    return (
        <div className="SideBar-bg">
           <nav className='SideBar-link-bg'>
               <a className="SideBar-link" href="/projects">Projects</a>
               <a className="SideBar-link" href="/resume">Resume</a>
               <a className="SideBar-link" href="/contactMe">Contact Me</a>
               <a className="SideBar-link" href="/hireMe">Hire Me!</a>
           </nav>
       </div>
    );
}
  
export default SideBar;