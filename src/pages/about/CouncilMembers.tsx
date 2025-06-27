
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CouncilMembers = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Council Members</h1>
      
      <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-2">Current Council 2023-2024</h2>
        <p className="text-blue-100">Leadership team governing the Institute's strategic direction</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">CMA Biswarup Basu</h3>
          <p className="text-blue-900 font-medium">President</p>
          <p className="text-gray-600 text-sm mt-2">Leading the Institute with vision and dedication</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">CMA Vijender Sharma</h3>
          <p className="text-blue-900 font-medium">Vice President</p>
          <p className="text-gray-600 text-sm mt-2">Supporting strategic initiatives and growth</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-bold text-gray-800">CMA Ashwin G Dalwadi</h3>
          <p className="text-blue-900 font-medium">Council Member</p>
          <p className="text-gray-600 text-sm mt-2">Contributing expertise in financial management</p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CouncilMembers;
