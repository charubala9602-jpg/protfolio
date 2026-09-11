import React, { useState } from 'react';
import { Layout, Server, Database, Code, Terminal, Cpu, GitBranch, Layers, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'languages', label: 'Languages & Core' },
];

const skillsData = [
  {
    name: 'React.js',
    category: 'frontend',
    mastery: 95,
    tag: 'Core Frontend',
    desc: 'Hooks, SPA Architecture, Context & State Engine',
    icon: Layout,
    color: '#06B6D4',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    mastery: 92,
    tag: 'Core Language',
    desc: 'Async/Await, Promises, Event Loop, DOM Manipulation',
    icon: Code,
    color: '#F59E0B',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    mastery: 96,
    tag: 'Styling & A11y',
    desc: 'Semantic Markup, Flexbox, Grid, Custom CSS Variables',
    icon: Layers,
    color: '#EC4899',
  },
  {
    name: 'Node.js Engine',
    category: 'backend',
    mastery: 88,
    tag: 'Backend Runtime',
    desc: 'V8 Engine, Event-Driven Non-blocking I/O Architecture',
    icon: Server,
    color: '#10B981',
  },
  {
    name: 'Express.js',
    category: 'backend',
    mastery: 86,
    tag: 'REST APIs',
    desc: 'Custom Middleware, Routing, Authentication & CORS',
    icon: Server,
    color: '#6366F1',
  },
  {
    name: 'SQL Databases',
    category: 'database',
    mastery: 85,
    tag: 'Relational DB',
    desc: 'PostgreSQL, MySQL, Schema Normalization, Queries',
    icon: Database,
    color: '#3B82F6',
  },
  {
    name: 'MongoDB NoSQL',
    category: 'database',
    mastery: 88,
    tag: 'Document Store',
    desc: 'Collections, Aggregation Pipelines, Mongoose, Atlas',
    icon: Database,
    color: '#10B981',
  },
  {
    name: 'Python',
    category: 'languages',
    mastery: 84,
    tag: 'Backend Logic',
    desc: 'Data Structures, Scripting, Automation & Logic',
    icon: Terminal,
    color: '#F59E0B',
  },
  {
    name: 'Java (OOP)',
    category: 'languages',
    mastery: 82,
    tag: 'Systems & OOP',
    desc: 'Object-Oriented Programming, Classes, Inheritance',
    icon: Cpu,
    color: '#EF4444',
  },
  {
    name: 'C Language',
    category: 'languages',
    mastery: 80,
    tag: 'Fundamental',
    desc: 'Pointers, Memory Allocation, Linear Data Structures',
    icon: Cpu,
    color: '#8B5CF6',
  },
  {
    name: 'Git & GitHub',
    category: 'languages',
    mastery: 92,
    tag: 'DevOps & Tooling',
    desc: 'Branching Strategy, PR Workflows, CI/CD Hosting',
    icon: GitBranch,
    color: '#F59E0B',
  },
  {
    name: 'Vite & Build Tools',
    category: 'frontend',
    mastery: 90,
    tag: 'Bundling',
    desc: 'Fast Hot Module Reloading, Production Bundling',
    icon: Zap,
    color: '#06B6D4',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="section-tag">Technical Toolbox</span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>
            Tools I Turn Into Ideas
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--text-muted)' }}>
            A curated stack of modern web technologies, reactive frameworks, and database architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '14px',
                  fontWeight: 700,
                  backgroundColor: isActive ? 'var(--amber-primary)' : 'var(--card-bg)',
                  color: isActive ? '#000000' : 'var(--text-main)',
                  border: isActive ? '1px solid var(--amber-primary)' : '1px solid var(--card-border)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Redesigned Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="skills-bento-grid"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Card Top Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'var(--amber-soft)',
                        color: 'var(--amber-primary)',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '999px',
                        backgroundColor: 'var(--amber-light)',
                        color: 'var(--amber-primary)',
                        border: '1px solid var(--amber-border)',
                      }}
                    >
                      {skill.tag}
                    </span>
                  </div>

                  {/* Clean Sans-Serif Title (No ligatures/serif confusion) */}
                  <h3
                    className="font-sans"
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '8px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {skill.name}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '22px', marginBottom: '24px' }}>
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar & Proficiency Indicator */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '8px' }}>
                    <span>Proficiency</span>
                    <span style={{ color: 'var(--amber-primary)' }}>{skill.mastery}%</span>
                  </div>
                  <div
                    style={{
                      height: '7px',
                      width: '100%',
                      backgroundColor: 'var(--amber-light)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.mastery}%`,
                        backgroundColor: 'var(--amber-primary)',
                        borderRadius: '4px',
                        transition: 'width 0.8s ease',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .skills-bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .skills-bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
