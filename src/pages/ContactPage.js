import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
