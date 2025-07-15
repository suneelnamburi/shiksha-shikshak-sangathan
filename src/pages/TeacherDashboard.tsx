
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, BookOpen, Calendar, TrendingUp, Mail, Phone, MapPin, Award, Clock } from 'lucide-react';

const TeacherDashboard = () => {
  const teacherData = {
    name: "Dr. Priya Sharma",
    id: "TCH_001_2024",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    experience: "8 years",
    qualifications: "M.A. Mathematics, B.Ed",
    rating: 4.8,
    totalStudents: 245,
    completedClasses: 1250,
    upcomingClasses: 15,
    applications: 12,
    profileViews: 89,
    jobsSaved: 5
  };

  const metrics = [
    { title: "Total Students", value: teacherData.totalStudents, icon: User, color: "text-blue-600" },
    { title: "Completed Classes", value: teacherData.completedClasses, icon: BookOpen, color: "text-green-600" },
    { title: "Upcoming Classes", value: teacherData.upcomingClasses, icon: Calendar, color: "text-orange-600" },
    { title: "Profile Views", value: teacherData.profileViews, icon: TrendingUp, color: "text-purple-600" }
  ];

  const recentApplications = [
    { id: 1, school: "Delhi Public School", position: "Mathematics Teacher", status: "Pending", date: "2024-01-15" },
    { id: 2, school: "St. Xavier's School", position: "Physics Teacher", status: "Approved", date: "2024-01-10" },
    { id: 3, school: "Modern School", position: "Chemistry Teacher", status: "Under Review", date: "2024-01-08" }
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
            <span className="text-2xl font-bold text-foreground">Teacher Dashboard</span>
          </div>
        </div>

        {/* Profile Overview */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-full flex items-center justify-center">
                <User className="text-white" size={32} />
              </div>
              <div>
                <CardTitle className="text-2xl">{teacherData.name}</CardTitle>
                <p className="text-muted-foreground">ID: {teacherData.id}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{teacherData.experience} Experience</Badge>
                  <div className="flex items-center space-x-1">
                    <Award className="text-yellow-500" size={16} />
                    <span className="text-sm font-medium">{teacherData.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{teacherData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{teacherData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{teacherData.location}</span>
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
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{app.school}</h4>
                      <p className="text-sm text-muted-foreground">{app.position}</p>
                      <p className="text-xs text-muted-foreground">{app.date}</p>
                    </div>
                    <Badge variant={app.status === 'Approved' ? 'default' : 'secondary'}>
                      {app.status}
                    </Badge>
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
              <Button className="w-full" asChild>
                <Link to="/">Browse Job Postings</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/teacher-profile">View Public Profile</Link>
              </Button>
              <Button className="w-full" variant="outline">
                Update Profile
              </Button>
              <Button className="w-full" variant="outline">
                View Saved Jobs ({teacherData.jobsSaved})
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
