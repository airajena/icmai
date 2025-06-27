
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calculator, FileText, HelpCircle, ArrowRight, BarChart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Taxation = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Taxation Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calculator className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">GST Services</h3>
              <p className="text-gray-600 mb-4">Comprehensive GST compliance and advisory</p>
              <Button onClick={() => navigate('/taxation/gst-services')} className="w-full">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Direct Taxation</h3>
              <p className="text-gray-600 mb-4">Income tax and corporate tax services</p>
              <Button onClick={() => navigate('/taxation/direct-taxation')} className="w-full">
                Explore
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <HelpCircle className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">HelpDesk</h3>
              <p className="text-gray-600 mb-4">Get expert taxation guidance</p>
              <Button onClick={() => navigate('/taxation/helpdesk')} className="w-full">
                Contact
              </Button>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-900" />
                International Tax Services
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Cross-border Transaction Advisory
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  DTAA Compliance & Planning
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Transfer Pricing Documentation
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Global Tax Compliance
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart className="w-6 h-6 text-blue-900" />
                Tax Analytics & Planning
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Tax Data Analytics
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Strategic Tax Planning
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Risk Assessment & Management
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                  Tax Technology Solutions
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-blue-900">Indirect Taxation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• GST Registration & Compliance</li>
                  <li>• Customs & Excise Advisory</li>
                  <li>• VAT & Service Tax</li>
                  <li>• Trade & Commerce Laws</li>
                  <li>• Import Export Procedures</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-blue-900">Direct Taxation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Income Tax Planning</li>
                  <li>• Corporate Tax Advisory</li>
                  <li>• Tax Litigation Support</li>
                  <li>• International Taxation</li>
                  <li>• Transfer Pricing</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-blue-900">Advisory Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tax Due Diligence</li>
                  <li>• Merger & Acquisition Tax</li>
                  <li>• Tax Health Check</li>
                  <li>• Compliance Reviews</li>
                  <li>• Tax Optimization</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Taxation;
