import React from 'react';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';

function ContactMe() {
    return (
        <div className="Page-container">
            <div className="Card box-shadow"><Email id="icon"/>ojhashubham29@gmail.com <br/> ojhashubham29@yahoo.com </div>
            <div className="Card box-shadow"><SmartphoneIcon id="icon"/> +918983061702 <br/> +917389844740</div>
            <div className="Card box-shadow"><LinkedInIcon id="icon"/> <a href="https://linkedin.com/in/shubhamojha2908/">shubhamojha2908</a></div>
            <div className="Card box-shadow"><img id="icon" alt="Skype" src="https://img.icons8.com/material-rounded/24/000000/skype.png" />ojhashubham29</div>
            <div className="Card box-shadow"><Facebook id="icon"/><a href="https://www.facebook.com/shubham.ojha.39">shubham.ojha.39</a></div>
        </div>
    );
}
  
export default ContactMe;