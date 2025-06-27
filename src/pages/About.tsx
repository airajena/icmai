
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">About ICMAI</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Institute History</h2>
                <p className="text-gray-700 mb-4">
                  The Institute of Cost Accountants of India (ICMAI) was established by an Act of Parliament in 1959 
                  as a statutory body to regulate the profession of Cost Accountancy in India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Vision & Mission</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h3 className="font-bold text-lg mb-2">Vision</h3>
                  <p className="text-gray-700">To be the global leader in cost accounting education and professional development.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Mission</h3>
                  <p className="text-gray-700">To promote and advance the science of cost accountancy and provide professional excellence.</p>
                </div>
              </section>
            </div>

            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-900 hover:underline">Institute Act and Rules</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Council Members</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Past Presidents</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Organisation Structure</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Awards & Recognition</a></li>
                  <li><a href="#" className="text-blue-900 hover:underline">Annual Reports</a></li>
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

export default About;
