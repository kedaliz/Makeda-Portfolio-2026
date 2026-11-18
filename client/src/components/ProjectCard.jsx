import './ProjectCard.css';
import { projectRoute } from '../projects';

export function ProjectLinks({ project }) {
  const links = [
    { label: 'Prototype', url: project.prototypeUrl },
    { label: 'GitHub', url: project.githubUrl },
    { label: 'Live Demo', url: project.liveUrl },
    { label: 'Figma', url: project.figmaUrl },
  ].filter((link) => link.url);

  if (!links.length) return null;

  return (
    <div className="work-links">
      {links.map((link) => (
        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}<span className="sr-only"> for {project.title} (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

export function ProjectCover({ project }) {
  return project.imageUrl ? (
    <img
      className="work-cover-image"
      src={project.imageUrl}
      alt={project.altText || `${project.title}: ${project.description}`}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div className="work-cover-placeholder" aria-hidden="true">
      <span>{project.course || 'Selected work'}</span>
      <span>{project.title}</span>
    </div>
  );
}

export function ProjectTags({ technologies = [] }) {
  return technologies.length > 0 && (
    <ul className="work-tags" aria-label="Technologies and methods">
      {technologies.map((tech) => <li key={tech}>{tech}</li>)}
    </ul>
  );
}

const ProjectCard = ({ project }) => (
  <article className="work-card">
    <a className="work-card-image" href={projectRoute(project)} aria-label={`View ${project.title} case study`}>
      <ProjectCover project={project} />
    </a>
    <div className="work-card-content">
      {['gymling-gym', 'housing-transparency', 'bi-learning-analytics'].includes(project._id) && (
        <p className="work-featured">Featured case study</p>
      )}
      {project.course && <p className="work-course">{project.course}</p>}
      <h3 className="work-card-title">
        <a href={projectRoute(project)}>{project.title}</a>
      </h3>
      <p className="work-description">{project.description}</p>
      <ProjectTags technologies={project.technologies} />
      <a className="work-detail-link" href={projectRoute(project)}>
        View case study <span aria-hidden="true">→</span>
        <span className="sr-only">: {project.title}</span>
      </a>
      <ProjectLinks project={project} />
    </div>
  </article>
);

export default ProjectCard;
