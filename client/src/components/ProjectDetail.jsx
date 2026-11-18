import { useState } from 'react';
import { ProjectCover, ProjectLinks, ProjectTags } from './ProjectCard';

function Artifact({ artifact }) {
  const [open, setOpen] = useState(false);

  return (
    <figure className="artifact">
      <figcaption>
        <h3>{artifact.title}</h3>
        <p>{artifact.description}</p>
        <a href={artifact.url} target="_blank" rel="noopener noreferrer">Open in Figma (new tab)</a>
      </figcaption>
      <details onToggle={(event) => setOpen(event.currentTarget.open)}>
        <summary>Preview {artifact.title}</summary>
        {open && (
          <iframe
            title={`${artifact.title} Figma preview`}
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(artifact.url)}`}
            loading="lazy"
            allowFullScreen
          />
        )}
      </details>
    </figure>
  );
}

export default function ProjectDetail({ project }) {
  const sections = [
    { title: 'Problem', text: project.problem },
    { title: 'My Role', text: project.role },
    { title: 'Result', text: project.result },
  ].filter((section) => section.text);

  return (
    <article className="case-page">
      <a className="case-back" href="#/">← Back to Work</a>
      <header className="case-header">
        {project.course && <p className="work-course">{project.course}</p>}
        <h1>{project.title}</h1>
        <p className="case-intro">{project.description}</p>
        {(project.team || project.audience) && (
          <dl className="case-facts">
            {project.team && <div><dt>Context</dt><dd>{project.team}</dd></div>}
            {project.audience && <div><dt>For</dt><dd>{project.audience}</dd></div>}
          </dl>
        )}
        <ProjectTags technologies={project.technologies} />
        <ProjectLinks project={project} />
      </header>
      <div className="case-cover"><ProjectCover project={project} /></div>
      {sections.length > 0 && (
        <section className="case-sections" aria-label="Case study details">
          {sections.map((section) => (
            <details key={section.title} open>
              <summary>{section.title}</summary>
              <p>{section.text}</p>
            </details>
          ))}
        </section>
      )}
      {project.process?.length > 0 && (
        <section className="case-process" aria-labelledby="process-title">
          <h2 id="process-title">Process & takeaways</h2>
          <div className="process-list">
            {project.process.map((step, index) => (
              <section className="process-step" key={step.title}>
                <span className="process-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </section>
            ))}
          </div>
        </section>
      )}
      {project.artifacts?.length > 0 && (
        <section className="case-artifacts" aria-labelledby="artifacts-title">
          <h2 id="artifacts-title">Explore the work</h2>
          <p>Open a preview or visit the original Figma file. Some files may require access permission.</p>
          <div className="artifact-grid">
            {project.artifacts.map((artifact) => <Artifact key={artifact.url} artifact={artifact} />)}
          </div>
        </section>
      )}
      {project.features?.length > 0 && (
        <section className="case-features">
          <h2>Features</h2>
          <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>
      )}
    </article>
  );
}
