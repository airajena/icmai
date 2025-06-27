import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { 
  Building2, 
  BookOpen, 
  Users, 
  GraduationCap,
  FileText,
  Calendar,
  ArrowRight,
  Landmark,
  Shield,
  Scale,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const BFSI = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const publications = [
    {
      name: "GUIDANCE NOTE ON THE CONCURRENT AUDIT OF COMMERCIAL BANKS",
      edition: "THIRD EDITION: JULY, 2016",
      price: "150"
    },
    {
      name: "MONOGRAPH ON INTERNAL AUDIT OF TREASURY FUNCTIONS OF COMMERCIAL BANK",
      edition: "THIRD EDITION: JULY, 2016",
      price: "250"
    },
    {
      name: "MONOGRAPH ON RISK BASED INTERNAL AUDIT OF COMMERCIAL BANK",
      edition: "THIRD EDITION: JULY, 2016",
      price: "250"
    },
    {
      name: "Handbook on Stock and Book Debts Audit",
      edition: "Second Edition: December 2022",
      price: "Contact for price"
    },
    {
      name: "Aide Memoire on Infrastructure Financing",
      edition: "Latest Edition",
      price: "Rs.500 (20% discount for members)"
    }
  ];

  const courses = [
    {
      title: "Advanced Certificate Course on FinTech",
      duration: "50 hours",
      fee: "Rs. 10,000/- plus GST",
      eligibility: "CMAs, Bankers, CMA Final Students, Graduates, IT Professionals"
    },
    {
      title: "Certificate Course in Investment Management",
      duration: "20-30 hours per level",
      fee: "Rs. 4,791 - 8,213 (including GST)",
      eligibility: "FCMA / ACMA / CMA qualified, Students"
    },
    {
      title: "Certificate Course in General Insurance",
      duration: "One Month",
      fee: "Rs.6,000 plus GST",
      eligibility: "FCMA / ACMA / CMA qualified, Final Students"
    }
  ];

  const recentWebinars = [
    {
      title: "Fiat Currency Vs Crypto Currency Vs Central Bank Digital Currency",
      date: "April 9, 2022",
      time: "04:00 PM - 06:00 PM"
    },
    {
      title: "Ethics and Corporate Governance- Emerging Trends in India",
      date: "May 3, 2022",
      time: "04:00 PM - 06:00 PM"
    },
    {
      title: "Integration of ESG with Enterprise Risk Management",
      date: "June 11, 2022",
      time: "04:00 PM - 06:00 PM"
    }
  ];

  return (
    <PageTemplate
      heroTitle="Banking, Financial Services and Insurance"
      heroSubtitle="Empowering professionals in the BFSI sector with knowledge and expertise"
      heroImage="/assets/img/bfsi-hero.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Main Sectors */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Building2 className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">Banking</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Banking Regulation Act</li>
              <li>Banking Companies Rules</li>
              <li>Preservation of Records</li>
              <li>Nomination Rules</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Scale className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">Financial Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Listing Obligations</li>
              <li>Disclosure Requirements</li>
              <li>Market Regulations</li>
              <li>Investment Guidelines</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3">Insurance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Insurance Act, 1938</li>
              <li>IRDA Act, 1999</li>
              <li>Insurance Rules</li>
              <li>Regulatory Guidelines</li>
            </ul>
          </Card>
        </motion.div>

        {/* Publications Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-900" />
            Latest Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{pub.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{pub.edition}</p>
                <p className="text-blue-900 font-semibold">₹{pub.price}</p>
                <Button className="mt-4 w-full">Purchase</Button>
              </Card>
            ))}
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
                    Fee: {course.fee}
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-900" />
                    {course.eligibility}
                  </li>
                </ul>
                <Button className="mt-4 w-full">Enroll Now</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Webinars Section */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-900" />
            Recent Webinars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentWebinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-600">{webinar.date}</p>
                <p className="text-sm text-gray-600 mb-4">{webinar.time}</p>
                <p className="text-xs text-gray-500">CEP: 1 hour credit</p>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Note: The views expressed in webinars are those of the Speaker. The Institute does not own any responsibility.
          </p>
        </motion.section>

        {/* CTA Section */}
        <motion.div {...fadeIn} className="text-center">
          <Card className="p-8 bg-blue-50">
            <h2 className="text-2xl font-bold mb-4">Enhance Your BFSI Expertise</h2>
            <p className="text-gray-600 mb-6">Join our professional courses and stay updated with the latest in banking, finance, and insurance</p>
            <Button size="lg">Explore Courses</Button>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default BFSI;
