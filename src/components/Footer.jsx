import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">Dive Deeper</h2>
      <div className="footer-links">
        <div className="link-column">
          <p className="column-title">Carbon Credits</p>
          <ul>
            <li>Purchase</li>
            <li>Offtake</li>
            <li>Radius</li>
            <li>API</li>
          </ul>
        </div>
        <div className="link-column">
          <p className="column-title">Rebalance the Planet</p>
          <ul>
            <li>Trust and Safety</li>
            <li>Publications</li>
            <li>Suppliers</li>
            <li>Distributions</li>
          </ul>
        </div>
        <div className="link-column">
          <p className="column-title">Resources</p>
          <ul>
            <li>Customer</li>
            <li>News</li>
            <li>Documentation</li>
            <li>Guide Types</li>
          </ul>
        </div>
        <div className="link-column">
          <p className="column-title">Company</p>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Partners</li>
            <li>Security</li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2024 Ocarbn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;