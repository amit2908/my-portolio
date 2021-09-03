import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import PropTypes from 'prop-types'

const ProjectCard = (props) => {
    return (
        <div className='Project-card' style={props.style}>
            <div className='Project-card-image-view'>
                <img src={props.screen1} alt='' className="Project-card-image" />
                <img src={props.screen2} alt='' className="Project-card-image" />
            </div>
            <div className="Project-card-description">
                <div className='Project-card-title'>
                    <img src={props.logo} alt='' style={styles.logo} />
                    {props.title}
                </div>
                <span style={styles.secondaryText}>{props.description}</span><br />
                <span style={styles.primaryText}>Client: </span><span style={styles.secondaryText}>{props.client}</span><br />
                <span style={styles.primaryText}>Language: </span><span style={styles.secondaryText}>{props.language}</span><br />
                <span style={styles.primaryText}>Technologies: </span>
                <span style={styles.secondaryText}>{props.techStacks.reduce((x, y) => { return (x + ", " + y) })}</span><br />
                {props.domain &&
                    <span><span style={styles.primaryText}>Domain: </span><br /><span style={styles.secondaryText}>{props.domain}</span></span>}
                <br />
                {props.appStoreLink &&
                    <span style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }, styles.secondaryText}>
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
    logo: { margin: '7px', width: '40px', height: '40px' }
}

export default ProjectCard;