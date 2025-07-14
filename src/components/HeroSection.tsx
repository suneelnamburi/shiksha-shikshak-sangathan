
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/5fe920d5-60c5-4e2d-90af-f48f6f1e9d6e.png')`
          }}
        ></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center w-full">
          
          {/* Content Section */}
          <div className="space-y-12 py-20">
            
            {/* Header Content */}
            <div className="space-y-8">
              <p className="text-white/90 text-lg flex items-center justify-center font-medium">
                <TrendingUp className="mr-2 text-white" size={20} />
                Find Jobs, Employment & Career Opportunities
              </p>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Drop Resume & Get
                <span className="block mt-2">Your Desire Job!</span>
              </h1>
            </div>

            {/* Search Bar Section */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Keyword:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Job Title"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="h-12 text-gray-800 border-gray-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Location:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="City or State"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="h-12 text-gray-800 border-gray-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-white font-semibold rounded-lg transition-all duration-300">
                    <Search className="mr-2" size={18} />
                    FIND A JOB
                  </Button>
                </div>
              </div>
            </div>

            {/* Trending Keywords */}
            <div className="space-y-4">
              <p className="text-white/80 text-sm">
                Trending Keywords: Automotive, Education, Health and Care Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white z-30" 
           style={{
             clipPath: 'ellipse(100% 100% at 50% 100%)'
           }}>
      </div>
    </section>
  );
};

export default HeroSection;
