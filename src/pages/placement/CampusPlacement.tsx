import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building,
  CalendarDays, 
  MapPin,
  Users,
  BookOpen,
  ArrowRight,
  BriefcaseIcon,
  Target,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from '../../components/PageTemplate';

const upcomingPlacements = [
  {
    location: "Mumbai (Western)",
    date: "28.04.2025",
    venue: "Malad Kandivli Education Society",
    companies: ["BPCL", "IOCL", "Vedanta Limited", "Pidilite Industries", "L&T Construction"],
    mode: "OFFLINE"
  },
  {
    location: "Delhi (Northern)",
    date: "15.04.2025",
    venue: "CMA Bhawan, Lodhi Road",
    companies: ["GAIL India", "IOCL", "ITC Limited", "Power Finance Corporation"],
    mode: "OFFLINE"
  },
  {
    location: "Kolkata (Eastern)",
    date: "07.05.2025",
    venue: "CMA Bhawan, Harish Mukherjee Road",
    companies: ["BPCL", "IOCL", "Vedanta", "L&T Construction"],
    mode: "OFFLINE"
  }
];

const counsellingFunctions = [
  {
    title: "Career Planning",
    description: "Raising awareness of career interests, aspirations and potential",
    icon: Target
  },
  {
    title: "Performance Management",
    description: "Diagnosing underlying causes of under-performance in studies and activities",
    icon: BookOpen
  },
  {
    title: "Career Transition",
    description: "Clarifying individual strengths, areas for development, and personal goals",
    icon: Compass
  }
];

const orientationBatches = [
  {
    location: "Mumbai",
    dates: "19.03.25 to 29.03.35",
    timing: "09:30am to 05:30pm",
    venue: "Kohinoor Business School, Kohinoor City"
  },
  {
    location: "Delhi",
    dates: "17.03.25 to 27.03.25",
    timing: "10:30am to 06:00pm",
    venue: "CMA Bhawan, Lodhi Road"
  },
  {
    location: "Kolkata",
    dates: "11.03.25 to 23.03.25",
    timing: "10:30am to 06:00pm",
    venue: "EIRC Auditorium, CMA Bhawan"
  }
];

const CampusPlacement = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/ad.webp" 
            alt="Campus Background" 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Placement & Career</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your gateway to career opportunities and professional growth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Career Counselling Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Counselling</h2>
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                Career development is a lifelong process that influences your professional journey. 
                Our counselling programs help students evaluate their abilities, interests, and talents 
                to develop realistic academic and career goals.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {counsellingFunctions.map((func, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-center">
                      <func.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="font-semibold mb-2">{func.title}</h3>
                      <p className="text-sm text-gray-600">{func.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Placements Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Campus Placements</h2>
          <div className="grid gap-6">
            {upcomingPlacements.map((placement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <Building className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{placement.location}</h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" /> {placement.date}
                            </p>
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" /> {placement.venue}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-blue-600">{placement.mode}</span>
                        </div>
                        <Button
                          variant="outline"
                          className="group-hover:bg-blue-900 group-hover:text-white transition-all"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">Companies:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {placement.companies.map((company, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pre-Placement Orientation Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Placement Orientation Program</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {orientationBatches.map((batch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{batch.location}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" /> {batch.dates}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {batch.venue}
                        </p>
                        <p>{batch.timing}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our placement program and connect with leading organizations
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Register for Placement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CampusPlacement;
