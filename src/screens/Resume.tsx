import React, { useState } from 'react';
import RatingCardList from '../components/RatingCardList';
import { summary, skills, workExperience, education, interests } from '../res/strings/ResumeData'
import ProfileSummary from '../components/ProfileSummary';
import ChipCard from '../components/ChipCard';
import WorkExperienceList from '../components/WorkExperienceList';
import { EducationCardList } from '../components/EducationCard';
import DownloadButton from '../components/DownloadButton';
import { DoubleArrow } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';
import useFetch  from '../network/useFetch';
import { ResumeData } from '../network/resumeModel';

function Resume() {
  const [expand, setExpand] = useState(Array(13).fill(true));
  const getResumeURL = new URL('https://upcdn.io/kW15bSn/raw/uploads/2023/06/20/resume-Uwmt.json') 
  const resumeData: ResumeData | null = useFetch(getResumeURL);

  const handleExpandClick = (index: number) => {
    let expandCopy = expand
    expandCopy[index] =  !expandCopy[index]
    setExpand([...expandCopy])
  }

  const expandAll = ( ) => {
    let expandCopy = expand
    let netResult = expandCopy.reduce((acc, v) => (acc && v))
     expandCopy = expandCopy.map(v => !netResult)
    setExpand([...expandCopy])
  }

    var resumeLink = 'https://cdn.filestackcontent.com/Y5PRbQKOQ9iWhVfP4PZS'
    return (
      <div>
        <div className="Centered-Items-Horizontally">
          <div className="Compact-Page-Size standard-margin">
            <div className='standard-margin Leading-Row'>
              <DownloadButton link={resumeLink} />
              <div
                className="App-button CenterAlign standard-margin-left"
                onClick={expandAll}
              >
                <DoubleArrow
                  style={{
                    transform: expand.reduce((acc, v) => acc && v)
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                  }}
                />
                {expand.reduce((acc, v) => acc && v) ? "Hide" : "Show All"}
              </div>
            </div>

            {resumeData && (
              <div style={{ marginTop: 20 }}>
                <Container
                  title={"Profile Summary"}
                  Content={
                    <ProfileSummary
                      summary={resumeData.summary}
                      showDetail={expand[0]}
                    />
                  }
                  expanded={expand[0]}
                  index={0}
                  handleExpandClick={handleExpandClick}
                />
              </div>
            )}

            {resumeData?.workExperience && (
              <Container
                title={"Work Experience"}
                Content={
                  <WorkExperienceList
                    experiences={resumeData.workExperience}
                    showDetail={expand[10]}
                  />
                }
                expanded={expand[10]}
                index={10}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.languages && (
              <Container
                title="Computer Languages"
                Content={
                  <RatingCardList
                    list={resumeData.skills.languages}
                    showDetail={expand[1]}
                  />
                }
                expanded={expand[1]}
                index={1}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.uiFrameworks && (
              <Container
                title="UI Frameworks"
                Content={
                  <RatingCardList
                    list={resumeData.skills.uiFrameworks}
                    showDetail={expand[2]}
                  />
                }
                expanded={expand[2]}
                index={2}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.arch && (
              <Container
                title={"Architectures"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.arch}
                    showDetail={expand[3]}
                  />
                }
                expanded={expand[3]}
                index={3}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.database && (
              <Container
                title={"Databases"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.database}
                    showDetail={expand[4]}
                  />
                }
                expanded={expand[4]}
                index={4}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.tools && (
              <Container
                title={"Primary Tools"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.tools}
                    showDetail={expand[5]}
                  />
                }
                expanded={expand[5]}
                index={5}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.analyticTools && (
              <Container
                title={"Analytics Tools"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.analyticTools}
                    showDetail={expand[6]}
                  />
                }
                expanded={expand[6]}
                index={6}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.versionControl && (
              <Container
                title={"Version Control Tools"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.versionControl}
                    showDetail={expand[7]}
                  />
                }
                expanded={expand[7]}
                index={7}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.otherLibs && (
              <Container
                title={"SDKs and Libraries"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.otherLibs}
                    showDetail={expand[8]}
                  />
                }
                expanded={expand[8]}
                index={8}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.skills.otherSkills && (
              <Container
                title={"Other Skills"}
                Content={
                  <ChipCard
                    cards={resumeData.skills.otherSkills}
                    showDetail={expand[9]}
                  />
                }
                expanded={expand[9]}
                index={9}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.interests && (
              <Container
                title={"Interests"}
                Content={
                  <ChipCard
                    cards={resumeData.interests}
                    showDetail={expand[12]}
                  />
                }
                expanded={expand[12]}
                index={12}
                handleExpandClick={handleExpandClick}
              />
            )}

            {resumeData?.education && (
              <Container
                title={"Education"}
                Content={
                  <EducationCardList
                    educationItems={resumeData.education}
                    showDetail={expand[11]}
                  />
                }
                expanded={expand[11]}
                index={11}
                handleExpandClick={handleExpandClick}
              />
            )}

            {/* <embed style={{ backgroundColor: 'white' }} src={resumeLink} width="800px" height="1110px" /> */}
          </div>
          <div className="standard-margin-vertical">
            <DownloadButton link={resumeLink} />
          </div>
        </div>
      </div>
    );
}

function Container(props: {
  title?: String;
  Content?: React.JSX.Element;
  handleExpandClick: (i: number) => void;
  index: number;
  expanded?: boolean;
}) {
  const { title, Content, handleExpandClick, index, expanded} = props;
  const theme = localStorage.getItem("isDarkTheme");
  return (
    <div>
      <div className="Leading-Row CenterAlign standard-margin-top">
        <IconButton
          style={{
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            color: theme !== null && theme === "dark" ? "white" : "black"
          }}
          onClick={() => handleExpandClick(index)}
        >
          <DoubleArrow />
        </IconButton>
        <h3>{title}</h3>
      </div>
      <div className="responsive-resume-content DescriptionText">{Content}</div>
    </div>
  );
}


export default Resume;