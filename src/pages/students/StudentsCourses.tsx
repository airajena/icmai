import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building,
  Calculator,
  BookOpen,
  Bot,
  ChartBar,
  ShieldCheck,
  Search,
  FileSpreadsheet,
  DatabaseIcon,
  ArrowRight,
  Mail
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageTemplate from '../../components/PageTemplate';

const departments = [
  {
    title: "Advanced Studies",
    subtitle: "Board of Advanced Studies & Research",
    icon: GraduationCap,
    email: "advstudis@icmai.in",
    bgColor: "bg-blue-500",
    link: "/advanced-studies"
  },
  {
    title: "BFSI",
    subtitle: "Banking, Financial Services and Insurance",
    icon: Building,
    email: "bfsi@icmai.in",
    bgColor: "bg-indigo-500",
    link: "/bfsi"
  },
  {
    title: "Taxation",
    subtitle: "Taxation and Research",
    icon: Calculator,
    email: "trd@icmai.in",
    bgColor: "bg-purple-500",
    link: "/taxation"
  },
  {
    title: "Cooperative Development",
    subtitle: "Cooperative Development Board",
    icon: BookOpen,
    email: "cdboard@icmai.in",
    bgColor: "bg-pink-500",
    link: "/cooperative"
  },
  {
    title: "Sustainability Standards",
    subtitle: "Sustainability Standards Board",
    icon: ShieldCheck,
    email: "ssb@icmai.in",
    bgColor: "bg-green-500",
    link: "/sustainability"
  },
  {
    title: "Artificial Intelligence",
    subtitle: "AI & Technology Integration",
    icon: Bot,
    email: "ai@icmai.in",
    bgColor: "bg-cyan-500",
    link: "/ai"
  },
  {
    title: "Management Accounting",
    subtitle: "Management Accounting Committee",
    icon: ChartBar,
    email: "ma@icmai.in",
    bgColor: "bg-orange-500",
    link: "/management"
  }
];

const specializedCourses = [
  {
    title: "Advanced Business Excel",
    subtitle: "For Finance Professionals",
    icon: FileSpreadsheet,
    color: "text-emerald-600"
  },
  {
    title: "Business Intelligence & Analytics",
    subtitle: "Data-Driven Decision Making",
    icon: ChartBar,
    color: "text-blue-600"
  },
  {
    title: "Forensic Audit",
    subtitle: "Fraud Detection & Prevention",
    icon: Search,
    color: "text-purple-600"
  },
  {
    title: "System Security Audit",
    subtitle: "IT Security & Compliance",
    icon: ShieldCheck,
    color: "text-red-600"
  },
  {
    title: "Internal Audit",
    subtitle: "Risk Management & Control",
    icon: BookOpen,
    color: "text-indigo-600"
  },
  {
    title: "CMA for Engineers",
    subtitle: "Cost Management in Engineering",
    icon: Calculator,
    color: "text-orange-600"
  },
  {
    title: "Data Analytics",
    subtitle: "Business Analytics & Insights",
    icon: DatabaseIcon,
    color: "text-cyan-600"
  }
];

const StudentsCourses = () => {
  return (
    


      <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/c01.jpg" 
            alt="Heritage Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70" />
        </div>

        <div className="relative py-16 md:py-32 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Courses</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Advance your career with our comprehensive range of specialized courses and professional development programs
          </p>
        </motion.div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Foundation Course</h3>
          <p className="text-gray-600 mb-4">Entry-level course for aspiring cost accountants</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 4 months</div>
            <div>Subjects: 4</div>
            <div>Eligibility: 10+2</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Intermediate Course</h3>
          <p className="text-gray-600 mb-4">Advanced knowledge in cost and management accounting</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 8 months</div>
            <div>Subjects: 8</div>
            <div>Eligibility: Foundation Pass</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Final Course</h3>
          <p className="text-gray-600 mb-4">Professional level with specialization options</p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div>Duration: 12 months</div>
            <div>Subjects: 12</div>
            <div>Eligibility: Intermediate Pass</div>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>
      </div>

      {/* Academic Departments Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${dept.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-600 mb-4">{dept.subtitle}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{dept.email}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-900 group-hover:text-white transition-all"
                    onClick={() => window.location.href = dept.link}
                  >
                    Visit Department
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specialized Courses Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specializedCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <course.icon className={`w-8 h-8 ${course.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.subtitle}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-900 group-hover:text-white transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our programs
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => window.location.href = '/students/admission'}
          >
            Apply Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default StudentsCourses;
