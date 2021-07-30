import { textAlign } from '@material-ui/system';
import React from 'react';
import R from '../res/index'

class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        
    }

    render(){

        return (
            <div className="Page-container" style={styles.darkBackground}>
            <div className='Page-container-vertical' style={styles.darkBackground}>
               <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px'/>
               <div style={styles.page, {textAlign: 'center' }}>
                   <span>I am self-motivated programmer. Love to code especially when I solve problems of others.</span><br/>
                    <span>My favourite pass-time is product design and read books.</span><br/>
               </div>

               <div style={styles.page}>
                   <span style={styles.primaryText}>Favourite Books</span><br/>
                    <span>Getting Things Done</span><br/>
                    <span>How to win friends</span><br/>
                    <span>The subtle art of not giving a f*ck!</span><br/>
                    <span>Getting Things Done</span><br/>
               </div>


               <div style={styles.page}>
                   <span style={styles.primaryText}>Blogs I follow</span><br/>
                    <span>Getting Things Done</span><br/>
                    <span>How to win friends</span><br/>
                    <span>The subtle art of not giving a f*ck!</span><br/>
                    <span>Getting Things Done</span><br/>
               </div>
               
            </div>

            </div>
        );
    }
}
  
export default AboutMe;

const styles = {
    page: {
        marginHorizontal: 100,
        padding: 30
    },
    primaryText: {
        fontWeight: 'bold',
        color: 'white'
    },
    secondaryText: {
        color: '#212121'
    },
    logo: { margin: '7px', width:'40px', height:'40px'},
    darkBackground: {
        backgroundColor: 'rgb(25,25,25)',
        color: 'white'
    }
}