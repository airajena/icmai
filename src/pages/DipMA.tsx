
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Users, Award, FileText } from 'lucide-react';

const DipMA = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Diploma in Management Accounting</h1>
          <p className="text-gray-600 mb-8">Specialized program for management accounting professionals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Course Information</h3>
              <p className="text-gray-600">Comprehensive curriculum</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Admission Process</h3>
              <p className="text-gray-600">Easy enrollment</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Award className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Curriculum</h3>
              <p className="text-gray-600">Industry-focused subjects</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Examinations</h3>
              <p className="text-gray-600">Assessment details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
              <p className="text-gray-600 mb-4">
                The Diploma in Management Accounting (DIP.MA) is designed for professionals seeking 
                specialized knowledge in management accounting practices and strategic decision making.
              </p>
              <h3 className="text-lg font-bold mb-3">Duration: 1 Year</h3>
              <h3 className="text-lg font-bold mb-3">Mode: Online/Offline</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Graduate in any discipline</li>
                <li>• Working professionals preferred</li>
                <li>• Basic accounting knowledge</li>
                <li>• Minimum 2 years work experience</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Core Subjects</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Management Accounting Fundamentals</li>
                  <li>• Cost Analysis & Control</li>
                  <li>• Budgeting & Forecasting</li>
                  <li>• Performance Measurement</li>
                  <li>• Strategic Cost Management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Elective Subjects</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• International Accounting Standards</li>
                  <li>• Risk Management</li>
                  <li>• Financial Analysis</li>
                  <li>• Digital Accounting Tools</li>
                  <li>• Corporate Governance</li>
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

export default DipMA;
