
import React from 'react';
import { Shield, Globe, Handshake, Building2 } from 'lucide-react';

const InstituteHighlights = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Professional Recognition',
      description: 'Statutory body under the Cost and Works Accountants Act, 1959, with full professional recognition and regulatory authority.',
      points: [
        'Government recognized professional qualification',
        'Statutory audit and assurance services',
        'Cost accounting standards setting authority',
        'Professional ethics and quality control'
      ]
    },
    {
      icon: Building2,
      title: 'Government Partnerships',
      description: 'Strong collaborations with government bodies and regulatory authorities for policy development and implementation.',
      points: [
        'Ministry of Corporate Affairs partnership',
        'Regulatory compliance and advisory services',
        'Policy research and recommendations',
        'Public sector consulting and training'
      ]
    },
    {
      icon: Globe,
      title: 'International Affiliations',
      description: 'Active membership in prestigious international accounting bodies and professional organizations worldwide.',
      points: [
        'International Federation of Accountants (IFAC)',
        'South Asian Federation of Accountants (SAFA)',
        'Confederation of Asian and Pacific Accountants (CAPA)',
        'Global professional recognition and mobility'
      ]
    },
    {
      icon: Handshake,
      title: 'Industry Connect',
      description: 'Extensive partnerships with leading corporations and industry bodies for practical training and placement opportunities.',
      points: [
        'Corporate training and development programs',
        'Industry-specific certifications and specializations',
        'Placement assistance and career guidance',
        'Professional networking and mentorship'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Institute Highlights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading India's cost accounting profession with statutory recognition, international affiliations, 
            and strong industry partnerships since 1959
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{highlight.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{highlight.description}</p>
              
              <ul className="space-y-2">
                {highlight.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Statutory Recognition & Authority</h3>
          <p className="text-blue-100 text-lg mb-6">
            The only statutory body in India authorized to regulate the profession of Cost Accountancy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1959</div>
              <div className="text-blue-200">Established by Act of Parliament</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">65+</div>
              <div className="text-blue-200">Years of Professional Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Government Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteHighlights;
