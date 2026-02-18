import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { getAllProjects } from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects. Please make sure the server is running.');
      // Set some sample projects for demo purposes when API is not available
      setProjects([
        {
          _id: '1',
          title: 'Portfolio Website',
          description: 'A modern portfolio website built with React and Node.js to showcase my work and skills.',
          imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          githubUrl: 'https://github.com',
          liveUrl: 'https://example.com'
        },
        {
          _id: '2',
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce platform with user authentication, product management, and payment integration.',
          imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
          technologies: ['React', 'Redux', 'Node.js', 'Stripe'],
          githubUrl: 'https://github.com',
          liveUrl: 'https://example.com'
        },
        {
          _id: '3',
          title: 'Task Management App',
          description: 'Collaborative task management application with real-time updates and team collaboration features.',
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
          technologies: ['React', 'Firebase', 'Material-UI'],
          githubUrl: 'https://github.com'
        },
        {
          _id: '4',
          title: 'Weather Dashboard',
          description: 'Interactive weather dashboard that displays current conditions and forecasts using external APIs.',
          imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
          technologies: ['React', 'OpenWeather API', 'Chart.js'],
          githubUrl: 'https://github.com',
          liveUrl: 'https://example.com'
        },
        {
          _id: '5',
          title: 'Social Media Dashboard',
          description: 'Analytics dashboard for tracking social media metrics and engagement across multiple platforms.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
          technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
          githubUrl: 'https://github.com'
        },
        {
          _id: '6',
          title: 'Blog Platform',
          description: 'Modern blogging platform with markdown support, comments, and user authentication.',
          imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
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
            Full-Stack Developer | MERN Stack Specialist
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            Explore my work and see what I've been building
          </p>
        </section>

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <p className="error-note">Showing sample projects for demonstration.</p>
          </div>
        )}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <div className="no-projects">
                <p>No projects to display yet.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Makeda's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
