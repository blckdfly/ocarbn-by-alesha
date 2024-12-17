import React from 'react';
import '../styles/DetailConservation.css';
import { useParams, Link } from 'react-router-dom';
import projects from '../constant/projectData';
import headerDetailConservation from '../assets/project/header-detail-conservation.png';

function DetailConservation() {
  const { id } = useParams(); // Ambil id dari URL
  const project = projects.find((p) => p.id === parseInt(id)); // Konversi id jadi number

  if (!project) {
    return <div>Project not found</div>; // Fallback kalau ID nggak valid
  }

  return (
    <div className="detail-conservation">

      <div className='detail-conservation-header'>
        <img src={headerDetailConservation} alt="Header Detail Conservation" />
      </div>

      <div className='parent'>
        <div className='child child-left'>
          <img src={project.img} alt={project.name} />

          <div className='project-name'>
            {project.name}
          </div>

          <div className='project-long-desc'>
            {project.longDesc1}
            <br />
            <br />
            {project.longDesc2}
          </div>
        </div>
        
        <div className='child child-right'>
        
          <div className='map'>
            <img src={project.map} alt="Project Map" />
          </div>

          <div className='detail-info'>
            <div className='left'>
              <h5>Project Scale</h5>
              <h4><b>{project.projectScale}</b></h4>

              <h5>Project Owner</h5>
              <h4><b>{project.projectOwner}</b></h4>
              
              <h5>Timeline</h5>
              <h4><b>{project.timeline}</b></h4>
              
            </div>
            <div className='right'>
              <h5>ID Project</h5>
              <h4><b>{project.idProject}</b></h4>

              <h5>Tonnes</h5>
              <h4><b>{project.tonnes}</b></h4>
            </div>
          </div>
          
          <div className='stat'>
            <h3>Stats</h3>

            <h5>Total Retirements</h5>
            <h4><b>{project.totalRetirement}</b></h4>

            <h5>Remaining Supply</h5>
            <h4><b>{project.remainingSupply}</b></h4>
          </div>
          
          {/* Tambahkan button menuju Transaction.jsx */}
          {/* versi sebelum passing */}
          {/* <div className='transaction-button'>
            <Link to="/transaction">
              <button className="btn btn-primary">Go to Transaction</button>
            </Link>
          </div> */}

          {/* versi sesudah passing */}
          <div className='transaction-button'>
            <Link to={`/transaction/${project.id}`}>
              <button className="btn btn-primary">Go to Transaction</button>
            </Link>
          </div>


        </div>
      </div>

    </div>
  );
}

export default DetailConservation;
