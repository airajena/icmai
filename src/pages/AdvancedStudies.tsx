import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { 
  BookOpen, 
  Award, 
  FileText, 
  Users,
  GraduationCap,
  Target,
  Calendar,
  Globe,
  Lamp,
  Building2,
  ChevronRight,
  Mail,
  Phone,
  Clock,
  Star,
  Download,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const AdvancedStudies = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const researchPrograms = [
    {
      title: "PhD in Cost Management",
      duration: "3-5 years",
      seats: 20,
      researchAreas: [
        "Advanced Cost Analytics",
        "Strategic Cost Management",
        "Industry 4.0 Cost Systems"
      ],
      supervisors: 8
    },
    {
      title: "PhD in Management Accounting",
      duration: "3-5 years",
      seats: 15,
      researchAreas: [
        "Performance Management",
        "Risk Analytics",
        "Sustainability Accounting"
      ],
      supervisors: 6
    },
    {
      title: "PhD in Financial Management",
      duration: "3-5 years",
      seats: 18,
      researchAreas: [
        "Corporate Finance",
        "Financial Analytics",
        "Investment Management"
      ],
      supervisors: 7
    }
  ];

  const facultyProfiles = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Director of Research",
      specialization: "Strategic Cost Management",
      publications: 45,
      experience: "20+ years"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Research Guide",
      specialization: "Financial Analytics",
      publications: 38,
      experience: "15+ years"
    },
    {
      name: "Dr. Anil Verma",
      designation: "Senior Research Guide",
      specialization: "Management Accounting",
      publications: 42,
      experience: "18+ years"
    }
  ];

  const publications = [
    {
      title: "Advanced Cost Management Review",
      frequency: "Quarterly",
      impact: "4.5",
      indexed: ["Scopus", "Web of Science"],
      submissions: "Open"
    },
    {
      title: "Journal of Management Accounting Research",
      frequency: "Bi-annual",
      impact: "3.8",
      indexed: ["Scopus"],
      submissions: "Open"
    },
    {
      title: "Studies in Financial Analytics",
      frequency: "Annual",
      impact: "4.2",
      indexed: ["Web of Science"],
      submissions: "Closed"
    }
  ];

  const upcomingEvents = [
    {
      title: "Research Methodology Workshop",
      date: "July 15-20, 2025",
      type: "Workshop",
      mode: "Hybrid"
    },
    {
      title: "International Conference on Cost Analytics",
      date: "August 10-12, 2025",
      type: "Conference",
      mode: "Physical"
    },
    {
      title: "Doctoral Colloquium 2025",
      date: "September 5, 2025",
      type: "Colloquium",
      mode: "Physical"
    }
  ];

  return (
    <PageTemplate
      heroTitle="Advanced Studies & Research"
      heroSubtitle="Advancing the frontiers of knowledge in Cost and Management Accounting"
      heroImage="/assets/img/v3.jpg"
    >
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Stats Section */}
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, stat: "100+", label: "Research Scholars" },
            { icon: Award, stat: "500+", label: "Publications" },
            { icon: GraduationCap, stat: "25+", label: "Research Guides" },
            { icon: Globe, stat: "15+", label: "Research Centers" }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <item.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Research Programs */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-900" />
            Doctoral Research Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchPrograms.map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      Duration: {program.duration}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      Available Seats: {program.seats}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      Research Supervisors: {program.supervisors}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Research Areas:</h4>
                    <ul className="space-y-1">
                      {program.researchAreas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <ChevronRight className="w-4 h-4 text-blue-900" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="mt-6 w-full">Apply Now</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Faculty Profiles */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-900" />
            Research Faculty
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultyProfiles.map((faculty, index) => (
              <Card key={index} className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold">{faculty.name}</h3>
                  <p className="text-blue-900">{faculty.designation}</p>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Lamp className="w-4 h-4" />
                    Specialization: {faculty.specialization}
                  </p>
                  <p className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Publications: {faculty.publications}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Experience: {faculty.experience}
                  </p>
                </div>
                <Button variant="outline" className="mt-4 w-full">View Profile</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Research Publications */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-900" />
            Research Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{pub.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Frequency: {pub.frequency}
                  </p>
                  <p className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Impact Factor: {pub.impact}
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Indexed in: {pub.indexed.join(", ")}
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      pub.submissions === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {pub.submissions} for Submissions
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-x-2">
                  <Button variant="outline" className="w-1/2">
                    <Download className="w-4 h-4 mr-2" />
                    Guidelines
                  </Button>
                  <Button className="w-1/2">Submit Paper</Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-900" />
            Upcoming Research Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-sm">
                    {event.type}
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                    {event.mode}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {event.date}
                </p>
                <Button className="w-full">Register Now</Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Research Resources */}
        <motion.section {...fadeIn} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-900" />
            Research Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3">Research Guides</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Thesis Guidelines
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Research Methodology
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Digital Library</h3>
              <ul className="space-y-2 text-gray-600">
                <li>E-Journals Access</li>
                <li>Research Databases</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Research Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Statistical Software</li>
                <li>Reference Managers</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Support Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Research Assistance</li>
                <li>Technical Support</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section {...fadeIn}>
          <Card className="p-8 bg-blue-50">
            <h2 className="text-2xl font-bold mb-6">Research Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Research Office</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    research@icmai.in
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-9876543210
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Research Committee</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    committee.research@icmai.in
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-9876543211
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </PageTemplate>
  );
};

export default AdvancedStudies;
