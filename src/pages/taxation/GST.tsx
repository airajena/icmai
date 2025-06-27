
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const GST = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">GST Services</h1>
      
      <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Goods and Services Tax Advisory</h2>
        <p className="text-blue-100">Comprehensive GST compliance and advisory services for businesses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">GST Registration Services</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• New GST Registration</li>
            <li>• GST Registration Cancellation</li>
            <li>• Composition Scheme Registration</li>
            <li>• Amendment in GST Registration</li>
            <li>• TDS/TCS Registration</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">GST Compliance Services</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Monthly GST Return Filing</li>
            <li>• Annual GST Return Filing</li>
            <li>• GST Audit and Assessment</li>
            <li>• Input Tax Credit Optimization</li>
            <li>• GST Refund Processing</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default GST;
