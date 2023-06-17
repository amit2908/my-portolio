import React, { useState } from 'react';
import RatingCardList from '../components/RatingCardList';
import { summary, skills, workExperience, education, interests } from '../res/strings/ResumeData'
import ProfileSummary from '../components/ProfileSummary';
import ChipCard from '../components/ChipCard';
import WorkExperienceCard from '../components/WorkExperienceCard';
import WorkExperienceList from '../components/WorkExperienceList';
import { EducationCardList } from '../components/EducationCard';
import DownloadButton from '../components/DownloadButton';
import { DoubleArrow } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Resume() {
  const [expand, setExpand] = useState(Array(13).fill(true));

  const handleExpandClick = ({ index }) => {
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
      <div className="Centered-Items-Veritically">
        <div className="Centered-Items-Horizontally">
          <DownloadButton link={resumeLink} />
          <IconButton style={{marginTop: 20, transform: expand.reduce((acc, v) => (acc && v)) ? 'rotate(90deg)' : 'rotate(0deg)' }} onClick={expandAll}>
                <DoubleArrow />
              </IconButton> 
          <div className="Compact-Page-Size" style={{ marginTop: 20 }}>
            <Container
              title={"Profile Summary"}
              Content={
                <ProfileSummary
                  summary={summary}
                  showDetail={expand[0]}
                />
              }
              expanded={expand[0]}
              index={0}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title="Computer Languages"
              Content={
                <RatingCardList
                  list={skills.languages}
                  showDetail={expand[1]}
                />
              }
              expanded={expand[1]}
              index={1}
              handleExpandClick={handleExpandClick}
            />

            <Container
            title="UI Frameworks"
              Content={
                <RatingCardList
                  list={skills.uiFrameworks}
                  showDetail={expand[2]}
                />
              }
              expanded={expand[2]}
              index={2}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Architectures"}
              Content={
                <ChipCard
                  cards={skills.arch}
                  showDetail={expand[3]}
                />
              }
              expanded={expand[3]}
              index={3}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Databases"}
              Content={
                <ChipCard
                  cards={skills.database}
                  showDetail={expand[4]}
                />
              }
              expanded={expand[4]}
              index={4}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Primary Tools"}
              Content={
                <ChipCard
                  cards={skills.tools}
                  showDetail={expand[5]}
                />
              }
              expanded={expand[5]}
              index={5}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Analytics Tools"}
              Content={
                <ChipCard
                  cards={skills.analyticTools}
                  showDetail={expand[6]}
                />
              }
              expanded={expand[6]}
              index={6}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Version Control Tools"}
              Content={
                <ChipCard
                  cards={skills.versionControl}
                  showDetail={expand[7]}
                />
              }
              expanded={expand[7]}
              index={7}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"SDKs and Libraries"}
              Content={
                <ChipCard
                  cards={skills.otherLibs}
                  showDetail={expand[8]}
                />
              }
              expanded={expand[8]}
              index={8}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Other Skills"}
              Content={
                <ChipCard
                  cards={skills.otherSkills}
                  showDetail={expand[9]}
                />
              }
              expanded={expand[9]}
              index={9}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Work Experience"}
              Content={
                <WorkExperienceList
                  experiences={workExperience}
                  showDetail={expand[10]}
                />
              }
              expanded={expand[10]}
              index={10}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Education"}
              Content={
                <EducationCardList
                  educationItems={education}
                  showDetail={expand[11]}
                />
              }
              expanded={expand[11]}
              index={11}
              handleExpandClick={handleExpandClick}
            />

            <Container
              title={"Interests"}
              Content={
                <ChipCard
                  cards={interests}
                  showDetail={expand[12]}
                />
              }
              expanded={expand[12]}
              index={12}
              handleExpandClick={handleExpandClick}
            />

            {/* <embed style={{ backgroundColor: 'white' }} src={resumeLink} width="800px" height="1110px" /> */}
          </div>
          <DownloadButton link={resumeLink} />
        </div>
      </div>
    );
}

function Container({ title, Content, handleExpandClick, index, expanded }) {
  return (
    <div>
      <div className='Leading-Row' style={{marginTop: 20}}>
              <IconButton style={{marginTop: 20, transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }} onClick={() => handleExpandClick({ index: index })}>
                <DoubleArrow />
              </IconButton> 
              <h1>{title}</h1>
      </div>
      <div style={{marginLeft: 50}}>{Content}</div>
       </div>
  )
}


export default Resume;