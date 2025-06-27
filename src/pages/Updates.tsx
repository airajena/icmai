import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, Calendar, GraduationCap, Award, FileText, 
  Users, Globe, Book, Building
} from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      category: 'Examination',
      title: 'Final Examination Results Declared',
      date: 'June 25, 2025',
      description: 'Results for the June 2025 Final examinations have been declared. Students can check their results using their roll numbers.',
      icon: GraduationCap
    },
    {
      category: 'Academic',
      title: 'New Course Launch: Advanced Financial Analytics',
      date: 'June 20, 2025',
      description: 'ICMAI introduces a new specialized course in Financial Analytics with focus on data-driven decision making.',
      icon: Book
    },
    {
      category: 'Events',
      title: 'International Conference on Cost Management',
      date: 'September 10, 2025',
      description: 'Annual international conference featuring industry experts and global thought leaders.',
      icon: Globe
    },
    {
      category: 'Members',
      title: 'CPE Credit Update',
      date: 'June 15, 2025',
      description: 'Important changes to CPE credit requirements for practicing members.',
      icon: Users
    },
    {
      category: 'Placement',
      title: 'Campus Placement Drive 2025',
      date: 'July 1-5, 2025',
      description: 'Major companies participating in the upcoming placement drive across multiple locations.',
      icon: Building
    },
    {
      category: 'Recognition',
      title: 'Global Partnership Announcement',
      date: 'June 10, 2025',
      description: 'New partnership with international accounting bodies for member recognition.',
      icon: Award
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Examination': 'bg-blue-100 text-blue-800',
      'Academic': 'bg-green-100 text-green-800',
      'Events': 'bg-purple-100 text-purple-800',
      'Members': 'bg-yellow-100 text-yellow-800',
      'Placement': 'bg-pink-100 text-pink-800',
      'Recognition': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-8 h-8 text-blue-900" />
            <h1 className="text-3xl font-bold text-gray-800">Latest Updates</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {updates.map((update, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <update.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(update.category)}>
                        {update.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {update.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{update.title}</h3>
                    <p className="text-gray-600">{update.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-blue-50">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Stay Updated</h2>
            <p className="text-gray-600">
              Subscribe to our notification service to receive instant updates about examinations, 
              results, events, and other important announcements.
            </p>
            <div className="mt-4 flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
