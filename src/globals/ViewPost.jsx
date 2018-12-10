import React, { Component } from 'react';

import { withRouter } from "react-router";

import { Link } from 'react-router';

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
		
		var key = this.props.location.state.id.key;
		var current_post = this.props.firebase.ref("posts/" + key );
    


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
		// var title="loading"; 
		// var upvote="loading"; 
		// var downvote="loading";
		return (
	      <div className="Posts">
          <div className="Title">
            {this.state.upvote}
            {this.state.downvote}
            {this.state.title}
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
