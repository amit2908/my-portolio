import React from 'react'
import R from '../res/index'

function Introduction() {
  return (
    <div style={{ textAlign: "center", color: '#fff', marginTop: 100 }}>
    <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px' />
      <h1 style={{ fontSize: 60 , fontFamily:'babylonica'}}>Shubham Ojha</h1>
      <h3>Computer Science Geek</h3>
      <h3>"Senior Staff Engineer" @Altimetrik India.</h3>
    </div>
  );
}

export default Introduction
