
import { motion } from "framer-motion";
import { 
  UserCircle2, 
  FileText, 
  Bell, 
  CreditCard, 
  GraduationCap, 
  ArrowRight, 
  Download,
  ShieldCheck,
  Heart,
  Phone,
  Users,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageTemplate from '../components/PageTemplate';

const memberUpdates = [
  {
    title: "Extension of CPE Credit Hours",
    description: "Extension of time for CPE Credit Hours in physical mode for renewal of Certificate of Practice (COP) for the year 2025-26.",
    date: "June 2025"
  },
  {
    title: "New Admissions & Advancements",
    description: "New admission to Associateship and advancement to Fellowship w.e.f. 17th June, 2025",
    date: "17 June 2025"
  },
  {
    title: "Digital Identity Cards",
    description: "Members can now download their Membership Identity Card from DIGILOCKER Website",
    link: "https://www.digilocker.gov.in"
  }
];

const memberForms = [
  {
    id: "M2",
    title: "Associate/Fellow Admission",
    description: "Application for Admission as Associate/Fellow"
  },
  {
    id: "M3",
    title: "Practice Certificate",
    description: "Issue, Renewal or Restoration of Practice Certificate"
  },
  {
    id: "M4",
    title: "Membership Restoration",
    description: "Application for Restoration To Membership"
  },
  {
    id: "M5",
    title: "Office Particulars",
    description: "Particulars of Offices and Firms"
  },
  {
    id: "M6",
    title: "Firm Name Approval",
    description: "Application for Approval of Firm Name"
  },
  {
    id: "M8",
    title: "Address Change",
    description: "Format for Change of Address by Members"
  }
];

const memberBenefits = [
  {
    title: "BOB CMA One Credit Card",
    icon: CreditCard,
    color: "text-purple-600"
  },
  {
    title: "New India Assurance",
    icon: ShieldCheck,
    color: "text-blue-600"
  },
  {
    title: "Apollo Healthcare Benefits",
    icon: Heart,
    color: "text-red-600"
  }
];

const contactInfo = [
  {
    title: "Membership Director",
    name: "CMA Arunava Ganguly",
    email: "membership.director@icmai.in",
    phone: "+91-9836119383"
  },
  {
    title: "ACMA/FCMA Applications",
    name: "Kaushik Brata Dutta",
    role: "Sr. Officer",
    email: "membership.so1@icmai.in",
    phone: "+91-9903624988"
  },
  {
    title: "CoP & Firms",
    name: "Prosenjit Mukherjee",
    email: "membership.cop@icmai.in",
    phone: "+91-9051948896"
  }
];

const Members = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/m1.jpg" 
            alt="Members Background" 
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
            <UserCircle2 className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Member Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Access member resources, forms, and exclusive benefits
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Members Login</h3>
                <p className="text-gray-600 mb-4">Access your member portal and exclusive services</p>
                <Button className="w-full group-hover:bg-blue-900 group-hover:text-white">
                  Login Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Online Application</h3>
                <p className="text-gray-600 mb-4">Apply for membership online with easy process</p>
                <Button className="w-full group-hover:bg-blue-900 group-hover:text-white">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Member Search</h3>
                <p className="text-gray-600 mb-4">Find and connect with other members</p>
                <Button className="w-full group-hover:bg-blue-900 group-hover:text-white">
                  Search Directory
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid gap-6">
            {memberUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Bell className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{update.title}</h3>
                        <p className="text-gray-600">{update.description}</p>
                        {update.date && (
                          <p className="text-sm text-gray-500 mt-2">{update.date}</p>
                        )}
                        {update.link && (
                          <a 
                            href={update.link}
                            className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-2"
                          >
                            Visit Link
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Forms & Applications Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Forms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Form {form.id} - {form.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{form.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-900 group-hover:text-white transition-all"
                  >
                    Download Form
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <Button
                      variant="outline"
                      className="mt-4 group-hover:bg-blue-900 group-hover:text-white transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Phone className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-900 font-medium">{contact.name}</p>
                  {contact.role && (
                    <p className="text-gray-600 text-sm mb-2">{contact.role}</p>
                  )}
                  <p className="text-gray-600 text-sm">{contact.email}</p>
                  <p className="text-gray-600 text-sm">{contact.phone}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Begin your journey as a member of The Institute of Cost Accountants of India
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Apply for Membership
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Members;
