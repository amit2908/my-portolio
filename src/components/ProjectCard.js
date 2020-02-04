import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import PropTypes from 'prop-types'

const ProjectCard = (props) => {
    return (
        <div className='Project-card' style={props.style}>
            <div className='Project-card-image-view'>
                <img src={props.screen1} alt='' className="Project-card-image"/>
                <img src={props.screen2} alt='' className="Project-card-image"/>
            </div>
            <div className="Project-card-description">
                <div className='Project-card-title'>
                    <img src={props.logo} alt='' width='40px' height='40px' style={{ margin: '7px'}}/>
                    {props.title}
                </div>
                <span>{props.description}</span><br/>
                <span style={{fontWeight: 'bold'}}>Client: </span><span>{props.client}</span><br/>
                <span style={{fontWeight: 'bold'}}>Language: </span><span>{props.language}</span><br/>
                {props.domain && 
                    <span><span style={{fontWeight: 'bold'}}>Domain: </span><br/><span>{props.domain}</span></span>}
                    <br/>
                {props.appStoreLink && 
                    <span style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}><AppleIcon /><a className='no-decoration-link' href={props.appStoreLink}>View App on AppStore</a></span>}
            </div>
        </div>
    )
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
    style: PropTypes.object
}
  
export default ProjectCard;