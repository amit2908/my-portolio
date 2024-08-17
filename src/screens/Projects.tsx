import React, { useContext, useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import R from "../res/index";
import ThemeContext from "../contexts/ThemeContext";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const projectRef1 = useRef<HTMLDivElement | null>(null);
  const projectRef2 = useRef<HTMLDivElement | null>(null);
  const projectRef3 = useRef<HTMLDivElement | null>(null);
  const projectRef4 = useRef<HTMLDivElement | null>(null);

  const AppsTeam = () => {
    return (
      <div id="AppsTeam">
        <button
          style={{ background: "none" }}
          onClick={() => {
            projectRef2.current?.scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          <img
            id="firstImg"
            style={{ width: "15vw", zIndex: 1, margin: -14 }}
            src={R.image.markets.screen1}
          />
        </button>

        <button
          style={{ background: "none" }}
          onClick={() => {
            projectRef3.current?.scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          <img
            id="secondImg"
            style={{ width: "15vw", zIndex: 2, margin: -14 }}
            src={R.image.pey.screen2}
          />
        </button>

        <button
          style={{ background: "none" }}
          onClick={() => {
            projectRef1.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <img
            id="thirdImg"
            style={{ width: "17vw", zIndex: 3, margin: -14 }}
            src={R.image.payzapp.screen1}
          />
        </button>

        <button
          style={{ background: "none" }}
          onClick={() => {
            projectRef4.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <img
            id="fourthImg"
            style={{ width: "15vw", zIndex: 2, margin: -14 }}
            src={R.image.orgamax.screen2}
          />
        </button>

        <button
          style={{ background: "none" }}
          onClick={() => {
            projectRef1.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <img
            id="fifthImg"
            style={{ width: "14vw", zIndex: 1, margin: -14 }}
            src={R.image.payzapp.screen2}
          />
        </button>
      </div>
    );
  };

  return (
    <div className={`Centered-Items-Horizontally`}>
      <div className={theme === "light" ? "page-title" : "page-title-dark"}>
        <h1>My Works</h1>
        <h4>Explore my projects and other works here</h4>
      </div>
      <div className="Compact-Page-Size">
        {<AppsTeam />}
        <div className="thick-bordered standard-padding standard-margin DescriptionText">
          <p>
            <i>
              I am happy and excited to share that I have contributed in more
              than 25 iOS and React Native apps in my career so far, but the
              below mentioned are my major works out of all. Some of them are
              developed from scratch to deployment on AppStore directly by me.{" "}
              <br /> <br />
              What I have earned out of my work is more than I can express. Its
              not just experience building products, but also the thought
              process of the customers. I also got a lot of insights regarding
              the process of building great user experience that brings joy to
              the customers as well as clients.
            </i>
          </p>
        </div>
        <div ref={projectRef1}>
          <ProjectCard
            id={"Project1"}
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
        </div>

        <div ref={projectRef2}>
          <ProjectCard
            id={"Project2"}
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
        </div>
        <div ref={projectRef3}>
          <ProjectCard
            id={"Project3"}
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
        </div>

        <div ref={projectRef4}>
          <ProjectCard
            id={"Project4"}
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
    </div>
  );
}

export default Projects;
