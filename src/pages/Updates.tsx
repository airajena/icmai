import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Calendar, 
  GraduationCap, 
  Award, 
  FileText, 
  Users, 
  Globe, 
  Book, 
  Building,
  Search,
  Filter,
  AlertCircle,
  Download,
  Briefcase,
  TrendingUp,
  BookOpen,
  Clock,
  Mail,
  Handshake
} from 'lucide-react';

const Updates = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const updates = [
    // Examination Updates
    {
      category: 'Examination',
      title: 'Final Examination Results Declared',
      date: 'June 25, 2025',
      description: 'Results for the June 2025 Final examinations have been declared. Students can check their results using their roll numbers.',
      icon: GraduationCap,
      priority: 'high',
      link: '/exam-results'
    },
    {
      category: 'Examination',
      title: 'December 2025 Exam Schedule Released',
      date: 'June 24, 2025',
      description: 'Detailed schedule for December 2025 examinations across all levels has been published. Early bird registration opens July 1st.',
      icon: Calendar,
      priority: 'high',
      link: '/exam-schedule'
    },
    {
      category: 'Examination',
      title: 'New Exam Pattern Announcement',
      date: 'June 23, 2025',
      description: 'Updated examination pattern incorporating industry-relevant case studies and practical scenarios, effective from December 2025.',
      icon: FileText,
      priority: 'high',
      link: '/exam-updates'
    },

    // Academic Updates
    {
      category: 'Academic',
      title: 'New Course: Advanced Financial Analytics',
      date: 'June 20, 2025',
      description: 'Introducing specialized course in Financial Analytics with focus on data-driven decision making and AI integration.',
      icon: Book,
      priority: 'medium',
      link: '/courses'
    },
    {
      category: 'Academic',
      title: 'Revised Study Material Release',
      date: 'June 19, 2025',
      description: 'Updated study materials for all levels incorporating latest industry practices and regulatory changes.',
      icon: BookOpen,
      priority: 'medium',
      link: '/study-material'
    },
    {
      category: 'Academic',
      title: 'Digital Learning Platform Launch',
      date: 'June 18, 2025',
      description: 'New e-learning platform with interactive content, virtual labs, and real-time doubt clearing sessions.',
      icon: Globe,
      priority: 'medium',
      link: '/digital-learning'
    },

    // Professional Development
    {
      category: 'Professional',
      title: 'Mandatory CPE Hours Update',
      date: 'June 15, 2025',
      description: 'Revised CPE credit requirements for practicing members with new online learning options.',
      icon: Clock,
      priority: 'high',
      link: '/cpe-updates'
    },
    {
      category: 'Professional',
      title: 'New Specialization Tracks',
      date: 'June 14, 2025',
      description: 'Introducing specialized certification tracks in ESG Reporting, Digital Finance, and Strategic Cost Management.',
      icon: Award,
      priority: 'medium',
      link: '/specializations'
    },
    {
      category: 'Professional',
      title: 'Practice License Changes',
      date: 'June 13, 2025',
      description: 'Important updates to practice license requirements and renewal procedures.',
      icon: FileText,
      priority: 'high',
      link: '/practice-updates'
    },

    // Events and Conferences
    {
      category: 'Events',
      title: 'International Cost Conference 2025',
      date: 'September 10-12, 2025',
      description: 'Annual conference featuring global experts, research presentations, and networking opportunities.',
      icon: Globe,
      priority: 'medium',
      link: '/icc2025'
    },
    {
      category: 'Events',
      title: 'Regional Cost Conventions',
      date: 'July-August 2025',
      description: 'Series of regional conventions focusing on local industry challenges and solutions.',
      icon: Users,
      priority: 'medium',
      link: '/regional-events'
    },
    {
      category: 'Events',
      title: 'Tech Summit 2025',
      date: 'October 5, 2025',
      description: 'Special summit on technology transformation in cost and management accounting.',
      icon: TrendingUp,
      priority: 'medium',
      link: '/tech-summit'
    },

    // Placement Updates
    {
      category: 'Placement',
      title: 'Campus Placement Drive 2025',
      date: 'July 1-15, 2025',
      description: 'Major corporates participating in virtual and physical placement drives across centers.',
      icon: Building,
      priority: 'high',
      link: '/placements'
    },
    {
      category: 'Placement',
      title: 'Pre-Placement Workshops',
      date: 'June 25-30, 2025',
      description: 'Career preparation workshops covering interview skills, resume building, and industry orientation.',
      icon: Briefcase,
      priority: 'medium',
      link: '/career-prep'
    },
    {
      category: 'Placement',
      title: 'Industry Partnership Program',
      date: 'Ongoing',
      description: 'New industry collaboration initiative for enhanced placement opportunities.',
      icon: Handshake,
      priority: 'medium',
      link: '/industry-connect'
    },

    // Research and Publications
    {
      category: 'Research',
      title: 'Research Grant Applications',
      date: 'Open till July 31, 2025',
      description: 'Applications invited for research grants in emerging areas of cost management.',
      icon: FileText,
      priority: 'medium',
      link: '/research-grants'
    },
    {
      category: 'Research',
      title: 'Journal Paper Submissions',
      date: 'Ongoing',
      description: 'Call for papers for the Management Accountant Journal - Special Issue on Digital Transformation.',
      icon: Book,
      priority: 'medium',
      link: '/journal'
    },

    // Regulatory Updates
    {
      category: 'Regulatory',
      title: 'Cost Audit Report Changes',
      date: 'June 10, 2025',
      description: 'Important updates to cost audit report format and filing requirements.',
      icon: AlertCircle,
      priority: 'high',
      link: '/regulatory-updates'
    },
    {
      category: 'Regulatory',
      title: 'New Cost Accounting Standards',
      date: 'June 8, 2025',
      description: 'Release of new cost accounting standards for sustainability reporting.',
      icon: FileText,
      priority: 'high',
      link: '/standards'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Updates' },
    { id: 'Examination', label: 'Examination' },
    { id: 'Academic', label: 'Academic' },
    { id: 'Professional', label: 'Professional Development' },
    { id: 'Events', label: 'Events' },
    { id: 'Placement', label: 'Placement' },
    { id: 'Research', label: 'Research' },
    { id: 'Regulatory', label: 'Regulatory' }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Examination': 'bg-blue-100 text-blue-800',
      'Academic': 'bg-green-100 text-green-800',
      'Professional': 'bg-purple-100 text-purple-800',
      'Events': 'bg-yellow-100 text-yellow-800',
      'Placement': 'bg-pink-100 text-pink-800',
      'Research': 'bg-indigo-100 text-indigo-800',
      'Regulatory': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    return {
      'high': 'bg-red-50',
      'medium': 'bg-blue-50',
      'low': 'bg-gray-50'
    }[priority] || 'bg-gray-50';
  };

  const filteredUpdates = updates
    .filter(update => 
      (selectedCategory === 'all' || update.category === selectedCategory) &&
      (update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       update.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const downloadUpdates = () => {
    // Implementation for downloading updates as PDF
    console.log('Downloading updates...');
  };

  return (
    <PageTemplate
      heroTitle="Latest Updates"
      heroSubtitle="Stay informed about examinations, courses, events, and important announcements"
      heroImage="/assets/img/w1.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{updates.filter(u => u.priority === 'high').length}</h3>
            <p className="text-gray-600">High Priority Updates</p>
          </Card>
          <Card className="p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{updates.filter(u => u.category === 'Events').length}</h3>
            <p className="text-gray-600">Upcoming Events</p>
          </Card>
          <Card className="p-6 text-center">
            <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{updates.filter(u => u.category === 'Academic').length}</h3>
            <p className="text-gray-600">Academic Updates</p>
          </Card>
          <Card className="p-6 text-center">
            <FileText className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{updates.filter(u => u.category === 'Regulatory').length}</h3>
            <p className="text-gray-600">Regulatory Changes</p>
          </Card>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button variant="outline" onClick={downloadUpdates}>
              <Download className="w-4 h-4 mr-2" />
              Download Updates
            </Button>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Updates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredUpdates.map((update, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-lg transition-shadow ${getPriorityColor(update.priority)}`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
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
                  <p className="text-gray-600 mb-4">{update.description}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a href={update.link}>Read More →</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-8 bg-blue-50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h2>
                <p className="text-gray-600">
                  Subscribe to our notification service to receive instant updates about examinations, 
                  results, events, and other important announcements.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full md:w-64"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default Updates;
