import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  authBUtton() {
    return <button>Sign In</button>
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/">{ this.authBUtton() }</Link>
        </li>
      </nav>
    );
  };
}

export default Header;
