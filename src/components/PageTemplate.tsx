
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
