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
                <div className='Page-container-vertical Page-Margin'>
                    <textarea readOnly={false} placeholder={R.string.trans.hire.placeholder}
                        className='Hire-me-text-area'
                        onChange={(e) => this.setState({ hiringMsg: e.target.value })}
                    >{this.state.hiringMsg}</textarea>
                    <a className='App-button' href={linkOfMail} target="_top">Send</a>
                </div>
            </div>
        );
    }
}
  
export default ContactMe;