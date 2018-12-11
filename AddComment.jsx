import React, { Component } from 'react';
import { Link } from 'react-router';

class Comments extends Component {

  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/comments/' + key).set({
      text: post.comment.text,
      upvote: post.comment.upvote + 1,
      downvote: post.comment.downvote
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
              <div key={key}>
                <Link
                  to={{
                    pathname: '/view-post/',
                    hash: key.toString(),
                    state: { post_id: '{key}' },
                  }}
                > { posts[key].title }
                </Link>

                <div>Upvotes: { posts[key].upvote }</div>
                <div>Downvotes: { posts[key].downvote }</div>

                <div>
                  <button 
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button>
                  <button 
                    onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Downvote
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Comments;
