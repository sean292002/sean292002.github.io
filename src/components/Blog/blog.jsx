import React, { Component } from 'react';
import axios from 'axios';

import "./blog.css";

class Blogs extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    // Replace with your Medium RSS feed URL
    const mediumRssFeed = 'https://medium.com/feed/@seanwiryadi16';

    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${mediumRssFeed}`)
      .then((response) => {
        this.setState({ blogs: response.data.items });
      })
      .catch((error) => {
        console.error('Error fetching Medium blogs:', error);
      });
  }

  render() {
    return (
      <section id="blogs" className="container">
        <div className="section-title">
            <h4 className="header-sub-title">Blogs</h4>
            <h5 className="header-description-title">- Lorem Ipsum -</h5>
        </div>
        <div className='medium-blogs'>
            <div className="blog-cards">
                {this.state.blogs.map((blog) => (
                    <div key={blog.guid} className="blog-card">
                      <div className='blog-img-container'>
                        <img className="blog-img" src={blog.thumbnail} alt="Blog Thumbnail" />
                      </div>
                      <h3 className="blog-title">{blog.title}</h3>
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">
                          Read more
                      </a>
                    </div>
                ))}
            </div>
        </div>
      </section>
    );
  }
}

export default Blogs;