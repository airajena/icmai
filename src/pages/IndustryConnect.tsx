import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IndustryConnect = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedQuarter, setSelectedQuarter] = useState('all');

  const industryReports = [
    {
      id: 1,
      title: "Healthcare & Pharmaceutical Sector",
      quarter: "Q1",
      year: "2024",
      month: "March",
      description: "Navigating opportunities in the healthcare and pharma sector with market insights and growth projections",
      color: "from-blue-500 to-cyan-400",
      icon: "🏥",
      downloadLink: "/reports/healthcare-march-2024.pdf",
      highlights: ["Market Size Analysis", "Digital Health Trends", "Regulatory Updates", "Investment Opportunities"]
    },
    {
      id: 2,
      title: "Financial Services & Banking",
      quarter: "Q1",
      year: "2024",
      month: "April",
      description: "Comprehensive analysis of the Indian banking sector transformation and financial inclusion initiatives",
      color: "from-green-500 to-emerald-400",
      icon: "🏦",
      downloadLink: "/reports/banking-april-2024.pdf",
      highlights: ["Digital Banking", "Financial Inclusion", "Regulatory Changes", "Fintech Integration"]
    },
    {
      id: 3,
      title: "Manufacturing & Industrial Growth",
      quarter: "Q1",
      year: "2024",
      month: "January",
      description: "Industrial sector performance review with focus on manufacturing excellence and automation trends",
      color: "from-purple-500 to-pink-400",
      icon: "🏭",
      downloadLink: "/reports/manufacturing-jan-2024.pdf",
      highlights: ["Industry 4.0", "Supply Chain", "Sustainability", "Cost Management"]
    },
    {
      id: 4,
      title: "Technology & Digital Transformation",
      quarter: "Q2",
      year: "2024",
      month: "June",
      description: "Digital transformation trends across industries with AI, IoT, and blockchain implementations",
      color: "from-indigo-500 to-blue-400",
      icon: "💻",
      downloadLink: "/reports/technology-june-2024.pdf",
      highlights: ["AI Integration", "Cloud Adoption", "Cybersecurity", "Digital Innovation"]
    },
    {
      id: 5,
      title: "Energy & Renewable Resources",
      quarter: "Q2",
      year: "2024",
      month: "July",
      description: "Sustainable energy sector analysis covering renewable energy adoption and green finance initiatives",
      color: "from-green-600 to-teal-400",
      icon: "⚡",
      downloadLink: "/reports/energy-july-2024.pdf",
      highlights: ["Solar Energy", "Wind Power", "Green Bonds", "Carbon Credits"]
    },
    {
      id: 6,
      title: "Infrastructure & Construction",
      quarter: "Q3",
      year: "2024",
      month: "September",
      description: "Infrastructure development insights with focus on smart cities and sustainable construction practices",
      color: "from-orange-500 to-red-400",
      icon: "🏗️",
      downloadLink: "/reports/infrastructure-sep-2024.pdf",
      highlights: ["Smart Cities", "Green Building", "PPP Models", "Urban Planning"]
    },
    {
      id: 7,
      title: "Retail & E-commerce Evolution",
      quarter: "Q3",
      year: "2024",
      month: "October",
      description: "Retail sector transformation with e-commerce growth, omnichannel strategies, and consumer behavior analysis",
      color: "from-pink-500 to-rose-400",
      icon: "🛒",
      downloadLink: "/reports/retail-oct-2024.pdf",
      highlights: ["E-commerce Growth", "Omnichannel", "Consumer Trends", "Supply Chain"]
    },
    {
      id: 8,
      title: "Automotive & Mobility Solutions",
      quarter: "Q4",
      year: "2024",
      month: "November",
      description: "Automotive industry insights covering electric vehicles, autonomous driving, and mobility as a service",
      color: "from-gray-600 to-gray-400",
      icon: "🚗",
      downloadLink: "/reports/automotive-nov-2024.pdf",
      highlights: ["Electric Vehicles", "Autonomous Driving", "Mobility Solutions", "Sustainability"]
    },
    {
      id: 9,
      title: "Agriculture & Food Processing",
      quarter: "Q4",
      year: "2024",
      month: "December",
      description: "Agricultural sector modernization with focus on food processing, supply chain, and sustainable farming",
      color: "from-yellow-500 to-orange-400",
      icon: "🌾",
      downloadLink: "/reports/agriculture-dec-2024.pdf",
      highlights: ["Smart Farming", "Food Processing", "Supply Chain", "Organic Farming"]
    },
    {
      id: 10,
      title: "Telecommunications & 5G",
      quarter: "Q1",
      year: "2025",
      month: "March",
      description: "Telecom sector evolution with 5G deployment, digital infrastructure, and connectivity solutions",
      color: "from-violet-500 to-purple-400",
      icon: "📡",
      downloadLink: "/reports/telecom-march-2025.pdf",
      highlights: ["5G Deployment", "Digital Infrastructure", "IoT Connectivity", "Network Security"]
    },
    {
      id: 11,
      title: "Aerospace & Defense",
      quarter: "Q2",
      year: "2025",
      month: "June",
      description: "Aerospace and defense sector analysis with focus on indigenous manufacturing and space technology",
      color: "from-slate-600 to-blue-500",
      icon: "🚀",
      downloadLink: "/reports/aerospace-june-2025.pdf",
      highlights: ["Space Technology", "Defense Manufacturing", "Export Potential", "R&D Investment"]
    },
    {
      id: 12,
      title: "Tourism & Hospitality Recovery",
      quarter: "Q3",
      year: "2025",
      month: "September",
      description: "Tourism sector revival strategies with focus on sustainable tourism and digital transformation",
      color: "from-teal-500 to-cyan-400",
      icon: "✈️",
      downloadLink: "/reports/tourism-sep-2025.pdf",
      highlights: ["Sustainable Tourism", "Digital Booking", "Experience Economy", "Recovery Strategies"]
    }
  ];

  const years = ['2024', '2025'];
  const quarters = ['all', 'Q1', 'Q2', 'Q3', 'Q4'];

  const filteredReports = industryReports.filter(report => {
    const yearMatch = report.year === selectedYear;
    const quarterMatch = selectedQuarter === 'all' || report.quarter === selectedQuarter;
    return yearMatch && quarterMatch;
  });

  const getQuarterColor = (quarter) => {
    switch(quarter) {
      case 'Q1': return 'bg-blue-100 text-blue-800';
      case 'Q2': return 'bg-green-100 text-green-800';
      case 'Q3': return 'bg-orange-100 text-orange-800';
      case 'Q4': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Connect</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive Industry Insights & Reports by ICMAI Members in Industry Committee
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Quarterly Industry Analysis</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Expert Insights</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Market Trends</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">✓ Professional Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-900">50+</h3>
              <p className="text-gray-600">Industry Reports</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-900">12</h3>
              <p className="text-gray-600">Key Sectors</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-900">10,000+</h3>
              <p className="text-gray-600">Downloads</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-900">Quarterly</h3>
              <p className="text-gray-600">Updates</p>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          
          {/* Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Industry Reports</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Quarter</label>
                <select 
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Quarters</option>
                  {quarters.slice(1).map(quarter => (
                    <option key={quarter} value={quarter}>{quarter}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report) => (
              <div key={report.id} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${report.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                      {report.icon}
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getQuarterColor(report.quarter)} bg-white bg-opacity-20 text-white`}>
                          {report.quarter} {report.year}
                        </span>
                        <span className="text-2xl">{report.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">{report.title}</h3>
                      <p className="text-sm text-white text-opacity-90">{report.month} {report.year}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{report.description}</p>
                    
                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {report.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                        <span className="mr-2">📄</span>
                        View Report
                      </button>
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                        <span>⬇️</span>
                      </button>
                    </div>
                  </div>

                  {/* Download Stats */}
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>📊 {Math.floor(Math.random() * 500) + 100} downloads</span>
                      <span>📅 Updated {report.month}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Reports Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more reports.</p>
            </div>
          )}

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Industry Trends</h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Subscribe to receive the latest industry insights and reports directly in your inbox
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View All Reports
              </button>
            </div>
          </div>

          {/* About Industry Insights */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">About Industry Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Industry Insights is a comprehensive quarterly publication by the Members in Industry Committee (MIC) 
                  of the Institute of Cost Accountants of India (ICMAI). Our reports provide in-depth analysis of various 
                  industry sectors, emerging trends, and professional opportunities for CMAs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Each report is meticulously crafted by industry experts and practicing CMAs, offering valuable insights 
                  for professionals, students, and business leaders across different sectors.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">What You'll Find:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Market analysis and trends
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Industry performance metrics
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Career opportunities for CMAs
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Regulatory updates and compliance
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Expert interviews and insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">▶</span>
                    Future outlook and predictions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Get In Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
                <p className="text-gray-600">mic@icmai.in</p>
                <p className="text-gray-600 text-sm">For report submissions and queries</p>
              </div>
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                <p className="text-gray-600">+91-33-2252-1031/34/35</p>
                <p className="text-gray-600 text-sm">Monday to Friday: 10 AM - 5 PM</p>
              </div>
              <div>
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Visit Website</h4>
                <p className="text-gray-600">www.icmai.in</p>
                <p className="text-gray-600 text-sm">Complete resources and updates</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustryConnect;
