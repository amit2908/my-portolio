import React from 'react'

type WorkExperience = {
    name: String,
    designation: String,
    fromDate: String,
    toDate: String,
    accomplishments: Array<String>
}

function WorkExperienceCard(props: { workExperience: WorkExperience}) {
    const { workExperience } = props;
  return (
    <div>
      <div className="EndToEnd">
        <div>
          <b>{workExperience.name}</b>,&nbsp;
          {workExperience.designation}
        </div>
        <div>
            <b>{workExperience.fromDate}</b>-
            <b>{!workExperience.toDate || workExperience.toDate === '' ? 'Current' : workExperience.toDate}</b>
          </div>
      </div>
      <div>
        <ul>{workExperience.accomplishments.map((item, index) => (<li key={index}>{item}</li>))}</ul>
      </div>
    </div>
  );
}

export default WorkExperienceCard
export { WorkExperienceCard, WorkExperience }
