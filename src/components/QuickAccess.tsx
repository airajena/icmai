
import React from 'react';
import { BookOpen, Users, Award, FileText, Calculator, CreditCard, Download, Search, Calendar } from 'lucide-react';

const QuickAccess = () => {
  const studentServices = [
    { icon: BookOpen, title: 'Admission', description: 'Apply for CMA courses online' },
    { icon: FileText, title: 'Results', description: 'Check examination results' },
    { icon: CreditCard, title: 'Hall Tickets', description: 'Download admit cards' },
    { icon: Download, title: 'Study Materials', description: 'Access course materials' }
  ];

  const memberServices = [
    { icon: Users, title: 'Member Login', description: 'Access member portal' },
    { icon: Search, title: 'Directory', description: 'Find other members' },
    { icon: Award, title: 'CPE', description: 'Continuing education' },
    { icon: CreditCard, title: 'Renewals', description: 'Renew membership' }
  ];

  const professionalServices = [
    { icon: Calculator, title: 'Cost Audit', description: 'Audit services' },
    { icon: FileText, title: 'Consultancy', description: 'Professional advice' },
    { icon: BookOpen, title: 'Training', description: 'Skill development' },
    { icon: Award, title: 'Certification', description: 'Professional certifications' }
  ];

  const examinationServices = [
    { icon: FileText, title: 'Registration', description: 'Exam registration' },
    { icon: Calendar, title: 'Schedule', description: 'Exam timetable' },
    { icon: Award, title: 'Results', description: 'Result declaration' },
    { icon: Download, title: 'Certificates', description: 'Download certificates' }
  ];

  const ServiceGrid = ({ title, services, bgColor }: { title: string, services: any[], bgColor: string }) => (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <service.icon className="w-8 h-8 text-blue-900 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Access Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all essential services and resources through our comprehensive service portal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceGrid 
            title="Student Services" 
            services={studentServices} 
            bgColor="bg-blue-50"
          />
          <ServiceGrid 
            title="Member Services" 
            services={memberServices} 
            bgColor="bg-green-50"
          />
          <ServiceGrid 
            title="Professional Services" 
            services={professionalServices} 
            bgColor="bg-purple-50"
          />
          <ServiceGrid 
            title="Examination Services" 
            services={examinationServices} 
            bgColor="bg-orange-50"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
