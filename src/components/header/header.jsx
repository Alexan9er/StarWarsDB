import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <Link to="/">StarWarsDB</Link>
    </div>
    <ul className="header-menu">
      <li className="header-menu-item">
        <Link to="/people/">People</Link>
      </li>
      <li className="header-menu-item">
        <Link to="/planets/">Planets</Link>
      </li>
      <li className="header-menu-item">
        <Link to="/starships/">Starships</Link>
      </li>
    </ul>
  </div>
);

export default Header;
