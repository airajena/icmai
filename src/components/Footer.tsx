
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'UDIN Portal', 'Sustainability Standards Board', 'ICMAI RVO', 'IPA',
    'Cost Accounting Standards Board', 'Cost Auditing and Assurance Standards Board',
    'Technical cell', 'Peer Review Board', 'Quality Review Board', 'ICMAI MARF',
    'Internal Auditing and Assurance Standards Board', 'E-gazette portal of the Government of India',
    'ICMAI Social Auditors Organisation', 'Cooperative Development Board', 'FAQs', 'Student'
  ];

  const featuredLinks = [
    'Agriculture Cost Management Board', 'NCMAC - 2025',
    'Companies (Cost Records & Audit) Rules 2014', 'Annual Report 2023-24',
    'Knowledge Bank', 'IFAC\'s Global Knowledge Gateway', 'Member Benevolent Fund',
    'Webinars for Members', 'Webinars for Students', 'Information under sec.35 of CWA Act,1959',
    'Press Release', 'CMA Support Centre', 'Institute\'s Network', 'Media Centre'
  ];

  const bottomLinks = [
    'CCM Dashboard', 'Member Login', 'Online Admission', 'RTI Act',
    'Sitemap', 'HelpDesk', 'Institute in Media'
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Institute Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">ICMAI</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ICMAI</h3>
                <p className="text-gray-300 text-sm">Est. 1959</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              The Institute of Cost Accountants of India - A statutory body under the 
              Cost and Works Accountants Act, 1959.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>CMA Bhawan, 12 Sudder Street, Kolkata - 700016</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+91-33-2252-1031/1034/1035</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>studies@icmai.in</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.slice(0, 8).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">More Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.slice(8).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">Featured</h4>
            <ul className="space-y-2 text-sm">
              {featuredLinks.slice(0, 8).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Featured Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredLinks.slice(8).map((link, index) => (
              <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              ©2025 icmai.in. All Rights Reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {bottomLinks.map((link, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
