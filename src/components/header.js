import React, { Component } from 'react';
import { Link }             from 'react-router';

export default class Header extends Component {
  render() {
    return <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to="/query">Query</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  }
}
