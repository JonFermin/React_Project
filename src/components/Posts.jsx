import React, { Component } from 'react';
import { Link } from 'react-router';

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
                  to={`/ViewPost/${ key }`}
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

export default Posts;