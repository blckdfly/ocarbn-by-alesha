import React from 'react';
import '../styles/ProjectDetail.css';
import projects from '../constant/projectData';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProjectDetail = () => {
  const navigate = useNavigate(); // Buat navigasi

  return (
    <div className="project-detail-container">

      <div className="gradient-circle"></div>
      
      <div className="project-list-section">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <div className="project-date">
                <span>{project.date} CO₂</span>
                <span>{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>

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
  );
};

export default ProjectDetail;
