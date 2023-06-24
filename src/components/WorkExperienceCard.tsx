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
    <div className='bordered standard-padding standard-margin-vertical'>
      <div className="EndToEnd Row">
        <div>
          <h3>{workExperience.name}</h3>
          {workExperience.designation}
        </div>
        <div>
        <h3>{workExperience.fromDate}-
            {!workExperience.toDate || workExperience.toDate === '' ? 'Current' : workExperience.toDate}</h3>
          </div>
      </div>
      <div>
        <br/><br/>
        <b><i>Accomplishments:</i></b>
        <ul>{workExperience.accomplishments.map((item, index) => (<li key={index} style={{paddingBottom: 5}}>{item}</li>))}</ul>
      </div>
    </div>
  );
}

export default WorkExperienceCard
export { WorkExperienceCard }
export type { WorkExperience }
