import React, { Component } from 'react';

import { withRouter } from "react-router";

import { Link } from 'react-router';

var FontAwesome = require('react-fontawesome');

// import * as firebase from "firebase";

// import config from './firebase-config';

	// let post_id = this.props.location.params.id;
    // console.log(post_id);
    // <Link to="/"> {post_id} </Link>

    // ref.child('downvote').once('value').then(function(data){
    //  downvote = data.val();
    // });
    // ref.child('upvote').once('value').then(function(data){
    //  upvote = data.val();
    // });



class ViewPost extends Component { 

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

  handleCommentUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleCommentDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  }


  constructor(props){
    super(props);
    this.state = {
      title: '',
      upvote: '',
      downvote:'',
      for: {},
      against: {},
    };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
	componentDidMount() {
      var key = this.props.location.state.id.key;
      var current_post = this.props.firebase.ref("posts/" + key );
      current_post.on('value', snapshot => {
        console.log(snapshot.val());
      this.setState({
        title: snapshot.val().title,
        upvote: snapshot.val().upvote,
        downvote: snapshot.val().downvote,
        for: snapshot.val()
      });
    });
  };
	render() {
		let posts = this.props.posts;
    let _this = this;
		var key = this.props.location.state.id.key;
		var current_post = this.props.firebase.ref("posts/" + key );
    
    if (this.props.loading) {
      return (
        <div>
          <img className="loading" src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif"/>
        </div>
      );
    }


		function grab_post() {
			current_post.child('title').once('value').then(function(data){
				console.log(data.val());
	      			return (
	      				<div class='kms'>
	      				{this.state.title}
	      				</div>
	      			)
	      	});
	     };

		return (
	      <div className="Posts">
          <div className="Title">
            {this.state.title}
           
          <div>
          <div className="up" onClick={this.handleUpvote.bind(_this, posts[key], key) }
                  type="button"> 
                  <FontAwesome
                    className='sortUp'
                    name='sort-up'
                    // size='lg'
                    // spin
                  />
            {_this.state.upvote}</div>
            <div className="down" onClick={this.handleDownvote.bind(_this, posts[key], key) }
                type="button"> 
              <FontAwesome
                  className='sortDown'
                  name='sort-down'
                  // size='1x'
                  // spin
                />
             {_this.state.downvote}</div>
          </div>
            
            
          </div>
          <div className="For">

          </div> 
          <div className="Against">

          </div> 
	      </div>
	    );
	}
};
export default withRouter(ViewPost);
