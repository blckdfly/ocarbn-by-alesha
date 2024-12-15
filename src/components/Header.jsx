import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/ocarbn-logo.png';

function Header() {
  const [account, setAccount] = useState(null);
  const [showModal, setShowModal] = useState(false); // state untuk kontrol modal

  const connectWallet = async () => {
    console.log('Tombol Connect Wallet di-click!');
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask not found. Please install it!');
    }
  };

  const disconnectWallet = () => {
    setAccount(null); // Reset account ke null
    setShowModal(false); // Menutup modal setelah disconnect
    console.log('Wallet disconnected');
  };

  const openModal = () => {
    setShowModal(true); // Menampilkan modal saat wallet address di-click
  };

  const closeModal = () => {
    setShowModal(false); // Menutup modal jika cancel
  };

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
        <div>
          {account ? (
            <div>
              <span className="wallet-address" onClick={openModal}>
                {`${account.slice(0, 6)}...${account.slice(-4)}`}
              </span>
              {showModal && (
                <div className="overlay">
                  <div className="modal">
                    <h2>Disconnect Wallet</h2>
                    <p>Are you sure you want to disconnect?</p>
                    <div className="modal-buttons">
                      <button className="modal-confirm" onClick={disconnectWallet}>Yes, Disconnect</button>
                      <button className="modal-cancel" onClick={closeModal}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className="connect-wallet" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;