import React, { Component } from 'react';
import { Link } from 'react-router';
import './Posts.css';
var FontAwesome = require('react-fontawesome');

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  }

  constructor(){ 
    super();
  }

  render() {

    let posts = this.props.posts;
    // console.log(posts);
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
                // <div> { JSON.stringify(key) } </div>
    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div className="link" key={key}>
                <Link
                  to={{
                    pathname: '/view-post/',
                    hash: key.toString(),
                    state: { id: {key} },
                  }}
                > { posts[key].title }
                </Link>

                <div className="up" onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"> 
                    <FontAwesome
                      className='sortUp'
                      name='sort-up'
                      size='1x'
                      // spin
                    />
                { posts[key].upvote }</div>
                <div className="down" onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                    type="button"> 
                  <FontAwesome
                      className='sortDown'
                      name='sort-down'
                      size='1x'
                      // spin
                    />
                 { posts[key].downvote }</div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
