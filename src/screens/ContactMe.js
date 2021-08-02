import React from 'react';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import R from '../res/index'

class ContactMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hiringMsg : R.string.trans.hire.value
        }
    }

    render(){

        let linkOfMail = 'mailto:ojhashubham29@gmail.com?Subject=Interview%20call&body=' + encodeURI(this.state.hiringMsg)


        return (
            <div className="Page-container">
                <div className='Page-container-vertical'>
                    <textarea readOnly={false} placeholder={R.string.trans.hire.placeholder}
                        className='Hire-me-text-area'
                        onChange={(e) => this.setState({ hiringMsg: e.target.value })}
                    >{this.state.hiringMsg}</textarea>
                    <a className='App-button' href={linkOfMail} target="_top">Send</a>
                </div>
                <div className='Page-container'>
                    <div className="Card box-shadow"><Email id="icon" />ojhashubham29@gmail.com <br /> ojhashubham29@yahoo.com </div>
                    <div className="Card box-shadow"><SmartphoneIcon id="icon" /> +918983061702 <br /> +917389844740</div>
                    <div className="Card box-shadow"><LinkedInIcon id="icon" /> <a href="https://linkedin.com/in/shubhamojha2908/">shubhamojha2908</a></div>
                    <div className="Card box-shadow"><img id="icon" alt="Skype" src="https://img.icons8.com/material-rounded/24/000000/skype.png" />ojhashubham29</div>
                    <div className="Card box-shadow"><GitHub id="icon" /><a href="https://github.com/amit2908">amit2908</a></div>
                    <div className="Card box-shadow"><Facebook id="icon" /><a href="https://www.facebook.com/shubham.ojha.39">shubham.ojha.39</a></div>
                </div>


            </div>
        );
    }
}
  
export default ContactMe;