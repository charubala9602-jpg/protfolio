import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('charu-theme');
    return saved === 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('charu-theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('charu-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const openResumeModal = () => setIsResumeOpen(true);
  const closeResumeModal = () => setIsResumeOpen(false);

  // Direct 1-Page PDF Download Handler
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Charu_FullStack_Developer_Resume.pdf';
    link.download = 'Charu_FullStack_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Header isDark={isDark} toggleTheme={toggleTheme} downloadPDF={downloadPDF} openResumeModal={openResumeModal} />
      <main>
        <Hero downloadPDF={downloadPDF} openResumeModal={openResumeModal} />
        <About />
        <Skills />
        <Projects />
        <Services />
        <TestimonialsFAQ />
        <Contact />
      </main>
      <Footer downloadPDF={downloadPDF} openResumeModal={openResumeModal} />
      <ResumeModal isOpen={isResumeOpen} onClose={closeResumeModal} />
    </div>
  );
}
