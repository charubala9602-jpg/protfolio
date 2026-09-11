import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzI6L4CJZlCpS7Ege5abifNK82CpR_CcJ23cO98SrjraD0a_9sKH_2d7qCQ2jJk6oEWOg/exec';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const url = SCRIPT_URL + '?' + new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    fetch(url, { method: 'GET', mode: 'no-cors' })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Intro Column */}
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '20px' }}>
              Have an Idea? <br />
              Let's Make It Real.
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)', marginBottom: '36px' }}>
              Whether you have a full-stack project requirement, want to collaborate on a new digital product, or wish to review my CV, my inbox is open!
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--amber-soft)',
                    color: 'var(--amber-primary)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '1px' }}>EMAIL ME</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>charu.builds@gmail.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--amber-soft)',
                    color: 'var(--amber-primary)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '1px' }}>LOCATION</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>Global / Remote Available</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--amber-soft)',
                    color: 'var(--amber-primary)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '1px' }}>RESPONSE TIME</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>Within 24 Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card" style={{ padding: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid var(--amber-border)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontSize: '15px',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid var(--amber-border)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontSize: '15px',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 (555) 000-1234"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid var(--amber-border)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontSize: '15px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>
                  YOUR MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid var(--amber-border)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontSize: '15px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  fontSize: '16px',
                }}
              >
                <Send size={18} />
                <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {status === 'success' && (
                <div
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={18} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    color: '#EF4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  <AlertCircle size={18} />
                  <span>Please fill out all required fields before submitting.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
