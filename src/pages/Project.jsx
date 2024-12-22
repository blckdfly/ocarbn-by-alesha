import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Project.css';
import earthShape from '../assets/Earth.png';
import { articleCover } from '../constant/articleConstant';
import { community } from '../constant/projectConstant';
import projects from '../constant/projectData';
import partner1 from '../assets/partners/coral-triangle-initiative.png';
import partner2 from '../assets/partners/konservasi-alam-nusantara.png';
import partner3 from '../assets/partners/ykli.png';
import partner4 from '../assets/partners/indonesia-biru.png';

const ProjectList = () => {
  const navigate = useNavigate(); // Buat navigasi

  return (
    <div className="project-container">
      <div className="gradient-circle"></div>
      <div className="featured-projects">
        <div className='reinvent'>
          <h2>Reinvent Conservation with Us</h2>
          <p className="intro-text">
            Join us in transforming the future of marine conservation. Through innovative blue carbon solutions and blockchain technology, we're creating a transparent marketplace that empowers global collaboration to protect ocean ecosystems and drive sustainable change. Together, we can make a lasting impact on our planet's most vital resources.
          </p>
        </div>


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
        className="load-more-2"
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
  const navigate = useNavigate(); // Buat navigasi
  return (
    <div className="project-container">
      <div className="gradient-circle"></div>
      <div className="hero-section">
        <div className='hero-section-1'>
          <h1>Thriving Oceans, Together</h1>

          <p style={{ color: 'white', textAlign: 'center' }}>
            We collaborate closely with marine conservation organizations to protect ocean ecosystems and drive the adoption of sustainable blue carbon practices.
          </p>

          <button
            className="load-more-1"
            onClick={() => navigate('/project-detail')}
          >
            Explore Project
          </button>
        </div>
        <div className='hero-section-2'>
          <div className="project-stats">
            <div className="stat-item">
              <p>Partnership</p>
              <h2>34</h2>
            </div>
            <div className="stat-item">
              <p>Projects</p>
              <h2>170</h2>
            </div>
            <div className="stat-item">
              <p>Locations</p>
              <h2>12</h2>
            </div>
          </div>
        </div>
        <div className='hero-section-3'>
          <p style={{ color: 'white', textAlign: 'center' }}>Partnering with renowned marine conservation organizations to drive impactful blue carbon initiatives, we are committed to preserving marine biodiversity, enhancing coastal resilience, and fostering sustainable ocean stewardship.</p>

          <div className="image-container">
            <img src={partner1} alt="Image 1" />
            <img src={partner2} alt="Image 2" />
            <img src={partner3} alt="Image 3" />
            <img src={partner4} alt="Image 4" />
          </div>


        </div>


      </div>
      <img className="earth-shape" src={earthShape} alt='Earth Shape'></img>
      <div className="community-section">
        <h2>From Our Community</h2>

        <div className="community-grid">
          {Object.entries(community).map(([key, item]) => (
            <div key={key} className="community-item" style={{ backgroundImage: `url(${item.img})` }}>

              <div className='community-item-text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>

          ))}
        </div>
      </div>
      <Container />
    </div>
  );
}

export default Project;
