import React from 'react';
import R from '../res/index'

class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        
    }

    render(){

        return (
            <div className='Page-container-vertical'>
               <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px'/>
            </div>
        );
    }
}
  
export default AboutMe;