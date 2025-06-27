
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Handshake, Users, Calendar } from 'lucide-react';

const IndustryConnect = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Industry Connect</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Building2 className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Collaborations</h3>
              <p className="text-gray-600">Strategic partnerships</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Handshake className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600">Business alliances</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Professional Networks</h3>
              <p className="text-gray-600">Connect with experts</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Calendar className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Events</h3>
              <p className="text-gray-600">Conferences & seminars</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Industry Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Manufacturing', 'Banking & Finance', 'IT & Software', 'Pharmaceuticals', 'Automotive', 'Energy & Power', 'Retail & FMCG', 'Infrastructure'].map((industry) => (
                <div key={industry} className="bg-white p-4 rounded text-center border">
                  <h4 className="font-semibold text-gray-800">{industry}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaboration Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Industry exposure for students</li>
                <li>• Practical training opportunities</li>
                <li>• Research & development projects</li>
                <li>• Professional skill enhancement</li>
                <li>• Career placement assistance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold">Industry Conference 2025</h4>
                  <p className="text-gray-600 text-sm">March 15-16, 2025</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold">Corporate Networking Meet</h4>
                  <p className="text-gray-600 text-sm">April 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryConnect;
