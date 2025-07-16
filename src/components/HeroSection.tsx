
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
    <section id="home" className="relative bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/90 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_70%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative flex items-center py-20 lg:py-24 z-10">
        <div className="max-w-5xl mx-auto text-center w-full">
          
          {/* Content Section */}
          <div className="space-y-10">
            
            {/* Header Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <TrendingUp className="mr-2 text-white" size={18} />
                <span className="text-white/90 text-sm font-medium">
                  Find Jobs, Employment & Career Opportunities
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Step into the 
                <span className="block mt-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Teacher Job Portal
                </span>
                <span className="block mt-2 text-3xl lg:text-4xl font-medium text-white/80">
                  where passion fuels purpose!
                </span>
              </h1>
            </div>

            {/* Search Bar Section */}
            <div className="bg-white/98 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/20 max-w-5xl mx-auto border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-5">
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Job Title or Keyword
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="e.g. Mathematics Teacher, Primary Teacher"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="h-14 text-foreground border-2 border-border/50 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl text-base bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Location
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="e.g. Delhi, Mumbai, Bangalore"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="h-14 text-foreground border-2 border-border/50 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl text-base bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <Button className="w-full h-14 font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary border-0">
                    <Search className="mr-2" size={20} />
                    FIND JOBS
                  </Button>
                </div>
              </div>
            </div>

            {/* Trending Keywords */}
            <div className="space-y-4">
              <p className="text-white/70 text-sm font-medium">
                Popular Searches:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {trendingKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => setSearchKeyword(keyword)}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background z-30" 
           style={{
             clipPath: 'ellipse(120% 100% at 50% 100%)'
           }}>
      </div>
    </section>
  );
};

export default HeroSection;
