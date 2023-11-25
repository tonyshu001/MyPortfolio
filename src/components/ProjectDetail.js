import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectDetail.css'; 
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectData';


const ProjectDetail = () => {
    
    const [project, setProject] = useState(null);
    const { projectTitle } = useParams(); 

    useEffect(() => {
        // Find the project based on the projectTitle
        const foundProject = projects.find(p => p.id === projectTitle);
        if (foundProject) {
        setProject(foundProject);
        } else {
        console.error('Project not found');
        }
    }, [projectTitle]);

    if (!project) {
        return <div>Loading project details...</div>;
    }
    
  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.title}</h1>
      <img src={project.getImageSrc()} alt={project.title} className="project-image"/>
      <p className="project-description">{project.description}</p>
      {project.pdf ?
        <a href={project.pdf} className="project-pdf-link" download>Download Technical Report</a>
        :
        <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
      }
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default ProjectDetail;
