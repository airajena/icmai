
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const InstituteHistory = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Institute History</h1>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Establishment and Foundation</h2>
        <p className="text-gray-700 mb-4">
          The Institute of Cost Accountants of India was established by an Act of Parliament in 1959 
          as a statutory body to regulate the profession of Cost Accountancy in India.
        </p>
        <p className="text-gray-700 mb-4">
          The Institute was founded to promote and advance the science of cost accountancy and to 
          provide professional excellence through education, training, and continuous development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Milestones</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• 1959 - Establishment by Act of Parliament</li>
            <li>• 1962 - First batch of Cost Accountants qualified</li>
            <li>• 1985 - International recognition and affiliations</li>
            <li>• 2000 - Digital transformation initiatives</li>
            <li>• 2010 - Expansion to international chapters</li>
            <li>• 2020 - Online education and examination system</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Members:</span>
              <span className="font-bold text-blue-900">75,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Regional Chapters:</span>
              <span className="font-bold text-blue-900">103</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Countries Present:</span>
              <span className="font-bold text-blue-900">25+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Years of Service:</span>
              <span className="font-bold text-blue-900">65+</span>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default InstituteHistory;
