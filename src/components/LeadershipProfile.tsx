import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LeadershipProfile = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Institute Leadership</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {/* President's Profile */}
              <CarouselItem className="pl-1 basis-full">
                <div className="p-1">
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                          <img
                            src="/assets/img/p1.jpeg"
                            alt="CMA Bibhuti Bhusan Nayak"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 text-center">CMA Bibhuti Bhusan Nayak</h3>
                        <p className="text-gray-600 text-center">President (2024-2025)</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Profile of the President</h4>
                        <div className="prose text-gray-600">
                          <p className="mb-4">
                            CMA Bibhuti Bhusan Nayak has been elected as President of the Institute for the period 2024-2025.
                          </p>
                          <p className="mb-4">
                            He is a Fellow Member of the Institute of Cost Accountants of India. He retired as DGM (Finance) 
                            from Odisha Power Transmission Corporation Limited (OPTCL)/GRIDCO. Presently, he is a practicing 
                            Cost Accountant.
                          </p>
                          <p className="mb-4">
                            He is elected member of Council of the Institute for the term 2023-27. He has been the Chairman 
                            of Bhubaneswar Chapter of ICMAI and associated with the profession for more than 25 years.
                          </p>
                          <p>
                            He has served the Eastern India Regional Council of ICMAI as Regional Council Member for the 
                            term 2019-2023 and as Chairman, EIRC-ICMAI for the year 2022-23.
                          </p>
                        </div>
                        <Button variant="link" className="mt-4 text-blue-900">
                          Read President's Communique June 2025
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              {/* Vice President's Profile */}
              <CarouselItem className="pl-1 basis-full">
                <div className="p-1">
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                          <img
                            src="/assets/img/p2.jpg"
                            alt="CMA TCA Srinivasa Prasad"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 text-center">CMA TCA Srinivasa Prasad</h3>
                        <p className="text-gray-600 text-center">Vice President (2024-2025)</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Profile of the Vice President</h4>
                        <div className="prose text-gray-600">
                          <p className="mb-4">
                            CMA TCA Srinivasa Prasad has been elected as Vice President of the Institute for the period 2024-2025.
                          </p>
                          <p className="mb-4">
                            He is a Fellow Member of The Institute of Cost Accountants of India. He has experience of more 
                            than 40 years in the areas of Finance, Cost, Management, ERP, IT, HR, IED, O&M, MM, CSR.
                          </p>
                          <p className="mb-4">
                            He was the Executive Director (Finance & ERP Implementation) at SAIL (Steel Authority of India Limited). 
                            He has implemented ERP in 4 major Steel Plants of SAIL and the Central Marketing Organization of SAIL.
                          </p>
                          <p>
                            He was the Central Council Member of ICMAI for the term 2011-15 and re-elected for the 2023-27 term. 
                            He has been the Chairman of Information Technology and Members-in-Industry committees of the Institute.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>

              
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-blue-900 bg-white hover:bg-blue-900 hover:text-white transition-colors" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-blue-900 bg-white hover:bg-blue-900 hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfile;
