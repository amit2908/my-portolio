import React from 'react';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';

const Footer = (props) => {
    return (
        <div className="App-footer-bg">
            <div className='Page-container'>
            <div className='Page-container Compact-Page-Size'>
                    <a href="mailto:ojhashubham29@gmail.com">
                        <div className="Card box-shadow"><Email id="icon" />
                        </div>
                    </a>
                    <div className="Card box-shadow">
                        <SmartphoneIcon id="icon" />+918983061702 <br />+917389844740
                    </div>
                    <a href="https://linkedin.com/in/shubhamojha2908/">
                        <div className="Card box-shadow"><LinkedInIcon id="icon" />
                        </div>
                    </a>
                    <a href="skype:ojhashubham29?chat">
                        <div className="Card box-shadow"><img id="icon" alt="Skype" src="https://img.icons8.com/material-rounded/24/000000/skype.png" />
                        </div>
                        </a>
                    <a href="https://github.com/amit2908"><div className="Card box-shadow"><GitHub id="icon" /></div></a>
                    <div className="Card box-shadow"><Facebook id="icon" /><a href="https://www.facebook.com/shubham.ojha.39"></a></div>
                </div>
                </div>
            <span className='copy-right'>© 2020 www.curious-coder.com</span>
       </div>
    );
}
  
export default Footer;