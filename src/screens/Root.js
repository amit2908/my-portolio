import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import AlertCustom from '../components/Alert';
import R from '../res/index'

class Root extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            sideBarHidden : true,
            alertUnchecked: true
        }
    }

    handleMenuButtonClick = () => {
        this.setState({ sideBarHidden : !this.state.sideBarHidden })
    }


    render(){
        const { alertUnchecked }   = this.state
        return (
            <div style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                <Header title="Curious Coder" handleMenuButtonClick={this.handleMenuButtonClick} />
                    <SideBar id="SideBar-bg" style={this.state.sideBarHidden ? {width: 0} : {width: 250}}/>
                </div>
                {alertUnchecked && 
                <AlertCustom title='The site is under construction.' buttonTitle='OK' okAction={() => this.setState({ alertUnchecked: false })} />}
            </div>
        );
    }
}
  
export default Root;