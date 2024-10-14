import React from 'react';
import '../styles/About.css';
import { teamImages } from '../constant/peopleConstant';
import HeaderAbout from '../assets/header-bg.png'
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="platform-section">
        <div className="platform-text">
          <h2>Our platform was born from an agreement</h2>
          <p>
            Blue carbon projects can only thrive with resilient blockchain technology, just like the oceans we protect.
          </p>
        </div>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            By promoting accountability and trust, we seek to drive significant global collaboration 
            and investment in blue carbon initiatives. Through this marketplace, we hope to unlock new opportunities 
            for environmental sustainability, empowering nations, businesses, and individuals to invest in the future of our oceans.
          </p>
        </div>
      </div>
  );
};

const ContainerAbout = () => {
  return (
    <div className='container-about'>
      <AboutUs />
    </div>
    
  );
};

function About() {
  return (
    <div className="about">
      <div className="gradient-circle"></div>
      <div className="HeaderAbout">
          <img src={HeaderAbout} alt="About Ocean Conservation" />
        </div>
      <div className="headerText">
        <p>
          We envision oceans as key in fighting climate change through blockchain, we create a transparent marketplace for marine carbon credits, 
          driving investment in blue carbon projects and protecting ocean ecosystems.
        </p>
      </div>
      
      <ContainerAbout />

      <div className="team-section">
        <h1>The People Behind</h1>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamImages.Naufal} alt="Naufal Ziyaadaturrahman" />
            <h3>Naufal Ziyaadaturrahman</h3>
            <p>Position</p>
          </div>
          <div className="team-member">
            <img src={teamImages.Irfan} alt="Irfan Hera Nurrohman" />
            <h3>Irfan Hera Nurrohman</h3>
            <p>Position</p>
          </div>
          <div className="team-member">
            <img src={teamImages.Damar} alt="Athaya Damar Arthadipraja" />
            <h3>Athaya Damar Arthadipraja</h3>
            <p>Position</p>
          </div>
          <div className="team-member">
            <img src={teamImages.John} alt="John Devin Christianto" />
            <h3>John Devin Christianto</h3>
            <p>Position</p>
          </div>
          <div className="team-member">
            <img src={teamImages.Joe} alt="Joe Akbar Dharmawan" />
            <h3>Joe Akbar Dharmawan</h3>
            <p>Position</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;