import React from 'react';
import { motion } from "framer-motion";
import { 
  BookOpen,
  Library,
  SearchCode,
  Download,
  ArrowRight,
  Calendar,
  User,
  BookMarked,
  Tag,
  FileText,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from '../../components/PageTemplate';

const featuredArticles = [
  {
    title: "Emerging Trends in Management Accounting: AI and Machine Learning Applications",
    author: "Dr. Rajendra Kumar, FCMA",
    date: "June 2025",
    tags: ["Digital Transformation", "AI", "Future of Accounting"],
    abstract: "An in-depth analysis of how artificial intelligence and machine learning are transforming management accounting practices in India."
  },
  {
    title: "ESG Reporting Framework: A Cost Management Perspective",
    author: "Prof. Meena Sharma, FCMA",
    date: "May 2025",
    tags: ["ESG", "Sustainability", "Reporting"],
    abstract: "Comprehensive study on integrating environmental, social, and governance metrics into cost management systems."
  },
  {
    title: "Strategic Cost Management in the Era of Industry 4.0",
    author: "CA Suresh Patel & CMA Amit Singh",
    date: "April 2025",
    tags: ["Industry 4.0", "Strategic Management", "Cost Control"],
    abstract: "Exploring the transformation of cost management strategies in the context of Industry 4.0 technologies."
  }
];

const researchPapers = [
  {
    title: "Performance Measurement Systems in Indian Public Sector Enterprises",
    author: "Research Committee, ICMAI",
    date: "June 2025",
    category: "Public Sector",
    downloads: 1250
  },
  {
    title: "Cost Audit Impact Study: Manufacturing Sector Analysis",
    author: "Technical Directorate, ICMAI",
    date: "May 2025",
    category: "Cost Audit",
    downloads: 980
  },
  {
    title: "Integrated Reporting Framework for Sustainable Business",
    author: "Sustainability Committee, ICMAI",
    date: "April 2025",
    category: "Reporting Standards",
    downloads: 1100
  }
];

const specialIssues = [
  {
    title: "Digital Transformation in Management Accounting",
    description: "Special edition focusing on technological advancement in the profession",
    date: "Q2 2025",
    topics: ["Digital Analytics", "Blockchain", "Cloud Accounting"]
  },
  {
    title: "Sustainability Accounting and Reporting",
    description: "Comprehensive coverage of environmental accounting practices",
    date: "Q1 2025",
    topics: ["Carbon Accounting", "ESG Metrics", "Green Reporting"]
  }
];

const LatestJournals = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    
    <PageTemplate
      heroTitle="The Management Accountant Journal"
      heroSubtitle="ICMAI's Premier Research Publication Since 1966"
      heroImage="/assets/img/journal-hero.webp"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Featured Articles */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookMarked className="w-8 h-8 text-blue-900" />
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <p className="text-gray-600 text-sm">{article.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Research Papers */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-900" />
            Latest Research Papers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">{paper.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      {paper.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Tag className="w-4 h-4" />
                      {paper.category}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      {paper.downloads} downloads
                    </div>
                    <Button className="w-full">
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Special Issues */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Library className="w-8 h-8 text-blue-900" />
            Special Issues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{issue.title}</h3>
                    <p className="text-gray-600">{issue.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {issue.date}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {issue.topics.map((topic, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Issue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Journal Info */}
        <motion.section {...fadeIn}>
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">About the Journal</h3>
                  <p className="text-gray-600 mb-4">
                    The Management Accountant is the official journal of The Institute of Cost Accountants of India,
                    first published in 1966. It features peer-reviewed research articles, case studies, and technical papers
                    focusing on management accounting, cost management, and related fields.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-900" />
                      ISSN: 0972-3528
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-900" />
                      Monthly Publication
                    </li>
                    <li className="flex items-center gap-2">
                      <SearchCode className="w-4 h-4 text-blue-900" />
                      Indexed in major research databases
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Submit Your Research</h3>
                  <p className="text-gray-600 mb-6">
                    We welcome original research papers, articles, and case studies from academics,
                    practitioners, and researchers in the field of management accounting.
                  </p>
                  <Button size="lg">
                    Submission Guidelines
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.div {...fadeIn} className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Research</h2>
            <p className="text-blue-100 mb-6">Subscribe to our journal and get access to cutting-edge research in management accounting</p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Subscribe Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default LatestJournals;
