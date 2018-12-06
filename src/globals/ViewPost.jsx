import React, { Component } from 'react';
// import * as firebase from "firebase";

// import config from './firebase-config';
import { Link } from 'react-router';

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
