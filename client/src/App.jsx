import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { getAllProjects } from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('website');
  const [visiblePhotoCount, setVisiblePhotoCount] = useState(9);
  const resumeLinks = [
    {
      label: 'Resume',
      url: '/Makeda%27s%20Resume%202026%20(3).pdf',
    },
  ];
  const contactLinks = {
    email: 'mailto:mlc359@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/makeda-elizabeth-cabey-605745269',
    github: 'https://github.com/kedaliz',
  };
  const lastUpdated = 'February 24, 2026';
  const compactSkills = {
    Design: ['UX/UI Design', 'Wireframing', 'Responsive Design'],
    Frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    'Backend & Data': ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    Leadership: ['Creative Direction', 'Team Management', 'Strategic Planning'],
  };
  const skillsSnapshot = {
    'Technical & Design': {
      Design: ['UX/UI Design', 'Wireframing', 'Visual Hierarchy', 'Responsive Design'],
      Tools: ['Figma', 'Adobe Photoshop', 'Adobe Lightroom', 'Final Cut Pro', 'Canva'],
      Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      'Backend & Data': ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'Python', 'Pandas'],
      Research: ['User Research', 'Accessibility Testing', 'Information Architecture', 'Content Analysis'],
    },
    'Leadership & Operations': {
      Management: ['Creative Direction', 'Team Management', 'Task Delegation', 'Project Oversight'],
      Strategy: ['Budgeting', 'Strategic Planning', 'Event Logistics', 'Fiscal Oversight'],
      Communication: ['Public Speaking', 'Conflict Resolution', 'Interpersonal Collaboration', 'Audience Engagement'],
      'Technical Ops': ['Real-time Troubleshooting', 'Multi-camera Livestreaming', 'Digital Archiving'],
    },
  };
  const projectCaseStudies = {
    byTitle: {
      'meme generator': {
        problem: 'Most meme-making tools are cluttered with ads and lack a simple, real-time interface for quick customization.',
        role: 'I built the front-end logic and UI using React, focusing on a clean, responsive layout that prioritizes speed for the user.',
        result: 'Developed a lightweight tool with zero-latency text rendering, allowing for instant creation and social sharing.',
      },
      'apple fest': {
        problem: 'Large-scale community festivals often rely on static or hard-to-navigate pages that are difficult for attendees to use on mobile during the event.',
        role: 'I designed a live-event experience with a focus on mobile-first navigation and a clear information hierarchy for schedules and maps.',
        result: 'Created a centralized digital hub that improved information accessibility for thousands of local festival-goers in Ithaca.',
      },
      'community events directory': {
        problem: 'Local community groups struggle to manage RSVPs and event visibility across fragmented social platforms.',
        role: 'I developed the full-stack architecture (MERN), designing the database schema and a personalized user dashboard.',
        result: 'Built a functional ecosystem that supports real-time RSVP tracking and automated event categorization to help users discover local gatherings easily.',
      },
    },
  };

  const normalizeTitle = (title = '') => title.trim().toLowerCase();

  const attachCaseStudy = (project) => {
    const titleKey = normalizeTitle(project.title);
    const caseStudy = projectCaseStudies.byTitle[titleKey];

    if (!caseStudy) {
      return project;
    }

    return {
      ...project,
      problem: project.problem || caseStudy.problem,
      role: project.role || caseStudy.role,
      result: project.result || caseStudy.result,
    };
  };

  const displayProjects = projects;
  const featuredProjects = [
    {
      _id: 'meme-generator',
      title: 'Meme Generator',
      description: 'A fun web app to create and customize memes directly in the browser.',
      imageUrl: '/images/meme-generator-cover.webp',
      imageFit: 'contain',
      imagePosition: 'center',
      imageBackground: '#f0f0f0',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      githubUrl: 'https://github.com/kedaliz/meme-generator',
      liveUrl: 'https://meme-generator-quum8gtzy-kedalizs-projects.vercel.app/',
    },
    {
      _id: 'apple-fest',
      title: 'Apple Fest',
      description: 'A live event website experience for Apple Fest.',
      imageUrl: '/images/apple-fest-cover.webp',
      imageFit: 'contain',
      imagePosition: 'center',
      imageBackground: '#f0f0f0',
      technologies: ['React', 'Vite', 'Render'],
      githubUrl: 'https://github.com/kedaliz/apple-fest',
      liveUrl: 'https://apple-fest.onrender.com/',
    },
  ];

  const mergeProjects = (projectList = []) => {
    const normalizedExistingLiveUrls = new Set(
      projectList
        .map((project) => project.liveUrl?.trim().toLowerCase())
        .filter(Boolean)
    );

    const missingFeatured = featuredProjects.filter((project) => {
      const liveUrl = project.liveUrl?.trim().toLowerCase();
      return !liveUrl || !normalizedExistingLiveUrls.has(liveUrl);
    });

    return [...missingFeatured, ...projectList].map(attachCaseStudy);
  };

  const pictures = [
    {
      id: '1',
      title: 'Graduate Pictures',
      imageUrl: 'images/DSC02427.webp',
    },
    {
      id: '2',
      title: 'Proud Moments',
      imageUrl: 'images/DSC02581.webp',
    },
    {
      id: '3',
      title: 'Picture Three',
      imageUrl: 'images/IMG_9847-2.webp',
    },
    {
      id: '4',
      title: 'Picture Four',
      imageUrl: 'images/IMG_9219.webp',
    },
     {
      id: '5',
      title: 'Picture Five',
      imageUrl: 'images/IMG_8649.webp',
    },
     {
      id: '6',
      title: 'Picture Six',
      imageUrl: 'images/IMG_8240.webp',
    },
    {
      id: '7',
      title: 'Picture Seven',
      imageUrl: 'images/IMG_0254.webp',
    },
    {
      id: '8',
      title: 'Picture Eight',
      imageUrl: 'images/IMG_0075.webp',
    },
    {
      id: '9',
      title: 'Picture Nine',
      imageUrl: 'images/IMG_0098.webp',
    },
    {
      id: '10',
      title: 'Picture Ten',
      imageUrl: 'images/IMG_1405.webp',
    },
    {
      id: '11',
      title: 'Picture Eleven',
      imageUrl: 'images/IMG_0270 (1).webp',
    },

    {
      id: '14',
      title: 'Picture Fourteen',
      imageUrl: 'images/IMG_1785.webp',
    },
    {
      id: '15',
      title: 'Picture Fifteen',
      imageUrl: 'images/IMG_1610.webp',
    },
    {
      id: '16',
      title: 'Picture Sixteen',
      imageUrl: 'images/IMG_0048.webp',
    },
    {
      id: '17',
      title: 'Picture Seventeen',
      imageUrl: 'images/IMG_9850-2.webp',
    },
    {
      id: '18',
      title: 'Picture Eighteen',
      imageUrl: 'images/IMG_1058.webp',
    },
    {
      id: '19',
      title: 'Picture Nineteen',
      imageUrl: 'images/IMG_1400.webp',
    },
    {
      id: '20',
      title: 'Picture Twenty',
      imageUrl: 'images/IMG_1402.webp',
    },
    {
      id: '21',
      title: 'Picture Twenty-One',
      imageUrl: 'images/IMG_2016.webp',
    },
    {
      id: '22',
      title: 'Picture Twenty-Two',
      imageUrl: 'images/IMG_2856.webp',
    },
    {
      id: '23',
      title: 'Picture Twenty-Three',
      imageUrl: 'images/IMG_2891.webp',
    },
    {
      id: '24',
      title: 'Picture Twenty-Four',
      imageUrl: 'images/IMG_4947.webp',
    },
    {
      id: '25',
      title: 'Picture Twenty-Five',
      imageUrl: 'images/IMG_6820.jpg',
    },
     {
      id: '26',
      title: 'Picture Twenty-Six',
      imageUrl: 'images/IMG_4964.webp',
    },
     {
      id: '27',
      title: 'Picture Twenty-Seven',
      imageUrl: 'images/IMG_4975.webp',
    },
     {
      id: '28',
      title: 'Picture Twenty-Eight',
      imageUrl: 'images/IMG_4980.webp',
    },
     {
      id: '29',
      title: 'Picture Twenty-Nine',
      imageUrl: 'images/IMG_4981.webp',
    },
     {
      id: '30',
      title: 'Picture Thirty',
      imageUrl: 'images/IMG_4994.webp',
    },
     {
      id: '31',
      title: 'Picture Thirty-One',
      imageUrl: 'images/IMG_5024.webp',
    },
    {
      id: '32',
      title: 'Picture Thirty-Two',
      imageUrl: 'images/IMG_9715.jpg',
    },
    {
      id: '33',
      title: 'Picture Thirty-Three',
      imageUrl: 'images/IMG_9730.jpg',
    },
  ];

  const visiblePictures = pictures.slice(0, visiblePhotoCount);
  const hasMorePictures = visiblePhotoCount < pictures.length;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(mergeProjects(data));
    } catch (err) {
      console.error('Error fetching projects:', err);
      // Set a sample project for demo purposes when API is not available
      setProjects(mergeProjects([
        {
          _id: '1',
          title: 'Community Events Directory',
          description: 'A full-stack MERN application for creating, managing, and RSVPing to local community gatherings.',
          imageUrl: '/images/communityimage.webp',
          imageFit: 'contain',
          imagePosition: 'center',
          imageBackground: '#f0f0f0',
          technologies: ['React', 'Node.js', 'MongoDB Atlas', 'Express',' and Render'],
          githubUrl: 'https://github.com/kedaliz/Community-Events.git',
          liveUrl: 'https://community-events-v5rb.onrender.com'
        }
      ]));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Makeda's Portfolio</h1>
          <p className="header-subtitle">
            Information Science Student | UX/UI Design & Tech Policy
          </p>
          <div className="page-nav" role="tablist" aria-label="Portfolio pages">
            <button
              type="button"
              className={`page-nav-button ${activePage === 'website' ? 'active' : ''}`}
              onClick={() => setActivePage('website')}
            >
              Website
            </button>
            <button
              type="button"
              className={`page-nav-button ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => setActivePage('about')}
            >
              About Me
            </button>
            <button
              type="button"
              className={`page-nav-button ${activePage === 'pictures' ? 'active' : ''}`}
              onClick={() => setActivePage('pictures')}
            >
              Photography
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {activePage === 'website' ? (
          <>
            <section className="hero-section">
              <h2 className="section-title">My Projects</h2>
              <p className="section-description">
                Explore my work and see what I built
              </p>
              <p className="internship-cta">
                Product Design & Tech Policy Intern | Open to Summer/Fall 2026 opportunities in UX/UI and Library/Archival Science."
              </p>
            </section>

            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading projects...</p>
              </div>
            ) : (
              <div className="projects-grid">
                {displayProjects.length > 0 ? (
                  displayProjects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                  ))
                ) : (
                  <div className="no-projects">
                    <p>No project to display yet.</p>
                  </div>
                )}
              </div>
            )}

            <section className="contact-section" aria-label="Contact">
              <h3 className="contact-title">Let&apos;s Connect</h3>
              <p className="contact-text">
                Reach out for internship opportunities, collaborations, or conversations about design and digital storytelling.
              </p>
              <div className="contact-links">
                <a href={contactLinks.email} className="contact-link">Email</a>
                <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              </div>
            </section>

            <section className="skills-quick-section" aria-label="Skills summary">
              <h3 className="skills-title">Skills Snapshot</h3>
              <div className="skills-quick-grid">
                {Object.entries(compactSkills).map(([group, items]) => (
                  <article key={group} className="skills-quick-card">
                    <h4 className="skills-group-title">{group}</h4>
                    <p className="skills-quick-text">{items.join(' • ')}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : activePage === 'about' ? (
          <>
            <section className="hero-section">
              <h2 className="section-title">About Me</h2>
              <p className="section-description">
                Get to know my background, interests, and goals.
              </p>
            </section>

            <section className="about-page" aria-label="About Makeda">
              <div className="about-content">
                <div className="about-text-content">
                  <h3 className="about-title">Hi, I'm Makeda</h3>
                  <div className="about-actions">
                    {resumeLinks.map((resume) => (
                      <a
                        key={resume.url}
                        href={resume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        {resume.label}
                      </a>
                    ))}
                  </div>
                  <p className="about-text">
                    I’m an Information Science junior at Cornell University focusing on UX/UI and Tech Ethics Law, and Policy I’m originally from St. Thomas, USVI, and a lot of what I do is inspired by the vibrant culture of the Caribbean and the Black experience.
                  </p>
                  <p className="about-text">
                    Lately, I've been using design, code, and{' '}
                    <button
                      type="button"
                      className="about-text-link"
                      onClick={() => setActivePage('pictures')}
                    >
                      photography
                    </button>{' '}
                    as ways to explore storytelling and preservation. Beyond my work with BLACBOOK, I’m especially interested in museums, libraries, and digital archives, institutions that safeguard culture and knowledge for future generations while fostering connection and community through shared stories.
                  </p>
                  <p className="about-text">
                    When I’m not working on a project, I’m usually in the kitchen trying out a new recipe, caught up in a contemporary novel, or leaning into Caribbean studies. For me, it’s all just different ways of understanding where we’ve been and finding meaningful ways to move forward.
                  </p>
                </div>
                <div className="about-photo-spot" aria-label="Profile picture">
                  <img
                    src="images/IMG_1720.webp"
                    alt="Makeda portrait"
                    className="about-photo-image"
                  />
                </div>
              </div>
            </section>

            <section className="skills-section" aria-label="Detailed skills snapshot">
              <h3 className="skills-title">Skills Snapshot</h3>
              {Object.entries(skillsSnapshot).map(([section, groups]) => (
                <div key={section} className="skills-category">
                  <h4 className="skills-category-title">{section}</h4>
                  <div className="skills-grid">
                    {Object.entries(groups).map(([group, items]) => (
                      <article key={group} className="skills-card">
                        <h5 className="skills-group-title">{group}</h5>
                        <ul className="skills-list">
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </>
        ) : (
          <>
            <section className="hero-section">
              <h2 className="section-title">My Photography</h2>
              <p className="section-description">
                A small gallery of my past work in photography, showcasing moments of joy, beauty, and connection.
              </p>
            </section>

            <div className="photo-grid">
              {visiblePictures.map((picture) => (
                <figure key={picture.id} className="photo-card">
                  <img
                    src={picture.imageUrl}
                    alt={picture.title}
                    className="photo-image"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>

            {hasMorePictures && (
              <div className="load-more-wrap">
                <button
                  type="button"
                  className="load-more-button"
                  onClick={() => setVisiblePhotoCount((count) => count + 9)}
                >
                  Load More Photos
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <div className="sticky-cta" aria-label="Quick actions">
        <a href={contactLinks.email} className="sticky-cta-link">Contact</a>
        <a
          href={resumeLinks[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-link"
        >
          Resume
        </a>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Makeda's Portfolio. All rights reserved.</p>
        <p className="footer-meta">Last updated: {lastUpdated}</p>
      </footer>
    </div>
  );
}

export default App;
