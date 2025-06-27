import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CAT = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificate in Accounting Technician (CAT)</h1>
            <p className="text-xl text-blue-100 mb-8">Your Gateway to Professional Accounting Excellence</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ ICMAI Certified Program</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Industry-Relevant Curriculum</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Flexible Learning Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-900">10,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-900">85%</h3>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-900">6-12</h3>
              <p className="text-gray-600">Months Duration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-900">₹15,000</h3>
              <p className="text-gray-600">Course Fee</p>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {[
              { id: 'overview', label: 'Program Overview' },
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'eligibility', label: 'Eligibility & Admission' },
              { id: 'career', label: 'Career Prospects' },
              { id: 'fees', label: 'Fees & Registration' },
              { id: 'resources', label: 'Study Resources' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">About CAT Program</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Certificate in Accounting Technician (CAT) is ICMAI's foundational program designed to provide 
                  comprehensive accounting skills and knowledge. This program serves as an excellent starting point for 
                  students who wish to build a career in cost and management accounting, providing them with essential 
                  skills required in today's dynamic business environment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Program Highlights</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive foundation in accounting principles</li>
                      <li>• Industry-relevant practical training</li>
                      <li>• Flexible study modes (Online/Offline)</li>
                      <li>• Expert faculty guidance</li>
                      <li>• Regular assessments and feedback</li>
                      <li>• Certificate from ICMAI</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Learning Outcomes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Master fundamental accounting concepts</li>
                      <li>• Understand cost accounting principles</li>
                      <li>• Develop analytical and problem-solving skills</li>
                      <li>• Gain proficiency in accounting software</li>
                      <li>• Prepare for advanced CMA courses</li>
                      <li>• Build professional competency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose CAT from ICMAI?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Recognized Certification</h4>
                    <p className="text-gray-600">ICMAI is a statutory body under Ministry of Corporate Affairs, Government of India</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Industry Connect</h4>
                    <p className="text-gray-600">Direct pathway to employment opportunities in accounting and finance sectors</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Career Progression</h4>
                    <p className="text-gray-600">Foundation for pursuing CMA Intermediate and Final levels</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive Curriculum</h2>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "Paper 1: Fundamentals of Accounting",
                    duration: "40 Hours",
                    topics: [
                      "Introduction to Accounting",
                      "Accounting Principles and Concepts",
                      "Journal, Ledger, and Trial Balance",
                      "Final Accounts Preparation",
                      "Bank Reconciliation Statement",
                      "Depreciation Accounting",
                      "Partnership Accounts Basics"
                    ]
                  },
                  {
                    title: "Paper 2: Basic Cost Accounting",
                    duration: "40 Hours",
                    topics: [
                      "Introduction to Cost Accounting",
                      "Elements of Cost",
                      "Material Costing",
                      "Labour Costing",
                      "Overhead Allocation",
                      "Job Costing",
                      "Process Costing Fundamentals"
                    ]
                  },
                  {
                    title: "Paper 3: Business Mathematics & Statistics",
                    duration: "30 Hours",
                    topics: [
                      "Arithmetic and Algebraic Operations",
                      "Ratio and Proportion",
                      "Percentage and Interest Calculations",
                      "Data Collection and Presentation",
                      "Measures of Central Tendency",
                      "Basic Probability",
                      "Index Numbers"
                    ]
                  },
                  {
                    title: "Paper 4: Commercial Law",
                    duration: "30 Hours",
                    topics: [
                      "Indian Contract Act, 1872",
                      "Sale of Goods Act, 1930",
                      "Partnership Act, 1932",
                      "Companies Act, 2013 (Basics)",
                      "Consumer Protection Act",
                      "Negotiable Instruments Act",
                      "Business Ethics"
                    ]
                  },
                  {
                    title: "Paper 5: Computer Applications",
                    duration: "30 Hours",
                    topics: [
                      "Computer Fundamentals",
                      "MS Office Suite (Word, Excel, PowerPoint)",
                      "Tally ERP 9 / Tally Prime",
                      "Basic Accounting Software",
                      "Internet and Email Applications",
                      "Data Security and Privacy",
                      "Digital Documentation"
                    ]
                  }
                ].map((paper, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-blue-900">{paper.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {paper.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {paper.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Assessment Pattern</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Examination Structure:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Each paper: 100 marks</li>
                      <li>• Duration: 3 hours per paper</li>
                      <li>• Minimum passing marks: 40%</li>
                      <li>• Objective + Descriptive questions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Examination Schedule:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• June and December sessions</li>
                      <li>• Online and offline modes available</li>
                      <li>• Results within 45 days</li>
                      <li>• Re-examination facility available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Eligibility & Admission Process</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Eligibility Criteria</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Educational Qualification:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Passed 10th standard (SSC/SSLC) or equivalent</li>
                        <li>• No age limit</li>
                        <li>• No minimum percentage requirement</li>
                        <li>• Open to all streams and backgrounds</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Who Can Apply:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Students after 10th standard</li>
                        <li>• Working professionals seeking accounting skills</li>
                        <li>• Homemakers wanting to restart careers</li>
                        <li>• Entrepreneurs needing financial knowledge</li>
                        <li>• Anyone interested in accounting field</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Admission Process</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Online Registration</h4>
                        <p className="text-gray-600">Visit ICMAI website and complete online application form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Document Upload</h4>
                        <p className="text-gray-600">Upload 10th mark sheet, photograph, and signature</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Fee Payment</h4>
                        <p className="text-gray-600">Pay registration and course fees online</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Confirmation</h4>
                        <p className="text-gray-600">Receive registration confirmation and study materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">For Registration:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 10th standard mark sheet/certificate</li>
                      <li>• Passport size photograph</li>
                      <li>• Signature specimen</li>
                      <li>• Identity proof (Aadhar/PAN/Passport)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">For Examination:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Valid student registration number</li>
                      <li>• Examination form submission</li>
                      <li>• Examination fee payment</li>
                      <li>• Identity proof for exam center</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors">
                  Start Your Registration Process
                </button>
                <p className="text-gray-600 mt-2">Registration is open throughout the year</p>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Prospects & Opportunities</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Immediate Career Opportunities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Accounting Assistant",
                      salary: "₹15,000 - ₹25,000/month",
                      description: "Support senior accountants in daily bookkeeping and financial record maintenance"
                    },
                    {
                      title: "Junior Cost Clerk",
                      salary: "₹18,000 - ₹28,000/month",
                      description: "Assist in cost calculation, inventory management, and cost analysis"
                    },
                    {
                      title: "Bookkeeper",
                      salary: "₹12,000 - ₹22,000/month",
                      description: "Maintain financial records, process invoices, and manage accounts receivable/payable"
                    },
                    {
                      title: "Data Entry Operator",
                      salary: "₹10,000 - ₹18,000/month",
                      description: "Input financial data into accounting systems and maintain database accuracy"
                    },
                    {
                      title: "Accounts Executive",
                      salary: "₹20,000 - ₹35,000/month",
                      description: "Handle client accounts, prepare financial statements, and assist in auditing"
                    },
                    {
                      title: "Tax Assistant",
                      salary: "₹16,000 - ₹26,000/month",
                      description: "Support tax preparation, filing returns, and maintaining tax compliance"
                    }
                  ].map((job, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
                      <h4 className="font-bold text-purple-800 mb-2">{job.title}</h4>
                      <p className="text-green-600 font-semibold mb-2">{job.salary}</p>
                      <p className="text-gray-600 text-sm">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Industry Sectors</h3>
                  <div className="space-y-3">
                    {[
                      "Manufacturing Companies",
                      "Service Organizations",
                      "Banking and Financial Services",
                      "Government Departments",
                      "NGOs and Charitable Organizations",
                      "Small and Medium Enterprises (SMEs)",
                      "Accounting Firms",
                      "Consulting Companies",
                      "Retail and Trading Businesses",
                      "Healthcare Organizations"
                    ].map((sector, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">▶</span>
                        <span className="text-gray-700">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Career Progression Path</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">CAT Certification</h4>
                        <p className="text-gray-600 text-sm">Foundation level accounting skills</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">CMA Intermediate</h4>
                        <p className="text-gray-600 text-sm">Advanced cost and management accounting</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">CMA Final</h4>
                        <p className="text-gray-600 text-sm">Professional cost and management accountant</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Senior Positions</h4>
                        <p className="text-gray-600 text-sm">CFO, Finance Manager, Cost Controller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Entrepreneurship Opportunities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Start Your Own Practice:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bookkeeping services for small businesses</li>
                      <li>• Tax preparation and filing services</li>
                      <li>• Financial consulting for startups</li>
                      <li>• Accounting software training</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Freelancing Options:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Remote bookkeeping services</li>
                      <li>• Part-time accounting support</li>
                      <li>• Online tutoring in accounting</li>
                      <li>• Financial data analysis projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Fees Structure & Registration</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Fee Structure</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                      <h4 className="font-bold text-gray-800 mb-2">Registration Fee</h4>
                      <p className="text-2xl font-bold text-blue-600">₹1,000</p>
                      <p className="text-gray-600 text-sm">One-time registration (Non-refundable)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border-l-4 border-green-600">
                      <h4 className="font-bold text-gray-800 mb-2">Course Fee</h4>
                      <p className="text-2xl font-bold text-green-600">₹14,000</p>
                      <p className="text-gray-600 text-sm">Includes study materials and online resources</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                      <h4 className="font-bold text-gray-800 mb-2">Examination Fee</h4>
                      <p className="text-2xl font-bold text-purple-600">₹2,500</p>
                      <p className="text-gray-600 text-sm">Per examination session (all 5 papers)</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded">
                      <h4 className="font-bold text-gray-800 mb-2">Total Investment</h4>
                      <p className="text-3xl font-bold text-red-600">₹17,500</p>
                      <p className="text-gray-600 text-sm">Complete program cost</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Payment Options</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Online Payment Methods:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          Credit/Debit Cards (Visa, MasterCard, RuPay)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          Net Banking (All major banks)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          UPI (Google Pay, PhonePe, Paytm)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          Digital Wallets
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Offline Payment:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          Demand Draft in favor of "ICMAI"
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          Cash payment at ICMAI offices
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="font-bold text-green-800 mb-2">Installment Option Available</h4>
                      <p className="text-gray-600 text-sm">
                        Pay course fee in 2 installments:<br/>
                        • First installment: ₹8,000 (at registration)<br/>
                        • Second installment: ₹6,000 (within 3 months)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Fee Concessions & Scholarships</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Available Concessions:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• SC/ST candidates: 50% fee concession</li>
                      <li>• Physically challenged: 50% fee concession</li>
                      <li>• Women candidates: 25% fee concession</li>
                      <li>• Rural area students: 20% fee concession</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Merit Scholarships:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Top 10 performers: Full fee waiver for next level</li>
                      <li>• State toppers: Cash prize + certificate</li>
                      <li>• All India rank holders: Special recognition</li>
                      <li>• Need-based financial assistance available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-blue-100 mb-6">Join thousands of successful accounting professionals</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Register Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Study Resources & Support</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Study Materials</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                      <h4 className="font-bold text-gray-800 mb-2">Printed Study Materials</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Comprehensive textbooks for all 5 papers</li>
                        <li>• Practice question banks</li>
                        <li>• Previous years' question papers</li>
                        <li>• Quick revision notes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border-l-4 border-green-600">
                      <h4 className="font-bold text-gray-800 mb-2">Digital Resources</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• E-books and PDF materials</li>
                        <li>• Video lectures by expert faculty</li>
                        <li>• Online practice tests</li>
                        <li>• Mobile app for learning on-the-go</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                      <h4 className="font-bold text-gray-800 mb-2">Additional Support</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Solved examples and case studies</li>
                        <li>• Formula sheets and quick references</li>
                        <li>• Practical worksheets</li>
                        <li>• Industry-relevant examples</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Learning Support</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-gray-800 mb-2">Faculty Support</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Experienced CMA faculty members</li>
                        <li>• Industry practitioners as guest lecturers</li>
                        <li>• Doubt clearing sessions</li>
                        <li>• Personal mentoring available</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-gray-800 mb-2">Online Learning Platform</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 24/7 access to learning portal</li>
                        <li>• Progress tracking and analytics</li>
                        <li>• Discussion forums with peers</li>
                        <li>• Regular webinars and workshops</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-gray-800 mb-2">Examination Support</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Mock tests and practice exams</li>
                        <li>• Exam strategy guidance</li>
                        <li>• Time management techniques</li>
                        <li>• Performance analysis reports</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Study Modes Available</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Self Study</h4>
                    <p className="text-gray-600 text-sm">Study at your own pace with comprehensive materials</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Online Classes</h4>
                    <p className="text-gray-600 text-sm">Live and recorded video lectures by expert faculty</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏫</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Classroom Coaching</h4>
                    <p className="text-gray-600 text-sm">Traditional classroom learning at ICMAI centers</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Student Success Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Career Guidance:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Resume building workshops</li>
                      <li>• Interview preparation sessions</li>
                      <li>• Industry networking events</li>
                      <li>• Job placement assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Continuous Support:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Student helpdesk (9 AM to 6 PM)</li>
                      <li>• Email support for queries</li>
                      <li>• WhatsApp groups for updates</li>
                      <li>• Alumni network access</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Download Free Resources</h3>
                  <p className="text-indigo-100 mb-6">Get sample study materials and previous year papers</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Sample Papers
                    </button>
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Syllabus PDF
                    </button>
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Demo Videos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Need More Information?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                <p className="text-gray-600">+91-11-2462-2156/57/58</p>
                <p className="text-gray-600">Monday to Friday: 9 AM - 6 PM</p>
              </div>
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
                <p className="text-gray-600">studies@icmai.in</p>
                <p className="text-gray-600">Response within 24 hours</p>
              </div>
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
                <p className="text-gray-600">12, Sudder Street, Kolkata - 700016</p>
                <p className="text-gray-600">Monday to Friday: 10 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CAT;
