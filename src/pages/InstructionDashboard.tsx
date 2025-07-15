
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, BookOpen, TrendingUp, Mail, Phone, MapPin, Star } from 'lucide-react';

const InstructionDashboard = () => {
  const instructionData = {
    name: "Excellence Coaching Institute",
    id: "INS_001_2024",
    email: "info@excellence.edu.in",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    specialization: "Engineering & Medical Entrance",
    established: "2015",
    totalStudents: 450,
    totalInstructors: 25,
    activeCourses: 12,
    successRate: 85,
    rating: 4.7,
    reviews: 234
  };

  const metrics = [
    { title: "Total Students", value: instructionData.totalStudents, icon: Users, color: "text-blue-600" },
    { title: "Total Instructors", value: instructionData.totalInstructors, icon: BookOpen, color: "text-green-600" },
    { title: "Active Courses", value: instructionData.activeCourses, icon: GraduationCap, color: "text-orange-600" },
    { title: "Success Rate", value: `${instructionData.successRate}%`, icon: TrendingUp, color: "text-purple-600" }
  ];

  const recentCourses = [
    { id: "CRS_001", title: "JEE Main Preparation", students: 120, status: "Active", started: "2024-01-01" },
    { id: "CRS_002", title: "NEET Preparation", students: 95, status: "Active", started: "2024-01-01" },
    { id: "CRS_003", title: "Foundation Course", students: 80, status: "Active", started: "2024-01-15" }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">@</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Instruction Dashboard</span>
          </div>
        </div>

        {/* Profile Overview */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div>
                <CardTitle className="text-2xl">{instructionData.name}</CardTitle>
                <p className="text-muted-foreground">ID: {instructionData.id}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{instructionData.specialization}</Badge>
                  <Badge variant="outline">Est. {instructionData.established}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-500" size={16} />
                    <span className="text-sm font-medium">{instructionData.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{instructionData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{instructionData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{instructionData.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <metric.icon className={`${metric.color} h-8 w-8`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">ID: {course.id}</p>
                      <p className="text-xs text-muted-foreground">Started: {course.started}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="default">{course.status}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{course.students} students</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                Add New Course
              </Button>
              <Button className="w-full" variant="outline">
                View Public Profile
              </Button>
              <Button className="w-full" variant="outline">
                Manage Students
              </Button>
              <Button className="w-full" variant="outline">
                View Performance Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstructionDashboard;
