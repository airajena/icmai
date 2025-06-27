
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import QuickAccess from '../components/QuickAccess';
import Highlights from '../components/Highlights';
import LeadershipProfile from '../components/LeadershipProfile';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero />
      <QuickAccess />
      <Highlights />
      <LeadershipProfile />
      <Footer />
    </div>
  );
};

export default Index;
