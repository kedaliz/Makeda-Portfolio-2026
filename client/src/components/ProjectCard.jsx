import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const imageStyle = {
    objectFit: project.imageFit || 'cover',
    objectPosition: project.imagePosition || 'center',
    backgroundColor: project.imageBackground || 'transparent',
  };

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
