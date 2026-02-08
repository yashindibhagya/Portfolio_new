// App.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import ProjectsMarquee1 from './components/ProjectsMarquee';
import ProjectsMarquee from './components/Marquee';
import FAQ from './components/Faq';
import ScrollToTopButton from './components/ScrollToTopButton';

// ProjectDetails loaded directly - prevents empty page when chunk fails on deploy (e.g. subpath)
import ProjectDetails from './components/ProjectDetails';
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let cleanup;
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              if (id) setActiveSection(id);
              break;
            }
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      sections.forEach((s) => observer.observe(s));
      cleanup = () => sections.forEach((s) => observer.unobserve(s));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cleanup?.();
    };
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

  return (
    <BrowserRouter>
      <div className="min-h-screen relative bg-[#E4E9ED]">
        {/* Main content wrapper */}
        <div className="relative z-10">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#E4E9ED]">
              <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
          }>
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
                  <ProjectsMarquee1 />
                </div>
                <div className="w-full">
                  <Services />
                  <About />
                  <ProjectsMarquee />
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
          </Suspense>
        </div>

        {/* ✅ Global Scroll-to-Top Button */}
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
