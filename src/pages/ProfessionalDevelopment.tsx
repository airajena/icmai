
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, BookOpen, Users } from 'lucide-react';

const ProfessionalDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Professional Development & CPE</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Award className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">CPE Programs</h3>
              <p className="text-gray-600 mb-4">Continuing Professional Education for members</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">Enroll Now</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">MCBT</h3>
              <p className="text-gray-600 mb-4">Management and Cost Based Training</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">Learn More</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">MES</h3>
              <p className="text-gray-600 mb-4">Management Excellence Series</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">Join Program</button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Avenues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Certification Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Certificate in Business Valuation</li>
                  <li>• Certificate in Forensic Audit</li>
                  <li>• Certificate in GST</li>
                  <li>• Certificate in International Trade</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Training Modules</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Leadership Development</li>
                  <li>• Strategic Management</li>
                  <li>• Risk Management</li>
                  <li>• Digital Finance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalDevelopment;
