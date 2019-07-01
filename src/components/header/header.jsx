import React from 'react';

import './header.css';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <a href="/">StarWarsDB</a>
    </div>
    <ul className="header-menu">
      <li className="header-menu-item">
        <a href="/">Planets</a>
      </li>
      <li className="header-menu-item">
        <a href="/">People</a>
      </li>
      <li className="header-menu-item">
        <a href="/">Starships</a>
      </li>
    </ul>
  </div>
);

export default Header;
