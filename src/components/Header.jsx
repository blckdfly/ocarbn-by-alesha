import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/ocarbn-logo.png';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="ocarbn Logo" />
//           </Link>
//         </div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/project">Project</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//         <button className="connect-wallet">Connect Wallet</button>
//       </div>
//     </header>
//   );
// }
// function Header() {
//   const [account, setAccount] = useState(null);

//   const connectWallet = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         console.log('Connected account:', accounts[0]);
//       } catch (error) {
//         console.error('Error connecting wallet:', error);
//       }
//     } else {
//       alert('MetaMask not found. Please install it!');
//     }
//   };

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="ocarbn Logo" />
//           </Link>
//         </div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/project">Project</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </nav>
//         <div>
//           {account ? (
//             <span className="wallet-address">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
//           ) : (
//             <button className="connect-wallet" onClick={connectWallet}>
//               Connect Wallet
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

function Header() {
  const [account, setAccount] = useState(null);

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
    console.log('Wallet disconnected');
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
              <span className="wallet-address">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
              <button className="disconnect-wallet" onClick={disconnectWallet}>Disconnect</button>
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
