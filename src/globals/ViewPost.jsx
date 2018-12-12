import React, { Component } from 'react';

import { withRouter } from "react-router";

import AddComment from "../components/AddComment";

var FontAwesome = require('react-fontawesome');



class ViewPost extends Component { 
  handleCommentUpvote = (post, my_key, type) => {
    this.props.firebase.ref('posts/' + this.state.key + "/" + type + "/" + my_key).set({
      text: post.text,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleCommentDownvote = (post, my_key, type) => {
    this.props.firebase.ref('posts/' + this.state.key + "/" + type + "/" + my_key).set({
      text: post.text,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });

  }


  constructor(props){
    super(props);
    this.state = {
    	key: '',
      title: '',
      for: {},
      against: {},
    };
  }
	componentDidMount() {
      var key = this.props.location.state.id.key;
      var current_post = this.props.firebase.ref("posts/" + key );
      current_post.on('value', snapshot => {
      this.setState({
      	key: key,
        title: snapshot.val().title,
        upvote: snapshot.val().upvote,
        downvote: snapshot.val().downvote,
        for: snapshot.val().for,
        against: snapshot.val().against,
      });
    });
  };
	render() {
    Object.keys(this.state.for).map(function(key){
      console.log(key);
    });
		let posts = this.props.posts;
    let _this = this;
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
            
          <AddComment my_key = {this.props.location.state.id.key}/>

          <div className = "comment_section">
          <div className = "LEFT">
          { !!_this.state.for &&
            Object.keys(this.state.for).reverse().map(function(key){
              return(
                  <div className="for_comments">
                  <p className = "comment"> {_this.state.for[key].text} </p>
                   <div className = "buttonContainer">
                      <div onClick={ _this.handleCommentUpvote.bind(this, _this.state.for[key], key, "for") }> 
                          <FontAwesome
                            className='sortUp'
                            name='sort-up'
                            size='lg'
                            // spin
                          />
                        <span className="up">{ _this.state.for[key].upvote }</span>
                      </div>
                      <div onClick={ _this.handleCommentDownvote.bind(this, _this.state.for[key], key, "for") }> 
                          <FontAwesome
                            className='sortDown'
                            name='sort-down'
                            size='lg'
                            // spin
                          />
                        <span className="down">{ _this.state.for[key].downvote} </span>
                      </div>
                  </div>
                  </div>

                );
            })
          }
          </div>
          <div className = "RIGHT">
          { !!_this.state.against &&
            Object.keys(_this.state.against).reverse().map(function(key){
              return(
                <div className = "against_comments">
                  <p className = "comment"> {_this.state.against[key].text} </p>
                   <div className = "buttonContainer">
                      <div onClick={ _this.handleCommentUpvote.bind(this, _this.state.against[key], key, "against") }> 
                          <FontAwesome
                            className='sortUp'
                            name='sort-up'
                            size='lg'
                            // spin
                          />
                        <span className="up">{ _this.state.against[key].upvote }</span>
                      </div>
                      <div onClick={ _this.handleCommentDownvote.bind(this, _this.state.against[key], key, "against") }> 
                          <FontAwesome
                            className='sortDown'
                            name='sort-down'
                            size='lg'
                            // spin
                          />
                        <span className="down">{ _this.state.against[key].downvote} </span>
                      </div>
                  </div>


                </div>

                );
            })
          }
	      </div>
        </div>
        </div>


	    );
	}
};
export default withRouter(ViewPost);
