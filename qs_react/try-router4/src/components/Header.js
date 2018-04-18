import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/roster">Roster</Link>
      </li>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
    </nav>
  </header>
);
export default Header;