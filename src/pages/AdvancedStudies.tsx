
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Award, FileText } from 'lucide-react';

const AdvancedStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Advanced Studies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Research Programs</h3>
              <p className="text-gray-600">Advanced research in cost accounting</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Award className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">PhD Programs</h3>
              <p className="text-gray-600">Doctoral studies in management</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Publications</h3>
              <p className="text-gray-600">Research papers and journals</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Post Graduate Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Master of Business Administration (MBA)</li>
                  <li>• Master of Commerce (M.Com)</li>
                  <li>• Post Graduate Diploma in Management</li>
                  <li>• Advanced Diploma in Cost Accounting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Research Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cost Management Systems</li>
                  <li>• Strategic Management Accounting</li>
                  <li>• Financial Analytics</li>
                  <li>• Sustainability Accounting</li>
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

export default AdvancedStudies;
