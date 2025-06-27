
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: 'About',
      path: '/about',
      items: [
        { name: 'Institute History', path: '/about/history' },
        { name: 'Vision & Mission', path: '/about/vision' },
        { name: 'Institute Act and Rules', path: '/about/act' },
        { name: 'Council Members', path: '/about/council' },
        { name: 'Past Presidents', path: '/about/presidents' },
        { name: 'Organisation Structure', path: '/about/structure' },
        { name: 'Departmental Heads', path: '/about/heads' },
        { name: 'Awards & Recognition', path: '/about/awards' },
        { name: 'Annual Reports', path: '/about/reports' }
      ]
    },
    {
      title: 'Members',
      path: '/members',
      items: [
        { name: 'Members Home', path: '/members' },
        { name: 'Forms', path: '/members/forms' },
        { name: 'Guidelines/Circulars', path: '/members/guidelines' },
        { name: 'Members Login', path: '/members/login' },
        { name: 'Practising Members', path: '/members/practising' },
        { name: 'Online Membership Application', path: '/members/application' },
        { name: 'Member Search', path: '/members/search' },
        { name: 'Member Benevolent Fund', path: '/members/fund' },
        { name: 'Contact Us', path: '/members/contact' }
      ]
    },
    {
      title: 'Students',
      path: '/students',
      items: [
        { name: 'Courses', path: '/students/courses' },
        { name: 'Admission', path: '/students/admission' },
        { name: 'Exemption', path: '/students/exemption' },
        { name: 'Training', path: '/students/training' },
        { name: 'Examinations', path: '/students/examinations' },
        { name: 'Placement', path: '/placement' },
        { name: 'Network', path: '/students/network' },
        { name: 'Press Release', path: '/students/press' },
        { name: 'Contact', path: '/students/contact' }
      ]
    },
    {
      title: 'Placement',
      path: '/placement',
      items: [
        { name: 'Campus Placement', path: '/placement/campus' },
        { name: 'Placement Home', path: '/placement' },
        { name: 'About Us', path: '/placement/about' },
        { name: 'Career Counselling', path: '/placement/counselling' },
        { name: 'C-Set Program', path: '/placement/cset' },
        { name: 'Orientation Programme', path: '/placement/orientation' },
        { name: 'Our Recruiters', path: '/placement/recruiters' },
        { name: 'Recruiter\'s Zone', path: '/placement/recruiter-zone' },
        { name: 'Contact', path: '/placement/contact' }
      ]
    },
    {
      title: 'PD & CPE',
      path: '/pd-cpe',
      items: [
        { name: 'PD Home', path: '/pd-cpe' },
        { name: 'About PD', path: '/pd-cpe/about' },
        { name: 'Professional Avenues', path: '/pd-cpe/avenues' },
        { name: 'PD Publications', path: '/pd-cpe/publications' },
        { name: 'CARR & CAR', path: '/pd-cpe/carr' },
        { name: 'FAQs', path: '/pd-cpe/faqs' },
        { name: 'CPE', path: '/pd-cpe/cpe' },
        { name: 'MCBT', path: '/pd-cpe/mcbt' },
        { name: 'MES', path: '/pd-cpe/mes' }
      ]
    },
    {
      title: 'Taxation',
      path: '/taxation',
      items: [
        { name: 'Taxation Home', path: '/taxation' },
        { name: 'About', path: '/taxation/about' },
        { name: 'Publication', path: '/taxation/publication' },
        { name: 'Courses', path: '/taxation/courses' },
        { name: 'GST', path: '/taxation/gst' },
        { name: 'Indirect Taxation', path: '/taxation/indirect' },
        { name: 'Direct Taxation', path: '/taxation/direct' },
        { name: 'Taxation HelpDesk', path: '/taxation/helpdesk' },
        { name: 'FAQ', path: '/taxation/faq' },
        { name: 'Contact Us', path: '/taxation/contact' }
      ]
    },
    {
      title: 'BFSI',
      path: '/bfsi',
      items: [
        { name: 'BFSI Home', path: '/bfsi' },
        { name: 'About', path: '/bfsi/about' },
        { name: 'Publication', path: '/bfsi/publication' },
        { name: 'Courses', path: '/bfsi/courses' },
        { name: 'Webinars & Programmes', path: '/bfsi/webinars' },
        { name: 'HelpDesk', path: '/bfsi/helpdesk' },
        { name: 'Contact Us', path: '/bfsi/contact' }
      ]
    },
    {
      title: 'CAT',
      path: '/cat',
      items: [
        { name: 'CAT Program Information', path: '/cat' }
      ]
    },
    {
      title: 'Adv Studies',
      path: '/advanced-studies',
      items: [
        { name: 'Advanced Studies Home', path: '/advanced-studies' },
        { name: 'About Us', path: '/advanced-studies/about' },
        { name: 'Courses', path: '/advanced-studies/courses' },
        { name: 'Examinations', path: '/advanced-studies/examinations' },
        { name: 'Publications', path: '/advanced-studies/publications' },
        { name: 'Research', path: '/advanced-studies/research' },
        { name: 'Contact', path: '/advanced-studies/contact' }
      ]
    },
    {
      title: 'Journal',
      path: '/journal',
      items: [
        { name: 'Latest Journals', path: '/journal/latest' },
        { name: 'Journal Archive', path: '/journal/archive' },
        { name: 'Research Papers', path: '/journal/research' },
        { name: 'Case Studies', path: '/journal/cases' },
        { name: 'Industry Reports', path: '/journal/reports' }
      ]
    },
    {
      title: 'Industry Connect',
      path: '/industry-connect',
      items: [
        { name: 'Industry Collaborations', path: '/industry-connect' },
        { name: 'Corporate Partnerships', path: '/industry-connect/partnerships' },
        { name: 'Professional Networks', path: '/industry-connect/networks' },
        { name: 'Industry Events', path: '/industry-connect/events' }
      ]
    },
    {
      title: 'DIP.MA',
      path: '/dipma',
      items: [
        { name: 'Course Information', path: '/dipma/course' },
        { name: 'Admission Process', path: '/dipma/admission' },
        { name: 'Curriculum', path: '/dipma/curriculum' },
        { name: 'Examination Details', path: '/dipma/examination' }
      ]
    }
  ];

  return (
    <nav className="bg-gray-100 border-t border-b border-gray-300">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {navigationItems.map((item) => (
            <li
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className="flex items-center py-4 text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {item.title}
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              {activeDropdown === item.title && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-64 z-50">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-900 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
