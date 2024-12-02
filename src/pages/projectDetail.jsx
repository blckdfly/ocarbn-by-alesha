import React from 'react';
import '../styles/ProjectDetail.css';
import projects from '../constant/projectData';

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <div className="project-list-section">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={require(`../assets/${project.img}`).default} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <div className="project-date">
                <span>{project.date} CO₂</span>
                <span>{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <button className="get-in-touch">Get in Touch</button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-section">
        <h2>Dive Deeper</h2>
        <div className="footer-grid">
          <div>
            <h3>Carbon Credits</h3>
            <p>Purchase</p>
            <p>Offtake</p>
            <p>Radius</p>
            <p>API</p>
          </div>
          <div>
            <h3>Rebalance the Planet</h3>
            <p>Trust and Safety</p>
            <p>Publications</p>
            <p>Suppliers</p>
            <p>Sales</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Customer Support</p>
            <p>Blog</p>
            <p>Documentation</p>
            <p>Guides</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
