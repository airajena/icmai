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
  Phone,
  TrendingUp,
  Award,
  Target,
  Briefcase,
  Globe,
  ChartBar,
  Download,
  Mail,
  Book
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

  const industryInsights = [
    {
      title: "Digital Banking Transformation",
      category: "Banking",
      date: "June 25, 2025",
      description: "Analysis of digital transformation trends in Indian banking sector"
    },
    {
      title: "ESG in Financial Services",
      category: "Finance",
      date: "June 20, 2025",
      description: "Impact of ESG factors on financial services industry"
    },
    {
      title: "InsurTech Revolution",
      category: "Insurance",
      date: "June 15, 2025",
      description: "How technology is reshaping the insurance industry"
    }
  ];

  const careerPaths = [
    {
      role: "Risk Management Specialist",
      skills: ["Risk Assessment", "Basel Guidelines", "Stress Testing"],
      avgSalary: "₹12-18 LPA"
    },
    {
      role: "Financial Analyst",
      skills: ["Financial Modeling", "Valuation", "Industry Analysis"],
      avgSalary: "₹8-15 LPA"
    },
    {
      role: "Insurance Actuary",
      skills: ["Statistical Analysis", "Product Design", "Risk Assessment"],
      avgSalary: "₹15-25 LPA"
    }
  ];

  const regulatoryUpdates = [
    {
      authority: "RBI",
      title: "New Digital Lending Guidelines",
      date: "June 2025",
      impact: "High"
    },
    {
      authority: "SEBI",
      title: "Updated Mutual Fund Regulations",
      date: "May 2025",
      impact: "Medium"
    },
    {
      authority: "IRDAI",
      title: "Revised Insurance Distribution Guidelines",
      date: "April 2025",
      impact: "High"
    }
  ];

  return (
    <PageTemplate
      heroTitle="Banking, Financial Services and Insurance"
      heroSubtitle="Empowering professionals in the BFSI sector with knowledge and expertise"
      heroImage="/assets/img/v3.jpeg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Stats Section */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, stat: "25,000+", label: "BFSI Professionals" },
            { icon: BookOpen, stat: "100+", label: "Publications" },
            { icon: Calendar, stat: "50+", label: "Annual Events" },
            { icon: Award, stat: "200+", label: "Expert Faculty" }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <item.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>

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

        {/* Industry Insights */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-900" />
            Industry Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryInsights.map((insight, index) => (
              <Card key={index} className="p-6">
                <div className="text-sm text-blue-900 mb-2">{insight.category}</div>
                <h3 className="font-bold mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                <div className="text-sm text-gray-500">{insight.date}</div>
                <Button variant="link" className="mt-2 p-0">Read More →</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Career Paths */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-900" />
            Career Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{career.role}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Key Skills:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {career.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Average Salary:</h4>
                    <p className="text-blue-900 font-bold">{career.avgSalary}</p>
                  </div>
                </div>
                <Button className="mt-4 w-full">Explore Role</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Regulatory Updates */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Scale className="w-8 h-8 text-blue-900" />
            Regulatory Updates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regulatoryUpdates.map((update, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-sm font-semibold">
                    {update.authority}
                  </div>
                  <div className={`px-3 py-1 rounded text-sm ${
                    update.impact === 'High' ? 'bg-red-100 text-red-900' : 'bg-yellow-100 text-yellow-900'
                  }`}>
                    {update.impact} Impact
                  </div>
                </div>
                <h3 className="font-bold mb-2">{update.title}</h3>
                <p className="text-sm text-gray-500">{update.date}</p>
                <Button variant="outline" className="mt-4 w-full">View Details</Button>
              </Card>
            ))}
          </div>
        </motion.section>

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

        {/* Knowledge Resources */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Book className="w-8 h-8 text-blue-900" />
            Knowledge Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3">Research Papers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Banking Sector Analysis
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  FinTech Trends
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Insurance Market Study
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Case Studies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Digital Banking Success</li>
                <li>Risk Management Cases</li>
                <li>Insurance Innovation</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Industry Reports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Banking Sector Review</li>
                <li>Financial Markets Analysis</li>
                <li>Insurance Industry Outlook</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>RBI Guidelines</li>
                <li>SEBI Regulations</li>
                <li>IRDAI Updates</li>
              </ul>
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
                  <h3 className="font-bold mb-2">Digital Transformation Success</h3>
                  <p className="text-gray-600 mb-4">
                    Our BFSI professionals helped a leading bank transform their operations through 
                    digital initiatives, resulting in 40% cost reduction and improved customer satisfaction.
                  </p>
                  <Button variant="link" className="p-0">Read Full Story →</Button>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Risk Management Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented comprehensive risk management framework for a major insurance 
                    company, leading to 30% reduction in claim processing time.
                  </p>
                  <Button variant="link" className="p-0">Read Full Story →</Button>
                </div>
              </div>
            </Card>
          </div>
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
