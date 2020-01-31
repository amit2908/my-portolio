import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

class Root extends React.Component {
    render(){
        return (
            <div>
            <div className="App-header-bg">
                <Header title="Curious Coder"/>
                <div>
                    {this.props.children}
                </div>
            </div>
            <SideBar />
            </div>
        );
    }
}
  
export default Root;