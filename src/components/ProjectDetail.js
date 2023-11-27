import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projectData';
import '../css/ProjectDetail.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const { projectTitle } = useParams(); 

  useEffect(() => {
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

  const toggleSpecs = () => {
    setShowSpecs(!showSpecs);
  };

  const toggleShowReport = () => {
    setShowReport(!showReport);
  }

  const toggleShowCode = () => {
    setShowCode(!showCode);
  }


  const getIcon = (isActive) => {
    return isActive ? faChevronUp : faChevronDown;
  };

  const embedYouTube = (videoId, description) => {
    return (
      <div className="video-section">
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <p className="video-description">{description}</p>
      </div>
    );
  };
  
  

  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.title}</h1>
      <img src={project.getImageSrc()} alt={project.title} className="project-image"/>
      <p className="project-description">{project.description}</p>

      {/* Project Specifications Section */}
      <div className="collapsible-section" onClick={toggleSpecs}>
        <span>Project Specifications</span>
        <FontAwesomeIcon icon={getIcon(showSpecs)} className="fa-icon" />
      </div>
      {showSpecs && (
        <div className="content">
          {project.hasVideo && embedYouTube(project.videoId, "Video introduction to the game")}
          <div dangerouslySetInnerHTML={{ __html: project.specification }} />
        </div>
      )}

      {project.hasReport && (
        <>
          <div className={`collapsible-section ${showReport ? 'active' : ''}`} onClick={toggleShowReport}>
            <span>Technical Report</span>
            <FontAwesomeIcon icon={getIcon(showReport)} className="fa-icon" />
          </div>
          {showReport && (
            <div className="content">
              <a href={`${process.env.PUBLIC_URL}/reports/${project.id}.pdf`} className="project-pdf-link" download>Download Technical Report</a>
            </div>
          )}
        </>
      )}

      {/* Collapsible section for the GitHub Repository link */}
      {project.hasCode && (
        <>
          <div className={`collapsible-section ${showCode ? 'active' : ''}`} onClick={toggleShowCode}>
            <span>GitHub Repository</span>
            <FontAwesomeIcon icon={getIcon(showCode)} className="fa-icon" />
          </div>
          {showCode && (
            <div className="content">
              <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            </div>
          )}
        </>
      )}

      <div className="back-to-home-wrapper">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
