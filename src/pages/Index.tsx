
import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, MapPin, Clock, Heart, Filter, Phone, Mail, Globe, Shield, Zap, Target, ArrowLeft } from 'lucide-react';
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

  const services = [
    {
      icon: Shield,
      title: 'Verified Schools',
      description: 'All educational institutions are thoroughly verified and authenticated'
    },
    {
      icon: Target,
      title: 'Perfect Matching',
      description: 'Advanced algorithm matches teachers with suitable positions'
    },
    {
      icon: Zap,
      title: 'Quick Hiring',
      description: 'Streamlined process ensures faster recruitment and onboarding'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#1A252F]/80 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1A252F] font-bold text-lg">@</span>
              </div>
              <span className="text-2xl font-bold">शिक्षक Portal</span>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#jobs" className="hover:text-gray-300 transition-colors">Jobs</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-105">
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

        {/* About Section */}
        <section id="about" className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">About शिक्षक Portal</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                शिक्षक Portal is India's leading educational job platform connecting talented teachers with reputable schools and institutions. We bridge the gap between quality education and skilled educators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To revolutionize the education sector by providing a comprehensive platform that makes teacher recruitment efficient, transparent, and accessible to all.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full mr-3"></div>
                    Connecting 10,000+ teachers with opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full mr-3"></div>
                    Partnering with 500+ educational institutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full mr-3"></div>
                    Serving across all major cities in India
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="mr-3 mt-1 text-white" size={20} />
                    <div>
                      <h4 className="font-semibold">Verified Institutions</h4>
                      <p className="text-sm opacity-90">All schools are thoroughly verified</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="mr-3 mt-1 text-white" size={20} />
                    <div>
                      <h4 className="font-semibold">Perfect Matching</h4>
                      <p className="text-sm opacity-90">AI-powered job matching system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="mr-3 mt-1 text-white" size={20} />
                    <div>
                      <h4 className="font-semibold">Quick Process</h4>
                      <p className="text-sm opacity-90">Fast and efficient hiring process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
              <p className="text-gray-600 text-lg">Comprehensive solutions for educational recruitment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Teaching Jobs You May Be Interested In</h2>
              <p className="text-gray-600 text-lg">Latest opportunities from top schools across India</p>
            </div>

            {/* Filters */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Filter className="mr-2 text-[#D32F2F]" size={20} />
                  Filter Jobs
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]">
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
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]">
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
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]">
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
                  <SelectTrigger className="bg-white border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-[#1A252F] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 text-lg">Get in touch with our team for any queries or support</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="mr-4 text-[#D32F2F]" size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="mr-4 text-[#D32F2F]" size={20} />
                    <span>info@shikshakportal.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="mr-4 text-[#D32F2F]" size={20} />
                    <span>123 Education Street, New Delhi, India</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
                  />
                  <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#1A252F] relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Start Your Teaching Journey Today</h2>
            <p className="text-gray-300 text-xl mb-8">Join thousands of educators finding their dream jobs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
                  Register as Teacher
                </Button>
              </Link>
              <a href="#jobs">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A252F] px-8 py-3 text-lg transition-all duration-300">
                  Browse All Jobs
                </Button>
              </a>
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
