import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

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
            <div>
            <div className="App-header-bg">
                <Header title="Curious Coder" handleMenuButtonClick={this.handleMenuButtonClick}/>
                <div>
                    {this.props.children}
                </div>
            </div>
            <SideBar hidden={this.state.sideBarHidden} />
            </div>
        );
    }
}
  
export default Root;