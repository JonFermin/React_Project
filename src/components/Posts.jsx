import React, { Component } from 'react';
import { Link } from 'react-router';
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
          <img className="loading" alt="loading-logo" src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif"/>
        </div>
      );
    }
    console.log(posts);
    return (

      
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div className="single-post">
                  <Link id="postHeader" className="link" key={key}
                    to={{
                      pathname: '/view-post/',
                      hash: key.toString(),
                      state: { id: {key} },
                    }}
                  >  {posts[key].title}
                  </Link>
                  <div className = "buttonContainer">
                      <div onClick={ _this.handleUpvote.bind(this, posts[key], key) }> 
                          <FontAwesome
                            className='sortUp'
                            name='sort-up'
                            size='lg'
                            // spin
                          />
                        <span className="up">{ posts[key].upvote }</span>
                      </div>
                      <div onClick={ _this.handleDownvote.bind(this, posts[key], key) }> 
                          <FontAwesome
                            className='sortDown'
                            name='sort-down'
                            size='lg'
                            // spin
                          />
                        <span className="down">{ posts[key].downvote }</span>
                      </div>
                  </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
