
import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, IndianRupee, MapPin, School, ScrollText, User2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from '../../components/PageTemplate';

const StudentsAdmission = () => {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/img/ad.webp" 
            alt="Admission Background" 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Information</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Start your journey towards becoming a Cost and Management Accounting Professional
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Admission Information
          </h1>

          <Tabs defaultValue="foundation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="final">Final</TabsTrigger>
            </TabsList>

            {/* Foundation Course */}
            <TabsContent value="foundation">
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Passed Class 10 or equivalent from a recognized Board</li>
                          <li>Senior Secondary (10+2) or equivalent examination</li>
                          <li>National Diploma in Commerce</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <IndianRupee className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fee Structure</h3>
                        <p>Course Fee: ₹6,000/-</p>
                        <p className="text-sm text-gray-600">
                          (Payable before 31st January for June term and 31st July for December term)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <ScrollText className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Attested Copy of Matriculation Certificate</li>
                          <li>Attested copy of 10+2 Certificate or Marks Statement</li>
                          <li>Three Passport size photographs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Intermediate Course */}
            <TabsContent value="intermediate">
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <School className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Passed Foundation Course of ICMAI</li>
                          <li>Graduation in any discipline (except Fine Arts)</li>
                          <li>Foundation of ICSI with 10+2</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <IndianRupee className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fee Structure</h3>
                        <div className="space-y-2">
                          <p className="font-medium">Option 1: Full Payment</p>
                          <p>₹23,100/- (Including Skill Training Fee)</p>
                          <p className="font-medium mt-4">Option 2: Installment</p>
                          <ul className="list-disc list-inside">
                            <li>1st Installment: ₹12,000/-</li>
                            <li>2nd Installment: ₹11,100/-</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CalendarDays className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                        <p>June Term: Apply before 31st January</p>
                        <p>December Term: Apply before 31st July</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Final Course */}
            <TabsContent value="final">
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <User2 className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                        <p>Successfully completed CMA Intermediate Course</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <IndianRupee className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fee Structure</h3>
                        <div className="space-y-2">
                          <p className="font-medium">Option 1: Full Payment</p>
                          <p>₹25,000/-</p>
                          <p className="font-medium mt-4">Option 2: Installment</p>
                          <ul className="list-disc list-inside">
                            <li>1st Installment: ₹15,000/-</li>
                            <li>2nd Installment: ₹10,000/-</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Regional Councils Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Card className="bg-white/95 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Regional Councils</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      region: "Western India",
                      address: "Rohit Chambers, 4th Floor, Janmabhoomi Marg, Fort Mumbai - 400 001",
                      contact: "022-22872010",
                      email: "wirc@icmai.in",
                    },
                    {
                      region: "Southern India",
                      address: "4, Montieth Lane, Egmore, Chennai - 600 008",
                      contact: "044-28554443",
                      email: "sirc@icmai.in",
                    },
                    {
                      region: "Eastern India",
                      address: "84, Harish Mukherjee Road, Kolkatta - 700 025",
                      contact: "033-24553418",
                      email: "eirc@icmai.in",
                    },
                    {
                      region: "Northern India",
                      address: "3, Institutional Area, Lodi Road, New Delhi - 110 003",
                      contact: "011-24626678",
                      email: "nirc@icmai.in",
                    },
                  ].map((council, index) => (
                    <Card key={index} className="bg-white">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{council.region}</h3>
                        <p className="text-sm text-gray-600 mb-2">{council.address}</p>
                        <p className="text-sm">
                          <span className="font-medium">Contact:</span> {council.contact}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Email:</span> {council.email}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Apply Now Button */}
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Course Information Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="foundation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="foundation">Foundation</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="final">Final</TabsTrigger>
          </TabsList>

          {/* Foundation Course */}
          <TabsContent value="foundation">
            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Eligibility</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Passed Class 10 or equivalent from a recognized Board</li>
                        <li>Senior Secondary (10+2) or equivalent examination</li>
                        <li>National Diploma in Commerce</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <IndianRupee className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Fee Structure</h3>
                      <p className="text-gray-600">Course Fee: ₹6,000/-</p>
                      <p className="text-sm text-gray-500 mt-2">
                        (Payable before 31st January for June term and 31st July for December term)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ScrollText className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Required Documents</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Attested Copy of Matriculation Certificate</li>
                        <li>Attested copy of 10+2 Certificate or Marks Statement</li>
                        <li>Three Passport size photographs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Intermediate Course */}
          <TabsContent value="intermediate">
            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <School className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Eligibility</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Passed Foundation Course of ICMAI</li>
                        <li>Graduation in any discipline (except Fine Arts)</li>
                        <li>Foundation of ICSI with 10+2</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <IndianRupee className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Fee Structure</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Option 1: Full Payment</p>
                        <p>₹23,100/- (Including Skill Training Fee)</p>
                        <p className="font-medium mt-4">Option 2: Installment</p>
                        <ul className="list-disc list-inside">
                          <li>1st Installment: ₹12,000/-</li>
                          <li>2nd Installment: ₹11,100/-</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CalendarDays className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Important Dates</h3>
                      <p className="text-gray-600">June Term: Apply before 31st January</p>
                      <p className="text-gray-600">December Term: Apply before 31st July</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Final Course */}
          <TabsContent value="final">
            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <User2 className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Eligibility</h3>
                      <p className="text-gray-600">Successfully completed CMA Intermediate Course</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <IndianRupee className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Fee Structure</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Option 1: Full Payment</p>
                        <p>₹25,000/-</p>
                        <p className="font-medium mt-4">Option 2: Installment</p>
                        <ul className="list-disc list-inside">
                          <li>1st Installment: ₹15,000/-</li>
                          <li>2nd Installment: ₹10,000/-</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Regional Councils Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Regional Councils</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                region: "Western India",
                address: "Rohit Chambers, 4th Floor, Janmabhoomi Marg, Fort Mumbai - 400 001",
                contact: "022-22872010",
                email: "wirc@icmai.in",
              },
              {
                region: "Southern India",
                address: "4, Montieth Lane, Egmore, Chennai - 600 008",
                contact: "044-28554443",
                email: "sirc@icmai.in",
              },
              {
                region: "Eastern India",
                address: "84, Harish Mukherjee Road, Kolkatta - 700 025",
                contact: "033-24553418",
                email: "eirc@icmai.in",
              },
              {
                region: "Northern India",
                address: "3, Institutional Area, Lodi Road, New Delhi - 110 003",
                contact: "011-24626678",
                email: "nirc@icmai.in",
              },
            ].map((council, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{council.region}</h3>
                    <p className="text-gray-600 mb-4">{council.address}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Contact: {council.contact}</p>
                      <p>Email: {council.email}</p>
                    </div>
                  </CardContent>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Professional Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your path to becoming a qualified Cost and Management Accountant
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50"
          >
            Download Admission Form
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default StudentsAdmission;
