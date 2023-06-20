import React, { useContext, useState } from 'react';
import ProjectCard from '../components/ProjectCard'
import R from '../res/index'
import Introduction from './Introduction'
import ContactCard from '../components/ContactCard';
import { Switch } from '@material-ui/core';
import ThemeContext from '../contexts/ThemeContext';

function Projects() {
       const theme = localStorage.getItem('isDarkTheme')
       const [themeChange, setThemeChange] = useState(false)
        return (
          <div
            className={`Centered-Items-Horizontally`}
          >
            <div className={`Leading-Col ${(theme !== null && theme === 'dark') ? 'Cover-Box-Dark' : 'Cover-Box'}`}>
              <div className="standard-margin Trailing-Row CenterAlign">
                <h4>Theme</h4>
                <Switch
                  checked={(theme !== null && theme === 'dark')}
                  onChange={() => {
                    localStorage.setItem('isDarkTheme', (theme !== null && theme === 'light') ? 'dark' : 'light')
                    setThemeChange(!themeChange)
                    window.location.reload()
                  }}
                />
              </div>
              <Introduction />
              <ContactCard />
              <h1 className="CenterAlign titleText standard-margin-left standard-margin-right standard-margin-bottom Centered-Text lightText fancy">
                  BUILDING PRODUCTS AND SOLUTIONS <br /> FOR TOP COMPANIES
              </h1>
            </div>
            <div className="Compact-Page-Size">
            <div className="thick-bordered standard-padding standard-margin">
              <p>
                <i>
                  I am happy and excited to share that I have contributed in more than 25 iOS and React Native apps
                  in my career so far, but the below mentioned are my major works out of all.
                  Some of them are developed from scratch to deployment on
                  AppStore directly by me. <br/> <br/>
                  What I have earned out of my work is more than I can express. Its not just experience building products, 
                  but also the thought process of the customers. I also got a lot of insights regarding 
                  the process of building great user experience that brings joy to the customers as well as clients.
                </i>
              </p>
            </div>
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
              <div className={`${(theme !== null && theme === 'light') ? 'Divider' : 'Divider-dark'}`}></div>
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
              <div className={`${(theme !== null && theme === 'light') ? 'Divider' : 'Divider-dark'}`}></div>
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
              <div className={`${(theme !== null && theme === 'light') ? 'Divider' : 'Divider-dark'}`}></div>
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

            
          </div>
        );
}

export default Projects;