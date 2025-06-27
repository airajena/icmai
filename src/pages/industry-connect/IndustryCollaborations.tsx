import React from 'react';
import { motion } from "framer-motion";
import { 
  Train,
  ArrowRight,
  Building2,
  Cog,
  Lightbulb,
  BarChart,
  ScrollText,
  Network,
  Leaf,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageTemplate from '../../components/PageTemplate';

const metrics = [
  {
    label: "Network Coverage",
    value: "68,103 km",
    description: "World's 4th largest railway system"
  },
  {
    label: "Daily Passengers",
    value: "23 million",
    description: "Connecting communities nationwide"
  },
  {
    label: "Freight Handling",
    value: "3.5M tonnes",
    description: "Daily freight capacity"
  },
  {
    label: "Employment",
    value: "1.2 million",
    description: "10th largest employer globally"
  }
];

const transformations = [
  {
    title: "Infrastructure Modernization",
    points: [
      "Dedicated Freight Corridors reducing logistics costs by 15-20%",
      "Mumbai-Ahmedabad High-Speed Rail Corridor",
      "1,300+ stations being modernized by 2030"
    ],
    icon: Building2
  },
  {
    title: "Technology Integration",
    points: [
      "Vande Bharat Express operating at 160 km/h",
      "AI-powered predictive maintenance",
      "Smart ticketing and biometric systems"
    ],
    icon: Cog
  },
  {
    title: "Sustainability Initiatives",
    points: [
      "Net-zero carbon emissions target by 2030",
      "30 GW renewable energy goal",
      "First hydrogen-powered train by 2025"
    ],
    icon: Leaf
  }
];

const opportunities = [
  {
    title: "Financial Planning & Analysis",
    description: "Budget preparation, cost control, and efficiency improvement through expertise in cost analysis",
    icon: BarChart
  },
  {
    title: "Project Management",
    description: "Financial evaluation and funding strategies for infrastructure development",
    icon: Target
  },
  {
    title: "Sustainability Accounting",
    description: "Evaluate costs of green initiatives and carbon footprint reduction strategies",
    icon: Leaf
  },
  {
    title: "Digital Transformation",
    description: "Cost-benefit analysis for AI initiatives and IoT implementations",
    icon: Network
  }
];

const IndustryCollaborations = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="relative text-white -mt-8 -mx-4 md:-mx-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/img/rl.avif" 
            alt="Railway Industry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70" />
        </div>

        <div className="relative py-16 md:py-32 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Train className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Railway Sector Insights</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Exploring opportunities in India's fourth-largest railway network
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{metric.value}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-1">{metric.label}</p>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Transformations Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Industry Transformations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Opportunities Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Opportunities for CMAs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <opp.icon className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{opp.title}</h3>
                      <p className="text-gray-600">{opp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Financial Performance Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Performance</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-blue-900">₹3.02L Cr</h3>
                  <p className="text-gray-600">Total Revenue Target</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-blue-900">₹1.88L Cr</h3>
                  <p className="text-gray-600">Freight Revenue</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-blue-900">₹92,800 Cr</h3>
                  <p className="text-gray-600">Passenger Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vision 2047 Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Vision 2047</h2>
        <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Network Expansion</h3>
                <p>77,000 kilometers of route length</p>
              </div>
              <div className="text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">100% Green Energy</h3>
                <p>Complete renewable energy reliance</p>
              </div>
              <div className="text-center">
                <Train className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Premium Services</h3>
                <p>200 luxury and semi-luxury trains</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our platform to explore partnerships and build professional networks within this dynamic sector
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default IndustryCollaborations;
