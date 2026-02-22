import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { getAllProjects } from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('website');
  const displayProjects = projects.slice(0, 1);
  const pictures = [
    {
      id: '1',
      title: 'Picture One',
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=700&fit=crop',
    },
    {
      id: '2',
      title: 'Picture Two',
      imageUrl: 'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?w=900&h=700&fit=crop',
    },
    {
      id: '3',
      title: 'Picture Three',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=700&fit=crop',
    },
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
      // Set a sample project for demo purposes when API is not available
      setProjects([
        {
          _id: '1',
          title: 'My Website',
          description: 'A modern website built with React and Node.js to showcase my work and skills.',
          imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          githubUrl: 'https://github.com',
          liveUrl: 'https://example.com'
        }
      ]);
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
              className={`page-nav-button ${activePage === 'pictures' ? 'active' : ''}`}
              onClick={() => setActivePage('pictures')}
            >
              Pictures
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
            </section>

            <section className="about-section">
              <h3 className="about-title">About Me</h3>
              <p className="about-text">
                I am an Information Science student focused on UX/UI design and tech policy.
                I enjoy building thoughtful digital experiences that are accessible, useful, and
                people-centered.
              </p>
            </section>

            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading project...</p>
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
          </>
        ) : (
          <>
            <section className="hero-section">
              <h2 className="section-title">My Pictures</h2>
              <p className="section-description">
                A small gallery of my favorite photos
              </p>
            </section>

            <div className="photo-grid">
              {pictures.map((picture) => (
                <figure key={picture.id} className="photo-card">
                  <img src={picture.imageUrl} alt={picture.title} className="photo-image" />
                </figure>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Makeda's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
