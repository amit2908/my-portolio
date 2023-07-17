import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {

  const array = [...Array(10)] 
  const [appear,setAppear] = useState(true)

  return (
    <div>
      <h4>Testimonials</h4>
      <div className='Centered-Items-Vertically Scrollable Wrap'>
      {array.map((element, index) => (<TestimonialCard  key={index} details={{ 
          title: 'Awesome Developer',
          description: 'Shubham is an enthuasitic developer and always looks for challenging tasks.',
          name: 'Vaibhav Bajpayee',
          designation: 'Manager @BajajFinserv'
        }}/>))}
        </div>
    </div>
  )
}

export default Testimonials
