
import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, MapPin, Clock, Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import CategoryCard from '@/components/CategoryCard';
import JobCard from '@/components/JobCard';
import HeroSection from '@/components/HeroSection';
import TeacherGallery from '@/components/TeacherGallery';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const categories = [
    { icon: BookOpen, name: 'Mathematics', positions: 450, color: '#D32F2F' },
    { icon: Users, name: 'English', positions: 380, color: '#D32F2F' },
    { icon: Award, name: 'Science', positions: 320, color: '#D32F2F' },
    { icon: BookOpen, name: 'Social Studies', positions: 280, color: '#D32F2F' },
    { icon: Users, name: 'Hindi', positions: 250, color: '#D32F2F' },
    { icon: Award, name: 'Computer Science', positions: 180, color: '#D32F2F' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      school: 'Delhi Public School',
      location: 'New Delhi',
      category: 'Full-time',
      timePosted: '2 hrs ago',
      experience: '3-5 years',
      salary: '₹40,000 - ₹60,000',
      board: 'CBSE',
      subjects: ['Mathematics', 'Statistics']
    },
    {
      id: 2,
      title: 'English Teacher',
      school: 'Kendriya Vidyalaya',
      location: 'Mumbai',
      category: 'Part-time',
      timePosted: '4 hrs ago',
      experience: '2-4 years',
      salary: '₹35,000 - ₹50,000',
      board: 'NCERT',
      subjects: ['English Literature', 'Grammar']
    },
    {
      id: 3,
      title: 'Science Teacher',
      school: 'Ryan International',
      location: 'Bangalore',
      category: 'Full-time',
      timePosted: '1 day ago',
      experience: '5-8 years',
      salary: '₹45,000 - ₹70,000',
      board: 'ICSE',
      subjects: ['Physics', 'Chemistry', 'Biology']
    },
    {
      id: 4,
      title: 'Computer Science Teacher',
      school: 'St. Xavier\'s School',
      location: 'Pune',
      category: 'Full-time',
      timePosted: '2 days ago',
      experience: '1-3 years',
      salary: '₹30,000 - ₹45,000',
      board: 'State Board',
      subjects: ['Computer Science', 'Programming']
    },
    {
      id: 5,
      title: 'Hindi Teacher',
      school: 'DAV Public School',
      location: 'Chennai',
      category: 'Part-time',
      timePosted: '3 days ago',
      experience: '2-5 years',
      salary: '₹25,000 - ₹40,000',
      board: 'CBSE',
      subjects: ['Hindi Literature', 'Grammar']
    },
    {
      id: 6,
      title: 'Social Studies Teacher',
      school: 'Amity International',
      location: 'Kolkata',
      category: 'Full-time',
      timePosted: '1 week ago',
      experience: '4-7 years',
      salary: '₹38,000 - ₹55,000',
      board: 'CBSE',
      subjects: ['History', 'Geography', 'Civics']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#1A252F]/80 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1A252F] font-bold text-base sm:text-lg">@</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">शिक्षक Portal</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors text-sm lg:text-base">About</a>
              <a href="#jobs" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Jobs</a>
              <a href="#candidates" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Candidates</a>
              <a href="#services" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Services</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Contact Us</a>
            </nav>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm px-3 sm:px-4 py-2">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
        />

        {/* Teacher Gallery Section */}
        <TeacherGallery />

        {/* Categories Section */}
        <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Choose Your Subject Category</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Find teaching opportunities in your area of expertise</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Teaching Jobs You May Be Interested In</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Latest opportunities from top schools across India</p>
            </div>

            {/* Filters */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold flex items-center">
                  <Filter className="mr-2 text-[#D32F2F] flex-shrink-0" size={18} />
                  <span>Filter Jobs</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <Select>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-10 sm:h-auto text-sm sm:text-base">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="computer">Computer Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-10 sm:h-auto text-sm sm:text-base">
                    <SelectValue placeholder="Board Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                    <SelectItem value="ncert">NCERT</SelectItem>
                    <SelectItem value="ib">IB</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-10 sm:h-auto text-sm sm:text-base">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-10 sm:h-auto text-sm sm:text-base">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="marathi">Marathi</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>

            {/* Load More Button for Mobile */}
            <div className="text-center mt-8 sm:mt-12">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                Load More Jobs
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#1A252F] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Start Your Teaching Journey Today</h2>
            <p className="text-gray-300 text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Join thousands of educators finding their dream jobs</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to="/signup">
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  Register as Teacher
                </Button>
              </Link>
              <a href="#jobs">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A252F] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg transition-all duration-300 w-full sm:w-auto">
                  Browse All Jobs
                </Button>
              </a>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#FCE4EC] rounded-full opacity-20"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-[#FCE4EC] rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-[#D32F2F] rounded-full opacity-10"></div>
        </section>
      </main>
    </div>
  );
};

export default Index;
