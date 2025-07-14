
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
    <section id="home" className="relative bg-[#1A252F] overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/e2ce2150-6ea2-447a-948f-bd62a06f3287.png)'
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-[#1A252F]/70"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center py-12 sm:py-16 lg:py-20 z-10">
        <div className="max-w-5xl mx-auto text-center w-full">
          
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            
            {/* Header Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg flex items-center justify-center font-medium flex-wrap gap-2">
                <TrendingUp className="text-white flex-shrink-0" size={16} />
                <span className="text-center">Find Jobs, Employment & Career Opportunities</span>
              </p>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white px-2">
                Step into the Teacher Job Portal,
                <span className="block mt-2">where passion fuels purpose!</span>
              </h1>
            </div>

            {/* Search Bar Section */}
            <div className="bg-card/98 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-2xl max-w-5xl mx-auto border-2 border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-end">
                <div className="sm:col-span-1 lg:col-span-5">
                  <label className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                    Keyword:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Job Title"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="h-10 sm:h-12 text-foreground border-2 border-border focus:border-primary focus:ring-primary text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-1 lg:col-span-5">
                  <label className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                    Location:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="City or State"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="h-10 sm:h-12 text-foreground border-2 border-border focus:border-primary focus:ring-primary text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2 lg:col-span-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 h-10 sm:h-12 text-primary-foreground font-semibold rounded-lg transition-all duration-300 border-2 border-primary text-sm sm:text-base">
                    <Search className="mr-2 flex-shrink-0" size={16} />
                    <span className="hidden sm:inline">FIND A JOB</span>
                    <span className="sm:hidden">SEARCH</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trending Keywords */}
            <div className="space-y-3 sm:space-y-4 px-4">
              <p className="text-white/80 text-xs sm:text-sm text-center">
                Trending Keywords: Automotive, Education, Health and Care Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Semi-circular White Cutout at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 lg:h-16 bg-background z-30 border-t-2 border-border" 
           style={{
             clipPath: 'ellipse(100% 100% at 50% 100%)'
           }}>
      </div>
    </section>
  );
};

export default HeroSection;
