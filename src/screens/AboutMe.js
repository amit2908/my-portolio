import React from 'react';
import R from '../res/index'


const introduction = () => (<div style={{ textAlign: 'center' }}>
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

const blogs = () => (
<div style={styles.card}>
                                <span style={styles.primaryText}>Blogs I follow</span><br /><br />
                                {R.string.trans.favouriteBlogs.map(function (blog, i) {
                                    return (<span className='link'>
                                        <a href={blog.link} style={styles.secondaryText}>{blog.title}<br /><br /></a>
                                    </span>)
                                })}
                            </div>
 )

 const techBooks = () => (
<div style={styles.card}>
                                <span style={styles.primaryText}>Tech Books I like</span><br />
                                {R.string.trans.techBooks.map(function (book, i) {
                                    if (book.link) {
                                        return (<p className='boxed-link'><a href={book.link}>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            <span style={styles.author}>{"— " + book.writer}<br /></span>
                                        </a></p>)
                                    } else {
                                        return (<p>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            <span style={styles.author}>{"— " + book.writer}<br /></span>
                                        </p>)
                                    }

                                })}
                            </div>
 )

 const motivationBooks = () => (
    <div style={styles.card}>
                                <span style={styles.primaryText}>Motivational Books</span><br />
                                {R.string.trans.favouriteBooks.map(function (book, i) {
                                    if (book.link) {
                                        return (<p className='link'><a className='boxed-link' href={book.link}>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            <span style={styles.author}>{"— " + book.writer}<br /></span>
                                        </a></p>)
                                    } else {
                                        return (<p>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            <span style={styles.author}>{"— " + book.writer}<br /></span>
                                        </p>)
                                    }

                                })}
                            </div>)

const favouriteShows = () => (
    <div style={styles.card}>
                                <span style={styles.primaryText}>Favourite Shows</span><br />
                                {R.string.trans.favouriteShows.map(function (book, i) {
                                    if (book.link) {
                                        return (<p className='link'><a className='boxed-link' href={book.link}>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            {/* <span style={styles.author}>{"— " + book.writer}<br /></span> */}
                                        </a></p>)
                                    } else {
                                        return (<p>
                                            <span style={styles.secondaryText}>{book.title}<br /></span>
                                            {/* <span style={styles.author}>{"— " + book.writer}<br /></span> */}
                                        </p>)
                                    }

                                })}
                            </div>)


class AboutMe extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="Centered-Items-Horizontally" style={styles.darkBackground}>
                <div className='Compact-Page-Size'>
                    <div className="Centered-Items-Horizontally" style={styles.darkBackground}>
                        <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px' />

                        {introduction()}

                        <div style={styles.content}>
                            {blogs()}
                            <br />
                            {techBooks()}
                            <br />
                            {motivationBooks()}
                            <br />
                            {favouriteShows()}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AboutMe;

const styles = {
    content: {
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left'
    },
    card: { 
        padding: 20,
        margin: 10
    },
    primaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    secondaryText: {
        color: 'white'
    },
    author: {
        fontStyle: 'italic',
        fontSize: 12,
        color: 'white'
    },
    logo: { margin: '7px', width: '40px', height: '40px' },
    darkBackground: {
        backgroundColor: 'rgb(25,25,25)',
        color: 'white'
    }
}