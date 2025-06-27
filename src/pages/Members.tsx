
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, FileText, Search } from 'lucide-react';

const Members = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Members Portal</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3">Members Login</h3>
              <p className="text-gray-600 mb-4">Access your member portal and exclusive services</p>
              <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Login Now</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3">Online Application</h3>
              <p className="text-gray-600 mb-4">Apply for membership online with easy process</p>
              <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Apply Now</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Search className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3">Member Search</h3>
              <p className="text-gray-600 mb-4">Find and connect with other members</p>
              <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Search</button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Member Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-900 hover:underline">Forms and Guidelines</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Practising Members</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Member Directory</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">CPE Requirements</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-900 hover:underline">Member Benevolent Fund</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Circulars & Updates</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Renewal Process</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Contact Support</a></li>
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

export default Members;
