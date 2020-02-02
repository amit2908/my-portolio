import React from 'react';
import R from '../res/index'

class HireMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hiringMsg : R.string.en.hire.value
        }
    }

    render(){

        let linkOfMail = 'mailto:ojhashubham29@gmail.com?Subject=Interview%20call&body=' + encodeURI(this.state.hiringMsg)

        return (
            <div className='Page-container-vertical'>
               <textarea readOnly={false} placeholder={R.string.en.hire.placeholder} 
               style={{ height: 200, width: '40%', margin: 30}}
               onChange={ (e) => this.setState({ hiringMsg: e.target.value }) }
        >{this.state.hiringMsg}</textarea>
               <a className='App-button' href={linkOfMail} target="_top">Send</a>
            </div>
        );
    }
}
  
export default HireMe;