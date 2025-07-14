
import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  searchLocation: string;
  setSearchLocation: (value: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  searchKeyword,
  setSearchKeyword,
  searchLocation,
  setSearchLocation
}) => {
  const trendingKeywords = [
    'Mathematics Teacher', 'English Teacher', 'Science Teacher', 
    'Primary Teacher', 'Secondary Teacher', 'Online Teaching'
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#1A252F] to-[#2D3748] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D32F2F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FCE4EC] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg flex items-center justify-center">
                <TrendingUp className="mr-2 text-[#D32F2F]" size={20} />
                Find Teaching Jobs, Career & Opportunities
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Dream
                <span className="block text-[#D32F2F]">Teaching Job!</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Connect with top schools across India. Upload your resume and get noticed by education recruiters.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Job Title (e.g., Math Teacher)"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="pl-10 bg-white/90 border-0 h-12 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#D32F2F]"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Location (City or State)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 bg-white/90 border-0 h-12 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#D32F2F]"
                  />
                </div>
              </div>
              
              <Button className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                FIND TEACHING JOBS
              </Button>
            </div>

            {/* Trending Keywords */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Trending Keywords:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {trendingKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchKeyword(keyword)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm border border-white/20 hover:border-[#D32F2F] transition-all duration-300"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
