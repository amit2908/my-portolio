import React from 'react'

type Summary = Array<string>

function ProfileSummary(props: { summary: Summary, showDetail: Boolean }) {
  const { summary, showDetail } = props;

  const comp = () => {
    return (
    <div className="bordered standard-padding standard-margin-bottom">
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
    showDetail && comp()
  );
}

export default ProfileSummary;
