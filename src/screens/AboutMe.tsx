import React, { useContext } from 'react';
import R from '../res/index'
import ThemeContext from '../contexts/ThemeContext';


const introduction = () => (<div className='Centered-Text DescriptionText'>
                            <h2>Shubham Ojha</h2>
                            <h3>Bachelor of Engineering (B.E) in "Computer Science" </h3>
                            <h3>Currently Serving as "Senior Staff Engineer" at Altimetrik India.</h3><br /><br />
                            <span><i>I am self-motivated programmer. Love to code especially when I solve problems of others.<br />
                                My favourite pass-time is product design, reading books and trekking mountains.<br/>
                                Open source fan. Dark theme lover. Animation geek.<br/>
                                </i></span><br />
                            <span><i>Whenever I feel bored, I watch sci-fi movies. I am fan of the Arrow series.<br/><br/>
                                    My strength - Perseverance and Empathy<br/>
                                    My weakness - Will let you know personally. 
                                </i></span><br />
                        </div>)

const blogs = (theme: string | null) => {
  return (
    <div className='standard-padding'>
      <span className="H3">Blogs I follow</span>
      <br />
      <br />
      {R.string.trans.favouriteBlogs.map(function (blog, i) {
        return (
          <span key={i} className="DescriptionText">
            <a
              className={`${ theme !== null && theme === "dark" ? "link-dark" : "link" } Non-Decorated-Link`}
              href={blog.link}
            >
              {blog.title}
              <br />
              <br />
            </a>
          </span>
        );
      })}
    </div>
  );
};


 const techBooks = () => (
   <div className='standard-padding'>
     <span className="H3">Tech Books I like</span>
     <br />
     {R.string.trans.techBooks.map(function (book, i) {
       if (book.link) {
         return (
           <p key={i} className="DescriptionText">
             <a href={book.link}>
               <span>
                 {book.title}
                 <br />
               </span>
               <span style={styles.author}>
                 {"— " + book.writer}
                 <br />
               </span>
             </a>
           </p>
         );
       } else {
         return (
           <p key={i} className="DescriptionText">
             <span>
               {book.title}
               <br />
             </span>
             <span style={styles.author}>
               {"— " + book.writer}
               <br />
             </span>
           </p>
         );
       }
     })}
   </div>
 );

 const motivationBooks = (theme: string | null) => (
   <div className='standard-padding'>
     <span className="H3">Motivational Books</span>
     <br />
     {R.string.trans.favouriteBooks.map(function (book, i) {
       if (book.link) {
         return (
           <p key={i} className="DescriptionText">
             <a className={`${(theme !== null && theme === 'dark') ? "link-dark" : "link"}, Non-Decorated-Link`} href={book.link}>
               <span>
                 {book.title}
                 <br />
               </span>
               <span style={styles.author}>
                 {"— " + book.writer}
                 <br />
               </span>
             </a>
           </p>
         );
       } else {
         return (
           <p key={i} className="DescriptionText">
             <span>
               {book.title}
               <br />
             </span>
             <span style={styles.author}>
               {"— " + book.writer}
               <br />
             </span>
           </p>
         );
       }
     })}
   </div>
 );

const favouriteShows = (theme: string | null) => (
  <div className='standard-padding'>
    <span className="H3">Favourite Shows</span>
    <br />
    {R.string.trans.favouriteShows.map(function (book, i) {
      if (book.link) {
        return (
          <p key={i} className={`DescriptionText`}>
            <a className={`${(theme !== null && theme === 'dark') ? "link-dark" : "link"}, Non-Decorated-Link`} href={book.link}>
              <span>
                {book.title}
                <br />
              </span>
              {/* <span style={styles.author}>{"— " + book.writer}<br /></span> */}
            </a>
          </p>
        );
      } else {
        return (
          <p key={i} className="DescriptionText">
            <span>
              {book.title}
              <br />
            </span>
            {/* <span style={styles.author}>{"— " + book.writer}<br /></span> */}
          </p>
        );
      }
    })}
  </div>
);


function AboutMe() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Centered-Items-Horizontally">
      <div className="Compact-Page-Size">
        <div className="Centered-Items-Horizontally">
          <img
            src={R.image.dp}
            alt=""
            style={{ width: 120, height: 120, marginTop: 50 }}
            id="profile-picture"
          />
          {introduction()}
          <br />
          <div className="Responsive-Horizontal-Card-Alignment">
            {blogs(theme)}
            {techBooks()}
            {motivationBooks(theme)}
            {favouriteShows(theme)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

const styles = {
    content: {
        padding: 30,
    },
    primaryText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    author: {
        fontStyle: 'italic'
    },
    logo: { margin: '7px', width: '40px', height: '40px' }
}