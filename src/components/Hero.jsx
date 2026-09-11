import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, FileText } from 'lucide-react';

export default function Hero({ openResumeModal }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      className="hero-section"
    >
      {/* Ambient Circles */}
      <div className="ambient-circle ambient-circle-1" />
      <div className="ambient-circle ambient-circle-2" />
      <div className="ambient-circle ambient-circle-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Text Column */}
          <div>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 16px',
                borderRadius: '999px',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--text-main)',
                fontSize: '12.5px',
                fontWeight: 700,
                marginBottom: '16px',
                border: '1px solid var(--amber-border)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  display: 'inline-block',
                }}
              />
              <span>3rd Year B.Tech IT Student</span>
              <span style={{ color: 'var(--amber-primary)' }}>•</span>
              <span style={{ color: 'var(--text-muted)' }}>Mount Zion College of Eng. & Tech.</span>
            </div>

            {/* Editorial Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(34px, 4.2vw, 52px)',
                lineHeight: 1.12,
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '16px',
                letterSpacing: '-1px',
              }}
            >
              Code with a mind <br />
              A stack with <span style={{ fontStyle: 'italic', color: 'var(--amber-primary)' }}>attitude</span> <br />
              & an engineer with <span style={{ color: 'var(--amber-primary)' }}>class</span>
            </h1>

            {/* Body Copy */}
            <p
              style={{
                fontSize: '16.5px',
                lineHeight: '26px',
                color: 'var(--text-muted)',
                maxWidth: '520px',
                marginBottom: '24px',
              }}
            >
              I am a 3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology. I craft high-performance full-stack web solutions, pixel-perfect user interfaces, and robust backend architectures.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
              <a
                href="/Charu_FullStack_Developer_Resume.pdf"
                download="Charu_FullStack_Developer_Resume.pdf"
                className="btn-primary"
                style={{ textDecoration: 'none', padding: '12px 26px', fontSize: '14.5px' }}
              >
                <Download size={17} />
                <span>Download Resume (PDF)</span>
              </a>

              <button onClick={openResumeModal} className="btn-secondary" style={{ padding: '11px 22px', fontSize: '14.5px' }}>
                <FileText size={17} />
                <span>Preview CV Online</span>
              </button>

              <a href="#projects" className="btn-secondary" style={{ border: 'none', textDecoration: 'none', padding: '11px 18px', fontSize: '14.5px' }}>
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.5px' }}>
                Follow Us
              </span>
              <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--amber-border)' }} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href="https://github.com/charubala9602-jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Github size={16} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Linkedin size={16} />
                </a>

                <a
                  href="mailto:charu.builds@gmail.com"
                  aria-label="Email"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Fluid Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              <div className="blob-shape-backdrop" />

              <div className="blob-shape-frame" style={{ height: '390px', maxWidth: '380px' }}>
                <img src="/img/photo.png" alt="Charu Full-Stack Developer" />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-15px',
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--amber-border)',
                  padding: '10px 16px',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--amber-soft)',
                    color: 'var(--amber-primary)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--text-main)' }}>3rd Year B.Tech IT</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>Mount Zion College of Eng. & Tech.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1200px) and (max-height: 900px) {
          .hero-section {
            min-height: 100vh !important;
            padding-top: 90px !important;
            padding-bottom: 30px !important;
          }
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .blob-shape-frame {
            height: 340px !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
