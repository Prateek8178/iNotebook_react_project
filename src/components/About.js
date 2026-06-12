import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fa-cloud',
      title: 'Cloud Synced',
      desc: 'Your notes are securely stored in the cloud and accessible from anywhere, anytime.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Secure & Private',
      desc: 'JWT-based authentication ensures only you can access your personal notes.',
    },
    {
      icon: 'fa-bolt',
      title: 'Instant Updates',
      desc: 'Real-time CRUD operations — add, edit, and delete notes with zero page reloads.',
    },
    {
      icon: 'fa-tags',
      title: 'Tag & Organize',
      desc: 'Categorize your notes with custom tags to keep everything neatly organized.',
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Responsive Design',
      desc: 'Fully responsive UI works seamlessly on desktop, tablet, and mobile devices.',
    },
    {
      icon: 'fa-database',
      title: 'MongoDB Backend',
      desc: 'Powered by Node.js, Express, and MongoDB for a robust and scalable backend.',
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-hero-title">
            <i className="fa-solid fa-book-open me-3"></i>
            About iNotebook
          </h1>
          <p className="about-hero-desc">
            iNotebook is a full-stack cloud notebook application built with the MERN stack.
            It lets you create, manage, and organize your notes securely in the cloud —
            accessible whenever and wherever you need them.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <span className="tag-badge" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
              <i className="fa-brands fa-react me-1"></i> React 19
            </span>
            <span className="tag-badge" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
              <i className="fa-brands fa-node-js me-1"></i> Node.js
            </span>
            <span className="tag-badge" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
              <i className="fa-solid fa-leaf me-1"></i> MongoDB
            </span>
            <span className="tag-badge" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
              <i className="fa-solid fa-server me-1"></i> Express
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="feature-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="feature-icon">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Note */}
        <div className="text-center mt-5 pt-3">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Built with ❤️ using the MERN Stack · React Router v7 · Bootstrap 5 · JWT Auth
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
