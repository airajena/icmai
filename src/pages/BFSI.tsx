
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, BookOpen, Users } from 'lucide-react';

const BFSI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Banking, Financial Services and Insurance Board</h1>
          <p className="text-gray-600 mb-8">Specialized services for the BFSI sector</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Building2 className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Banking Services</h3>
              <p className="text-gray-600">Specialized banking sector advisory</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Financial Services</h3>
              <p className="text-gray-600">Comprehensive financial consulting</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Insurance</h3>
              <p className="text-gray-600">Insurance sector expertise</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Training Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Risk Management in Banking</li>
                  <li>• Financial Analytics</li>
                  <li>• Insurance Accounting</li>
                  <li>• Regulatory Compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Publications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• BFSI Sector Reports</li>
                  <li>• Regulatory Updates</li>
                  <li>• Best Practices Guide</li>
                  <li>• Industry Analysis</li>
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

export default BFSI;
