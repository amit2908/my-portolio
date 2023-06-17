import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import PropTypes from 'prop-types'
import { largeTitle } from '../styles/styles';
import { Component } from 'react';

class ProjectCard extends Component {

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            rotationX: 10,
            rotationY: 30,
            rotationZ: 30,
            zIndexImg: -1
        }
    }

    rotate = () => {
        this.setState({
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            zIndexImg: 0
        })
    }

    reset = () => {
        this.setState({
            rotationX: 30,
            rotationY: 30,
            rotationZ: 30,
            zIndexImg: 0
        })
    }

    render(){
        const props = this.props
        const { rotationX, zIndexImg } = this.state
        return (
            <div className='Project-card' style={props.style}>
                <div className='Project-card-image-view'>
                    <img src={props.screen1} alt='' className="Project-card-image" />  {/* onMouseOver={() => this.rotate()} style={{tranform: `rotate(${rotationX}deg)`}} /> */}
                    <img src={props.screen2} alt='' className="Project-card-image" 
                    onMouseOver={() => this.rotate()} style={{transform: `rotateZ(${rotationX}deg)`, zIndex: zIndexImg}}
                    onMouseOut={() => this.reset()}
                    />
                </div>
                <div className="Project-card-description DescriptionText">
                    <div className='Project-card-title'>
                        <img src={props.logo} alt='' style={styles.logo} />
                        <span style={largeTitle}>{props.title}</span>
                    </div>
                    <span style={styles.secondaryText}>{props.description}</span><br />
                    <span style={styles.primaryText}>Client: </span><span style={styles.secondaryText}>{props.client}</span><br />
                    <span style={styles.primaryText}>Language: </span><span style={styles.secondaryText}>{props.language}</span><br />
                    <span style={styles.primaryText}>Technologies: </span>
                    <span style={styles.secondaryText}>{props.techStacks.reduce((x, y) => { return (x + ", " + y) })}</span><br />
                    <span style={styles.primaryText}>Features Integrated: </span>
                    <span style={styles.secondaryText}>{props.integratedFeatures.reduce((x, y) => { return (x + ", " + y) })}</span><br />
                    {props.domain &&
                        <span><span style={styles.primaryText}>Domain: </span><br /><span style={styles.secondaryText}>{props.domain}</span></span>}
                    <br />
                    {props.appStoreLink &&
                        <span style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', ...styles.secondaryText}}>
                            <AppleIcon />
                            <a className='no-decoration-link' href={props.appStoreLink}>
                                View App on AppStore
                            </a>
                        </span>
                    }
                </div>
            </div>
        )
    }
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    screen1: PropTypes.string,
    screen2: PropTypes.string,
    logo: PropTypes.string,
    client: PropTypes.string,
    language: PropTypes.string,
    domain: PropTypes.string,
    appStoreLink: PropTypes.string,
    techStacks: PropTypes.arrayOf(String),
    integratedFeatures: PropTypes.arrayOf(String),
    style: PropTypes.object
}

const styles = {
    primaryText: {
        fontWeight: 'bold',
        color: 'black'
    },
    secondaryText: {
        color: '#212121'
    },
    logo: { 
    marginRight: '10px', 
    width: '100px', 
    height: '100px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '22px',
    borderColor: 'gray' 
 }
}

export default ProjectCard;