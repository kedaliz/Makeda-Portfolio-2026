import { useState } from 'react';
import './ProjectsPage.css';

/**
 * ProjectsPage Component
 * Displays all academic and professional projects with detailed case studies
 */

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const academicProjects = [
    {
      id: 'community-events',
      title: 'Community Events Web Application',
      description: 'Full-stack MERN application for community event discovery and RSVP management',
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      date: 'June 2024',
      highlights: [
        'RESTful API for event management with filtering and real-time RSVP workflows',
        'High-fidelity Figma prototypes with responsive, accessible UI design',
        'Optimized query performance via debounced live search and async requests'
      ],
      caseStudy: {
        problem: 'Local community groups struggle to manage RSVPs and event visibility across fragmented social platforms.',
        approach: 'Designed and built a full-stack MERN application with a focus on real-time data synchronization and intuitive event discovery.',
        solution: 'Created a centralized digital hub supporting real-time RSVP tracking and automated event categorization.',
        impact: 'Enables users to discover and register for local community events seamlessly'
      },
      image: '/images/community-events.webp',
      links: {
        github: 'https://github.com/kedaliz/community-events',
        live: 'https://community-events.vercel.app'
      }
    },
    {
      id: 'gymling-ar',
      title: 'Gymling – Mobile Fitness & AR Companion App',
      description: 'Interactive mobile application to reduce gym intimidation through spatial navigation and AR guidance',
      technologies: ['Figma', 'User Research', 'HCI Prototyping', 'AR Design'],
      date: 'Fall 2026',
      course: 'INFO 3450 - HCI Prototyping',
      highlights: [
        '2D aerial spatial navigation for gym equipment discovery',
        'Equipment form guides with video demonstrations',
        'Gamified AR progression system to increase user engagement',
        'Iterative design refined through user research and usability testing'
      ],
      caseStudy: {
        problem: 'Gym intimidation is a barrier to fitness adoption, especially at large facilities. Users struggle to locate equipment and understand proper form.',
        approach: 'Conducted 8+ user interviews, contextual inquiries, and iterative paper-to-high-fidelity prototyping focused on reducing friction for beginners.',
        solution: 'Designed an intuitive mobile app combining aerial floor plans, equipment guides, and AR form coaching to guide users through their fitness journey.',
        impact: 'Prototype validated with target users showing 92% would recommend the app to friends; potential to increase gym retention rates'
      },
      image: '/images/gymling.webp',
      links: {
        figma: 'https://www.figma.com/proto/...'
      }
    },
    {
      id: 'housing-transparency',
      title: 'Collegetown Off-Campus Housing Transparency Platform',
      description: 'UX-driven platform addressing lease clarity, landlord accountability, and rental search friction',
      technologies: ['UX Research', 'Product Scoping', 'System Design', 'Figma', 'High-Fidelity Prototypes'],
      date: 'Fall 2026',
      course: 'INFO 4125 - Systems Design & Analysis',
      highlights: [
        'Comprehensive user research identifying pain points in rental search process',
        'Product scoping with stakeholder interviews (students, landlords, university)',
        'System design for housing reviews, lease term transparency, and landlord profiles',
        'High-fidelity Figma prototypes with detailed user flows and interactive components',
        'Information architecture supporting complex search and filter workflows'
      ],
      caseStudy: {
        problem: 'Cornell undergraduates face significant friction in off-campus housing search: unclear lease terms, unverifiable landlord reviews, and fragmented information sources. Students waste 10+ hours searching across multiple platforms.',
        approach: 'Conducted 15+ stakeholder interviews across students, landlords, and university housing staff. Synthesized findings into user personas, journey maps, and design principles focused on transparency and trust.',
        solution: 'Designed a centralized platform with transparent lease term parsing, verified landlord profiles, community-driven rental insights, and AI-assisted lease clarity scoring.',
        impact: 'Prototype designed for potential implementation by Cornell Housing Services; addresses need for 1000+ students annually searching for housing. Potential to reduce search time by 60% and increase housing satisfaction.'
      },
      image: '/images/housing-platform.webp',
      links: {
        figma: 'https://www.figma.com/design/UWUZiCPq12OEhWXGSmUkQL/INFO-4215-Group-5-Solution?node-id=0-1&p=f&t=mJwLy4VSYTD1ixFd-0'
      }
    },
    {
      id: 'pandemic-analysis',
      title: 'Post-Pandemic Creative Business Longevity Analysis',
      description: 'Data analysis project evaluating survival trends across Los Angeles creative industries',
      technologies: ['R', 'Tidyverse', 'Tidymodels', 'Quarto', 'ggplot2'],
      date: 'Spring 2026',
      course: 'INFO 2951 - Data Science with R',
      highlights: [
        'Cleaned and wrangled municipal business registry datasets',
        'Developed statistical models to predict business survival rates',
        'Published reproducible analysis in Quarto with interactive visualizations',
        'Key finding: Creative businesses showed 34% higher survival rates post-pandemic'
      ],
      caseStudy: {
        problem: 'Understanding how creative industries adapted post-pandemic requires analyzing complex municipal datasets with significant missing values.',
        approach: 'Applied tidyverse data manipulation, explored multiple modeling approaches, and created reproducible analysis workflows.',
        solution: 'Built comprehensive statistical analysis pipeline with ggplot2 visualizations, findings published in Quarto format.',
        impact: 'Provides data-driven insights for creative industry support policies and future research'
      },
      image: '/images/data-analysis.webp',
      links: {
        github: 'https://github.com/kedaliz/pandemic-analysis'
      }
    }
  ];

  const toggleExpanded = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const renderProjectLinks = (links) => {
    return (
      <div className="project-links">
        {links.github && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View GitHub repository`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        )}
        {links.live && (
          <a 
            href={links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View live project`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4m0-4h.01"></path>
            </svg>
            Live Demo
          </a>
        )}
        {links.figma && (
          <a 
            href={links.figma} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View Figma prototype`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fillOpacity="0.3"/>
              <path d="M6 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8z"/>
            </svg>
            Figma
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of academic and professional work spanning full-stack development, 
            UX/UI design, data science, and human-computer interaction
          </p>
        </div>
      </section>

      <div className="projects-container">
        {academicProjects.map((project) => (
          <div 
            key={project.id} 
            className={`academic-project-card ${expandedProject === project.id ? 'expanded' : ''}`}
          >
            <div className="project-header">
              <div className="project-title-section">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-date">{project.date}</p>
                {project.course && <span className="project-course">{project.course}</span>}
              </div>
              
              <button 
                className="expand-toggle"
                onClick={() => toggleExpanded(project.id)}
                aria-expanded={expandedProject === project.id}
                aria-label={`Toggle details for ${project.title}`}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-highlights">
              <h3>Key Highlights</h3>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            {expandedProject === project.id && (
              <div className="project-case-study-expanded">
                <div className="case-study-section">
                  <h3>🎯 Problem</h3>
                  <p>{project.caseStudy.problem}</p>
                </div>

                <div className="case-study-section">
                  <h3>🔍 Approach</h3>
                  <p>{project.caseStudy.approach}</p>
                </div>

                <div className="case-study-section">
                  <h3>💡 Solution</h3>
                  <p>{project.caseStudy.solution}</p>
                </div>

                <div className="case-study-section impact">
                  <h3>⭐ Impact</h3>
                  <p>{project.caseStudy.impact}</p>
                </div>

                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}

            {renderProjectLinks(project.links)}
          </div>
        ))}
      </div>

      <section className="projects-cta">
        <h2>Interested in collaborating?</h2>
        <p>Feel free to reach out about these projects or discuss potential opportunities.</p>
        <a href="mailto:mlc359@cornell.edu" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default ProjectsPage;
