
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Users, TrendingUp } from 'lucide-react';

const Placement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Placement Services</h1>
          
          <div className="bg-blue-900 text-white p-8 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div>Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div>Recruiting Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹8.5L</div>
                <div>Average Package</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Building2 className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Campus Placement</h3>
              <p className="text-gray-600">Direct recruitment from leading companies</p>
            </div>

            <div className="text-center">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Career Counselling</h3>
              <p className="text-gray-600">Professional guidance for career development</p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">C-Set Program</h3>
              <p className="text-gray-600">Skill enhancement training programs</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Tata Group', 'Reliance', 'Infosys', 'HDFC Bank', 'ITC Limited', 'Wipro', 'HUL', 'Mahindra'].map((company) => (
                <div key={company} className="bg-white p-4 rounded border text-center">
                  <div className="font-semibold text-gray-800">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placement;
