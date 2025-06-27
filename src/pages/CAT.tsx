
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CAT = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">CAT Program</h1>
          
          <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Certificate in Accounting Technician</h2>
            <p className="text-blue-100">A foundational program designed to provide basic accounting skills and knowledge</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h3>
              <p className="text-gray-600 mb-6">
                The Certificate in Accounting Technician (CAT) program is designed for individuals seeking 
                to develop fundamental accounting skills and knowledge in the field of cost and management accounting.
              </p>

              <h4 className="text-lg font-bold text-gray-800 mb-3">Course Structure</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Fundamentals of Accounting</li>
                <li>• Basic Cost Accounting</li>
                <li>• Business Mathematics</li>
                <li>• Commercial Law</li>
                <li>• Computer Applications</li>
              </ul>

              <h4 className="text-lg font-bold text-gray-800 mb-3">Duration</h4>
              <p className="text-gray-600">6 months to 1 year (flexible timing)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility & Admission</h3>
              
              <h4 className="font-bold text-gray-700 mb-2">Minimum Qualification:</h4>
              <p className="text-gray-600 mb-4">10th standard or equivalent</p>

              <h4 className="font-bold text-gray-700 mb-2">Career Opportunities:</h4>
              <ul className="space-y-1 text-gray-600 mb-6">
                <li>• Accounting Assistant</li>
                <li>• Junior Cost Clerk</li>
                <li>• Bookkeeper</li>
                <li>• Data Entry Operator</li>
              </ul>

              <button className="bg-blue-900 text-white px-6 py-3 rounded font-semibold w-full">
                Apply for CAT Program
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CAT;
