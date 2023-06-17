import React, { Component } from 'react';
import { Alert, AlertButton, Overlay } from '../styles/styles';
import PropTypes from 'prop-types'


class AlertCustom extends Component {
    state = {  }
    render() { 
        let props = this.props
        return (
            <Overlay className='Centered-Items-Horizontally Centered-Items-Vertically'>
                <Alert>
                        <div>{props.title}</div>
                        <AlertButton onClick={() => props.okAction()}>{props.buttonTitle}</AlertButton>
                </Alert>
            </Overlay>
        );
    }
}

AlertCustom.defaultProps = {
    title: PropTypes.string,
    buttonTitle: PropTypes.string,
    buttonAction: PropTypes.func
}
 
export default AlertCustom;