import React from 'react'
import R from '../res/index'

function Introduction() {
  return (
    <div
      className='Centered-Text lightText standard-margin-horizontal'
    >
      <img
        src={R.image.dp}
        alt=""
        id="profile-picture"
        width="120px"
        height="120px"
      />
      <h1 style={{ fontSize: 20, fontFamily: "moirai" }}>Shubham Ojha</h1>
    </div>
  );
}

export default Introduction
