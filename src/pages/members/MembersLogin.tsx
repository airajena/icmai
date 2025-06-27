
import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const MembersLogin = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Members Login</h1>
      
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Member Portal Access</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Membership Number</label>
            <input 
              type="text" 
              placeholder="Enter your membership number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
            Login to Portal
          </button>
          
          <div className="text-center space-y-2">
            <a href="#" className="text-blue-900 hover:underline text-sm">Forgot Password?</a>
            <br />
            <a href="#" className="text-blue-900 hover:underline text-sm">New Member Registration</a>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};

export default MembersLogin;
