import React from 'react';
import ProjectCard from '../components/ProjectCard'
import R from '../res/index'

class Projects extends React.Component {
    
    render(){
        return (
            <div className="Project-container">
                <ProjectCard title={R.string.en.pey.title}
                    description={R.string.en.pey.description}
                    screen1={R.image.pey.screen1}
                    screen2={R.image.pey.screen1}
                    logo={R.image.pey.logo}
                    client={R.string.en.pey.client}
                    language={R.string.en.pey.language}
                    domain={R.string.en.pey.domain}
                    appStoreLink={R.string.en.pey.appStoreLink}
                />

                <ProjectCard title={R.string.en.orgamax.title}
                    description={R.string.en.orgamax.description}
                    screen1={R.image.orgamax.screen1}
                    screen2={R.image.orgamax.screen2}
                    language={R.string.en.orgamax.language}
                    domain={R.string.en.orgamax.domain}
                    appStoreLink={R.string.en.orgamax.appStoreLink}
                    logo={R.image.pey.logo}
                    client={R.string.en.orgamax.client}
                />

                <ProjectCard title={R.string.en.pey.title}
                    description={R.string.en.pey.description}
                    screen1={R.image.pey.screen1}
                    screen2={R.image.pey.screen1}
                    logo={R.image.pey.logo}
                />
            </div>
        );
    }
}
  
export default Projects;