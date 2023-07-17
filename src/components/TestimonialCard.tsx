import React from 'react'

function TestimonialCard(props: {
  details: {
    title: String,
    description: String,
    name: String,
    designation: String
  }
}) {
  const { title, description, name, designation } = props.details;
  return (
    <div style={{ width: 240 }} className="AwesomeBG bordered standard-margin standard-padding Centered-Text">
      <h4>{title}</h4>
      <h5>{description}</h5>
      <i><h5 className='Trailing-Row'>-{name}<br/>{designation}</h5></i>
    </div>
  );
}

export default TestimonialCard
