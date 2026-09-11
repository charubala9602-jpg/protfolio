const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4',
});

// A4 Dimensions: 595.28 x 841.89 pt
const margin = 40;
let y = 45;

// Colors
const primaryColor = [217, 119, 6]; // #D97706 Warm Amber
const darkColor = [28, 25, 23]; // #1C1917 Deep Dark
const textColor = [68, 64, 60]; // #44403C Muted

// Top Decorative Bar
doc.setFillColor(...primaryColor);
doc.rect(0, 0, 595.28, 8, 'F');

// Header Name
doc.setFont('Helvetica', 'bold');
doc.setFontSize(24);
doc.setTextColor(...darkColor);
doc.text('CHARU', margin, y);

// Role Title
y += 20;
doc.setFontSize(12);
doc.setTextColor(...primaryColor);
doc.text('FULL-STACK DEVELOPER & UI ARCHITECT', margin, y);

// Contact Info Bar
y += 18;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textColor);
doc.text('Email: charu.builds@gmail.com   |   GitHub: github.com/charubala9602-jpg   |   Location: Remote / Global', margin, y);

// Divider Line
y += 14;
doc.setDrawColor(217, 119, 6);
doc.setLineWidth(1.5);
doc.line(margin, y, 595.28 - margin, y);

// SECTION: EXECUTIVE PROFILE
y += 22;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...primaryColor);
doc.text('EXECUTIVE PROFILE', margin, y);

y += 14;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...textColor);
const profileText = "Dedicated 3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology, specializing in modern React applications, scalable Node.js/Express backends, and responsive UI systems. Passionate about marrying thoughtful visual typography with clean modular code to deliver accessible, high-performance web applications.";
const splitProfile = doc.splitTextToSize(profileText, 595.28 - margin * 2);
doc.text(splitProfile, margin, y);
y += splitProfile.length * 13 + 8;

// SECTION: EDUCATION & ACADEMIC BACKGROUND
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...primaryColor);
doc.text('EDUCATION & ACADEMIC BACKGROUND', margin, y);

y += 16;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...darkColor);
doc.text('B.Tech in Information Technology (3rd Year Student)', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('Mount Zion College of Eng. & Tech.', 595.28 - margin - 170, y);

y += 13;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textColor);
doc.text('Focus: Web Development, Data Structures, Relational DB & Full-Stack Systems', margin, y);

// SECTION: TECHNICAL CORE COMPETENCIES
y += 24;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...primaryColor);
doc.text('TECHNICAL CORE COMPETENCIES', margin, y);

y += 14;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...darkColor);
doc.text('Frontend Architecture:', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(...textColor);
doc.text('HTML5, CSS3, Modern JavaScript (ES6+), React.js, Tailwind CSS, Responsive SPA', margin + 120, y);

y += 15;
doc.setFont('Helvetica', 'bold');
doc.setTextColor(...darkColor);
doc.text('Backend & APIs:', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(...textColor);
doc.text('Node.js, Express.js, RESTful APIs, Python, Microservice Logic', margin + 120, y);

y += 15;
doc.setFont('Helvetica', 'bold');
doc.setTextColor(...darkColor);
doc.text('Databases & Tools:', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(...textColor);
doc.text('SQL (PostgreSQL / MySQL), MongoDB NoSQL, Git, GitHub, Vercel, Vite', margin + 120, y);

y += 15;
doc.setFont('Helvetica', 'bold');
doc.setTextColor(...darkColor);
doc.text('Core Languages:', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(...textColor);
doc.text('JavaScript, Python, Java, C Language, SQL', margin + 120, y);

// SECTION: FEATURED PROJECTS
y += 24;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...primaryColor);
doc.text('FEATURED PROJECTS', margin, y);

// Project 1
y += 16;
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...darkColor);
doc.text('BiteHub — Food Delivery Platform', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('React | Node.js | MongoDB | Express', 595.28 - margin - 160, y);

y += 13;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textColor);
const p1Text = "Engineered a responsive food ordering web application featuring real-time menu browsing, category filtering, cart state management, and a responsive checkout dashboard.";
const splitP1 = doc.splitTextToSize(p1Text, 595.28 - margin * 2);
doc.text(splitP1, margin, y);
y += splitP1.length * 12 + 6;

// Project 2
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...darkColor);
doc.text('Jarvish SOS — Real-Time Emergency Alert System', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('React | Node.js | Express | Geolocation', 595.28 - margin - 180, y);

y += 13;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textColor);
const p2Text = "Architected an intelligent emergency alert and SOS response web application featuring real-time location sharing, priority notification dispatch, and responsive incident dashboard.";
const splitP2 = doc.splitTextToSize(p2Text, 595.28 - margin * 2);
doc.text(splitP2, margin, y);
y += splitP2.length * 12 + 6;

// Project 3
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...darkColor);
doc.text('Aura — Portfolio & Design System Showcase', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('HTML5 | CSS3 | JavaScript', 595.28 - margin - 130, y);

y += 13;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textColor);
const p3Text = "Built a high-end showcase website featuring fluid glassmorphic components, dynamic gradient background accents, smooth scroll navigation, and modern accessibility standards.";
const splitP3 = doc.splitTextToSize(p3Text, 595.28 - margin * 2);
doc.text(splitP3, margin, y);

// Footer
y = 805;
doc.setFontSize(8);
doc.setTextColor(150, 150, 150);
doc.text('Charu — 3rd Year B.Tech IT, Mount Zion College of Engineering and Technology', margin, y);
doc.text('Page 1 of 1', 595.28 - margin - 45, y);

// Save PDF to public/
const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(path.join(outputDir, 'Charu_FullStack_Developer_Resume.pdf'), pdfBuffer);
console.log('PDF generated successfully with updated college details!');
