import React from 'react';
import R from '../res/index'


class AboutMe extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        let favouriteBlogs = R.string.trans.favouriteBlogs
        let favouriteBooks = R.string.trans.favouriteBooks
        let techBooks = R.string.trans.techBooks
        return (
            <div className="Centered-Items-Horizontally" style={styles.darkBackground}>
                <div className='Compact-Page-Size'>
                    <div className="Centered-Items-Horizontally" style={styles.darkBackground}>
                        <img src={R.image.dp} alt='' id='profile-picture' width='150px' height='150px' />

                        <div style={{ textAlign: 'center' }}>
                            <h2>Shubham Ojha</h2>
                            <h3>Bachelor of Engineering (B.E) in "Computer Science" </h3>
                            <h3>Currently Serving as "Senior iOS Developer" at Bajaj Finserv Markets.</h3><br /><br />
                            <span><i>I am self-motivated programmer. Love to code especially when I solve problems of others.<br />
                                My favourite pass-time is product design, reading books and trekking mountains.</i></span><br />
                        </div>

                        <div style={styles.content}>

                            <div>
                                <span style={styles.primaryText}>Blogs I follow</span><br /><br />
                                {favouriteBlogs.map(function (blog, i) {
                                    return (<span className='link'>
                                        <a href={blog.link} style={styles.secondaryText}>{blog.title}<br /><br /></a>
                                    </span>)
                                })}
                            </div>

                            <br />
                            <div>
                                <span style={styles.primaryText}>Tech Books I like</span><br />
                                {techBooks.map(function (book, i) {
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
                            <br />
                            <div>
                                <span style={styles.primaryText}>Motivational Books</span><br />
                                {favouriteBooks.map(function (book, i) {
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
                            </div>
                            <br />


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