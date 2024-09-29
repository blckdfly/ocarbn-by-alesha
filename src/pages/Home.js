import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Protecting Marine Ecosystems for a Resilient Planet</h1>
        <p>Powering the Future of Blue Carbon investments through a Marketplace</p>
      </div>
      <div className="about">
        <h1>Where Cutting-Edge Technology 
          Meets Ocean Conservation</h1>
        <p>The blue carbon market is set to become a key player in global climate strategies, with its immense
           potential to combat climate change through ocean and coastal ecosystems. From mangrove 
           restoration to seagrass bed conservation, blue carbon technologies are positioned to create lasting 
           environmental and economic impact.</p>
        <p>Our blockchain-based platform merges cutting-edge technology with sustainability, ensuring 
          seamless, transparent, and secure transactions for blue carbon credits. By leveraging the power of 
          decentralized finance and tokenized ecosystems, we offer access to premium blue carbon projects 
          that are both scalable and impactful.</p>
      </div>
      <div className="services">
        <div className="service">
          <h2>Sustainable Investments</h2>
          <p>Invest in blue carbon projects that make a real difference.</p>
        </div>
        <div className="service">
          <h2>Transparent Marketplace</h2>
          <p>Easy-to-use platform for buying and selling carbon credits.</p>
        </div>
        <div className="service">
          <h2>Ecosystem Protection</h2>
          <p>Support projects that protect and restore marine ecosystems.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;