import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to={"/"} > Home </Link>
        <Link to={"add-post"} >Add Post </Link>
      </div>
    );
  }
}

export default Nav;
