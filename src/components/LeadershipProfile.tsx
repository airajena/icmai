import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LeadershipProfile = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Institute Leadership</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* President's Card */}
            <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <img
                    src="/assets/img/p1.jpeg"
                    alt="CMA Bibhuti Bhusan Nayak"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/assets/img/fallback.jpg"; }}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">CMA Bibhuti Bhusan Nayak</h3>
                <p className="text-gray-600 text-sm mb-3">President (2024-2025)</p>
                <p className="text-gray-600 text-sm mb-4">
                  Fellow Member of ICMAI and practicing Cost Accountant. Former DGM (Finance) at OPTCL/GRIDCO and Chairman of Bhubaneswar Chapter.
                </p>
                {/* <Button
                  variant="link"
                  className="text-blue-900 hover:text-blue-700 font-semibold"
                  onClick={() => window.open('/communique-june-2025', '_blank')}
                >
                  Read President's Communique
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
            </Card>

            {/* Vice President's Card */}
            <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <img
                    src="/assets/img/p2.jpg"
                    alt="CMA TCA Srinivasa Prasad"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/assets/img/fallback.jpg"; }}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">CMA TCA Srinivasa Prasad</h3>
                <p className="text-gray-600 text-sm mb-3">Vice President (2024-2025)</p>
                <p className="text-gray-600 text-sm mb-4">
                  Fellow Member of ICMAI with over 40 years of experience. Former Executive Director (Finance & ERP) at SAIL and Central Council Member.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfile;