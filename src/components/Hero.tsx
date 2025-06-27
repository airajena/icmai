import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Award, BookOpen, MapPin, ArrowRight, GraduationCap, 
  Building, Globe, ChevronLeft, ChevronRight, PlayCircle, BellRing
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(Math.floor(start), end));
        if (start >= end) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <div ref={ref} className="text-2xl font-bold text-white mb-1">{count.toLocaleString()}+</div>;
};

const Hero = () => {
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const carouselItems = [
    {
      image: "/assets/img/z1.jpg",
      title: "Excellence in Education",
      description: "Leading the path in Cost & Management Accounting since 1959",
      videoId: "F-g81WO-_Gg",
      cta: {
        text: "Explore Programs",
        link: "/advanced-studies/courses"
      }
    },
    {
      image: "/assets/img/c01.jpg",
      title: "Global Recognition",
      description: "ICMAI qualifications are recognized worldwide by top organizations",
      videoId: "9HAtlIDWDcg",
      cta: {
        text: "Learn More",
        link: "/about/vision"
      }
    },
    {
      image: "/assets/img/z3.jpg",
      title: "Industry Integration",
      description: "Strong connections with leading companies across sectors",
      videoId: "REcnR21l-rU",
      cta: {
        text: "Industry Connect",
        link: "/industry-connect/collaborations"
      }
    },
    {
      image: "/assets/img/z5.jpg",
      title: "Research Excellence",
      description: "Cutting-edge research in cost management and sustainability",
      videoId: "YEiCdBW7uYk",
      cta: {
        text: "View Latest",
        link: "/journal/latest"
      }
    },
    {
      image: "/assets/img/z6.jpg",
      title: "Professional Development",
      description: "Continuous learning programs for career advancement",
      videoId: "EBejwjGaZxw",
      cta: {
        text: "CPE Programs",
        link: "/pd-cpe/about"
      }
    },
    {
      image: "/assets/img/z2.jpg",
      title: "Digital Transformation",
      description: "Embracing technology in cost management education",
      videoId: "zNBLty0vHIM",
      cta: {
        text: "Learn More",
        link: "/advanced-studies/contact"
      }
    }
  ];

  const latestNews = [
    "Results for December 2023 Examination declared",
    "Applications open for Advanced Studies Programs",
    "New batch registration for CMA course starting soon",
    "Upcoming webinar on GST developments"
  ];

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setVideoOpen(true);
  };

  const closeVideoModal = () => {
    setVideoOpen(false);
    setCurrentVideoId("");
  };
  
  return (
    <section className="bg-blue-900">
      {/* Main Carousel */}
      <Carousel className="relative">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Content */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                      <h2 className="text-5xl font-bold text-white mb-4 animate-fade-right">{item.title}</h2>
                      <p className="text-xl text-white/90 mb-6 animate-fade-right animation-delay-200">{item.description}</p>
                      <div className="flex gap-4 animate-fade-up animation-delay-400">
                        <Button
                          onClick={() => navigate(item.cta.link)}
                          className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all"
                        >
                          {item.cta.text}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          onClick={() => openVideoModal(item.videoId)}
                          variant="outline"
                          className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all"
                        >
                          <PlayCircle className="w-5 h-5 mr-2" />
                          Watch Video
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 z-30" />
        <CarouselNext className="right-4 z-30" />
      </Carousel>


      {/* Statistics Strip */}
      <div className="bg-gradient-to-t from-black/80 via-black/60 to-transparent pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-white/90" />
              </div>
              <AnimatedCounter end={500000} />
              <div className="text-xs md:text-sm text-white/80">Total Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-white/90" />
              </div>
              <AnimatedCounter end={65} />
              <div className="text-xs md:text-sm text-white/80">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white/90" />
              </div>
              <AnimatedCounter end={15} />
              <div className="text-xs md:text-sm text-white/80">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white/90" />
              </div>
              <AnimatedCounter end={100} />
              <div className="text-xs md:text-sm text-white/80">Regional Chapters</div>
            </div>
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="bg-blue-900/95 border-t border-white/20 py-2">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <div className="flex items-center gap-2 text-white/90 shrink-0">
            <BellRing className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">Latest Updates:</span>
          </div>
          <div className="relative overflow-hidden flex-1">
            <div className="animate-ticker whitespace-nowrap">
              {latestNews.map((news, index) => (
                <span key={index} className="inline-block mr-8 text-sm md:text-base text-white/80 hover:text-white cursor-pointer transition-colors">
                  {news}
                </span>
              ))}
              {/* Repeat for smooth infinite scroll */}
              {latestNews.map((news, index) => (
                <span key={`repeat-${index}`} className="inline-block mr-8 text-sm md:text-base text-white/80 hover:text-white cursor-pointer transition-colors">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/assets/img/z6.jpg" 
                  alt="Students" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-blue-900/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Begin Your Journey</h3>
                  <p className="text-white/90 mb-4">Start your career in Cost Accounting with our comprehensive courses</p>
                  <Button
                    onClick={() => navigate('/students/admission')}
                    variant="outline"
                    className=" border-white hover:bg-white text-blue-900"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/assets/img/z5.jpg" 
                  alt="Members" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-900/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Member Resources</h3>
                  <p className="text-white/90 mb-4">Access exclusive member benefits and development tools</p>
                  <Button
                    onClick={() => navigate('/members/application')}
                    variant="outline"
                    className=" border-white hover:bg-white text-blue-900"
                  >
                    Join Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/assets/img/c01.jpg" 
                  alt="Global" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-900/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Global Recognition</h3>
                  <p className="text-white/90 mb-4">Internationally recognized certification network</p>
                  <Button
                    onClick={() => navigate('/students/examinations')}
                    variant="outline"
                    className=" border-white hover:bg-white text-blue-900"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button 
              onClick={() => navigate('/students/admission')}
              className="bg-blue-900 hover:bg-blue-800"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button 
              onClick={() => navigate('/members/application')}
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              <Users className="w-5 h-5 mr-2" />
              Member Registration
            </Button>
            <Button 
              onClick={() => navigate('/students/results')}
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              <Award className="w-5 h-5 mr-2" />
              Exam Results
            </Button>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={closeVideoModal}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video">
            {currentVideoId && (
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                title="ICMAI Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;