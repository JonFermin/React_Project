import React, { Component } from 'react';
// import * as firebase from "firebase";

// import config from './firebase-config';
import { Link } from 'react-router';

import '../css/comment.css';

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
</style>


class ViewPost extends Component {  
  render() {
    let post_id = this.props.location.hash;
    return (
    	<div>
	      <h1> Child Component </h1>
	  		
	      <Link to="/"> {post_id} </Link>
	    </div>
    );
  }
}

export default ViewPost;
