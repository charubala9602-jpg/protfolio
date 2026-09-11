import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';

export default function Header({ isDark, toggleTheme, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        backgroundColor: scrolled
          ? isDark
            ? 'rgba(12, 15, 23, 0.88)'
            : 'rgba(250, 247, 242, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? isDark
            ? '1px solid rgba(245, 158, 11, 0.15)'
            : '1px solid rgba(217, 119, 6, 0.12)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            className="font-serif"
            style={{
              fontSize: '28px',
              fontWeight: '900',
              letterSpacing: '-0.5px',
              color: 'var(--text-main)',
            }}
          >
            Charu<span style={{ color: 'var(--amber-primary)' }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <a href="#about" style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
            About
          </a>
          <a href="#skills" style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
            Skills
          </a>
          <a href="#projects" style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
            Projects
          </a>
          <a href="#services" style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
            Services
          </a>
          <a href="#contact" style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
            Contact Us
          </a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'var(--amber-soft)',
              color: 'var(--amber-primary)',
              display: 'grid',
              placeItems: 'center',
              transition: 'transform 0.2s ease',
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Native Direct PDF Download Anchor */}
          <a
            href="/Charu_FullStack_Developer_Resume.pdf"
            download="Charu_FullStack_Developer_Resume.pdf"
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '14px',
              textDecoration: 'none',
            }}
            title="Download Official PDF Resume"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'var(--amber-soft)',
              color: 'var(--text-main)',
              display: 'none',
              placeItems: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--card-bg)',
            borderBottom: '1px solid var(--amber-border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px' }}>
            About
          </a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px' }}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px' }}>
            Projects
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px' }}>
            Services
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '16px' }}>
            Contact Us
          </a>
          <a
            href="/Charu_FullStack_Developer_Resume.pdf"
            download="Charu_FullStack_Developer_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ justifyContent: 'center', width: '100%', textDecoration: 'none' }}
          >
            <Download size={18} />
            <span>Download 1-Page PDF Resume</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: grid !important; }
        }
      `}</style>
    </header>
  );
}
