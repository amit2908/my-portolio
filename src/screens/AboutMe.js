import React from 'react';
import R from '../res/index'


class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        
    }

    render(){
        let favouriteBlogs = R.string.trans.favouriteBlogs
        let favouriteBooks = R.string.trans.favouriteBooks
        return (
            <div className="Page-container" style={styles.darkBackground}>
            <div className='Page-container-vertical' style={styles.darkBackground}>
               <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px'/>
               <div style={styles.page, {textAlign: 'center' }}>
                   <span>I am self-motivated programmer. Love to code especially when I solve problems of others.</span><br/>
                    <span>My favourite pass-time is product design and read books.</span><br/>
               </div>

                <div>
               <div style={styles.page}>
                   <span style={styles.primaryText}>Favourite Books</span><br/>
                   {favouriteBooks.map(function(book, i){
                       if (book.link) {
                        return (<a href={book.link} style={styles.secondaryText}>{book.title}<br/></a>)
                       } else  {
                           return (<span style={styles.secondaryText}>{book.title}<br/></span>)
                       }
                       
                   })}
               </div>


               <div style={styles.page}>
                   <span style={styles.primaryText}>Blogs I follow</span><br/>
                   {favouriteBlogs.map(function(blog, i){
                       return (<a href={blog.link} style={styles.secondaryText}>{blog.title}<br/></a>)
                   })}
               </div>
               </div>
            </div>

            </div>
        );
    }
}
  
export default AboutMe;

const styles = {
    page: {
        padding: 30
    },
    primaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    secondaryText: {
        color: 'white'
    },
    logo: { margin: '7px', width:'40px', height:'40px'},
    darkBackground: {
        backgroundColor: 'rgb(25,25,25)',
        color: 'white'
    }
}