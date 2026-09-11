import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, CheckCircle } from 'lucide-react';

const projectsList = [
  {
    id: 'bitehub',
    title: 'BiteHub Food Delivery Platform',
    category: 'Full-Stack Application',
    image: '/project img/food delivery.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    summary: 'A responsive food ordering web application featuring real-time menu browsing, category filtering, cart state management, and a responsive checkout dashboard.',
    fullDetails: 'BiteHub bridges food lovers with local culinary spots. It features real-time search indexing, menu item customization, cart updates using persistent local storage, and secure Express backend routing.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/charubala9602-jpg/protfolio',
  },
  {
    id: 'jarvish',
    title: 'Jarvish SOS Emergency App',
    category: 'Real-Time Emergency System',
    image: '/project img/jarvish-sos.png',
    tags: ['React', 'Node.js', 'Express', 'Geolocation', 'REST API'],
    summary: 'An intelligent emergency alert and SOS response web platform featuring real-time location sharing, priority notification dispatch, and responsive incident dashboard.',
    fullDetails: 'Jarvish SOS provides rapid emergency response routing. Built with Node.js and Express REST services, it handles instant location tracking, emergency contact dispatching, and live status reporting.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/charubala9602-jpg/protfolio',
  },
  {
    id: 'aura',
    title: 'Aura Portfolio & Showcase',
    category: 'Design System & UI Component Kit',
    image: '/aura.jpg',
    tags: ['HTML5', 'Modern CSS', 'Vanilla JS', 'Accessibility'],
    summary: 'A high-end showcase website featuring fluid glassmorphic cards, dynamic background accents, smooth scroll navigation, and editorial typography standards.',
    fullDetails: 'Aura is a design system exploration centered on fluid web animations, organic blob layout geometry, and accessible dark/light theme switching without external heavy frameworks.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/charubala9602-jpg/protfolio',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
            Things I've Built
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)' }}>
            A curated selection of functional web applications, full-stack tools, and modern user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {projectsList.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  height: '220px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#0F172A',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#FBBF24',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Body Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 800, marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '22px', marginBottom: '20px', flex: 1 }}>
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--amber-soft)',
                        color: 'var(--text-main)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '10px',
                      fontSize: '13px',
                      justifyContent: 'center',
                    }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--amber-border)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--text-main)',
                      backgroundColor: 'var(--amber-light)',
                    }}
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '700px',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid var(--amber-border)',
              padding: '32px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--text-main)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <X size={18} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginBottom: '24px',
              }}
            />

            <span className="section-tag">{selectedProject.category}</span>
            <h3 className="font-serif" style={{ fontSize: '28px', fontWeight: 800, margin: '10px 0' }}>
              {selectedProject.title}
            </h3>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '26px', marginBottom: '20px' }}>
              {selectedProject.fullDetails}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '10px', color: 'var(--amber-primary)' }}>
                Tech Stack Architecture:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      padding: '6px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--amber-soft)',
                      color: 'var(--text-main)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#contact" onClick={() => setSelectedProject(null)} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <ExternalLink size={16} />
                <span>Request Project Demo</span>
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
