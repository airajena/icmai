import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../../components/PageTemplate';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Download,
  Calendar,
  AlertCircle,
  ChevronRight,
  Award,
  TrendingUp,
  FileText,
  Mail,
  Phone,
  BookOpen,
  Star,
  Clock,
  HelpCircle,
  Filter,
  Printer,
  Share2,
  Users
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExamResults = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  
  const examStats = [
    { label: 'Final Level Pass %', value: '68.5%', trend: '+2.3%' },
    { label: 'Intermediate Pass %', value: '72.4%', trend: '+1.8%' },
    { label: 'Foundation Pass %', value: '85.2%', trend: '+3.5%' },
    { label: 'Total Candidates', value: '45,890', trend: '+12.5%' }
  ];

  const toppers = [
    {
      name: 'Arun Kumar',
      rank: 1,
      level: 'Final',
      marks: '592/700',
      city: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      rank: 2,
      level: 'Final',
      marks: '585/700',
      city: 'Delhi'
    },
    {
      name: 'Rahul Verma',
      rank: 3,
      level: 'Final',
      marks: '579/700',
      city: 'Bangalore'
    }
  ];

  const recentResults = [
    {
      exam: 'Final Level',
      date: 'June 25, 2025',
      candidates: '15,240',
      passPercentage: '68.5%',
      status: 'Declared'
    },
    {
      exam: 'Intermediate Level',
      date: 'June 20, 2025',
      candidates: '18,650',
      passPercentage: '72.4%',
      status: 'Declared'
    },
    {
      exam: 'Foundation Level',
      date: 'June 15, 2025',
      candidates: '12,000',
      passPercentage: '85.2%',
      status: 'Declared'
    }
  ];

  const subjectWiseAnalysis = [
    { subject: 'Cost Accounting', pass: '75%', topScore: '92/100', avgScore: '68/100' },
    { subject: 'Financial Management', pass: '70%', topScore: '95/100', avgScore: '65/100' },
    { subject: 'Direct Taxation', pass: '72%', topScore: '90/100', avgScore: '67/100' },
    { subject: 'Corporate Laws', pass: '68%', topScore: '88/100', avgScore: '62/100' }
  ];

  const faqs = [
    {
      question: 'How can I apply for revaluation?',
      answer: 'Submit the revaluation application within 30 days of result declaration through your student portal. Fees: ₹1000 per paper.'
    },
    {
      question: 'What is the passing criteria?',
      answer: '50% in each paper and 60% aggregate. All papers must be cleared independently.'
    },
    {
      question: 'How can I get my mark sheet?',
      answer: 'Digital mark sheets are available immediately. Physical copies will be dispatched within 30 days to your registered address.'
    },
    {
      question: 'What if I lose my mark sheet?',
      answer: 'Apply for duplicate mark sheet through student portal with required fees and documentation.'
    }
  ];

  return (
    <PageTemplate
      heroTitle="Examination Results"
      heroSubtitle="Check your results, download mark sheets, and access historical performance data"
      heroImage="/assets/img/r1.jpeg"
    >
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {examStats.map((stat, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-gray-600 mb-2">{stat.label}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-green-600 text-sm">{stat.trend}</span>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Result Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Check Your Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Roll Number</label>
                <Input placeholder="Enter your roll number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Exam Level</label>
                <select className="w-full border border-gray-200 rounded-md p-2">
                  <option>Final</option>
                  <option>Intermediate</option>
                  <option>Foundation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Exam Session</label>
                <select className="w-full border border-gray-200 rounded-md p-2">
                  <option>June 2025</option>
                  <option>December 2024</option>
                  <option>June 2024</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Results
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Need Help?
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Recent Results & Top Performers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Results */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Result Announcements</h2>
              <div className="space-y-4">
                {recentResults.map((result, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-900" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-800">{result.exam}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {result.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600">Released: {result.date}</p>
                      <div className="flex gap-4 mt-2 text-sm text-gray-600">
                        <span>Candidates: {result.candidates}</span>
                        <span>Pass %: {result.passPercentage}</span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Top Performers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Top Performers</h2>
              <div className="space-y-4">
                {toppers.map((topper, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-200 p-3 rounded-full">
                      <Award className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{topper.name}</h3>
                        <span className="text-yellow-700 font-bold">Rank {topper.rank}</span>
                      </div>
                      <div className="flex gap-4 mt-1 text-sm text-gray-600">
                        <span>{topper.level}</span>
                        <span>{topper.marks}</span>
                        <span>{topper.city}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Subject-wise Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Subject-wise Performance Analysis</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">Subject</th>
                    <th className="p-4 text-left">Pass Percentage</th>
                    <th className="p-4 text-left">Highest Score</th>
                    <th className="p-4 text-left">Average Score</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectWiseAnalysis.map((subject, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4">{subject.subject}</td>
                      <td className="p-4">{subject.pass}</td>
                      <td className="p-4">{subject.topScore}</td>
                      <td className="p-4">{subject.avgScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </motion.div>

        {/* Result Archives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Result Archives</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[2024, 2023, 2022, 2021].map((year) => (
                <div key={year} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">{year}</h3>
                  <ul className="space-y-2">
                    <li>
                      <Button variant="link" className="text-blue-900">December {year}</Button>
                    </li>
                    <li>
                      <Button variant="link" className="text-blue-900">June {year}</Button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="p-6 bg-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Result Support</h3>
                <p className="text-gray-600 mb-4">Need help with your results?</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-1800-XXX-XXXX
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    results@icmai.in
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Verification Requests</h3>
                <p className="text-gray-600 mb-4">For result verification:</p>
                <Button variant="outline">Submit Request</Button>
              </div>
              <div>
                <h3 className="font-bold mb-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="p-0 h-auto">Revaluation Application</Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">Duplicate Marksheet</Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">Grade Card Download</Button>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default ExamResults;
