import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-33-2252-1031/1034/1035</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>studies@icmai.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/members#login" className="hover:text-blue-200 transition-colors">Member Login</Link>
              <Link to="/students" className="hover:text-blue-200 transition-colors">Student Portal</Link>
              <Link to="/students#results" className="hover:text-blue-200 transition-colors">Results</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/assets/img/logo.webp" 
                alt="ICMAI Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">The Institute of Cost Accountants of India</h1>
              <p className="text-gray-600 text-sm">Statutory Body under an Act of Parliament | Established 1959</p>
            </div>
          </Link>

          {/* Search Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
