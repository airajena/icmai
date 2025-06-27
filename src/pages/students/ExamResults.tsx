import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, Calendar } from 'lucide-react';

const ExamResults = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Examination Results</h1>
          
          {/* Result Search Section */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Check Your Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Roll Number</label>
                <Input placeholder="Enter your roll number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Exam Session</label>
                <select className="w-full border border-gray-200 rounded-md p-2">
                  <option>June 2025</option>
                  <option>December 2024</option>
                  <option>June 2024</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Results
                </Button>
              </div>
            </div>
          </Card>

          {/* Latest Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Result Announcements</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-900" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Final Examination Results - June 2025</h3>
                    <p className="text-gray-600 mb-2">Released on: June 25, 2025</p>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-900" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Intermediate Examination Results - June 2025</h3>
                    <p className="text-gray-600 mb-2">Released on: June 20, 2025</p>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Important Information</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  • Results are typically declared within 45 days of examination
                </li>
                <li className="flex items-start gap-2">
                  • Keep your roll number and registration details handy
                </li>
                <li className="flex items-start gap-2">
                  • Download and save your result sheet for future reference
                </li>
                <li className="flex items-start gap-2">
                  • For result related queries, contact examination department
                </li>
              </ul>
            </Card>
          </div>

          {/* Archive Section */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Result Archives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[2024, 2023, 2022].map((year) => (
                <div key={year} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">{year}</h3>
                  <ul className="space-y-2">
                    <li>
                      <Button variant="link" className="text-blue-900">December {year}</Button>
                    </li>
                    <li>
                      <Button variant="link" className="text-blue-900">June {year}</Button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExamResults;
