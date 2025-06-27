import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  GraduationCap, 
  Users, 
  FileText, 
  Building2, 
  ArrowRight,
  ScrollText,
  Scale,
  BookOpen,
  Landmark,
  Mail,
  Phone,
  CalendarDays,
  TrendingUp,
  BookMarked,
  Globe,
  Target,
  Award,
  Presentation,
  Download,
  Calendar
} from 'lucide-react';
import PageTemplate from '../components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Taxation = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const courses = [
    {
      title: "Certificate Course on GST",
      duration: "72 Hours",
      mode: "Offline & Online(both)",
      fee: "Rs. 10,000 + 18% GST",
      examFee: "Rs. 1000+18% GST",
      pattern: "100 Questions, 2 Hours, Min. 50% Passing"
    },
    {
      title: "Advanced Certificate Course on GST",
      duration: "40 Hours",
      mode: "Online only",
      fee: "Rs. 14,000 + 18% GST",
      examFee: "Rs. 1000+18% GST",
      pattern: "100 Questions, 2 Hours, Min. 50% Passing"
    },
    {
      title: "Certificate Course on TDS",
      duration: "30 Hours",
      mode: "Online only",
      fee: "Rs. 10,000 + 18% GST",
      examFee: "Rs. 1000+18% GST",
      pattern: "100 Questions, 2 Hours, Min. 50% Passing"
    }
  ];

  const contacts = [
    {
      name: "CMA Tarun Kumar",
      role: "Director, Tax Research",
      email: "trd.director@icmai.in",
      phone: "9717359723"
    },
    {
      name: "CMA Priyanka Roy",
      role: "Deputy Director, Tax Research",
      email: "trd.dd2@icmai.in",
      phone: "9007012959"
    },
    {
      name: "CMA Debosmita Sengupta",
      role: "Assistant Director, Tax Research",
      email: "trd.ad1@icmai.in",
      phone: "9038070260"
    }
  ];

  const latestUpdates = [
    {
      date: "June 25, 2025",
      title: "New Guidelines for GST E-invoicing",
      category: "GST",
      link: "#"
    },
    {
      date: "June 20, 2025",
      title: "Direct Tax Collections FY 2024-25",
      category: "Direct Tax",
      link: "#"
    },
    {
      date: "June 15, 2025",
      title: "Changes in Custom Duty Structure",
      category: "Indirect Tax",
      link: "#"
    }
  ];

  const publications = [
    {
      title: "Tax Bulletin - June 2025",
      type: "Monthly Magazine",
      description: "Comprehensive coverage of latest tax updates, case laws, and expert analyses"
    },
    {
      title: "GST Handbook 2025",
      type: "Annual Publication",
      description: "Complete guide to GST implementation and compliance"
    },
    {
      title: "Direct Tax Ready Reckoner",
      type: "Reference Guide",
      description: "Quick reference guide for direct tax calculations and provisions"
    }
  ];

  const upcomingWebinars = [
    {
      date: "July 5, 2025",
      title: "Recent Changes in GST Returns",
      speaker: "CMA Rajesh Kumar",
      duration: "2 hours"
    },
    {
      date: "July 12, 2025",
      title: "International Taxation and Transfer Pricing",
      speaker: "CMA Priya Sharma",
      duration: "3 hours"
    },
    {
      date: "July 19, 2025",
      title: "Tax Audit and Compliance",
      speaker: "CMA Vikram Malhotra",
      duration: "2.5 hours"
    }
  ];

  return (
    <PageTemplate
      heroTitle="Taxation Excellence"
      heroSubtitle="Comprehensive tax education, research, and professional development"
      heroImage="/assets/img/v2.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Stats Section */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, stat: "10,000+", label: "Tax Professionals Trained" },
            { icon: BookMarked, stat: "500+", label: "Tax Publications" },
            { icon: Presentation, stat: "200+", label: "Annual Webinars" },
            { icon: Award, stat: "50+", label: "Tax Research Papers" }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <item.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Main Sections */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Scale className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">GST Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>GST Laws & Rates</li>
              <li>Scope of CMA</li>
              <li>Advance Ruling</li>
              <li>DGGI Information</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Landmark className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">Direct Taxation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Act & Rules</li>
              <li>FAQ</li>
              <li>Direct Tax Judgements</li>
              <li>Tax Notifications</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ScrollText className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">Indirect Taxation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Customs</li>
              <li>Central Excise</li>
              <li>Indirect Tax Judgements</li>
              <li>Latest Notifications</li>
            </ul>
          </Card>
        </motion.div>

        {/* Latest Tax Updates */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-900" />
            Latest Tax Updates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestUpdates.map((update, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-blue-900 mb-2">{update.date}</div>
                <h3 className="font-bold mb-2">{update.title}</h3>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">
                    {update.category}
                  </span>
                </div>
                <a href={update.link} className="text-blue-900 hover:underline text-sm flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-900" />
            Tax Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                <div className="text-sm text-blue-900 mb-3">{pub.type}</div>
                <p className="text-gray-600 mb-4">{pub.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Webinars */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-900" />
            Upcoming Webinars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{webinar.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Date: {webinar.date}</p>
                      <p>Speaker: {webinar.speaker}</p>
                      <p>Duration: {webinar.duration}</p>
                    </div>
                    <Button className="mt-4">Register Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-8 h-8 text-blue-900" />
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Corporate Tax Advisory</h3>
                  <p className="text-gray-600 mb-4">
                    Our team successfully assisted a leading manufacturing company in optimizing their tax structure, 
                    resulting in 25% tax savings through legitimate planning.
                  </p>
                  <Button variant="link" className="p-0">Read Full Story →</Button>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Scale className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">GST Implementation</h3>
                  <p className="text-gray-600 mb-4">
                    Helped over 100 SMEs transition smoothly to GST compliance, providing training and 
                    implementation support throughout the process.
                  </p>
                  <Button variant="link" className="p-0">Read Full Story →</Button>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Courses Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            Professional Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-900" />
                    Duration: {course.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-900" />
                    Mode: {course.mode}
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-900" />
                    Fee: {course.fee}
                  </li>
                </ul>
                <Button className="mt-4 w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Committee Objectives */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-900" />
            Committee Objectives
          </h2>
          
          <Card className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-900 mt-1 flex-shrink-0" />
                <span>Monitoring current tax legislation and analyzing changes of existing legislation</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-900 mt-1 flex-shrink-0" />
                <span>Sharing knowledge and experiences, proposing collective suggestions to Ministries</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-900 mt-1 flex-shrink-0" />
                <span>Examining various laws, rules, regulations, and circulars issued by the Government</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-900 mt-1 flex-shrink-0" />
                <span>Preparing Pre-Budget and Post-Budget Memoranda with improvement suggestions</span>
              </li>
            </ul>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Phone className="w-8 h-8 text-blue-900" />
            Tax Research Department
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{contact.name}</h3>
                <p className="text-gray-600 mb-4">{contact.role}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-900" />
                    <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-900" />
                    <span>{contact.phone}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-900" />
            Tax Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3">Tax Forms</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Income Tax Returns
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  GST Forms
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  TDS Returns
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Calculators</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Income Tax Calculator</li>
                <li>GST Calculator</li>
                <li>TDS Calculator</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Due Dates</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tax Filing Calendar</li>
                <li>GST Return Dates</li>
                <li>TDS Payment Dates</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Income Tax Portal</li>
                <li>GST Portal</li>
                <li>E-filing Guide</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div {...fadeIn} className="text-center">
          <Card className="p-8 bg-blue-50">
            <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Tax Expertise?</h2>
            <p className="text-gray-600 mb-6">Join our professional courses and stay updated with the latest in taxation</p>
            <Button size="lg">Explore Courses</Button>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default Taxation;
