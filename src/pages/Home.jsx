import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Protecting Marine Ecosystems for a Resilient Planet</h1>
        <p>Powering the Future of Blue Carbon investments through a Marketplace</p>
      </div>
      <div className="aboutHome">
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
          <h2>Verified Blue Carbon Projects</h2>
          <p>Access a curated selection of premium blue carbon projects, from mangrove 
            restoration to seagrass bed conservation, all verified by leading environmental 
            standards.</p>
        </div>
        <div className="service">
          <h2>Blockchain-Backed Transparency</h2>
          <p>Our platform leverages blockchain technology to ensure transparent, secure, and 
            traceable transactions for every blue carbon credit purchased, providing full 
            visibility into your environmental impact.</p>
        </div>
        <div className="service">
          <h2>End-to-End Carbon Solutions</h2>
          <p>Whether you’re an investor, company, or government entity, our comprehensive 
            services guide you through every step of the carbon credit process—from project 
            discovery to credit acquisition and portfolio management.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;