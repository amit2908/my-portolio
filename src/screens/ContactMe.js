import React from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import R from '../res/index'

class ContactMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hiringMsg: R.string.trans.hire.value
        }
    }

    render() {

        let linkOfMail = 'mailto:ojhashubham29@gmail.com?Subject=Interview%20call&body=' + encodeURI(this.state.hiringMsg)

        return (
            <div className="Centered-Items-Horizontally">
                <div className='Compact-Page-Size Page-Margin'>
                    <div className="Centered-Items-Horizontally">
                        <textarea readOnly={false} placeholder={R.string.trans.hire.placeholder}
                            className='Hire-me-text-area'
                            onChange={(e) => this.setState({ hiringMsg: e.target.value })}
                            value={this.state.hiringMsg}
                        ></textarea>

                        <a className='App-button' href={linkOfMail} target="_top"><SendRoundedIcon />Send</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;