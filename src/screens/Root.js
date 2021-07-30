import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import R from '../res/index'

class Root extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            sideBarHidden : true
        }
    }

    handleMenuButtonClick = () => {
        this.setState({ sideBarHidden : !this.state.sideBarHidden })
    }


    render(){
        return (
            <div style={{ flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgb(25,25,25)', color: '#fff' }}>
                <div>
                <Header title="Curious Coder" handleMenuButtonClick={this.handleMenuButtonClick} />
                    <SideBar id="SideBar-bg" style={this.state.sideBarHidden ? {width: 0} : {width: 250}}/>
                </div>
                
                
            </div>
        );
    }
}
  
export default Root;