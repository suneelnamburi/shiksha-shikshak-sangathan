
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
    <section id="home" className="relative bg-brand-dark overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative flex items-center py-16 z-10">
        <div className="max-w-4xl mx-auto text-center w-full">
          
          {/* Content Section */}
          <div className="space-y-8">
            
            {/* Header Content */}
            <div className="space-y-6">
              <p className="text-white/90 text-lg flex items-center justify-center font-medium">
                <TrendingUp className="mr-2 text-white" size={20} />
                Find Jobs, Employment & Career Opportunities
              </p>
              
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
                Step into the Teacher Job Portal,
                <span className="block mt-2">where passion fuels purpose!</span>
              </h1>
            </div>

            {/* Search Bar Section */}
            <div className="bg-card/98 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto border-2 border-border">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Keyword:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Job Title"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="h-12 text-foreground border-2 border-border focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Location:
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="City or State"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="h-12 text-foreground border-2 border-border focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <Button className="w-full btn-primary h-12 font-semibold rounded-lg transition-all duration-300 border-2 border-brand-primary">
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

      {/* Semi-circular White Cutout at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background z-30 border-t-2 border-border" 
           style={{
             clipPath: 'ellipse(100% 100% at 50% 100%)'
           }}>
      </div>
    </section>
  );
};

export default HeroSection;
