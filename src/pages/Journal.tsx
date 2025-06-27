
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Download, Search } from 'lucide-react';

const Journal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">ICMAI Journal & Publications</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Latest Journals</h3>
              <p className="text-gray-600">Current month publications</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Download className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Archive</h3>
              <p className="text-gray-600">Historical journal collection</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Search className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Research Papers</h3>
              <p className="text-gray-600">Academic research publications</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Publications</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded border">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Cost Management Quarterly - Vol {item}</h3>
                  <p className="text-gray-600 mb-3">Latest insights on cost accounting practices and industry trends</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Published: January 2025</span>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm">Download PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Journal Categories</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cost Management & Control</li>
                <li>• Strategic Management Accounting</li>
                <li>• Financial Analysis & Reporting</li>
                <li>• Taxation & Compliance</li>
                <li>• Industry Case Studies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Submission Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Original research papers</li>
                <li>• Peer review process</li>
                <li>• Academic formatting standards</li>
                <li>• Copyright guidelines</li>
                <li>• Publication timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
