import React from 'react';
import './App.css';
import logo from './alesha-logo.png';


function App() {
  return (
    <div className="coming-soon">
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Coming Soon</h1>
        <p>We're working hard to bring you something amazing. Stay tuned!</p>
       

      </div>
    </div>
  );
}

export default App;