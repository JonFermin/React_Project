import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './DQ.png';


class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      	<Link to={"/"}><img className="logo" alt="logo-icon" src={logo} /></Link>
      	<ul className="nav-list">
        	<li>
        		<Link to={"add-post"} >Add Post </Link>
        	</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
