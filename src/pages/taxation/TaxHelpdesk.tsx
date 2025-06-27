import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const TaxHelpdesk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Tax Helpdesk</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Query subject" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Describe your tax query..." className="h-32" />
                  </div>
                  
                  <Button className="w-full">Submit Query</Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600 w-5 h-5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600 w-5 h-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">tax.helpdesk@icmai.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-blue-600 w-5 h-5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-600">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">FAQs</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• When should I file my ITR?</li>
                  <li>• What are the GST filing deadlines?</li>
                  <li>• How to claim tax refunds?</li>
                  <li>• What is Form 16?</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaxHelpdesk;
