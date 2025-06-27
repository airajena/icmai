import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../../components/PageTemplate';
import { 
  Calendar,
  Play,
  Users,
  Clock,
  Globe,
  Award,
  Download,
  FileText,
  Mail,
  Phone,
  Target,
  Filter,
  Search,
  ChevronRight,
  Star,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';

const BFSIWebinars = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const upcomingWebinars = [
    {
      title: "Digital Banking Transformation in 2025",
      date: "July 15, 2025",
      time: "2:00 PM - 4:00 PM",
      speaker: "CMA Rajesh Kumar",
      designation: "Chief Digital Officer, Leading Bank",
      type: "Live Webinar",
      cpeCredits: 2,
      tags: ["Digital Banking", "Technology", "Innovation"]
    },
    {
      title: "ESG Integration in Financial Services",
      date: "July 20, 2025",
      time: "3:00 PM - 5:00 PM",
      speaker: "CMA Priya Sharma",
      designation: "Head of Sustainability, Major Financial Group",
      type: "Workshop",
      cpeCredits: 2,
      tags: ["ESG", "Sustainability", "Risk Management"]
    },
    {
      title: "Future of InsurTech: 2025 and Beyond",
      date: "July 25, 2025",
      time: "11:00 AM - 1:00 PM",
      speaker: "CMA Vikram Malhotra",
      designation: "InsurTech Innovation Lead",
      type: "Panel Discussion",
      cpeCredits: 2,
      tags: ["Insurance", "Technology", "Innovation"]
    }
  ];

  const pastWebinars = [
    {
      title: "Blockchain in Banking Operations",
      date: "June 15, 2025",
      speaker: "CMA Anil Patel",
      views: "1,200+",
      duration: "120 mins",
      rating: 4.8
    },
    {
      title: "Risk Management in Digital Era",
      date: "June 10, 2025",
      speaker: "CMA Sarah Khan",
      views: "950+",
      duration: "90 mins",
      rating: 4.7
    },
    {
      title: "AI in Financial Services",
      date: "June 5, 2025",
      speaker: "CMA Ravi Kumar",
      views: "1,500+",
      duration: "120 mins",
      rating: 4.9
    }
  ];

  const specialPrograms = [
    {
      title: "BFSI Leadership Summit 2025",
      date: "August 10-11, 2025",
      type: "Conference",
      highlights: [
        "20+ Industry Speakers",
        "Networking Opportunities",
        "Latest Industry Trends",
        "Case Study Presentations"
      ],
      price: "₹5,000"
    },
    {
      title: "Financial Risk Management Bootcamp",
      date: "September 1-3, 2025",
      type: "Workshop Series",
      highlights: [
        "Hands-on Training",
        "Real-world Cases",
        "Expert Guidance",
        "Certification"
      ],
      price: "₹7,500"
    }
  ];

  return (
    <PageTemplate
      heroTitle="BFSI Webinars & Programmes"
      heroSubtitle="Enhance your expertise with our curated learning experiences"
      heroImage="/assets/img/webinar-hero.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Stats Section */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, stat: "10,000+", label: "Participants" },
            { icon: Calendar, stat: "100+", label: "Annual Webinars" },
            { icon: Award, stat: "50+", label: "Expert Speakers" },
            { icon: Globe, stat: "20+", label: "Countries" }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <item.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.section {...fadeIn} className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="w-8 h-8 text-blue-900" />
              Upcoming Webinars
            </h2>
            <div className="flex gap-4">
              <Input
                placeholder="Search webinars..."
                className="w-64"
                type="search"
              />
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-sm">
                      {webinar.type}
                    </div>
                    <div className="bg-green-100 text-green-900 px-3 py-1 rounded text-sm">
                      {webinar.cpeCredits} CPE Credits
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{webinar.title}</h3>
                  <div className="space-y-2 text-gray-600 flex-grow">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {webinar.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {webinar.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {webinar.speaker}
                    </p>
                    <p className="text-sm text-gray-500">{webinar.designation}</p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {webinar.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Past Webinars */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Play className="w-8 h-8 text-blue-900" />
            Past Webinar Recordings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-sm">
                    Recorded
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{webinar.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold mb-4">{webinar.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {webinar.speaker}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {webinar.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration: {webinar.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {webinar.views} views
                  </p>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Watch Recording
                </Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Special Programs */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-8 h-8 text-blue-900" />
            Special Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded text-sm">
                    {program.type}
                  </div>
                  <div className="text-xl font-bold text-blue-900">
                    {program.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {program.date}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold">Program Highlights:</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-900" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Register Now</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-900" />
            Learning Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3">Presentation Slides</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Digital Banking Slides
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  ESG Framework
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Case Studies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Banking Innovation</li>
                <li>FinTech Success</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Research Papers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Future of Banking</li>
                <li>Digital Transformation</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Webinar Guidelines</li>
                <li>Technical Support</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section {...fadeIn}>
          <Card className="p-8 bg-blue-50">
            <h2 className="text-2xl font-bold mb-6">Need Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Program Coordinator</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    bfsi.programs@icmai.in
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-9876543210
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Support</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    tech.support@icmai.in
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-9876543211
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </PageTemplate>
  );
};

export default BFSIWebinars;
