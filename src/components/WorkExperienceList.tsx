import React from 'react'
import { WorkExperience, WorkExperienceCard } from './WorkExperienceCard'

function WorkExperienceList(props: { experiences: Array<WorkExperience>, showDetail: Boolean}) {
    const { experiences, showDetail } = props;
  return (
    <div>
        {
           showDetail && experiences.map((exp, index) => <WorkExperienceCard key={index} workExperience={exp}/>)
        }
    </div>
  )
}

export default WorkExperienceList
