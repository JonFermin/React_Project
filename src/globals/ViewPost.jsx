import React, { Component } from 'react';
// import * as firebase from "firebase";

// import config from './firebase-config';
import { Link } from 'react-router';

class ViewPost extends Component {  
  render() {
    console.log(this.props.value);
    return (
    	<div>
	      <h1> hello </h1>
	      <Link to="/"> </Link>
	    </div>
    );
  }
}

export default ViewPost;
