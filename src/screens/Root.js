import React from 'react';
import Header from '../components/Header';

class Root extends React.Component {
    render(){
        return (
            <div className="App-header-bg">
                <Header title="Curious Coder"/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
  
export default Root;