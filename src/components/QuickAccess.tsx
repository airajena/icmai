
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Users, Award, FileText, Calculator, Download, Search, 
  Calendar, GraduationCap, Building, Globe, Briefcase, Book, Library, 
  BarChart, Network, HeartHandshake, Landmark, School, Bell
} from 'lucide-react';

const QuickAccess = () => {
  const navigate = useNavigate();

  const aboutInstitute = [
    { icon: Building, title: 'Institute History', description: 'Our journey since 1959', path: '/about/history' },
    { icon: Users, title: 'Council Members', description: 'Leadership team', path: '/about/council' },
    { icon: Network, title: 'Organisation', description: 'Structure & hierarchy', path: '/about/structure' },
    { icon: Award, title: 'Recognition', description: 'Awards & achievements', path: '/about/awards' }
  ];

  const academics = [
    { icon: GraduationCap, title: 'CMA Program', description: 'Foundation to Final', path: '/students/courses' },
    { icon: School, title: 'Advanced Studies', description: 'Specialized programs', path: '/advanced-studies' },
    { icon: Book, title: 'DipMA Course', description: 'Management Accounting', path: '/dipma/course' },
    { icon: Award, title: 'CAT Program', description: 'Cost Accounting Tech', path: '/cat' }
  ];

  const studentServices = [
    { icon: BookOpen, title: 'Admission', description: 'Apply for courses', path: '/students/admission' },
    { icon: Calendar, title: 'Examinations', description: 'Schedules & Results', path: '/students/examinations' },
    { icon: Download, title: 'Study Materials', description: 'Learning resources', path: '/students/courses' },
    { icon: Briefcase, title: 'Training', description: 'Practical exposure', path: '/students/training' }
  ];

  const memberServices = [
    { icon: Users, title: 'Member Portal', description: 'Access dashboard', path: '/members' },
    { icon: FileText, title: 'Guidelines', description: 'Member circulars', path: '/members/guidelines' },
    { icon: HeartHandshake, title: 'Benevolent Fund', description: 'Welfare schemes', path: '/members/fund' },
    { icon: Search, title: 'Member Search', description: 'Find members', path: '/members/search' }
  ];

  const placement = [
    
    { icon: Users, title: 'Campus Placement', description: 'Student recruitment', path: '/placement/campus' },
    { icon: Briefcase, title: 'Career Services', description: 'Job opportunities', path: '/placement' },
    { icon: Building, title: 'Our Recruiters', description: 'Partner companies', path: '/placement/recruiters' },
    { icon: Calendar, title: 'Events', description: 'Placement drives', path: '/placement/events' }
  ];

  const professionalDev = [
    { icon: Award, title: 'CPE Programs', description: 'Continuing education', path: '/pd-cpe' },
    { icon: Book, title: 'Publications', description: 'Professional resources', path: '/pd-cpe/publications' },
    { icon: FileText, title: 'CARR & CAR', description: 'Audit reports', path: '/pd-cpe/carr' },
    { icon: Calendar, title: 'Events', description: 'Upcoming programs', path: '/pd-cpe/events' }
  ];

  const taxationServices = [
    { icon: Calculator, title: 'Taxation Services', description: 'Taxation Services', path: '/taxation' },
    { icon: FileText, title: 'Direct Tax', description: 'Income tax services', path: '/taxation/direct-taxation' },
    { icon: Download, title: 'Resources', description: 'Tax publications', path: '/taxation/publication' },
    { icon: HeartHandshake, title: 'Help Desk', description: 'Tax support', path: '/taxation/helpdesk' }
  ];

  const bfsiServices = [
    { icon: Landmark, title: 'Banking Services', description: 'Financial expertise', path: '/bfsi' },
    { icon: Book, title: 'Courses', description: 'BFSI programs', path: '/bfsi/courses' },
    { icon: Calendar, title: 'Webinars', description: 'Online sessions', path: '/bfsi/webinars' },
    { icon: HeartHandshake, title: 'Support', description: 'BFSI helpdesk', path: '/bfsi/helpdesk' }
  ];

  const research = [
    { icon: Library, title: 'Journal', description: 'Latest publications', path: '/journal/latest' },
    { icon: FileText, title: 'Research Papers', description: 'Academic research', path: '/journal/research' },
    { icon: Book, title: 'Case Studies', description: 'Industry cases', path: '/journal/cases' },
    { icon: BarChart, title: 'Reports', description: 'Industry insights', path: '/journal/reports' }
  ];

  const industryConnect = [
    { icon: Network, title: 'Collaborations', description: 'Industry partners', path: '/industry-connect' },
    { icon: HeartHandshake, title: 'Partnerships', description: 'Corporate allies', path: '/industry-connect/partnerships' },
    { icon: Users, title: 'Networks', description: 'Professional network', path: '/industry-connect/networks' },
    { icon: Calendar, title: 'Events', description: 'Industry meets', path: '/industry-connect/events' }
  ];

  const examinations = [
    { icon: FileText, title: 'Results', description: 'Check results', path: '/students/results' },
    { icon: Calendar, title: 'Schedule', description: 'Exam timetable', path: '/students/examinations' },
    { icon: Download, title: 'Admit Cards', description: 'Download hall tickets', path: '/students/examinations' },
    { icon: Book, title: 'Guidelines', description: 'Exam rules', path: '/students/examinations' }
  ];

  const updates = [
    { icon: Bell, title: 'Latest Updates', description: 'Recent updates', path: '/updates' },
    { icon: Calendar, title: 'Events', description: 'Upcoming events', path: '/updates#events' },
    { icon: FileText, title: 'Notices', description: 'Important notices', path: '/updates#notices' },
    { icon: Download, title: 'Circulars', description: 'Official circulars', path: '/updates#circulars' }
  ];

  const ServiceGrid = ({ title, services, bgColor }: { title: string, services: any[], bgColor: string }) => (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)}
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer group"
          >
            <div className="flex items-start space-x-3">
              <service.icon className="w-8 h-8 text-blue-900 group-hover:text-blue-700 transition-colors" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
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
            title="About Institute" 
            services={aboutInstitute} 
            bgColor="bg-blue-50"
          />
          <ServiceGrid 
            title="Academic Programs" 
            services={academics} 
            bgColor="bg-green-50"
          />
          <ServiceGrid 
            title="Student Services" 
            services={studentServices} 
            bgColor="bg-purple-50"
          />
          <ServiceGrid 
            title="Member Services" 
            services={memberServices} 
            bgColor="bg-orange-50"
          />
          <ServiceGrid 
            title="Placement" 
            services={placement} 
            bgColor="bg-indigo-50"
          />
          <ServiceGrid 
            title="Professional Development" 
            services={professionalDev} 
            bgColor="bg-pink-50"
          />
          <ServiceGrid 
            title="Taxation Services" 
            services={taxationServices} 
            bgColor="bg-yellow-50"
          />
          <ServiceGrid 
            title="BFSI Services" 
            services={bfsiServices} 
            bgColor="bg-cyan-50"
          />
          <ServiceGrid 
            title="Research & Publications" 
            services={research} 
            bgColor="bg-emerald-50"
          />
          <ServiceGrid 
            title="Industry Connect" 
            services={industryConnect} 
            bgColor="bg-violet-50"
          />
          <ServiceGrid 
            title="Examinations" 
            services={examinations} 
            bgColor="bg-rose-50"
          />
          <ServiceGrid 
            title="Updates & News" 
            services={updates} 
            bgColor="bg-amber-50"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
