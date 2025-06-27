import { motion } from "framer-motion";
import { 
  GraduationCap,
  Target,
  Clock,
  ClipboardList,
  Users,
  Landmark,
  ArrowRight,
  BookOpen,
  Mail,
  Phone,
  Building,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from '../../components/PageTemplate';

const modules = [
  {
    title: "Enterprise Strategy",
    subtitle: "Navigating Business Success",
    description: "Comprehensive coverage of strategic business management and leadership principles"
  },
  {
    title: "Strategic Performance Management",
    subtitle: "Driving Organizational Performance",
    description: "Advanced techniques in performance measurement and management"
  },
  {
    title: "Technology in Management Accounting",
    subtitle: "Leveraging Strategic Advantage",
    description: "Integration of modern technology with management accounting practices"
  },
  {
    title: "Governance, Risks and Sustainability",
    subtitle: "Ensuring Ethical and Responsible Practices",
    description: "Focus on corporate governance, risk management, and sustainable practices"
  }
];

const eligibilityCriteria = [
  {
    role: "ICMAI Members",
    experience: "5 years",
    details: "Associate or Fellow membership of the ICMAI with experience in practice or service"
  },
  {
    role: "ICAI/ICSI Members",
    experience: "8 years",
    details: "Associate or Fellow members with experience in practice or service"
  },
  {
    role: "Engineers",
    experience: "10 years",
    details: "Engineering Degree holders with post-qualification industry experience"
  },
  {
    role: "Master's Degree Holders",
    experience: "12 years",
    details: "Any Master's Degree from recognized University with post-qualification experience"
  }
];

const DipMACourse = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/z11.jpg" 
            alt="DipMA Course" 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Diploma in Advanced Management Accounting</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Elevate your expertise in management accounting and strategic business leadership
            </p>
          </motion.div>
        </div>
      </div>

      {/* Objective Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-blue-600" />
            Course Objective
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed">
                The Diploma in Advanced Management Accounting is meticulously crafted to encompass a contemporary array of skill sets, aligning CMAs with the demands of the dynamic market. This diploma aims to equip them with the requisite skills and competencies to fulfil their professional responsibilities adeptly. The CMA qualification has evolved in tandem with industry and government demands amidst a shifting landscape, consistently demonstrating exemplary contributions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Course Modules Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            Course Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">{module.subtitle}</p>
                    <p className="text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-600" />
          Eligibility Criteria
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{criteria.role}</h3>
                      <div className="space-y-2">
                        <p className="text-blue-600 font-medium">
                          {criteria.experience} minimum experience
                        </p>
                        <p className="text-gray-600 text-sm">{criteria.details}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Details Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Course Duration</h3>
                    <p className="text-gray-600">12 months</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Course Fees</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Registration: ₹1,00,000/- (US$1500 for foreign candidates)</li>
                      <li>Exam/Assessment: ₹3,000/- per module (US$40 for foreign candidates)</li>
                      <li className="text-sm italic">*Applicable taxes would be extra</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">Management Accounting Committee</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    The Institute of Cost Accountants of India
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    CMA Bhawan, 12, Sudder Street, Kolkata - 700 016
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    +91-33-40364757
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    ma@icmai.in
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the next step in your professional journey with our Advanced Management Accounting Diploma
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DipMACourse;
