import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, MapPin, Clock, Heart, Filter, Phone, Mail, Globe, Shield, Zap, Target, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import CategoryCard from '@/components/CategoryCard';
import JobCard from '@/components/JobCard';
import HeroSection from '@/components/HeroSection';
import TeacherGallery from '@/components/TeacherGallery';
import JobRequirementCard from '@/components/JobRequirementCard';
import TeacherProfileCard from '@/components/TeacherProfileCard';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const jobs = [
    {
      id: 'JOB-001',
      title: 'Mathematics Teacher',
      school: 'Delhi Public School',
      location: 'New Delhi',
      category: 'Full-time',
      timePosted: '2 hrs ago',
      experience: '3-5 years',
      salary: '₹40,000 - ₹60,000',
      board: 'CBSE',
      subjects: ['Mathematics', 'Statistics'],
      schoolId: 'SCH-DPS-001',
      institutionId: 'INST-DPS-DELHI'
    },
    {
      id: 'JOB-002',
      title: 'English Teacher',
      school: 'Kendriya Vidyalaya',
      location: 'Mumbai',
      category: 'Part-time',
      timePosted: '4 hrs ago',
      experience: '2-4 years',
      salary: '₹35,000 - ₹50,000',
      board: 'NCERT',
      subjects: ['English Literature', 'Grammar'],
      schoolId: 'SCH-KV-002',
      institutionId: 'INST-KV-MUMBAI'
    },
    {
      id: 'JOB-003',
      title: 'Science Teacher',
      school: 'Ryan International',
      location: 'Bangalore',
      category: 'Full-time',
      timePosted: '1 day ago',
      experience: '5-8 years',
      salary: '₹45,000 - ₹70,000',
      board: 'ICSE',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      schoolId: 'SCH-RYAN-003',
      institutionId: 'INST-RYAN-BANGALORE'
    },
    {
      id: 'JOB-004',
      title: 'Computer Science Teacher',
      school: 'St. Xavier\'s School',
      location: 'Pune',
      category: 'Full-time',
      timePosted: '2 days ago',
      experience: '1-3 years',
      salary: '₹30,000 - ₹45,000',
      board: 'State Board',
      subjects: ['Computer Science', 'Programming'],
      schoolId: 'SCH-XAVIER-004',
      institutionId: 'INST-XAVIER-PUNE'
    },
    {
      id: 'JOB-005',
      title: 'Hindi Teacher',
      school: 'DAV Public School',
      location: 'Chennai',
      category: 'Part-time',
      timePosted: '3 days ago',
      experience: '2-5 years',
      salary: '₹25,000 - ₹40,000',
      board: 'CBSE',
      subjects: ['Hindi Literature', 'Grammar'],
      schoolId: 'SCH-DAV-005',
      institutionId: 'INST-DAV-CHENNAI'
    },
    {
      id: 'JOB-006',
      title: 'Social Studies Teacher',
      school: 'Amity International',
      location: 'Kolkata',
      category: 'Full-time',
      timePosted: '1 week ago',
      experience: '4-7 years',
      salary: '₹38,000 - ₹55,000',
      board: 'CBSE',
      subjects: ['History', 'Geography', 'Civics'],
      schoolId: 'SCH-AMITY-006',
      institutionId: 'INST-AMITY-KOLKATA'
    }
  ];

  const teacherProfiles = [
    {
      id: 'TEACHER-001',
      name: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      experience: '8 years',
      location: 'New Delhi',
      education: 'Ph.D. in Mathematics',
      rating: 4.8,
      totalRatings: 127,
      school: 'Delhi Public School',
      email: 'priya.sharma@example.com',
      phone: '+91 98765 43210',
      specializations: ['Algebra', 'Calculus', 'Statistics', 'Geometry']
    },
    {
      id: 'TEACHER-002',
      name: 'Prof. Rajesh Kumar',
      subject: 'Physics',
      experience: '12 years',
      location: 'Mumbai',
      education: 'M.Sc. Physics, B.Ed.',
      rating: 4.9,
      totalRatings: 89,
      school: 'Kendriya Vidyalaya',
      email: 'rajesh.kumar@example.com',
      phone: '+91 87654 32109',
      specializations: ['Mechanics', 'Optics', 'Thermodynamics', 'Electronics']
    },
    {
      id: 'TEACHER-003',
      name: 'Ms. Anita Patel',
      subject: 'English',
      experience: '6 years',
      location: 'Bangalore',
      education: 'MA English Literature',
      rating: 4.7,
      totalRatings: 156,
      school: 'Ryan International',
      email: 'anita.patel@example.com',
      phone: '+91 76543 21098',
      specializations: ['Literature', 'Grammar', 'Creative Writing', 'Communication']
    },
    {
      id: 'TEACHER-004',
      name: 'Mr. Suresh Gupta',
      subject: 'Chemistry',
      experience: '10 years',
      location: 'Pune',
      education: 'M.Sc. Chemistry, B.Ed.',
      rating: 4.6,
      totalRatings: 98,
      school: 'St. Xavier\'s School',
      email: 'suresh.gupta@example.com',
      phone: '+91 65432 10987',
      specializations: ['Organic Chemistry', 'Physical Chemistry', 'Lab Techniques']
    },
    {
      id: 'TEACHER-005',
      name: 'Mrs. Kavita Singh',
      subject: 'Hindi',
      experience: '7 years',
      location: 'Chennai',
      education: 'MA Hindi Literature',
      rating: 4.5,
      totalRatings: 143,
      school: 'DAV Public School',
      email: 'kavita.singh@example.com',
      phone: '+91 54321 09876',
      specializations: ['Literature', 'Grammar', 'Poetry', 'Translation']
    },
    {
      id: 'TEACHER-006',
      name: 'Dr. Amit Verma',
      subject: 'Biology',
      experience: '15 years',
      location: 'Kolkata',
      education: 'Ph.D. in Biology',
      rating: 4.9,
      totalRatings: 201,
      school: 'Amity International',
      email: 'amit.verma@example.com',
      phone: '+91 43210 98765',
      specializations: ['Genetics', 'Ecology', 'Botany', 'Zoology']
    }
  ];

  const jobRequirements = [
    {
      id: 1,
      title: 'Urgently Required: Mathematics Teacher',
      school: 'St. Mary\'s Convent School',
      location: 'Delhi',
      requirements: ['B.Ed in Mathematics', 'Minimum 3 years experience', 'CBSE board knowledge'],
      salary: '₹45,000 - ₹60,000',
      urgency: 'Immediate',
      contactEmail: 'hr@stmarysdelhi.edu.in',
      contactPhone: '+91 98765 43210',
      timePosted: '1 hr ago'
    },
    {
      id: 2,
      title: 'Physics Teacher Required',
      school: 'Modern Public School',
      location: 'Mumbai',
      requirements: ['M.Sc Physics', 'B.Ed certification', 'Lab experience preferred'],
      salary: '₹40,000 - ₹55,000',
      urgency: 'Within 15 days',
      contactEmail: 'recruitment@modernschool.com',
      contactPhone: '+91 87654 32109',
      timePosted: '3 hrs ago'
    },
    {
      id: 3,
      title: 'English Literature Teacher',
      school: 'Cambridge International School',
      location: 'Bangalore',
      requirements: ['MA English Literature', 'B.Ed mandatory', 'International curriculum experience'],
      salary: '₹50,000 - ₹70,000',
      urgency: 'ASAP',
      contactEmail: 'jobs@cambridgeblr.edu.in',
      contactPhone: '+91 76543 21098',
      timePosted: '5 hrs ago'
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Verified Schools',
      description: 'All educational institutions are thoroughly verified and authenticated',
      isPaid: false
    },
    {
      icon: Target,
      title: 'Perfect Matching',
      description: 'Advanced algorithm matches teachers with suitable positions',
      isPaid: false
    },
    {
      icon: Zap,
      title: 'Quick Hiring',
      description: 'Streamlined process ensures faster recruitment and onboarding',
      isPaid: false
    },
    {
      icon: Users,
      title: 'Premium Job Alerts',
      description: 'Get instant notifications for jobs matching your profile. Priority access to new openings.',
      isPaid: true,
      price: '₹299/month'
    },
    {
      icon: BookOpen,
      title: 'Career Counseling',
      description: 'One-on-one career guidance sessions with education experts. Resume review and interview preparation.',
      isPaid: true,
      price: '₹1,999/session'
    },
    {
      icon: Award,
      title: 'Profile Boost',
      description: 'Featured profile placement to increase visibility to schools. Higher chances of getting selected.',
      isPaid: true,
      price: '₹499/month'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-standard">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">@</span>
              </div>
              <span className="text-2xl font-bold">शिक्षक Portal</span>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="hover:text-muted-foreground transition-colors">Home</a>
              <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
              <a href="#jobs" className="hover:text-muted-foreground transition-colors">Jobs</a>
              <a href="#services" className="hover:text-muted-foreground transition-colors">Services</a>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact Us</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="btn-outline transition-all duration-300">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="btn-primary transition-all duration-300 transform hover:scale-105">
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

        {/* Teacher Profiles Section */}
        <section className="section-standard bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Featured Teacher Profiles</h2>
              <p className="text-muted-foreground text-lg">Meet our experienced and qualified teachers</p>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {teacherProfiles.map((teacher) => (
                    <CarouselItem key={teacher.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="h-full">
                        <TeacherProfileCard {...teacher} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-standard bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">About शिक्षक Portal</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                शिक्षक Portal is India's leading educational job platform connecting talented teachers with reputable schools and institutions. We bridge the gap between quality education and skilled educators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="card-standard p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To revolutionize the education sector by providing a comprehensive platform that makes teacher recruitment efficient, transparent, and accessible to all.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    Connecting 10,000+ teachers with opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    Partnering with 500+ educational institutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    Serving across all major cities in India
                  </li>
                </ul>
              </div>
              <div className="brand-gradient rounded-2xl p-8 text-brand-primary-foreground border-2 border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="mr-3 mt-1 text-brand-primary-foreground" size={20} />
                    <div>
                      <h4 className="font-semibold">Verified Institutions</h4>
                      <p className="text-sm opacity-90">All schools are thoroughly verified</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="mr-3 mt-1 text-brand-primary-foreground" size={20} />
                    <div>
                      <h4 className="font-semibold">Perfect Matching</h4>
                      <p className="text-sm opacity-90">AI-powered job matching system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="mr-3 mt-1 text-brand-primary-foreground" size={20} />
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
        <section id="services" className="section-standard bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">Comprehensive solutions for educational recruitment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="card-standard relative overflow-hidden h-full">
                  {service.isPaid && (
                    <div className="absolute top-2 right-2 bg-brand-primary text-brand-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="text-brand-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    {service.isPaid && (
                      <p className="text-brand-primary font-bold text-lg">{service.price}</p>
                    )}
                  </CardHeader>
                  <CardContent className="text-center flex flex-col justify-between flex-1">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {service.isPaid && (
                      <Link to="/subscribe">
                        <Button className="mt-4 btn-primary w-full">
                          Subscribe Now
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Requirements Section */}
        <section className="section-standard bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Urgent Job Requirements</h2>
              <p className="text-muted-foreground text-lg">Schools actively seeking qualified teachers</p>
            </div>

            {/* Filters */}
            <div className="filter-section max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Filter className="mr-2 text-brand-primary" size={20} />
                  Filter Requirements
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="computer">Computer Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Board Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                    <SelectItem value="ncert">NCERT</SelectItem>
                    <SelectItem value="ib">IB</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Urgency" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="15-days">Within 15 days</SelectItem>
                    <SelectItem value="30-days">Within 30 days</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {jobRequirements.map((requirement) => (
                <JobRequirementCard key={requirement.id} {...requirement} />
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="section-standard bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Teaching Jobs You May Be Interested In</h2>
              <p className="text-muted-foreground text-lg">Latest opportunities from top schools across India</p>
            </div>

            {/* Filters */}
            <div className="filter-section max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Filter className="mr-2 text-brand-primary" size={20} />
                  Filter Jobs
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="computer">Computer Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Board Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                    <SelectItem value="ncert">NCERT</SelectItem>
                    <SelectItem value="ib">IB</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="marathi">Marathi</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-card border-2 border-border focus:border-brand-primary focus:ring-brand-primary">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border shadow-lg z-50">
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="job-requirement">Job Requirement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {jobs.map((job) => (
                    <CarouselItem key={job.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="h-full">
                        <JobCard {...job} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-standard bg-brand-dark text-brand-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground text-lg">Get in touch with our team for any queries or support</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="text-center md:text-left border-2 border-border rounded-2xl p-8 bg-card/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="mr-4 text-brand-primary" size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="mr-4 text-brand-primary" size={20} />
                    <span>info@shikshakportal.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="mr-4 text-brand-primary" size={20} />
                    <span>123 Education Street, New Delhi, India</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left border-2 border-border rounded-2xl p-8 bg-card/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-card/10 border-2 border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-card/10 border-2 border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 py-2 bg-card/10 border-2 border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <Button className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
