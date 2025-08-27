import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="py-20 sm:py-12 min-h-screen">
      <Header />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
