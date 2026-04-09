import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const imageStyle = {
    objectFit: project.imageFit || 'cover',
    objectPosition: project.imagePosition || 'center',
    backgroundColor: project.imageBackground || 'transparent',
  };
  const hasCaseStudy = Boolean(project.problem || project.role || project.result);

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="project-image"
          style={imageStyle}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {hasCaseStudy && (
          <>
            <button
              type="button"
              className="case-study-toggle"
              onClick={() => setShowDetails((isOpen) => !isOpen)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </button>

            {showDetails && (
              <div className="project-case-study">
                {project.problem && (
                  <p className="project-detail">
                    <span className="project-detail-label">Problem:</span> {project.problem}
                  </p>
                )}
                {project.role && (
                  <p className="project-detail">
                    <span className="project-detail-label">My Role:</span> {project.role}
                  </p>
                )}
                {project.result && (
                  <p className="project-detail">
                    <span className="project-detail-label">Result:</span> {project.result}
                  </p>
                )}
              </div>
            )}
          </>
        )}
        
        <div className="project-links">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
