import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <main className="flex-grow bg-transparent">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
