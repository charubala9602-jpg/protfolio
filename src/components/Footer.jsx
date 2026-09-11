import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Download, FileText } from 'lucide-react';

export default function Footer({ openResumeModal }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--amber-border)',
        paddingTop: '60px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--card-border)',
          }}
        >
          <div style={{ maxWidth: '460px' }}>
            <span className="font-serif" style={{ fontSize: '28px', fontWeight: 900 }}>
              Charu<span style={{ color: 'var(--amber-primary)' }}>.</span>
            </span>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '22px', marginTop: '10px' }}>
              3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology. Full-stack developer building thoughtful digital web applications with modern frameworks.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <a
              href="/Charu_FullStack_Developer_Resume.pdf"
              download="Charu_FullStack_Developer_Resume.pdf"
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '14px', textDecoration: 'none' }}
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>

            <button onClick={openResumeModal} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '14px' }}>
              <FileText size={16} />
              <span>Preview Online</span>
            </button>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://github.com/charubala9602-jpg"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--amber-soft)',
                  color: 'var(--text-main)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--amber-soft)',
                  color: 'var(--text-main)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:charu.builds@gmail.com"
                aria-label="Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--amber-soft)',
                  color: 'var(--text-main)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '24px',
            fontSize: '13px',
            color: 'var(--text-subtle)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span>© {new Date().getFullYear()} Charu • Mount Zion College of Engineering and Technology</span>
          <span>Crafted with React, Vite & Modern CSS</span>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--amber-primary)',
            color: '#000000',
            display: 'grid',
            placeItems: 'center',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 40,
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
