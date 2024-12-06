import React from 'react';
import '../styles/Home.css';
import '../styles/Partners.css'; 
import { partners, industryLeaders } from '../constant/logoConstant';
import { articleCover } from '../constant/articleConstant';
import aboutImage from '../assets/about-home.png';
import verraCertified from '../assets/verra.png'
import Footer from '../components/Footer';

const Articles = () => {
  return (
    <div className="articles-section">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articleCover.map(({ id, image, title, date, url }) => (
          <div key={id} className="article-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} />
            </a>
            <p>{title}</p>
            <p>{date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="partners-container">
      <div className="partners-section">
        <div className="partners-text">
          <h2>Our Partner</h2>
          <p>
            Collaboration is key in addressing the climate and environmental crisis. Together with these leading partners, we develop innovative and impactful solutions to preserve our planet for future generations.
          </p>
        </div>
        <div className="partners-grid">
          {Object.entries(partners).map(([key, logo]) => (
            <div key={key} className="partner-item">
              <img src={logo} alt={`${key.replace('_', ' ')} logo`} />
            </div>
          ))}
        </div>
      </div>

      <div className='industry-title'>
        <h2>Backed by Industry Leader</h2>
      </div>
      <div className="industry-leaders-grid">
        {Object.entries(industryLeaders).map(([key, logo]) => (
          <div key={key} className="leader-item">
            <img src={logo} alt={`${key.replace('_', ' ')} logo`} />
          </div>
        ))}
      </div>
      <div className='certified'>
        <h2>Certified by Verra, a Global Standard in Carbon Offsetting</h2>
        <div className='certiImage'> <img src={verraCertified} alt="Verra Certified" /> </div>
        <p>Every blue carbon credit on our platform is certified by Verra, the global 
          authority in carbon standards. Backed by the most rigorous verification process, 
          our credits guarantee measurable, real-world impact on both carbon reduction and 
          marine ecosystem restoration. With Verra’s seal of approval, each contribution is 
          poised to make a lasting difference for the planet.</p>
      </div>
      <div className="divider2"></div>
      <Articles />
      <div className="divider2"></div>
      <Footer />
    </div>
  );
};

function Home() {
  return (
    <div className="home">
      <div className="gradient-circle"></div>
      <div className="hero">
        <div className="hero-text">
        <h1>Protecting Marine Ecosystems <br></br>for a Resilient Planet</h1>
        <h2>Pioneering the Future of Blue Carbon Investments through <br></br>Blockchain-Powered Marketplaces</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="aboutHome">
        <div className="aboutContent">
          <h1>Where Cutting-Edge Technology Meets Ocean Conservation</h1>
          <p>The blue carbon market is set to become a key player in global climate strategies, with its immense
             potential to combat climate change through ocean and coastal ecosystems. From mangrove 
             restoration to seagrass bed conservation, blue carbon technologies are positioned to create lasting 
             environmental and economic impact.</p>
          <p>Our blockchain-based platform merges cutting-edge technology with sustainability, ensuring 
            seamless, transparent, and secure transactions for blue carbon credits. By leveraging the power of 
            decentralized finance and tokenized ecosystems, we offer access to premium blue carbon projects 
            that are both scalable and impactful.</p>
        </div>
        <div className="aboutImage">
          <img src={aboutImage} alt="About Ocean Conservation" />
        </div>
      </div>
      <div className="divider1"></div>
      <div className='serviceTitle'>
        <h1>What We Can Offer</h1>
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
      <div className="projects-container">
        <div className="projects">
          <h1>8,294,567</h1>
          <p>Blue Carbon Credits Ready for Action</p>
        </div>
        <div className="projectsDesc">
          <p>
          Seize the opportunity to drive impactful ocean conservation through blue carbon 
          credits. Each credit represents a tangible commitment to restoring vital marine 
          ecosystems—mangroves, salt marshes, and seagrass beds—that capture carbon at 
          astonishing rates.
          </p>
        </div>
      </div>
      <Container />
    </div>
  );
}

export default Home;
