import React from 'react';
import { Globe, Palette, Server, Sparkles, Check } from 'lucide-react';

const servicesList = [
  {
    icon: Globe,
    title: 'Web Application Development',
    desc: 'Building lightning-fast, mobile-responsive web applications optimized for speed, accessibility, and high performance across every screen size.',
    bullets: ['Responsive Single Page Applications', 'Modern React & JavaScript Ecosystem', 'Cross-Browser & Mobile Optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX Interface Architecture',
    desc: 'Transforming conceptual user journeys into elegant, functional digital wireframes and prototypes with intuitive layout hierarchy and intentional typography.',
    bullets: ['Human-Centered Design Systems', 'Interactive Micro-Animations & Flows', 'Light & Dark Mode Styling'],
  },
  {
    icon: Server,
    title: 'Full-Stack & API Development',
    desc: 'Connecting front-facing user interfaces with resilient backend APIs, authenticated routing, and relational or document database structures.',
    bullets: ['Node.js, Express & RESTful APIs', 'SQL & MongoDB Database Modeling', 'Secure Data Flow & Session Logic'],
  },
  {
    icon: Sparkles,
    title: 'Creative Digital Experiences',
    desc: 'Elevating standard web pages into engaging brand portfolios with fluid transitions, micro-interactions, and memorable visual personality.',
    bullets: ['Modern CSS & Canvas Micro-Effects', 'Interactive Landing & Showcase Pages', 'Brand Storytelling & Aesthetics'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <span className="section-tag">Offerings</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
            What I Love Building
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)' }}>
            Comprehensive full-stack development tailored to founders, modern companies, and creative ideas.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="services-grid"
        >
          {servicesList.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div key={index} className="glass-card" style={{ padding: '36px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--amber-soft)',
                      color: 'var(--amber-primary)',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 800, marginBottom: '10px' }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '24px', marginBottom: '18px' }}>
                      {srv.desc}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'grid', gap: '8px' }}>
                      {srv.bullets.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)', fontWeight: 500 }}>
                          <span
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--amber-soft)',
                              color: 'var(--amber-primary)',
                              display: 'grid',
                              placeItems: 'center',
                            }}
                          >
                            <Check size={12} />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
