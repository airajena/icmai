
import React from 'react';
import { BookOpen, Users, Award, GraduationCap } from 'lucide-react';

const AcademicPrograms = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Foundation Course',
      duration: '8 Months',
      eligibility: 'Class 12th Pass',
      subjects: ['Fundamentals of Accounting', 'Business Mathematics', 'Business Economics', 'Business Organization'],
      description: 'Entry-level course providing foundational knowledge in accounting and business fundamentals.',
      highlights: ['100% Online Study Material', 'Video Lectures', 'Practice Tests', 'Industry Exposure']
    },
    {
      icon: Users,
      title: 'Intermediate Course',
      duration: '10 Months',
      eligibility: 'Foundation Pass / Graduate',
      subjects: ['Cost Accounting', 'Financial Accounting', 'Corporate Laws', 'Income Tax'],
      description: 'Comprehensive course covering core cost accounting principles and financial management.',
      highlights: ['Practical Training', 'Case Studies', 'Industry Projects', 'Placement Assistance']
    },
    {
      icon: Award,
      title: 'Final Course',
      duration: '18 Months',
      eligibility: 'Intermediate Pass',
      subjects: ['Strategic Performance Management', 'Cost Auditing', 'Indirect Taxation', 'Company Secretarial Practice'],
      description: 'Advanced course focusing on strategic management and professional practice.',
      highlights: ['Specialization Options', 'Research Projects', 'Industry Mentorship', 'Global Recognition']
    },
    {
      icon: GraduationCap,
      title: 'Post Qualification',
      duration: 'Flexible',
      eligibility: 'CMA Qualified',
      subjects: ['Advanced Cost Management', 'International Standards', 'Research Methodology', 'Specialized Certifications'],
      description: 'Continuing education and specialized certifications for qualified professionals.',
      highlights: ['CPE Credits', 'International Certifications', 'Executive Programs', 'Research Opportunities']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Programs Overview</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive cost accounting education from foundation to advanced professional development, 
            designed to build world-class cost accounting professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span>Duration: {program.duration}</span>
                    <span>•</span>
                    <span>Eligibility: {program.eligibility}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{program.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Subjects:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {program.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Program Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {program.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="bg-blue-50 px-3 py-2 rounded-md text-sm text-blue-800">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors flex-1">
                  Learn More
                </button>
                <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors flex-1">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Career Prospects */}
        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Career Prospects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-3">Industry Roles</h4>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>Cost Accountant</li>
                <li>Financial Analyst</li>
                <li>Management Consultant</li>
                <li>Internal Auditor</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Practice Areas</h4>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>Cost Audit</li>
                <li>Management Consulting</li>
                <li>Financial Advisory</li>
                <li>Taxation Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sectors</h4>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>Manufacturing</li>
                <li>Banking & Finance</li>
                <li>Government</li>
                <li>Consulting Firms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
