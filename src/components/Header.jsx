import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/ocarbn-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="ocarbn Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
        <button className="connect-wallet">Connect Wallet</button>
      </div>
    </header>
  );
}

export default Header;
