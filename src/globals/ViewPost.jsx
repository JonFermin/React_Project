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
    	key: '',
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
      this.setState({
      	key: key,
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
		let key = this.props.location.state.id;
    var current;
    
    for(var test in posts) {
      if(posts.hasOwnProperty(test)) {
          current = posts[test];
          break;
      }
    }


    var for_com;
    var against_com;


    var ForElement;
          
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


          { !!current.for &&
            Object.keys(current.for).map(function(key){
              return(
                <div className = "against_comments">
                  <h1 className = "comment"> {current.for[key].text} </h1>
                   <div className = "buttonContainer">
                      <div onClick={ _this.handleUpvote.bind(this, current.for[key], key) }> 
                          <FontAwesome
                            className='sortUp'
                            name='sort-up'
                            size='lg'
                            // spin
                          />
                        <span className="up">{ current.for[key].upvote }</span>
                      </div>
                      <div onClick={ _this.handleUpvote.bind(this, current.for[key], key) }> 
                          <FontAwesome
                            className='sortDown'
                            name='sort-down'
                            size='lg'
                            // spin
                          />
                        <span className="down">{ current.for[key].downvote} </span>
                      </div>
                  </div>
                </div>

                );
            })
          }
        
          { !!current.against &&
            Object.keys(current.against).map(function(key){
              return(
                <div className = "against_comments">
                  <h1 className = "comment"> {current.against[key].text} </h1>
                   <div className = "buttonContainer">
                      <div onClick={ _this.handleUpvote.bind(this, posts[key], key) }> 
                          <FontAwesome
                            className='sortUp'
                            name='sort-up'
                            size='lg'
                            // spin
                          />
                        <span className="up">{ current.against[key].upvote }</span>
                      </div>
                      <div onClick={ _this.handleUpvote.bind(this, posts[key], key) }> 
                          <FontAwesome
                            className='sortDown'
                            name='sort-down'
                            size='lg'
                            // spin
                          />
                        <span className="down">{ current.against[key].downvote} </span>
                      </div>
                  </div>


                </div>

                );
            })
          }
	      </div>


	    );
	}
};
export default withRouter(ViewPost);
