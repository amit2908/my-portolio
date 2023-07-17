import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { largeTitle } from '../styles/styles';
import R from '../res/index'
import ThemeContext from '../contexts/ThemeContext';

function ProjectCard({ style, title, description, logo, client, language, techStacks, integratedFeatures, domain, appStoreLink, screen1, screen2  }) {
    const { theme } = useContext(ThemeContext);

        return (
            <div className={'Project-card'} style={style}>
                <div className="Project-card-description DescriptionText">
                    <div className='Project-card-title'>
                        <img src={logo} alt='' style={styles.logo} />
                        <span style={largeTitle}>{title}</span>
                    </div>
                    <span style={styles.secondaryText}>{description}</span><br />
                    <span style={styles.primaryText}>Client: </span><span style={styles.secondaryText}>{client}</span><br />
                    <span style={styles.primaryText}>Language: </span><span style={styles.secondaryText}>{language}</span><br />
                    <span style={styles.primaryText}>Technologies: </span>
                    <span style={styles.secondaryText}>{techStacks.reduce((x, y) => { return (x + ", " + y) })}</span><br />
                    <span style={styles.primaryText}>Features Integrated: </span>
                    <span style={styles.secondaryText}>{integratedFeatures.reduce((x, y) => { return (x + ", " + y) })}</span><br />
                    {domain &&
                        <span><span style={styles.primaryText}>Domain: </span><br /><span style={styles.secondaryText}>{domain}</span></span>}
                    {appStoreLink &&
                        <span className='Leading-Row CenterAlign standard-margin-vertical'>
                            <img src={R.image.others.appstore} style={{width: 30, height: 30, marginRight: 10}}/>
                            <a href={appStoreLink} className={`${theme === "dark" ? "link-dark" : "link" } Non-Decorated-Link`}>
                                AppStore
                            </a>
                        </span>
                    }
                    <div className='Project-card-image-view'>
                    <img src={screen1} alt='' className="Project-card-image Project-Transform" />  {/* onMouseOver={() => this.rotate()} style={{tranform: `rotate(${rotationX}deg)`}} /> */}
                    <img src={screen2} alt='' className="Project-card-image Project-Transform" />
                </div>
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
    integratedFeatures: PropTypes.arrayOf(String),
    style: PropTypes.object
}

const styles = {
    primaryText: {
        fontWeight: 'bold',
    },
    secondaryText: {
    },
    logo: { 
    marginRight: '10px', 
    width: '80px', 
    height: '80px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '18px',
    borderColor: 'gray' 
 }
}

export default ProjectCard;