import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/test">About</Link>
    </div>
  );
}

export default Header;
