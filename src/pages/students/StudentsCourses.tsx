
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const StudentsCourses = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">CMA Courses</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Foundation Course</h3>
          <p className="text-gray-600 mb-4">Entry-level course for aspiring cost accountants</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 4 months</div>
            <div>Subjects: 4</div>
            <div>Eligibility: 10+2</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Intermediate Course</h3>
          <p className="text-gray-600 mb-4">Advanced knowledge in cost and management accounting</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 8 months</div>
            <div>Subjects: 8</div>
            <div>Eligibility: Foundation Pass</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Final Course</h3>
          <p className="text-gray-600 mb-4">Professional level with specialization options</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 12 months</div>
            <div>Subjects: 12</div>
            <div>Eligibility: Intermediate Pass</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default StudentsCourses;
