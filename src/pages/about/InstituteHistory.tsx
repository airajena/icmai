import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Milestone, 
  GraduationCap, 
  Building, 
  ScrollText, 
  Target,
  Award,
  Scale,
  Landmark
} from 'lucide-react';
import { cn } from "@/lib/utils";
import PageTemplate from '../../components/PageTemplate';

const timelineEvents = [
  {
    year: "1944",
    title: "Foundation",
    description: "Established as a registered company under the Companies Act to promote and develop the profession of Cost Accountancy.",
    icon: Building
  },
  {
    year: "1959",
    title: "Statutory Recognition",
    description: "Established by a special Act of Parliament - The Cost and Works Accountants Act, 1959, as a statutory professional body.",
    icon: Scale
  },
  {
    year: "1960s",
    title: "Growth Phase",
    description: "Rapid expansion of services and membership base, contributing to India's industrial growth.",
    icon: Milestone
  },
  {
    year: "1975",
    title: "Educational Excellence",
    description: "Introduction of structured professional education system and establishment of regional centers.",
    icon: GraduationCap
  },
  {
    year: "2000s",
    title: "Digital Transformation",
    description: "Modernization of services and introduction of online learning platforms.",
    icon: Target
  },
  {
    year: "Present",
    title: "Global Recognition",
    description: "Leading professional body with international partnerships and recognition.",
    icon: Award
  }
];

const InstituteHistory = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/z1.jpg" 
            alt="Heritage Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/35 to-blue-900/70" />
        </div>

        <div className="relative py-16 md:py-32 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* <History className="w-16 h-16 mx-auto mb-6 text-blue-300" /> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Our Rich Heritage</h1>
            <p className="text-xl text-blue-100 drop-shadow">Pioneering Cost and Management Accounting in India since 1944</p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Milestones</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• 1959 - Establishment by Act of Parliament</li>
            <li>• 1962 - First batch of Cost Accountants qualified</li>
            <li>• 1985 - International recognition and affiliations</li>
            <li>• 2000 - Digital transformation initiatives</li>
            <li>• 2010 - Expansion to international chapters</li>
            <li>• 2020 - Online education and examination system</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Members:</span>
              <span className="font-bold text-blue-900">75,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Regional Chapters:</span>
              <span className="font-bold text-blue-900">103</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Countries Present:</span>
              <span className="font-bold text-blue-900">25+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Years of Service:</span>
              <span className="font-bold text-blue-900">65+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <div className="py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Origins of Cost Accounting</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              During World War II, the concept of cost as an independent entity emerged in global industrial circles. 
              The prohibitive cost of defense operations led governments to develop the concept of cost-plus contracts, 
              requiring contractors to submit detailed cost breakdowns.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Post-1945, nations focused on economic reconstruction through industrialization. This era marked the 
              golden age of industrialization, where cost accounting became central to government policies and 
              industrial development.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Milestone Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
            
            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative mb-12",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}
              >
                <div className={cn(
                  "flex items-center mb-4",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  <div className="bg-blue-900 text-white px-4 py-2 rounded-full inline-flex items-center">
                    <event.icon className="w-5 h-5 mr-2" />
                    <span className="font-bold">{event.year}</span>
                  </div>
                </div>
                <div className={cn(
                  "bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto md:mx-0",
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                )}>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Present Day */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Landmark className="w-12 h-12 mr-4 text-blue-300" />
              <h2 className="text-3xl font-bold">ICMAI Today</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Excellence</h3>
                <p className="text-blue-100">
                  The Institute stands as India's premier statutory professional organization 
                  specializing exclusively in Cost and Management Accountancy, serving through 
                  four regional councils and numerous chapters across India and abroad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
                <p className="text-blue-100">
                  Today, ICMAI continues to shape the future of cost and management accounting 
                  through innovation, education, and international collaboration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => window.location.href = '/about/vision'}
            className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold 
                     hover:bg-blue-800 transition-colors duration-300 inline-flex items-center"
          >
            <ScrollText className="w-5 h-5 mr-2" />
            Explore Our Vision & Mission
          </button>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default InstituteHistory;
