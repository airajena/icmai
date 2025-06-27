import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { Award, BookOpen, Users, Calendar, BarChart, GraduationCap, Clock, Globe, Trophy, BookOpenCheck, Target, ChartBar } from 'lucide-react';
import { Card } from '../components/ui/card';

const ProfessionalDevelopment = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const upcomingPrograms = [
    {
      title: "Advanced Cost Management",
      date: "July 15-16, 2025",
      mode: "Hybrid",
      duration: "2 Days"
    },
    {
      title: "Strategic Financial Leadership",
      date: "August 5-7, 2025",
      mode: "Online",
      duration: "3 Days"
    },
    {
      title: "ESG Reporting Workshop",
      date: "August 20, 2025",
      mode: "Physical",
      duration: "1 Day"
    }
  ];

  return (
    <PageTemplate
      heroTitle="Professional Development & CPE"
      heroSubtitle="Empowering Cost Accountants with Continuous Learning and Growth"
      heroImage="/assets/img/v1.jpg"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {[
            { icon: Users, stat: "50,000+", label: "Professionals Trained" },
            { icon: Trophy, stat: "200+", label: "Programs Annually" },
            { icon: Globe, stat: "30+", label: "Global Partners" },
            { icon: ChartBar, stat: "95%", label: "Satisfaction Rate" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <item.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Programs */}
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <Award className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">CPE Programs</h3>
            <p className="text-gray-600 mb-4">
              Mandatory continuing education programs keeping members updated with latest developments in the profession.
              Earn up to 20 CPE hours through our structured programs.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
              Enroll Now
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">MCBT</h3>
            <p className="text-gray-600 mb-4">
              Advanced management and cost-based training programs designed for industry professionals.
              Get hands-on experience with real-world case studies.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">MES</h3>
            <p className="text-gray-600 mb-4">
              Executive development series focusing on leadership, strategy, and management excellence.
              Join industry leaders in intensive learning sessions.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
              Join Program
            </button>
          </div>
        </motion.div>

        {/* Upcoming Programs */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            Upcoming Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPrograms.map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> {program.date}
                  </p>
                  <p className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" /> {program.mode}
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> {program.duration}
                  </p>
                </div>
                <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition">
                  Register Now
                </button>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Professional Avenues */}
        <motion.div variants={fadeIn} className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Professional Avenues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BookOpenCheck className="w-5 h-5 mr-2" />
                Certification Programs
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Certificate in Business Valuation</h4>
                  <p className="text-gray-600 text-sm">Master the art of business valuation with practical insights</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Certificate in Forensic Audit</h4>
                  <p className="text-gray-600 text-sm">Learn advanced forensic accounting techniques</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Certificate in GST</h4>
                  <p className="text-gray-600 text-sm">Comprehensive coverage of GST laws and practices</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Certificate in International Trade</h4>
                  <p className="text-gray-600 text-sm">Global trade practices and documentation</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Training Modules
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Leadership Development</h4>
                  <p className="text-gray-600 text-sm">Enhance your leadership capabilities and team management skills</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Strategic Management</h4>
                  <p className="text-gray-600 text-sm">Learn to develop and implement effective business strategies</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Risk Management</h4>
                  <p className="text-gray-600 text-sm">Modern approaches to identifying and managing business risks</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Digital Finance</h4>
                  <p className="text-gray-600 text-sm">Digital transformation in finance and accounting</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">E-Learning Portal</h3>
              <p className="text-gray-600 text-sm mb-3">Access our comprehensive online learning platform</p>
              <a href="#" className="text-blue-900 hover:underline text-sm">Access Portal →</a>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Webinar Archives</h3>
              <p className="text-gray-600 text-sm mb-3">Watch recordings of past professional development sessions</p>
              <a href="#" className="text-blue-900 hover:underline text-sm">View Archives →</a>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Research Publications</h3>
              <p className="text-gray-600 text-sm mb-3">Latest research papers and industry insights</p>
              <a href="#" className="text-blue-900 hover:underline text-sm">Browse Publications →</a>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Study Materials</h3>
              <p className="text-gray-600 text-sm mb-3">Download course materials and practice resources</p>
              <a href="#" className="text-blue-900 hover:underline text-sm">Download Resources →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default ProfessionalDevelopment;
