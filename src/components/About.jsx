import React from 'react';
import { Compass, Sparkles, Cpu, GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <span className="section-tag">The Developer Journey</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
            More Than Code
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)' }}>
            I am a 3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology. I believe engineering is an art form rooted in human empathy, crafting accessible web applications that solve real-world challenges.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '60px',
          }}
          className="cards-grid"
        >
          <div className="glass-card" style={{ padding: '36px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--amber-primary)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: '20px',
              }}
            >
              <GraduationCap size={28} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>
              Academic Foundation
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '24px' }}>
              Pursuing B.Tech in Information Technology (3rd Year) at Mount Zion College of Engineering and Technology, focusing on software engineering principles, algorithms, and web systems.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--amber-primary)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={28} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>
              Creative Builder
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '24px' }}>
              Design is communication. I craft fluid component hierarchies, harmonic typography, and intuitive user flows that spark joy from the very first interaction.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--amber-primary)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Cpu size={28} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>
              Problem Solver
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '24px' }}>
              Whether debugging asynchronous state updates or architecting relational and document database schemas, I break down complex challenges into clean, maintainable logic.
            </p>
          </div>
        </div>

        {/* Impact Metrics Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="metrics-grid"
        >
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '42px', fontWeight: 900, color: 'var(--amber-primary)' }}>
              3rd
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginTop: '4px' }}>Year B.Tech IT</div>
            <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2px' }}>Mount Zion Eng. College</div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '42px', fontWeight: 900, color: 'var(--amber-primary)' }}>
              10+
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginTop: '4px' }}>Projects Built</div>
            <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2px' }}>Full-Stack & React Apps</div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '42px', fontWeight: 900, color: 'var(--amber-primary)' }}>
              5+
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginTop: '4px' }}>Core Technologies</div>
            <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2px' }}>React, Node, SQL, MongoDB</div>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '42px', fontWeight: 900, color: 'var(--amber-primary)' }}>
              100%
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginTop: '4px' }}>Quality & Passion</div>
            <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2px' }}>Empathetic Engineering</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .cards-grid { grid-template-columns: 1fr !important; }
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
