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
  );
};

export default ProjectDetail;
