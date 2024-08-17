import React, { useContext } from 'react';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom'
import NavContext from '../contexts/NavContext';
import R from '../res/index'

const QuickLinks = () => {

  const menus = R.string.trans.menus
  const { navState, handleMenuSelection } = useContext(NavContext);

  return (
    <div className="quicklinks">
      <h4 style={{ color: "darkslategrey" }}>Quick Links:</h4>
      <div className='DisplayFlex Row'>
      {menus.map((menu, i) => {
        return (
          <Link
            key={menu.key}
            onClick={() => handleMenuSelection(i)}
            to={menu.link}
          >
            {menu.title}
          </Link>
        );
      })}
      </div>
    </div>
  );
};

const OnlinePresence = () => {
    return (
        <div className="Page-container">
            <a href="mailto:ojhashubham29@gmail.com">
              <div className="Card box-shadow">
                <Email id="icon" />
              </div>
            </a>
            <a href="tel:+918983061702">
              <div className="Card box-shadow">
                <SmartphoneIcon id="icon" />
              </div>
            </a>
            <a href="https://linkedin.com/in/shubhamojha2908/">
              <div className="Card box-shadow">
                <LinkedInIcon id="icon" />
              </div>
            </a>
            <a href="skype:ojhashubham29?chat">
              <div className="Card box-shadow">
                <img
                  id="icon"
                  alt="Skype"
                  src="https://img.icons8.com/material-rounded/24/000000/skype.png"
                />
              </div>
            </a>
            <a href="https://github.com/amit2908">
              <div className="Card box-shadow">
                <GitHub id="icon" />
              </div>
            </a>
            <a href="https://www.facebook.com/shubham.ojha.39">
              <div className="Card box-shadow">
                <Facebook id="icon" />
              </div>
            </a>
          </div>
    )
}

const Footer = (props) => {
    return (
      <div className="App-footer-bg">
        <QuickLinks />
        <div className="centered EndToEnd Col">
            <OnlinePresence />
        </div>
        <br />
        <br />
        <span className="copy-right">©2024 www.curious-coder.in</span>
      </div>
    );
}
  
export default Footer;