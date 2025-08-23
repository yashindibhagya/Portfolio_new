import React, { useState, useEffect } from 'react';
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

  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        {/* Background gradients */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Primary gradients */}
          <div className="absolute -top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[40%] -left-[10%] w-[600px] h-[600px] rounded-full blur-3xl"></div>

          {/* Additional color spots for more depth */}
          <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500/10 to-rose-500/5 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-500/10 to-blue-500/5 blur-3xl"></div>

          {/* Small accent gradients */}
          <div className="absolute top-[60%] right-[30%] w-[200px] h-[200px] rounded-full bg-gradient-to-r from-cyan-500/15 to-teal-500/10 blur-2xl"></div>
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-l from-violet-500/15 to-purple-500/10 blur-2xl"></div>
        </div>

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
                  <Education />
                  <Marquee />
                  <Projects />

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
      </div>
    </BrowserRouter>
  );
}

export default App;
