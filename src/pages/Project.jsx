import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Project.css';
import earthShape from '../assets/Earth.png';
import { articleCover } from '../constant/articleConstant';
import { community, projects } from '../constant/projectConstant';
import Footer from '../components/Footer';

const ProjectList = () => {
  return (
    <div className="project-container">
      <div className="featured-projects">
        <h2>Reinvent Conservation with Us</h2>
        <p className="intro-text">
          Join us in transforming the future of marine conservation. Through innovative blue carbon solutions and blockchain technology, we're creating a transparent marketplace that empowers global collaboration to protect ocean ecosystems and drive sustainable change.
        </p>
        <div className="project-list">
          {Object.entries(projects).map(([key, project]) => (
            <div key={key} className="project-item">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="date">{project.date}</p>
              <button>Get in Touch</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="articles-section">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articleCover.map(({ id, image, title, date }) => (
          <div key={id} className="article-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Container = () => {
  const navigate = useNavigate();

  return (
    <div className='container-project'>
      <ProjectList />
      <button className="load-more" onClick={() => navigate('/projectDetail')}>Explore Project</button>
      <div className="divider2"></div>
      <Articles />
      <div className="divider2"></div>
      <Footer />
    </div>
  );
};

function Project() {
  return (
    <div className="project-container">
      <div className="gradient-circle"></div>
      <div className="hero-section">
        <h1>Thriving Oceans, Together</h1>
        <p>We collaborate closely with marine conservation organizations to protect ocean ecosystems and drive the adoption of sustainable blue carbon practices.</p>
        <div className="project-stats">
          <div className="stat-item">
            <h2>34</h2>
            <p>Partnership</p>
          </div>
          <div className="stat-item">
            <h2>Transparency, Trust</h2>
            <p>Project has many locations</p>
          </div>
          <div className="stat-item">
            <h2>170</h2>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h2>12</h2>
            <p>Locations</p>
          </div>
        </div>
      </div>
      <img className="earth-shape" src={earthShape} alt='Earth Shape'></img>
      <div className="community-section">
        <h2>From Our Community</h2>
        <div className="community-grid">
          {Object.entries(community).map(([key, item]) => (
            <div key={key} className="community-item">
              <img src={item.img} alt="community" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Container />
    </div>
  );
}

export default Project;
