
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Announcements from '../components/Announcements';
import QuickAccess from '../components/QuickAccess';
import InstituteHighlights from '../components/InstituteHighlights';
import AcademicPrograms from '../components/AcademicPrograms';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero />
      <Announcements />
      <QuickAccess />
      <InstituteHighlights />
      <AcademicPrograms />
      <Footer />
    </div>
  );
};

export default Index;
