
import React from 'react';
import { Users, Award, BookOpen, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Institute of Cost Accountants of India</h2>
          <p className="text-xl text-blue-100 mb-2">Statutory Body under an Act of Parliament</p>
          <p className="text-lg text-blue-200">Established 1959 | Professional Excellence in Cost Accounting</p>
        </div>

        {/* Statistics Counter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-3xl font-bold mb-2">5,00,000+</div>
            <div className="text-blue-200">Total Members</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Award className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-3xl font-bold mb-2">65+</div>
            <div className="text-blue-200">Years of Service</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <BookOpen className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-blue-200">Courses Offered</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <MapPin className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-blue-200">Regional Chapters</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-6">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            Member Registration
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            Exam Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
