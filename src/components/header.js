/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { makeSelectAuthenticated } from '../../containers/App/appSelectors';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return <li className="nav-item">
        <Link to="/signout" className="nav-link">Sign Out</Link>
      </li>
    }
    else {
      return [
        <li className="nav-item" key="{1}">
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key="{2}">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

export default connect(mapStateToProps)(Header);