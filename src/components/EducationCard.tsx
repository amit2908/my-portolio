import React from 'react'

export type Education = {
    institutionName: String,
    degree: String,
    field: String,
    fromDate: String | Date,
    toDate: String | Date | null,
}

function EducationCard(props: {educationItem: Education}) {
    const { educationItem }  = props;
  return (
      <div className='EndToEnd Row Wrap bordered standard-padding standard-margin-vertical'>
        <div className="Leading-Col">
          <b>{educationItem.institutionName}</b>
          {educationItem.degree}
          ({educationItem.field})
        </div>
        <div>
        <b>{`${educationItem.fromDate}-${educationItem.toDate}`}</b>
        </div>
      </div>
  );
}

function EducationCardList(props: { educationItems: Array<Education>, showDetail: Boolean}) {
    const { educationItems, showDetail } = props;
  return (
    <div>
      {
        showDetail && educationItems.map((item, index) => (<EducationCard key={index} educationItem={item}></EducationCard>))
      }
    </div>
  )
}


EducationCardList.defaultProps = {
    title: "Education"
}

export {EducationCardList, EducationCard} 
export default EducationCard
