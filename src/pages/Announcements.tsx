import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bell, Calendar, GraduationCap, Award, Users, FileText, 
  Globe, Building, Calculator, Download
} from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      title: "Upcoming CMA Final Examinations",
      date: "July 15, 2025",
      category: "Examination",
      description: "The Final examinations for CMA course will be conducted from July 15, 2025. All registered students are advised to download their admit cards.",
      icon: GraduationCap,
      action: {
        text: "Download Admit Card",
        link: "/students/examinations"
      }
    },
    {
      title: "New Course: Advanced Financial Analytics",
      date: "August 2025",
      category: "Academics",
      description: "ICMAI introduces a new specialized course in Financial Analytics. The course focuses on data-driven decision making and modern analytical tools.",
      icon: Award,
      action: {
        text: "Course Details",
        link: "/advanced-studies/courses"
      }
    },
    {
      title: "International Conference on Cost Management",
      date: "September 10, 2025",
      category: "Events",
      description: "Join us for the International Conference on Cost Management featuring speakers from global accounting bodies and industry experts.",
      icon: Globe,
      action: {
        text: "Register Now",
        link: "/events"
      }
    },
    {
      title: "Member Registration for Annual Meet",
      date: "June 30, 2025",
      category: "Members",
      description: "Members are invited to register for the Annual Members' Meet 2025. Early bird registration closes on June 30.",
      icon: Users,
      action: {
        text: "Register",
        link: "/members"
      }
    },
    {
      title: "New Tax Guidelines Released",
      date: "June 25, 2025",
      category: "Taxation",
      description: "Important updates regarding GST compliance and direct taxation procedures. Members are advised to review the new guidelines.",
      icon: Calculator,
      action: {
        text: "View Guidelines",
        link: "/taxation/publication"
      }
    },
    {
      title: "Digital Learning Platform Launch",
      date: "July 1, 2025",
      category: "Education",
      description: "ICMAI launches new digital learning platform with enhanced features for online education and assessment.",
      icon: FileText,
      action: {
        text: "Explore Platform",
        link: "/students/courses"
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Examination': 'bg-blue-100 text-blue-800',
      'Academics': 'bg-green-100 text-green-800',
      'Events': 'bg-purple-100 text-purple-800',
      'Members': 'bg-yellow-100 text-yellow-800',
      'Taxation': 'bg-red-100 text-red-800',
      'Education': 'bg-indigo-100 text-indigo-800'
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
            <h1 className="text-3xl font-bold text-gray-800">Latest Announcements</h1>
          </div>

          {/* Quick Filters */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {['All', 'Examination', 'Academics', 'Events', 'Members', 'Taxation', 'Education'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>

          {/* Announcements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <announcement.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{announcement.title}</h3>
                    <p className="text-gray-600 mb-4">{announcement.description}</p>
                    <Button 
                      onClick={() => window.location.href = announcement.action.link}
                      className="w-full"
                    >
                      {announcement.action.text}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <Card className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
                <p className="text-blue-100">
                  Subscribe to our newsletter to receive important announcements directly in your inbox
                </p>
              </div>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-800"
                />
                <Button variant="secondary">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Announcements;
