
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, Phone, Mail, GraduationCap, BookOpen, Calendar, Award, MessageCircle, ArrowLeft, Clock, Users, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const TeacherProfile = () => {
  const { id } = useParams();
  
  // Sample teacher data - in a real app, this would come from props or API
  const teacher = {
    id: id || 'TEACHER-001',
    name: "Dr. Priya Sharma",
    profileImage: "/placeholder.svg",
    qualification: "Ph.D. in Mathematics",
    experience: "8 years",
    subjects: ["Mathematics", "Statistics", "Algebra", "Calculus"],
    location: "New Delhi",
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
    rating: 4.8,
    totalReviews: 127,
    school: "Delhi Public School",
    about: "Passionate mathematics teacher with 8 years of experience in teaching high school students. Specialized in making complex mathematical concepts easy to understand through practical examples and interactive teaching methods.",
    achievements: [
      "Best Teacher Award 2023",
      "Mathematics Excellence Award 2022", 
      "Student Choice Award 2021",
      "Published 5 research papers in Mathematics Education"
    ],
    specializations: ["Algebra", "Calculus", "Statistics", "Geometry"],
    teachingStyle: "Interactive learning with real-world applications",
    availability: "Monday to Friday, 9 AM to 6 PM",
    reviews: [
      {
        id: 1,
        studentName: "Rahul Patel",
        rating: 5,
        comment: "Excellent teacher! Made calculus so much easier to understand. Her teaching method is very effective.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        studentName: "Anjali Singh", 
        rating: 5,
        comment: "Very patient and explains concepts clearly. Highly recommended for mathematics!",
        date: "1 month ago"
      },
      {
        id: 3,
        studentName: "Vikram Kumar",
        rating: 4,
        comment: "Good teaching style and very supportive during exam preparation. Great mentor.",
        date: "2 months ago"
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-red-500 hover:text-red-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">@</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Teacher Profile</span>
          </div>
        </div>

        {/* Profile Header */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </CardTitle>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} className="text-red-500" />
                    <span className="text-gray-600">{teacher.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock size={16} className="text-red-500" />
                    <span className="text-gray-600">{teacher.experience}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                      {renderStars(teacher.rating)}
                    </div>
                    <span className="text-gray-600">
                      {teacher.rating} ({teacher.totalReviews} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.subjects.map((subject, index) => (
                    <Badge 
                      key={index} 
                      className="bg-red-50 text-red-700 border-red-200"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    <MessageCircle size={16} className="mr-2" />
                    Contact Teacher
                  </Button>
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{teacher.about}</p>
              </CardContent>
            </Card>

            {/* Qualifications & Experience */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Qualifications & Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap size={20} className="text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Qualification</p>
                    <p className="text-gray-600">{teacher.qualification}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Experience</p>
                    <p className="text-gray-600">{teacher.experience}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <BookOpen size={20} className="text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Current School</p>
                    <p className="text-gray-600">{teacher.school}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="text-white" size={12} />
                    </div>
                    <span className="font-medium text-gray-900">Areas of Expertise:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {teacher.specializations.map((spec, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teacher.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award size={16} className="text-red-500" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacher.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-gray-900">{review.studentName}</p>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Contact Details:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium text-gray-900">{teacher.phone}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center space-x-3">
                      <Mail size={16} className="text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-900">{teacher.email}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center space-x-3">
                      <MapPin size={16} className="text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium text-gray-900">{teacher.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Reviews</span>
                  <span className="font-medium text-gray-900">{teacher.totalReviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-medium text-gray-900">{teacher.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium text-gray-900">{teacher.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subjects</span>
                  <span className="font-medium text-gray-900">{teacher.subjects.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Style */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Teaching Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-3">
                  <Users size={16} className="text-red-500" />
                  <p className="text-gray-700">{teacher.teachingStyle}</p>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-600">Availability</p>
                    <p className="font-medium text-gray-800">{teacher.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-red-50 border border-red-100 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Interested in Learning?</h3>
                <p className="text-gray-600 text-sm mb-4">Contact {teacher.name} to schedule a trial class or discuss your learning requirements.</p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  <MessageCircle size={16} className="mr-2" />
                  Schedule a Trial Class
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
