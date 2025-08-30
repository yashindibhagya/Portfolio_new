// App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import PaintSplashCursor from './components/PaintSplashCursor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Education from './components/Education';
import Projects_Marquee from './components/ProjectsMarquee';
import Marquee from './components/Marquee';
import FAQ from './components/Faq';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTopButton from './components/ScrollToTopButton'; // ✅ Import

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const savedTab = sessionStorage.getItem('activeTab');

    if (savedPosition && window.location.pathname === '/') {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        if (savedTab) {
          setActiveSection(savedTab);
        }
      }, 100);

      sessionStorage.removeItem('scrollPosition');
      sessionStorage.removeItem('activeTab');
    }
  }, []);

  const theme = {
    colors: {
      primary: '#4ecdc4',
      secondary: '#ff6b6b',
      accent: '#96ceb4',
      background: '#f8f9fa',
    },
  };

  const GlobalStyle = createGlobalStyle`
    * {
      cursor: none !important;
    }
    
    a, button, [role="button"], [data-clickable] {
      position: relative;
      z-index: 1;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaintSplashCursor />
      <BrowserRouter>
      <div className="min-h-screen relative bg-[#E4E9ED]">
        {/* Main content wrapper */}
        <div className="relative z-10">
          <Routes>
            <Route path="/project/:id" element={
              <div className="w-full">
                <Header activeSection={activeSection} isProjectPage={true} />
                <ProjectDetails />
                <Footer />
              </div>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={
              <>
                <Header activeSection={activeSection} />
                <div className="w-full">
                  <Hero />
                  <Projects_Marquee />
                </div>
                <div className="w-full">
                  <Services />
                  <About />
                  <Marquee />
                </div>
                <div className="w-full">
                  <Skills />
                </div>
                <div className="w-full">
                  <Contact />
                  <FAQ />
                  <Footer />
                </div>
              </>
            } />
          </Routes>
        </div>

        {/* ✅ Global Scroll-to-Top Button */}
        <ScrollToTopButton />
      </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
