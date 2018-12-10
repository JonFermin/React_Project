import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      	<img className="logo" alt="logo-icon" src="http://flyhamilton.ca/app/uploads/2017/01/test-img.jpg" />
      	<ul className="nav-list">
      		<li> 
        		<Link to={"/"} > Home </Link>
        	</li>
        	<li>
        		<Link to={"add-post"} >Add Post </Link>
        	</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
