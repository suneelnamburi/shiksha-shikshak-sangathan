
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Users, BookOpen, TrendingUp, Mail, Phone, MapPin, Plus, Eye } from 'lucide-react';

const SchoolDashboard = () => {
  const schoolData = {
    name: "Delhi Public School",
    id: "SCH_001_2024",
    email: "info@dpsdelhi.edu.in",
    phone: "+91 98765 43210",
    location: "New Delhi",
    board: "CBSE",
    established: "1990",
    totalStudents: 1200,
    totalTeachers: 85,
    activeJobs: 5,
    totalApplications: 42,
    profileViews: 156,
    jobViews: 340
  };

  const metrics = [
    { title: "Total Students", value: schoolData.totalStudents, icon: Users, color: "text-blue-600" },
    { title: "Total Teachers", value: schoolData.totalTeachers, icon: BookOpen, color: "text-green-600" },
    { title: "Active Jobs", value: schoolData.activeJobs, icon: Plus, color: "text-orange-600" },
    { title: "Total Applications", value: schoolData.totalApplications, icon: TrendingUp, color: "text-purple-600" }
  ];

  const recentJobs = [
    { id: "JOB_001", title: "Mathematics Teacher", applications: 12, status: "Active", posted: "2024-01-15" },
    { id: "JOB_002", title: "English Teacher", applications: 8, status: "Active", posted: "2024-01-10" },
    { id: "JOB_003", title: "Science Teacher", applications: 15, status: "Closed", posted: "2024-01-05" }
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
            <span className="text-2xl font-bold text-foreground">School Dashboard</span>
          </div>
        </div>

        {/* Profile Overview */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-full flex items-center justify-center">
                <Building className="text-white" size={32} />
              </div>
              <div>
                <CardTitle className="text-2xl">{schoolData.name}</CardTitle>
                <p className="text-muted-foreground">ID: {schoolData.id}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{schoolData.board} Board</Badge>
                  <Badge variant="outline">Est. {schoolData.established}</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{schoolData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{schoolData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#D32F2F]" size={16} />
                <span className="text-sm">{schoolData.location}</span>
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
          {/* Recent Job Postings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Job Postings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">ID: {job.id}</p>
                      <p className="text-xs text-muted-foreground">{job.posted}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{job.applications} applications</p>
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
              <Button className="w-full" asChild>
                <Link to="/post-job">Post New Job</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/school-profile">View Public Profile</Link>
              </Button>
              <Button className="w-full" variant="outline">
                Manage Applications
              </Button>
              <Button className="w-full" variant="outline">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
