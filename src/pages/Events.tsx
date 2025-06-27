import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, GraduationCap, Globe, Building, Calculator } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Campus Placement Drive 2025",
      date: "July 1-5, 2025",
      location: "Multiple Locations",
      category: "Placement",
      description: "Annual campus placement drive featuring top companies from various sectors.",
      icon: Building,
      participants: "500+ Companies",
      type: "Hybrid"
    },
    {
      title: "GST Workshop Series",
      date: "July 20, 2025",
      location: "Online",
      category: "Professional Development",
      description: "Comprehensive workshop on latest GST updates and compliance requirements.",
      icon: Calculator,
      participants: "2000+ Professionals",
      type: "Virtual"
    },
    {
      title: "Annual Members' Meet 2025",
      date: "August 15, 2025",
      location: "New Delhi",
      category: "Members",
      description: "Annual gathering of ICMAI members featuring keynote speakers and networking opportunities.",
      icon: Users,
      participants: "1000+ Members",
      type: "In-person"
    },
    {
      title: "International Conference on Cost Management",
      date: "September 10, 2025",
      location: "Mumbai",
      category: "Conference",
      description: "Global conference featuring industry experts and thought leaders in cost management.",
      icon: Globe,
      participants: "International Delegates",
      type: "Hybrid"
    },
    {
      title: "CMA Final Examination",
      date: "December 10-17, 2025",
      location: "Pan India",
      category: "Examination",
      description: "Final examination for CMA course across multiple centers.",
      icon: GraduationCap,
      participants: "All Final Level Students",
      type: "In-person"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Placement': 'bg-green-100 text-green-800',
      'Professional Development': 'bg-blue-100 text-blue-800',
      'Members': 'bg-purple-100 text-purple-800',
      'Conference': 'bg-indigo-100 text-indigo-800',
      'Examination': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Hybrid': 'bg-yellow-100 text-yellow-800',
      'Virtual': 'bg-blue-100 text-blue-800',
      'In-person': 'bg-green-100 text-green-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-blue-900" />
            <h1 className="text-3xl font-bold text-gray-800">Upcoming Events</h1>
          </div>

          {/* Event Calendar Description */}
          <Card className="p-6 mb-8 bg-blue-50">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Event Calendar 2025</h2>
            <p className="text-gray-600 mb-4">
              Stay updated with ICMAI's events, conferences, workshops, and important dates. Our events 
              calendar features a diverse range of professional development opportunities, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-900" />
                <span>Networking Events</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-900" />
                <span>Educational Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-900" />
                <span>International Conferences</span>
              </div>
            </div>
          </Card>

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center border-l border-gray-200 pl-6">
                    <event.icon className="w-12 h-12 text-blue-900 mb-4" />
                    <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Calendar Subscription */}
          <Card className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100">Subscribe to our calendar to never miss an important event</p>
              </div>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Add to Calendar
              </button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
