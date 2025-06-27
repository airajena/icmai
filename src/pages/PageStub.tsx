
import React from 'react';
import PageTemplate from '../components/PageTemplate';

interface PageStubProps {
  title: string;
  description: string;
  category: string;
}

const PageStub = ({ title, description, category }: PageStubProps) => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{title}</h1>
      
      <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">{category}</h2>
        <p className="text-blue-100">{description}</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Content Coming Soon</h3>
        <p className="text-gray-600 mb-4">
          This section is currently under development. Please check back soon for detailed information about {title.toLowerCase()}.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
            Contact Us
          </button>
          <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded hover:bg-blue-50">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PageStub;
