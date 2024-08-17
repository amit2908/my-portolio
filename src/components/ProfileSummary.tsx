import React from 'react'

function ProfileSummary(props: { summary: Array<string>, showDetail: Boolean }) {
  const { summary, showDetail } = props;

  const comp = (styleClass: String) => {
    return (
    <div className={`${styleClass} standard-margin-bottom`}>
      <ul>
        {summary.map((item, index) => (
          <li key={index} style={{ paddingBottom: 5 }}>
            {item}
          </li>
        ))}
      </ul>
  </div>)
  }

  return (
    comp(showDetail ? 'showBlock' : 'hideBlock')
  );
}

export default ProfileSummary;
