import React, { useState, useEffect } from 'react';
import './index.css';
import { FaShoppingCart, FaChartLine, FaMobile, FaServer } from 'react-icons/fa';

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

  const projectIcons = {
    1: { icon: FaShoppingCart, color: '#22c55e', bg: '#dcfce7' },  // E-Commerce
    2: { icon: FaChartLine, color: '#3b82f6', bg: '#dbeafe' },     // Analytics
    3: { icon: FaMobile, color: '#f59e0b', bg: '#fef3c7' },        // Mobile App
    4: { icon: FaServer, color: '#ef4444', bg: '#fee2e2' }         // API Gateway
  };

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
      technologies: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'MongoDB', url: 'https://www.mongodb.com' },
        { name: 'Redux', url: 'https://redux.js.org' },
        { name: 'Stripe', url: 'https://stripe.com/docs' }
      ],
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
      technologies: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'D3.js', url: 'https://d3js.org' },
        { name: 'WebSocket', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket' },
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'PostgreSQL', url: 'https://www.postgresql.org' }
      ],
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
      technologies: [
        { name: 'React Native', url: 'https://reactnative.dev' },
        { name: 'Redux', url: 'https://redux.js.org' },
        { name: 'Firebase', url: 'https://firebase.google.com' },
        { name: 'Node.js', url: 'https://nodejs.org' }
      ],
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
      technologies: [
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'Docker', url: 'https://www.docker.com' },
        { name: 'Kubernetes', url: 'https://kubernetes.io' },
        { name: 'Redis', url: 'https://redis.io' },
        { name: 'MongoDB', url: 'https://www.mongodb.com' }
      ],
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
    { 
      id: 1, 
      title: 'Finishing a React Project', 
      date: '2024-02-15', 
      readTime: '5 min',
      content: `
        Building and completing a React project requires careful planning and attention to detail. 
        Here are the key steps to ensure a successful project completion:

        1. Code Organization
        - Implement proper component structure
        - Follow React best practices
        - Maintain clean and readable code

        2. Testing
        - Write comprehensive unit tests
        - Perform integration testing
        - Conduct user acceptance testing

        3. Performance Optimization
        - Implement code splitting
        - Optimize bundle size
        - Enhance loading times

        4. Deployment
        - Set up CI/CD pipeline
        - Configure production environment
        - Monitor application performance
      `,
      author: 'Truls Agnar Haukeland',
      tags: ['React', 'Web Development', 'Frontend']
    },
    { 
      id: 2, 
      title: 'The Future of Web Development', 
      date: '2024-02-10', 
      readTime: '8 min',
      content: `
        The web development landscape is constantly evolving. Here's what to expect in the coming years:

        1. AI Integration
        - AI-powered development tools
        - Automated testing and debugging
        - Intelligent code completion

        2. WebAssembly
        - Increased adoption
        - Better performance
        - New use cases

        3. Edge Computing
        - Distributed computing
        - Faster response times
        - Better user experience

        4. New Framework Paradigms
        - Server components
        - Improved build tools
        - Enhanced developer experience
      `,
      author: 'Truls Agnar Haukeland',
      tags: ['Future Tech', 'Trends', 'Innovation']
    },
    { 
      id: 3, 
      title: 'Building Scalable Applications', 
      date: '2024-02-05', 
      readTime: '10 min',
      content: `
        Creating scalable applications requires careful consideration of various factors:

        1. Architecture
        - Microservices vs Monolith
        - Service communication
        - Data flow patterns

        2. Database Design
        - Proper indexing
        - Query optimization
        - Data partitioning

        3. Caching Strategies
        - Multi-level caching
        - Cache invalidation
        - Distributed caching

        4. Load Balancing
        - Traffic distribution
        - Health checks
        - Failover mechanisms
      `,
      author: 'Truls Agnar Haukeland',
      tags: ['Architecture', 'Scalability', 'Best Practices']
    }
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
    { platform: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername' },
    { platform: 'Instagram', icon: '📱', url: 'https://twitter.com/yourusername' },
    { platform: 'WIX', icon: '👨‍💻', url: 'https://dev.to/yourusername' }
  ];

  const handleProjectClick = (project) => {
    openModal( 
      <div className="project-modal-content">
        <div className="project-modal-icon-header" style={{ background: projectIcons[project.id].bg }}>
          {React.createElement(projectIcons[project.id].icon, { 
            size: 48, 
            color: projectIcons[project.id].color,
            className: "project-icon"
          })}
        </div>
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
              <a 
                key={index} 
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-tag"
              >
                {tech.name}
              </a>
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
    openModal(
      <div className="blog-modal-content">
        <div className="blog-modal-header">
          <h2 className="blog-modal-title">{post.title}</h2>
          <div className="blog-modal-meta">
            <span className="blog-modal-date">{post.date}</span>
            <span className="blog-modal-readtime">{post.readTime}</span>
          </div>
        </div>
        
        <div className="blog-modal-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="blog-modal-tag">{tag}</span>
          ))}
        </div>

        <div className="blog-modal-body">
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              paragraph.startsWith('-') ? (
                <li key={index} className="blog-modal-list-item">
                  {paragraph.substring(1).trim()}
                </li>
              ) : paragraph.match(/^\d\./) ? (
                <h3 key={index} className="blog-modal-section">
                  {paragraph.substring(paragraph.indexOf(' ') + 1)}
                </h3>
              ) : (
                <p key={index} className="blog-modal-paragraph">
                  {paragraph}
                </p>
              )
            )
          ))}
        </div>

        <div className="blog-modal-footer">
          <div className="blog-modal-author">
            <img 
              src="/src/assets/IMG_6401_cropped_final.jpeg"
              alt={post.author}
              className="blog-modal-author-image"
            />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    );
  };

  const openModal = (content) => {
    setModalContent({ content });
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
              src="/src/assets/IMG_6401_cropped_final.jpeg" 
              alt="Profile"
              className="profile-image"
            />
            <h2>Truls Agnar Haukeland</h2>
            <p className="text-secondary">Junior Software Developer</p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">0+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div 
                className="highlight-item clickable"
                onClick={() => openModal(
                  <div className="work-status-modal-content">
                    <h2 className="work-status-modal-title">Open to Work</h2>
                    <div className="work-status-modal-details">
                      <div className="work-status-modal-section">
                        <h3>Looking For</h3>
                        <ul className="position-list">
                          <li>Frontend Developer</li>
                          <li>Full Stack Developer</li>
                          <li>React Developer</li>
                          <li>JavaScript Developer</li>
                        </ul>
                      </div>

                      <div className="work-status-modal-section">
                        <h3>Skills</h3>
                        <div className="skills-grid">
                          {skills.map((skill, index) => (
                            <div key={index} className="skill-item-modal">
                              <span className="skill-name">{skill.name}</span>
                              <div className="skill-bar-modal">
                                <div 
                                  className="skill-progress-modal"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="work-status-modal-section">
                        <h3>Preferences</h3>
                        <div className="preferences-list">
                          <div className="preference-item">
                            <span className="preference-icon">🌍 </span>
                            <span>Remote / Hybrid / On-site</span>
                          </div>
                          <div className="preference-item">
                            <span className="preference-icon">📍</span>
                            <span>Oslo, Norway</span>
                          </div>
                          <div className="preference-item">
                            <span className="preference-icon">⏰</span>
                            <span>Full-time / Part-time</span>
                          </div>
                        </div>
                      </div>

                      <div className="work-status-modal-section">
                        <h3>Contact</h3>
                        <div className="contact-info">
                          <a href="mailto:your.email@example.com" className="contact-button">
                            Send Email
                          </a>
                          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-button">
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              >
                <span className="highlight-icon">🌍</span>
                <span>Open to Work</span>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">About Me</h3>
            </div>
            <div className="about-content">
              <p>Passionate software developer with expertise in building scalable applications.</p>
              <div className="about-highlights">
                <div 
                  className="highlight-item clickable"
                  onClick={() => openModal(
                    <div className="education-modal-content">
                      <h2 className="education-modal-title">Bachelor in Information Technology</h2>
                      <div className="education-modal-details">
                        <div className="education-modal-section">
                          <h3>Institution</h3>
                          <p>Kristiania University College</p>
                          <p className="education-period">2021 - 2024</p>
                        </div>

                        <div className="education-modal-section">
                          <h3>Key Courses</h3>
                          <ul className="education-courses-list">
                            <li>Web Development</li>
                            <li>Software Architecture</li>
                            <li>Database Management</li>
                            <li>Mobile App Development</li>
                            <li>Cloud Computing</li>
                            <li>Agile Methodologies</li>
                          </ul>
                        </div>

                        <div className="education-modal-section">
                          <h3>Projects</h3>
                          <div className="education-projects">
                            <div className="education-project">
                              <h4>Final Year Project</h4>
                              <p>Developed a full-stack web application for event management</p>
                            </div>
                            <div className="education-project">
                              <h4>Team Project</h4>
                              <p>Created a mobile app for student collaboration</p>
                            </div>
                          </div>
                        </div>

                        <div className="education-modal-section">
                          <h3>Achievements</h3>
                          <ul className="education-achievements-list">
                            <li>Dean's List 2023</li>
                            <li>Best Project Award - Web Development</li>
                            <li>Student Representative 2022-2023</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                >
                  <span className="highlight-icon">🎓</span>
                  <span>Bachelor in Information Technology</span>
                </div>
                <div 
                  className="highlight-item clickable"
                  onClick={() => openModal(
                    <div className="certification-modal-content">
                      <h2 className="certification-modal-title">Personal Trainer Certification</h2>
                      <div className="certification-modal-details">
                        <div className="certification-modal-section">
                          <h3>Institution</h3>
                          <p>Academy for Personal Training (AFPT)</p>
                          <p className="certification-period">2020 - 2021</p>
                        </div>

                        <div className="certification-modal-section">
                          <h3>Specializations</h3>
                          <ul className="certification-list">
                            <li>Strength and Conditioning</li>
                            <li>Nutrition Planning</li>
                            <li>Injury Prevention</li>
                            <li>Program Design</li>
                            <li>Group Training</li>
                          </ul>
                        </div>

                        <div className="certification-modal-section">
                          <h3>Skills Acquired</h3>
                          <div className="certification-skills">
                            <span className="skill-tag">Exercise Programming</span>
                            <span className="skill-tag">Client Assessment</span>
                            <span className="skill-tag">Nutritional Guidance</span>
                            <span className="skill-tag">Injury Management</span>
                            <span className="skill-tag">Client Relations</span>
                          </div>
                        </div>

                        <div className="certification-modal-section">
                          <h3>Experience</h3>
                          <ul className="experience-list">
                            <li>Trained 20+ clients</li>
                            <li>Led group fitness sessions</li>
                            <li>Developed custom training programs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                >
                  <span className="highlight-icon">🏋️‍♂️</span>
                  <span>Personal Trainer from AFPT</span>
                </div>
              </div>
              <button 
                className="about-cta"
                onClick={() => openModal( 
                  <div className="bio-content">
                    <h3>Full Bio</h3>
                    <p>Detailed bio and professional journey...</p>
                    <h4>Achievements</h4>
                    <ul>
                      <li>Made 10+ successful projects</li>
                      <li>Internship at Nordea</li>
                      <li>Programin and WIX developer</li>
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
                  <div className="project-icon-container" style={{ background: projectIcons[project.id].bg }}>
                    {React.createElement(projectIcons[project.id].icon, { 
                      size: 32, 
                      color: projectIcons[project.id].color,
                      className: "project-icon"
                    })}
                  </div>
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
                  <button className="read-more-button">
                    Read More →
                  </button>
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

          <div className="widget">
            <div className="widget-header">
              <h3 className="widget-title">Pixel Art Creator</h3>
              <button 
                className="clear-button"
                onClick={() => {
                  const pixels = document.querySelectorAll('.pixel');
                  pixels.forEach(pixel => pixel.style.backgroundColor = 'var(--background)');
                }}
              >
                Clear
              </button>
            </div>
            <div className="pixel-art-container">
              <div className="color-picker">
                <div 
                  className="color-option"
                  style={{ backgroundColor: '#2563eb' }}
                  onClick={(e) => document.documentElement.style.setProperty('--draw-color', e.target.style.backgroundColor)}
                ></div>
                <div 
                  className="color-option"
                  style={{ backgroundColor: '#22c55e' }}
                  onClick={(e) => document.documentElement.style.setProperty('--draw-color', e.target.style.backgroundColor)}
                ></div>
                <div 
                  className="color-option"
                  style={{ backgroundColor: '#ef4444' }}
                  onClick={(e) => document.documentElement.style.setProperty('--draw-color', e.target.style.backgroundColor)}
                ></div>
                <div 
                  className="color-option"
                  style={{ backgroundColor: '#f59e0b' }}
                  onClick={(e) => document.documentElement.style.setProperty('--draw-color', e.target.style.backgroundColor)}
                ></div>
              </div>
              <div className="pixel-grid">
                {Array(64).fill().map((_, i) => (
                  <div
                    key={i}
                    className="pixel"
                    onClick={(e) => {
                      e.target.style.backgroundColor = 
                        e.target.style.backgroundColor === 'var(--draw-color)' 
                          ? 'var(--background)' 
                          : 'var(--draw-color)';
                    }}
                  ></div>
                ))}
              </div>
            </div>
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
            { modalContent.content}
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