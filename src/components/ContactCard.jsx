import React from "react";
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import { Twitter } from '@material-ui/icons'

function ContactCard() {
  return (
    <div className="Centered-Items-Vertically">
      <a href="mailto:ojhashubham29@gmail.com">
        <div className="Card">
          <Email id='light-icon' />
        </div>
      </a>

      <a href="https://linkedin.com/in/shubhamojha2908/">
        <div className="Card">
          <LinkedInIcon id='light-icon' />
        </div>
      </a>

      <a href="https://twitter.com/IamU_as_weAre1">
        <div className="Card">
          <Twitter id='light-icon' />
        </div>
      </a>

      <a href="https://github.com/amit2908">
        <div className="Card">
          <GitHub id='light-icon' />
        </div>
      </a>

    </div>
  );
}

export default ContactCard;
