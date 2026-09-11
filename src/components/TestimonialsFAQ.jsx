import React, { useState } from 'react';
import { Quote, Plus, Minus, MessageSquare, HelpCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "Charu has an extraordinary instinct for balancing clean backend code with breathtaking frontend interactions. She always asks the right questions before writing code.",
    author: "Aarav K.",
    role: "Tech Lead & Collaborator",
    avatar: "AK",
  },
  {
    quote: "Working with Charu on our web application was effortless. Her proactive communication and deep knowledge of modern UI patterns saved our sprint weeks of rework.",
    author: "Sneha M.",
    role: "Product Engineer",
    avatar: "SM",
  },
  {
    quote: "Her curiosity is contagious. Charu took our vague requirements and returned an intuitive dashboard that everyone on the team loved immediately.",
    author: "Rohan D.",
    role: "Full-Stack Partner",
    avatar: "RD",
  },
];

const faqs = [
  {
    q: "What is your primary technology stack?",
    a: "My core daily stack includes React.js, JavaScript (ES6+), HTML5/CSS3, Node.js, Express.js, SQL, and MongoDB, supplemented by Python, Java, and C for system logic.",
  },
  {
    q: "How can I preview or download your CV / Resume?",
    a: "You can click the 'Resume / CV' button in the top navigation bar or the Hero section. It opens an interactive online preview of my CV with options to print or download a PDF version.",
  },
  {
    q: "Are you open to full-time engineering roles or freelance projects?",
    a: "Yes! I am actively open to full-time developer positions, remote engineering roles, and innovative freelance collaborations.",
  },
  {
    q: "How do you handle UI design and responsive development?",
    a: "I focus on user needs and visual hierarchy first, then implement clean fluid layouts using modern CSS Grid/Flexbox, reusable React components, accessible interactions, and testing across devices.",
  },
  {
    q: "What is the best way to contact you?",
    a: "Fill out the contact form below with your name, email, and message. I respond to all inquiries within 24 hours.",
  },
];

export default function TestimonialsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <span className="section-tag">Collaborations</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
              Words That Keep Me Building
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)' }}>
              Feedback and reflections from peers and project teammates.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
            className="testimonials-grid"
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <Quote size={36} color="var(--amber-primary)" style={{ opacity: 0.6, marginBottom: '16px' }} />
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: 'var(--text-main)', lineHeight: '26px', flex: 1, marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--amber-soft)',
                      color: 'var(--amber-primary)',
                      fontWeight: 800,
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '15px' }}>{t.author}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 50px' }}>
            <span className="section-tag">Common Inquiries</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
              Questions? Answered.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)' }}>
              Clear insights into my background, workflow, and engineering philosophy.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    borderColor: isOpen ? 'var(--amber-primary)' : 'var(--card-border)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '22px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '17px',
                      color: 'var(--text-main)',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--amber-soft)',
                        color: 'var(--amber-primary)',
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0,
                        marginLeft: '16px',
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 28px 24px',
                        fontSize: '15px',
                        lineHeight: '26px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 992px) {
            .testimonials-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
