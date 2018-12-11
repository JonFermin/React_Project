import img from './pen-square-solid.svg'

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
          <div class = "writeDiv">
        		<Link to={"add-post"}><img id ="writeTest" src={img} alt="test"/></Link></div>
        	</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
