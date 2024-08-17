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
      <h2>Shubham Ojha</h2>
    </div>
  );
}

export default Introduction
