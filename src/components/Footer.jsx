import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <h2>Dive Deeper</h2>
      <div className="footer-links">
        <div className="link-column">
          <p>Carbon Credits</p>
          <ul>
            <li>Purchase</li>
            <li>Offset</li>
            <li>Radius</li>
            <li>API</li>
          </ul>
        </div>
        <div className="link-column">
          <p>Rebalance the Planet</p>
          <ul>
            <li>Trust and Safety</li>
            <li>Publications</li>
            <li>Suppliers</li>
          </ul>
        </div>
        <div className="link-column">
          <p>Resources</p>
          <ul>
            <li>Overview</li>
            <li>Governance</li>
            <li>Verifications</li>
          </ul>
        </div>
        <div className="link-column">
          <p>Company</p>
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
      <p>&copy; 2024 ocarbn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
