import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Calendar, Trophy, Bell } from 'lucide-react';

const Highlights = () => {
  const navigate = useNavigate();

  const announcements = [
    {
      title: "Upcoming CMA Final Examinations",
      date: "July 15, 2025",
      category: "Examination"
    },
    {
      title: "New Course: Advanced Financial Analytics",
      date: "August 2025",
      category: "Academics"
    },
    {
      title: "International Conference on Cost Management",
      date: "September 10, 2025",
      category: "Events"
    }
  ];

  const upcomingEvents = [
    {
      title: "Campus Placement Drive",
      date: "July 1-5, 2025",
      location: "Multiple Locations"
    },
    {
      title: "GST Workshop Series",
      date: "July 20, 2025",
      location: "Online"
    },
    {
      title: "Annual Members' Meet",
      date: "August 15, 2025",
      location: "New Delhi"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Announcements */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-800">Latest Updates</h3>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/announcements')} 
                className="text-blue-900 hover:bg-blue-50 hover:text-blue-800"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {announcements.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 cursor-pointer hover:bg-blue-50/50 p-2 rounded-md transition-colors"
                  onClick={() => navigate('/announcements')}
                >
                  <div className="text-sm text-blue-900 font-medium mb-1">{item.category}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-800">Upcoming Events</h3>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/events')} 
                className="text-blue-900 hover:bg-blue-50 hover:text-blue-800"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-gray-800 mb-1">{event.title}</h4>
                  <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                  <div className="text-sm text-blue-900">{event.location}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Latest Publications */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-blue-900" />
                <h3 className="text-xl font-bold text-gray-800">Latest Publications</h3>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/journal')} 
                className="text-blue-900 hover:bg-blue-50 hover:text-blue-800"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              <div 
                className="relative h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer group"
                onClick={() => navigate('/journal/latest')}
              >
                <img
                  src="/assets/img/c5.png"
                  alt="Latest Journal"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white font-semibold">Management Accountant Journal</div>
                  <div className="text-sm text-gray-200">June 2025 Edition</div>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/journal/latest')}
                className="w-full flex items-center justify-center gap-2 hover:bg-blue-800"
              >
                Read Latest Issue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Achievement Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Excellence in Professional Education</h3>
              <p className="text-blue-100">Ranked among top professional accounting bodies globally</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-blue-100">Corporate Partners</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-blue-100">Global Recognitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
