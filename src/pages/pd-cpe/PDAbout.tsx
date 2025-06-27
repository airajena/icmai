import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  ArrowRight, 
  Download,
  Building,
  ScrollText,
  BookCheck,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from '../../components/PageTemplate';

const recentGuidanceNotes = [
  {
    title: "Environmental Costing",
    edition: "First Edition: April 2025",
    isNew: true
  },
  {
    title: "Techniques of Artificial Intelligence (AI) and Role of CMAs",
    edition: "First Edition: January, 2024",
    isNew: true
  },
  {
    title: "Role of Cost Accountants in CSR Practices",
    edition: "First Edition: January, 2024",
    isNew: true
  },
  {
    title: "Cost Management of Textile Industry",
    edition: "First Edition: July, 2023",
    isNew: false
  }
];

const keyFunctions = [
  {
    title: "Professional Updates",
    description: "Regular updates on economic and financial aspects, professional services, and tender opportunities",
    icon: Globe
  },
  {
    title: "Guidance Notes",
    description: "Technical assistance and updated guidance for members and industry professionals",
    icon: BookCheck
  },
  {
    title: "Government Relations",
    description: "Representation to Central and State Governments for professional interests",
    icon: Building
  },
  {
    title: "Query Resolution",
    description: "Support for Cost Audit, record maintenance, and XBRL filing queries",
    icon: ScrollText
  }
];

const PDAbout = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/c01.jpg" 
            alt="Professional Development Background" 
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Development</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Advancing the profession through continuous learning and development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Functions Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFunctions.map((func, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <func.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{func.title}</h3>
                  <p className="text-gray-600 text-sm">{func.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Guidance Notes Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Guidance Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentGuidanceNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                          {note.isNew && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{note.edition}</p>
                        <Button
                          variant="outline"
                          className="mt-4 group-hover:bg-blue-900 group-hover:text-white transition-all"
                        >
                          Download
                          <Download className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CPE Guidelines Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CPE Guidelines</h2>
            <p className="text-gray-600 mb-6">
              Stay compliant with the latest Continuous Professional Education requirements 
              and maintain your professional excellence.
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-700">CPE Credit Hours requirement for 2024-25</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-700">Guidelines for CEP Study Circles</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-700">Extension notifications for COP renewal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <Button variant="outline" className="justify-between">
                    MCA Helpdesk
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    UDIN Portal
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    XBRL Filing
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    Cost Audit Report
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Access the latest guidance notes and professional resources
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              View All Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PDAbout;
