import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <h1>Md Sheik</h1>
      <nav>
        <ul>
            <li><Link className="nav-button" to="/">Home</Link></li>
            <li><Link className="nav-button" to="/Projects">Projects</Link></li>
            <li><Link className="nav-button" to="/RoadMap">Road Map</Link></li>
            <li><Link className="nav-button" to="/ContactMe">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
