
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, FileText, Award } from 'lucide-react';

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Portal</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Courses</h3>
              <p className="text-gray-600 mb-4">Explore our comprehensive course structure</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">View Courses</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Admission</h3>
              <p className="text-gray-600 mb-4">Apply for admission to CMA courses</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">Apply Now</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Award className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Examinations</h3>
              <p className="text-gray-600 mb-4">Check results and exam schedules</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded">Check Results</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Foundation Course</h2>
              <p className="text-gray-600 mb-4">Start your CMA journey with our foundation course covering basic principles of cost accounting.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Fundamentals of Accounting</li>
                <li>• Laws & Ethics</li>
                <li>• Direct Taxation</li>
                <li>• Cost Accounting</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intermediate Course</h2>
              <p className="text-gray-600 mb-4">Advance your knowledge with intermediate level subjects and practical applications.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Cost & Management Accounting</li>
                <li>• Financial Management</li>
                <li>• Indirect Taxation</li>
                <li>• Company Accounts & Audit</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Students;
