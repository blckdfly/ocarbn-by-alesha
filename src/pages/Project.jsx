import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Project.css';
import earthShape from '../assets/Earth.png';
import { articleCover } from '../constant/articleConstant';
import { community } from '../constant/projectConstant';
import projects from '../constant/projectData';

// asli
const ProjectList = () => {
  const navigate = useNavigate(); // Buat navigasi

  return (
    <div className="project-container">
      <div className="gradient-circle"></div>
      <div className="featured-projects">
        <h2>Reinvent Conservation with Us</h2>
        <p className="intro-text">
          Join us in transforming the future of marine conservation. Through innovative blue carbon solutions and blockchain technology, we're creating a transparent marketplace that empowers global collaboration to protect ocean ecosystems and drive sustainable change.
        </p>

        {/* =================
        <div className="project-list">
          {Object.entries(projects).map(([key, project]) => (
            <div key={project.id} className="project-item">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="date">{project.date}</p>

              <button
                className="get-in-touch"
                onClick={() => navigate(`/detail-conservation/${project.id}`)}
              >
                Get in Touch
              </button>
            </div>
          ))}
        </div>
        =========== */}

<div className="project-list-section">
  {projects.map((project) => (
    <div
      key={project.id}
      className="project-card"
      style={{ backgroundImage: `url(${project.img})` }}
    >
      <div className="project-info">
        <h3>{project.name}</h3>
        <h5>{project.type}</h5>
        
        <p className="project-description">{project.description}</p>

        <div className="project-date">
          <div className='project-date-left'>
            <h4>{project.date} tCO₂</h4> 
            <h6>Annual removal capacity</h6>
          </div>
          <div className='project-date-right'>
            <h4>{project.year}</h4>
            <h6>scheduled</h6>
          </div>


        </div>

        <button
          className="get-in-touch"
          onClick={() => navigate(`/detail-conservation/${project.id}`)}
        >
          Get in Touch
        </button>
      </div>
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
        {articleCover.map(({ id, image, title, date, url }) => (
          <div key={id} className="article-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} />
            </a>
            <p style={{ fontWeight: 'bold' }}>{title}</p>
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

      <button
        className="load-more"
        onClick={() => navigate('/project-detail')}
      >
        Explore Project
      </button>

      <div className="divider2"></div>
      <Articles />
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
