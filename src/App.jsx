import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [colors, setColors] = useState({
    primary: '#2563eb',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc'
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [colors]);

  const handleColorChange = (colorKey, value) => {
    setColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setColors({
        primary: '#2563eb',
        background: '#f8fafc',
        surface: '#ffffff',
        text: '#0f172a'
      });
      setTheme('light');
    } else {
      setColors({
        primary: '#2563eb',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc'
      });
      setTheme('dark');
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'DevOps', level: 70 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience built with React and Node.js',
      shortDescription: 'Modern shopping experience',
      url: 'https://github.com/example/ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist',
        'Secure payment processing',
        'Order tracking and history',
        'Admin dashboard for inventory management'
      ],
      challenges: 'Implementing real-time inventory updates and handling concurrent transactions were the main challenges. Solved using WebSocket connections and optimistic UI updates.',
      impact: 'Increased online sales by 150% and reduced cart abandonment rate by 35%',
      timeline: 'Q3 2023 - Q4 2023'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform for business metrics',
      shortDescription: 'Real-time data visualization',
      url: 'https://github.com/example/analytics',
      technologies: ['React', 'D3.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
      features: [
        'Real-time data updates',
        'Interactive charts and graphs',
        'Custom metric tracking',
        'Data export capabilities',
        'Alert system for metric thresholds',
        'Role-based access control'
      ],
      challenges: 'Handling large datasets and maintaining smooth performance with real-time updates. Implemented data aggregation and efficient rendering techniques.',
      impact: 'Reduced decision-making time by 60% and improved data accessibility across teams',
      timeline: 'Q1 2023 - Q2 2023'
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Cross-platform mobile application for task management',
      shortDescription: 'Cross-platform solution',
      url: 'https://github.com/example/mobile',
      technologies: ['React Native', 'Redux', 'Firebase', 'Node.js'],
      features: [
        'Offline-first architecture',
        'Push notifications',
        'Task creation and management',
        'Team collaboration tools',
        'File attachments and sharing',
        'Calendar integration'
      ],
      challenges: 'Ensuring consistent performance across different devices and implementing reliable offline functionality. Used sophisticated caching and sync strategies.',
      impact: 'Achieved 100,000+ downloads with 4.8/5 rating on app stores',
      timeline: 'Q4 2022 - Q2 2023'
    },
    {
      id: 4,
      title: 'API Gateway',
      description: 'Scalable microservices architecture with advanced routing and security',
      shortDescription: 'Microservices architecture',
      url: 'https://github.com/example/api',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'MongoDB'],
      features: [
        'Request routing and load balancing',
        'Authentication and authorization',
        'Rate limiting and throttling',
        'API documentation',
        'Monitoring and logging',
        'Circuit breaker implementation'
      ],
      challenges: 'Designing for high availability and implementing effective service discovery. Solved using container orchestration and service mesh architecture.',
      impact: 'Handles 1M+ daily requests with 99.99% uptime',
      timeline: 'Q2 2022 - Q4 2022'
    }
  ];

  const blogPosts = [
    { id: 1, title: 'Getting Started with React 19', date: '2024-02-15', readTime: '5 min' },
    { id: 2, title: 'The Future of Web Development', date: '2024-02-10', readTime: '8 min' },
    { id: 3, title: 'Building Scalable Applications', date: '2024-02-05', readTime: '10 min' }
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
    { platform: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername' },
    { platform: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
    { platform: 'Dev.to', icon: '👨‍💻', url: 'https://dev.to/yourusername' }
  ];

  const handleProjectClick = (project) => {
    openModal( 
      <div className="project-modal-content">
        <img 
          src={`https://picsum.photos/800/400?random=${project.id}`}
          className="project-modal-image"
        />
        <div className="project-modal-header">
          <h3 className="project-modal-title">{project.title}</h3>
          <span className="project-modal-timeline">{project.timeline}</span>
        </div>
        
        <div className="project-modal-section">
          <h4>Overview</h4>
          <p className="project-modal-description">{project.description}</p>
        </div>

        <div className="project-modal-section">
          <h4>Technologies</h4>
          <div className="project-modal-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="project-modal-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-modal-section">
          <h4>Key Features</h4>
          <ul className="project-modal-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-modal-section">
          <h4>Challenges & Solutions</h4>
          <p className="project-modal-description">{project.challenges}</p>
        </div>

        <div className="project-modal-section">
          <h4>Impact</h4>
          <p className="project-modal-description">{project.impact}</p>
        </div>

        <button 
          className="project-modal-button"
          onClick={() => window.open(project.url, '_blank')}
        >
          View Repository
        </button>
      </div>
    );
  };

  const handleBlogClick = (post) => {
    window.open(`https://yourblog.com/post/${post.id}`, '_blank');
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Dashboard</h1>
        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <span>{time.toLocaleTimeString()}</span>
        </div>
      </header>

      <div className="main-grid">
        <div className="left-sidebar">
          <div className="widget profile-widget">
            <img 
              src="https://avatars.githubusercontent.com/u/1?v=4" 
              alt="Profile"
              className="profile-image"
            />
            <h2>Truls Agnar Haukeland</h2>
            <p className="text-secondary">Senior Software Architect</p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">5+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">About Me</h3>
            </div>
            <div className="about-content">
              <p>Passionate software architect with expertise in building scalable applications and mentoring development teams.</p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <span>MSc in Computer Science</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💡</span>
                  <span>Tech Speaker & Writer</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌍</span>
                  <span>Remote Work Advocate</span>
                </div>
              </div>
              <button 
                className="about-cta"
                onClick={() => openModal('Full Bio', 
                  <div className="bio-content">
                    <p>Detailed bio and professional journey...</p>
                    <h4>Achievements</h4>
                    <ul>
                      <li>Led 20+ successful projects</li>
                      <li>Published technical articles</li>
                      <li>Open source contributor</li>
                    </ul>
                  </div>
                )}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Skills</h3>
            </div>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Project Overview</h3>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <img 
                    src={`https://picsum.photos/400/200?random=${project.id}`}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Latest Blog Posts</h3>
              <button 
                className="view-all-button"
                onClick={() => window.open('https://yourblog.com', '_blank')}
              >
                View All
              </button>
            </div>
            <div className="blog-grid">
              {blogPosts.map(post => (
                <div 
                  key={post.id} 
                  className="blog-card"
                  onClick={() => handleBlogClick(post)}
                >
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h4 className="blog-title">{post.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-sidebar">
          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Connect & Share</h3>
            </div>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-platform">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Quick Contact</h3>
            </div>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              showNotification('Message sent successfully!');
              e.target.reset();
            }}>
              <input
                type="email"
                placeholder="Your Email"
                className="contact-input"
                required
              />
              <textarea
                placeholder="Your Message"
                className="contact-input"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h3 className="modal-title">{modalContent.title}</h3>
            <div className="modal-body">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;