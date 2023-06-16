import React from 'react';
import ProjectCard from '../components/ProjectCard'
import R from '../res/index'
import Introduction from './Introduction'
import ContactCard from '../components/ContactCard';

class Projects extends React.Component {

    render() {
        return (
          <div className="Centered-Items-Horizontally">
            <div className="Cover-Box Centered-Items-Veritically">
              <Introduction />
              <ContactCard />
            </div>
            <div className="Compact-Page-Size">
             <h1 style={{alignSelf: 'start', marginVertical: 100}}>My Projects</h1>
              <ProjectCard
                title={R.string.trans.payzapp.title}
                description={R.string.trans.payzapp.description}
                screen1={R.image.payzapp.screen1}
                screen2={R.image.payzapp.screen2}
                logo={R.image.payzapp.logo}
                client={R.string.trans.payzapp.client}
                language={R.string.trans.payzapp.language}
                domain={R.string.trans.payzapp.domain}
                appStoreLink={R.string.trans.payzapp.appStoreLink}
                techStacks={R.string.trans.payzapp.techStacks}
                integratedFeatures={R.string.trans.payzapp.integratedFeatures}
              />
              <div className="Divider"></div>
              <ProjectCard
                title={R.string.trans.markets.title}
                description={R.string.trans.markets.description}
                screen1={R.image.markets.screen1}
                screen2={R.image.markets.screen2}
                logo={R.image.markets.logo}
                client={R.string.trans.markets.client}
                language={R.string.trans.markets.language}
                domain={R.string.trans.markets.domain}
                appStoreLink={R.string.trans.markets.appStoreLink}
                techStacks={R.string.trans.markets.techStacks}
                integratedFeatures={R.string.trans.markets.integratedFeatures}
              />
              <div className="Divider"></div>
              <ProjectCard
                title={R.string.trans.pey.title}
                description={R.string.trans.pey.description}
                screen1={R.image.pey.screen1}
                screen2={R.image.pey.screen2}
                logo={R.image.pey.logo}
                client={R.string.trans.pey.client}
                language={R.string.trans.pey.language}
                domain={R.string.trans.pey.domain}
                appStoreLink={R.string.trans.pey.appStoreLink}
                techStacks={R.string.trans.pey.techStacks}
                integratedFeatures={R.string.trans.pey.integratedFeatures}
              />
              <div className="Divider"></div>
              <ProjectCard
                title={R.string.trans.orgamax.title}
                description={R.string.trans.orgamax.description}
                screen1={R.image.orgamax.screen1}
                screen2={R.image.orgamax.screen2}
                language={R.string.trans.orgamax.language}
                domain={R.string.trans.orgamax.domain}
                appStoreLink={R.string.trans.orgamax.appStoreLink}
                techStacks={R.string.trans.orgamax.techStacks}
                logo={R.image.orgamax.logo}
                client={R.string.trans.orgamax.client}
                integratedFeatures={R.string.trans.orgamax.integratedFeatures}
              />
            </div>

            <div className="thick-bordered standard-padding standard-margin">
              <p>
                <span>
                  I have contributed in more than 25 iOS and React Native apps
                  in my career so far,
                  <br />
                  but the above mentioned are my major works in all of that.{" "}
                  <br />
                  Some of them are developed from scratch to deployment on
                  AppStore directly by me.
                </span>
              </p>
            </div>
          </div>
        );
    }
}

export default Projects;