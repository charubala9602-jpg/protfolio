import React from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--amber-border)',
          position: 'relative',
          padding: '0',
        }}
      >
        {/* Sticky Control Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: 'var(--card-bg)',
            borderBottom: '1px solid var(--card-border)',
            padding: '16px 28px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--amber-primary)" />
            <span className="font-sans" style={{ fontSize: '18px', fontWeight: 800 }}>
              Curriculum Vitae (1-Page Official PDF)
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'var(--amber-soft)',
                color: '#B45309',
              }}
            >
              VERIFIED PDF
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handlePrint}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                backgroundColor: 'var(--amber-soft)',
                color: 'var(--amber-primary)',
                fontSize: '13px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Printer size={15} />
              <span>Print Preview</span>
            </button>

            <a
              href="/Charu_FullStack_Developer_Resume.pdf"
              download="Charu_FullStack_Developer_Resume.pdf"
              className="btn-primary"
              style={{
                padding: '8px 18px',
                fontSize: '13px',
                textDecoration: 'none',
              }}
            >
              <Download size={15} />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
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
          </div>
        </div>

        {/* 1-Page Styled PDF Resume Document Container */}
        <div style={{ padding: '36px 44px' }} className="printable-cv">
          {/* Top Decorative Amber Line */}
          <div style={{ height: '4px', backgroundColor: 'var(--amber-primary)', borderRadius: '2px', marginBottom: '24px' }} />

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--card-border)', paddingBottom: '20px', marginBottom: '24px' }}>
            <div>
              <h1 className="font-sans" style={{ fontSize: '32px', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                CHARU
              </h1>
              <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--amber-primary)', letterSpacing: '0.5px', marginTop: '4px' }}>
                FULL-STACK DEVELOPER & UI ARCHITECT
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-subtle)', marginTop: '2px' }}>
                3rd Year B.Tech IT • Mount Zion College of Engineering and Technology
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '20px' }}>
              <div>✉ charu.builds@gmail.com</div>
              <div>🔗 github.com/charubala9602-jpg</div>
              <div>📍 Remote / Global Available</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="font-sans" style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Executive Profile
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-muted)' }}>
              Dedicated 3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology, specializing in modern React applications, scalable Node.js/Express backends, and responsive UI systems. Passionate about marrying thoughtful visual typography with clean modular code to deliver accessible, high-performance web applications.
            </p>
          </div>

          {/* Education & Academic Background */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="font-sans" style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Education & Academic Background
            </h2>
            <div style={{ padding: '14px 18px', borderRadius: '12px', backgroundColor: 'var(--amber-light)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>B.Tech in Information Technology (3rd Year Student)</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>Mount Zion College of Engineering and Technology</div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--amber-primary)', backgroundColor: 'var(--amber-soft)', padding: '4px 12px', borderRadius: '999px' }}>
                Currently Enrolled
              </span>
            </div>
          </div>

          {/* Core Competencies Grid */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="font-sans" style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Technical Core Competencies
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
              <div style={{ padding: '12px 16px', borderRadius: '10px', backgroundColor: 'var(--amber-light)', border: '1px solid var(--card-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>Frontend Architecture</div>
                <div style={{ color: 'var(--text-muted)' }}>HTML5, CSS3, Modern JavaScript (ES6+), React.js, Tailwind CSS, Responsive SPA</div>
              </div>

              <div style={{ padding: '12px 16px', borderRadius: '10px', backgroundColor: 'var(--amber-light)', border: '1px solid var(--card-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>Backend & Database Systems</div>
                <div style={{ color: 'var(--text-muted)' }}>Node.js, Express.js, RESTful APIs, SQL (PostgreSQL), MongoDB NoSQL</div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="font-sans" style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Featured Projects
            </h2>

            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ borderLeft: '3px solid var(--amber-primary)', paddingLeft: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800, fontSize: '14px' }}>
                  <span>BiteHub — Food Delivery Platform</span>
                  <span style={{ fontSize: '12px', color: 'var(--amber-primary)' }}>React | Node | MongoDB</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '18px' }}>
                  Engineered a responsive food ordering web application featuring real-time menu browsing, category filtering, cart state management, and a responsive checkout dashboard.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--amber-primary)', paddingLeft: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800, fontSize: '14px' }}>
                  <span>Jarvish SOS — Real-Time Emergency System</span>
                  <span style={{ fontSize: '12px', color: 'var(--amber-primary)' }}>React | Express | Geolocation</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '18px' }}>
                  Architected an intelligent emergency alert and SOS response web application featuring real-time location sharing, priority notification dispatch, and incident dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
