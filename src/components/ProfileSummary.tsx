import React from 'react'

function ProfileSummary(props: { summary: Array<string>, showDetail: Boolean }) {
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
