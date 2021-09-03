import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import AlertCustom from '../components/Alert';
// import R from '../res/index'

class Root extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            index: parseInt(window.sessionStorage.getItem('selectedMenuIndex')) || 0,
            sideBarHidden : true,
            showAlert: window.sessionStorage.getItem('showAlert'),
            refresh: false
        }
    }


    handleMenuButtonClick = () => {
        this.setState({ sideBarHidden : !this.state.sideBarHidden })
    }

    handleMenuSelection = (index) => {
        window.sessionStorage.setItem('selectedMenuIndex', index);
        this.setState({index: parseInt(window.sessionStorage.getItem('selectedMenuIndex'))})
    }

    setAlertState = (show) => {
        window.sessionStorage.setItem('showAlert', show)
        this.setState({ refresh: true })
    }

    boolFromBoolString = (string, defaultValue) => {
        if (string === 'false') {
            return false
        }else if (string === '0') {
            return false
        }
        else if (string === 'true') {
            return true
        }else if (string === '1') {
            return true
        }
        return defaultValue
    }


    render(){
        const showAlert   = this.boolFromBoolString(window.sessionStorage.getItem('showAlert'), true) 
        return (
            <div style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <Header title="Curious Coder"
                        selectedIndex={this.state.index}
                        handleMenuSelection={(index) => this.handleMenuSelection(index)}
                        handleMenuButtonClick={this.handleMenuButtonClick}
                    />

                    <SideBar id="SideBar-bg"
                        selectedIndex={this.state.index}
                        handleMenuSelection={(index) => this.handleMenuSelection(index)}
                        style={this.state.sideBarHidden ? { width: 0 } : { width: 250 }}
                    />
                </div>
                {showAlert && 
                <AlertCustom title='The site is under construction.' buttonTitle='OK' okAction={() => this.setAlertState(false) } />}
            </div>
        );
    }
}
  
export default Root;