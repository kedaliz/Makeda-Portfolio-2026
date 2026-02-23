import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { getAllProjects } from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('website');
  const displayProjects = projects;
  const featuredProjects = [
    {
      _id: 'apple-fest',
      title: 'Apple Fest',
      description: 'A live event website experience for Apple Fest.',
      imageUrl: '/images/apple-fest-cover.png',
      imageFit: 'contain',
      imagePosition: 'center',
      imageBackground: '#f0f0f0',
      technologies: ['React', 'Vite', 'Render'],
      githubUrl: 'https://github.com/your-username/apple-fest',
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

    return [...missingFeatured, ...projectList];
  };

  const pictures = [
    {
      id: '1',
      title: 'Graduate Pictures',
      imageUrl: 'images/DSC02427.jpg',
    },
    {
      id: '2',
      title: 'Proud Moments',
      imageUrl: 'images/DSC02581.jpg',
    },
    {
      id: '3',
      title: 'Picture Three',
      imageUrl: 'images/IMG_9847-2.jpg',
    },
    {
      id: '4',
      title: 'Picture Four',
      imageUrl: 'images/IMG_9219.jpg',
    },
     {
      id: '5',
      title: 'Picture Five',
      imageUrl: 'images/IMG_8649.jpg',
    },
     {
      id: '6',
      title: 'Picture Six',
      imageUrl: 'images/IMG_8240.jpg',
    },
    {
      id: '7',
      title: 'Picture Seven',
      imageUrl: 'images/IMG_0254.jpg',
    },
    {
      id: '8',
      title: 'Picture Eight',
      imageUrl: 'images/IMG_0075.jpg',
    },
    {
      id: '9',
      title: 'Picture Nine',
      imageUrl: 'images/IMG_0098.jpg',
    },
    {
      id: '10',
      title: 'Picture Ten',
      imageUrl: 'images/IMG_1405.jpg',
    },
    {
      id: '11',
      title: 'Picture Eleven',
      imageUrl: 'images/IMG_0270 (1).jpg',
    },
    {
      id: '12',
      title: 'Picture Twelve',
      imageUrl: 'images/IMG_2163.JPG',
    },
    {
      id: '13',
      title: 'Picture Thirteen',
      imageUrl: 'images/IMG_9749.JPG',
    },
    {
      id: '14',
      title: 'Picture Fourteen',
      imageUrl: 'images/IMG_1785.jpg',
    },
    {
      id: '15',
      title: 'Picture Fifteen',
      imageUrl: 'images/IMG_1610.jpg',
    },
    {
      id: '16',
      title: 'Picture Sixteen',
      imageUrl: 'images/IMG_0048.JPG',
    },
    {
      id: '17',
      title: 'Picture Seventeen',
      imageUrl: 'images/IMG_9850-2.jpg',
    },
    {
      id: '18',
      title: 'Picture Eighteen',
      imageUrl: 'images/IMG_1058.jpg',
    },
    {
      id: '19',
      title: 'Picture Nineteen',
      imageUrl: 'images/IMG_1400.jpg',
    },
    {
      id: '20',
      title: 'Picture Twenty',
      imageUrl: 'images/IMG_1402.jpg',
    },
    {
      id: '21',
      title: 'Picture Twenty-One',
      imageUrl: 'images/IMG_2016.jpg',
    },
    {
      id: '22',
      title: 'Picture Twenty-Two',
      imageUrl: 'images/IMG_2856.jpg',
    },
    {
      id: '23',
      title: 'Picture Twenty-Three',
      imageUrl: 'images/IMG_2891.jpg',
    },
    {
      id: '24',
      title: 'Picture Twenty-Four',
      imageUrl: 'images/IMG_4947.jpg',
    },
    {
      id: '25',
      title: 'Picture Twenty-Five',
      imageUrl: 'images/IMG_6820.jpg',
    },
     {
      id: '26',
      title: 'Picture Twenty-Six',
      imageUrl: 'images/IMG_4964.JPG',
    },
     {
      id: '27',
      title: 'Picture Twenty-Seven',
      imageUrl: 'images/IMG_4975.jpg',
    },
     {
      id: '28',
      title: 'Picture Twenty-Eight',
      imageUrl: 'images/IMG_4980.jpg',
    },
     {
      id: '29',
      title: 'Picture Twenty-Nine',
      imageUrl: 'images/IMG_4981.jpg',
    },
     {
      id: '30',
      title: 'Picture Thirty',
      imageUrl: 'images/IMG_4994.JPG',
    },
     {
      id: '31',
      title: 'Picture Thirty-One',
      imageUrl: 'images/IMG_5024.JPG',
    },
  ];

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
          imageUrl: '/images/communityimage.jpg',
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
                  <p className="about-text">
                    I am an Information Science student focused on UX/UI design and tech policy.
                    I enjoy building thoughtful digital experiences that are accessible, useful, and
                    people-centered.
                  </p>
                </div>
                <div className="about-photo-spot" aria-label="Profile picture">
                  <img
                    src="images/IMG_1720.JPG"
                    alt="Makeda portrait"
                    className="about-photo-image"
                  />
                </div>
              </div>
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
              {pictures.map((picture) => (
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
