
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, Phone, Mail, GraduationCap, BookOpen, Calendar, Award, MessageCircle } from 'lucide-react';

const TeacherProfile = () => {
  // Sample teacher data - in a real app, this would come from props or API
  const teacher = {
    id: 1,
    name: "Dr. Priya Sharma",
    profileImage: "/placeholder.svg",
    qualification: "M.A. Mathematics, B.Ed",
    experience: "8 years",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    location: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
    rating: 4.8,
    totalReviews: 156,
    about: "Passionate mathematics teacher with 8 years of experience in teaching high school students. Specialized in making complex mathematical concepts easy to understand through practical examples and interactive teaching methods.",
    achievements: [
      "Best Teacher Award 2023",
      "Mathematics Excellence Award 2022",
      "Student Choice Award 2021"
    ],
    reviews: [
      {
        id: 1,
        studentName: "Rahul Patel",
        rating: 5,
        comment: "Excellent teacher! Made calculus so much easier to understand.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        studentName: "Anjali Singh",
        rating: 5,
        comment: "Very patient and explains concepts clearly. Highly recommended!",
        date: "1 month ago"
      },
      {
        id: 3,
        studentName: "Vikram Kumar",
        rating: 4,
        comment: "Good teaching style and very supportive during exam preparation.",
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
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={40} />
              </div>
              
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {teacher.name}
                </CardTitle>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} className="text-[#D32F2F]" />
                    <span className="text-gray-600">{teacher.location}</span>
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
                      variant="secondary" 
                      className="bg-[#FCE4EC] text-[#D32F2F] hover:bg-[#F8BBD9]"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-[#D32F2F] hover:bg-[#B71C1C]">
                    <MessageCircle size={16} className="mr-2" />
                    Contact Teacher
                  </Button>
                  <Button variant="outline" className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{teacher.about}</p>
              </CardContent>
            </Card>

            {/* Qualifications & Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Qualifications & Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap size={20} className="text-[#D32F2F]" />
                  <div>
                    <p className="font-medium">Qualification</p>
                    <p className="text-gray-600">{teacher.qualification}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-[#D32F2F]" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-gray-600">{teacher.experience}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <BookOpen size={20} className="text-[#D32F2F]" />
                  <div>
                    <p className="font-medium">Subject Expertise</p>
                    <p className="text-gray-600">{teacher.subjects.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teacher.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award size={16} className="text-[#D32F2F]" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacher.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-gray-800">{review.studentName}</p>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-[#D32F2F]" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{teacher.phone}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-[#D32F2F]" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{teacher.email}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-[#D32F2F]" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{teacher.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Reviews</span>
                  <span className="font-medium">{teacher.totalReviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-medium">{teacher.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium">{teacher.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subjects</span>
                  <span className="font-medium">{teacher.subjects.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
