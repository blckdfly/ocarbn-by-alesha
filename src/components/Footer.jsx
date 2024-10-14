import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="link-column">
          <p>Carbon Credits</p>
          <ul>
            <li>Purchase</li>
            <li>Offset</li>
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
          </ul>
        </div>
      </div>
      <p>&copy; 2024 ocarbn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
