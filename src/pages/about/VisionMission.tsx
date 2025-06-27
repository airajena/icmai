
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const VisionMission = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Vision & Mission</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-blue-100 text-lg">
            To be the global leader in cost accounting education and professional development, 
            setting international standards for cost management practices.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To promote and advance the science of cost accountancy, provide professional 
            excellence through education, and maintain the highest ethical standards in practice.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Integrity</h3>
            <p className="text-gray-600">Maintaining the highest standards of professional ethics</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Excellence</h3>
            <p className="text-gray-600">Striving for continuous improvement and quality</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Innovation</h3>
            <p className="text-gray-600">Embracing change and technological advancement</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default VisionMission;
