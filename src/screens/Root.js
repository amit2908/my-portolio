import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

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
            <div style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Header title="Curious Coder" handleMenuButtonClick={this.handleMenuButtonClick} />

                    {/* <Footer /> */}
                <SideBar id="SideBar-bg" style={this.state.sideBarHidden ? {width: 0} : {width: 250}}/>
            </div>
        );
    }
}
  
export default Root;