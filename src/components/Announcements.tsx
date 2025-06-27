
import React from 'react';
import { Calendar, Bell, FileText, ExternalLink } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      title: "CMA Final Examination Results - December 2024 Session",
      date: "2024-12-20",
      type: "Results",
      urgent: true
    },
    {
      title: "Registration for June 2025 Examination Extended",
      date: "2024-12-18",
      type: "Examination",
      urgent: false
    },
    {
      title: "New CPE Guidelines for Members - Effective from January 2025",
      date: "2024-12-15",
      type: "Guidelines",
      urgent: false
    },
    {
      title: "Annual Conference 2025 - Call for Papers",
      date: "2024-12-12",
      type: "Conference",
      urgent: false
    }
  ];

  const tickerNews = [
    "CMA Final Results December 2024 declared",
    "June 2025 Examination registration extended till 31st December",
    "New Cost Accounting Standards effective from 1st April 2025",
    "Regional Chapter Elections 2025 - Nominations open"
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* News Ticker */}
        <div className="bg-red-600 text-white p-3 rounded-md mb-8">
          <div className="flex items-center">
            <div className="bg-white text-red-600 px-3 py-1 rounded-md font-bold text-sm mr-4">
              BREAKING NEWS
            </div>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {tickerNews.join(' • ')}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Announcements */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Bell className="w-6 h-6 text-blue-900 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Latest Announcements</h3>
            </div>
            
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      {announcement.urgent && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {announcement.type}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{announcement.title}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(announcement.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Deadlines */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-blue-900 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Important Deadlines</h3>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-semibold text-gray-800">June 2025 Exam Registration</div>
                  <div className="text-sm text-gray-600">Deadline: 31st December 2024</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-semibold text-gray-800">CPE Credit Submission</div>
                  <div className="text-sm text-gray-600">Deadline: 31st March 2025</div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="font-semibold text-gray-800">Annual Membership Renewal</div>
                  <div className="text-sm text-gray-600">Deadline: 30th April 2025</div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-semibold text-gray-800">Research Paper Submission</div>
                  <div className="text-sm text-gray-600">Deadline: 15th February 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
