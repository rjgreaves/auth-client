import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="signin" activeClassName="active">Sign In</Link>
    </nav>
  </div>
);

export default Header;