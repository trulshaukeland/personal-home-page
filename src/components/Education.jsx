import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="container">
      <header className="header">
        <h1>Education</h1>
        <p>Academic Journey and Achievements</p>
      </header>

      <Link to="/" className="button back-button">Back to Home</Link>

      <div className="education-grid">
        <div className="education-card">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500" 
            alt="University"
            className="education-image"
          />
          <div className="education-content">
            <h3 className="education-title">Master's in Computer Science</h3>
            <p className="education-school">University of Technology</p>
            <p className="education-year">2020 - 2022</p>
            <p>Specialized in Artificial Intelligence and Machine Learning</p>
            <ul className="education-highlights">
              <li>Thesis on Deep Learning Applications in Healthcare</li>
              <li>Research Assistant in AI Lab</li>
              <li>GPA: 3.9/4.0</li>
            </ul>
          </div>
        </div>

        <div className="education-card">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=500" 
            alt="College"
            className="education-image"
          />
          <div className="education-content">
            <h3 className="education-title">Bachelor's in Software Engineering</h3>
            <p className="education-school">State University</p>
            <p className="education-year">2016 - 2020</p>
            <p>Focus on Full Stack Development and System Architecture</p>
            <ul className="education-highlights">
              <li>Led Student Developer Society</li>
              <li>Internship at Tech Startup</li>
              <li>Dean's List: All Semesters</li>
            </ul>
          </div>
        </div>

        <div className="education-card">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500" 
            alt="Certification"
            className="education-image"
          />
          <div className="education-content">
            <h3 className="education-title">Professional Certifications</h3>
            <ul className="education-highlights">
              <li>AWS Certified Solutions Architect</li>
              <li>Google Cloud Professional Developer</li>
              <li>MongoDB Certified Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;