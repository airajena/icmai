import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const GSTServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">GST Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our GST Services</h2>
              <div className="space-y-4">
                {[
                  'GST Registration and Migration',
                  'GST Returns Filing',
                  'GST Audit and Assessment',
                  'GST Refund Processing',
                  'Input Tax Credit Optimization',
                  'GST Advisory Services',
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Expert GST consultants with years of experience</li>
                <li>• Up-to-date knowledge of latest GST regulations</li>
                <li>• End-to-end GST compliance support</li>
                <li>• Customized solutions for businesses</li>
                <li>• Timely service delivery</li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">GST Compliance Calendar</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left">Return Type</th>
                    <th className="px-6 py-3 text-left">Due Date</th>
                    <th className="px-6 py-3 text-left">Applicable To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4">GSTR-1</td>
                    <td className="px-6 py-4">11th of next month</td>
                    <td className="px-6 py-4">All regular taxpayers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">GSTR-3B</td>
                    <td className="px-6 py-4">20th of next month</td>
                    <td className="px-6 py-4">All regular taxpayers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">GSTR-4</td>
                    <td className="px-6 py-4">Annual (30th April)</td>
                    <td className="px-6 py-4">Composition dealers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GSTServices;
