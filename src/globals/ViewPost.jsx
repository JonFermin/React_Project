import React, { Component } from 'react';

import { withRouter } from "react-router";

import AddComment from "../components/AddComment";

var FontAwesome = require('react-fontawesome');




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
    
    if (this.props.loading) {
      return (
        <div>
          <img className="loading" alt="loading icon" src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif"/>
        </div>
      );
    }

		return (
	      <div className="ViewPosts">
          
          <div className="title">
            {this.state.title}
          </div>  
          
          <div className="buttonContainer">
            
            <div className="up" onClick={this.handleUpvote.bind(_this, posts[key], key) }
                  type="button"> 
                  <FontAwesome
                    className='sortUp'
                    name='sort-up'
                    
                  />
            {_this.state.upvote}
            </div>
            
            <div className="down" onClick={this.handleDownvote.bind(_this, posts[key], key) }
                type="button"> 
              <FontAwesome
                  className='sortDown'
                  name='sort-down'
                  
                />
             {_this.state.downvote}
            </div>

          </div>  
            
            
          
          

          
          <AddComment/>
         </div> 
	       
	    );
	}
};
export default withRouter(ViewPost);
