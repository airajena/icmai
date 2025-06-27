import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageTemplateProps {
  children: React.ReactNode;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
}

const PageTemplate = ({ children, heroTitle, heroSubtitle, heroImage }: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      {heroTitle && (
        <div className="relative text-white mt-8 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage || '/assets/img/default-hero.webp'} 
              alt={heroTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative py-24 md:py-32 px-4 md:px-8"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
              {heroSubtitle && (
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  {heroSubtitle}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <main className={!heroTitle ? "py-12" : "py-12"}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
