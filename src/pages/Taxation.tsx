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
  Phone
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

  return (
    <PageTemplate
      heroTitle="Taxation Excellence"
      heroSubtitle="Comprehensive tax education, research, and professional development"
      heroImage="/assets/img/taxation-hero.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
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
