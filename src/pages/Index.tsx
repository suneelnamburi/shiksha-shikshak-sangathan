import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, MapPin, Clock, Heart, Filter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar';
import CategoryCard from '@/components/CategoryCard';
import JobCard from '@/components/JobCard';
import HeroSection from '@/components/HeroSection';
import TeacherGallery from '@/components/TeacherGallery';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1A252F] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#1A252F] font-bold text-lg">@</span>
                </div>
                <span className="text-2xl font-bold">शिक्षक Portal</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#jobs" className="hover:text-gray-300 transition-colors">Jobs</a>
              <a href="#candidates" className="hover:text-gray-300 transition-colors">Candidates</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300">
                Sign In
              </Button>
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-105">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
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
        <section id="categories" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Choose Your Subject Category</h2>
              <p className="text-gray-600 text-lg">Find teaching opportunities in your area of expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-16 bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Teaching Jobs You May Be Interested In</h2>
              <p className="text-gray-600 text-lg">Latest opportunities from top schools across India</p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Filter className="mr-2 text-[#D32F2F]" size={20} />
                  Filter Jobs
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="computer">Computer Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Board Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                    <SelectItem value="ncert">NCERT</SelectItem>
                    <SelectItem value="ib">IB</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#1A252F] relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Start Your Teaching Journey Today</h2>
            <p className="text-gray-300 text-xl mb-8">Join thousands of educators finding their dream jobs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
                Register as Teacher
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A252F] px-8 py-3 text-lg transition-all duration-300">
                Browse All Jobs
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#FCE4EC] rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FCE4EC] rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#D32F2F] rounded-full opacity-10"></div>
        </section>
      </main>
    </div>
  );
};

export default Index;
