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
                // <div> { JSON.stringify(key) } </div>
    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div className="single-post">
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
                        // size='lg'
                        // spin
                      />
                  { posts[key].upvote }</div>
                  <div className="down" onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                      type="button"> 
                    <FontAwesome
                        className='sortDown'
                        name='sort-down'
                        // size='1x'
                        // spin
                      />
                   { posts[key].downvote }</div>
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
