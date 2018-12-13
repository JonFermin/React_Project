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
        	<li><a href="/about"> About </a></li>
        
          <li><a href="/"> Home </a></li>
        </ul>
        <div className = "writeDiv"><Link to={"add-post"}><img id ="writeTest" src={img} alt="test"/></Link></div>

      </div>
    );
  }
}

export default Nav;
