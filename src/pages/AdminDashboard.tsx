
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Building, GraduationCap, CheckCircle, XCircle, Search, Eye, UserCheck } from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const adminStats = {
    totalTeachers: 1250,
    totalSchools: 85,
    totalInstructions: 32,
    pendingVerifications: 45,
    approvedToday: 12,
    rejectedToday: 3
  };

  const pendingVerifications = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      type: "Teacher",
      email: "rajesh.kumar@email.com",
      registrationId: "TCH_2024_001",
      submittedDate: "2024-01-15",
      documents: ["ID Card", "Degree Certificate", "B.Ed Certificate"]
    },
    {
      id: 2,
      name: "Cambridge International School",
      type: "School",
      email: "admin@cambridge.edu.in",
      registrationId: "SCH_2024_002",
      submittedDate: "2024-01-14",
      documents: ["Registration Certificate", "NOC", "Affiliation Certificate"]
    },
    {
      id: 3,
      name: "Elite Coaching Institute",
      type: "Instruction",
      email: "info@elitecoaching.com",
      registrationId: "INS_2024_003",
      submittedDate: "2024-01-13",
      documents: ["Registration", "Tax Certificate", "Course Approval"]
    }
  ];

  const recentJobPostings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      school: "Delhi Public School",
      location: "New Delhi",
      postedDate: "2024-01-15",
      status: "Active",
      applications: 12
    },
    {
      id: 2,
      title: "English Teacher",
      school: "St. Xavier's School",
      location: "Mumbai",
      postedDate: "2024-01-14",
      status: "Under Review",
      applications: 8
    }
  ];

  const handleApprove = (id: number) => {
    console.log(`Approving verification for ID: ${id}`);
    // Handle approval logic here
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting verification for ID: ${id}`);
    // Handle rejection logic here
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Teacher':
        return <UserCheck className="text-blue-600" size={20} />;
      case 'School':
        return <Building className="text-green-600" size={20} />;
      case 'Instruction':
        return <GraduationCap className="text-purple-600" size={20} />;
      default:
        return <Users className="text-gray-600" size={20} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Teacher':
        return 'bg-blue-100 text-blue-800';
      case 'School':
        return 'bg-green-100 text-green-800';
      case 'Instruction':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              <Shield className="text-primary-foreground" size={20} />
            </div>
            <span className="text-2xl font-bold text-foreground">Admin Dashboard</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Teachers</p>
                  <p className="text-2xl font-bold">{adminStats.totalTeachers}</p>
                </div>
                <UserCheck className="text-blue-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Schools</p>
                  <p className="text-2xl font-bold">{adminStats.totalSchools}</p>
                </div>
                <Building className="text-green-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Instructions</p>
                  <p className="text-2xl font-bold">{adminStats.totalInstructions}</p>
                </div>
                <GraduationCap className="text-purple-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-orange-600">{adminStats.pendingVerifications}</p>
                </div>
                <Shield className="text-orange-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved Today</p>
                  <p className="text-2xl font-bold text-green-600">{adminStats.approvedToday}</p>
                </div>
                <CheckCircle className="text-green-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected Today</p>
                  <p className="text-2xl font-bold text-red-600">{adminStats.rejectedToday}</p>
                </div>
                <XCircle className="text-red-600 h-8 w-8" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Verifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Pending Verifications</span>
                <Badge variant="destructive">{adminStats.pendingVerifications}</Badge>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Search verifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {pendingVerifications.map((verification) => (
                  <div key={verification.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {getTypeIcon(verification.type)}
                        <div>
                          <h4 className="font-semibold">{verification.name}</h4>
                          <p className="text-sm text-muted-foreground">{verification.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {verification.registrationId}</p>
                        </div>
                      </div>
                      <Badge className={getTypeColor(verification.type)}>
                        {verification.type}
                      </Badge>
                    </div>
                    
                    <div className="text-sm">
                      <p className="text-muted-foreground">Submitted: {verification.submittedDate}</p>
                      <p className="text-muted-foreground">Documents: {verification.documents.join(', ')}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <Eye size={14} className="mr-2" />
                        Review
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1"
                        onClick={() => handleApprove(verification.id)}
                      >
                        <CheckCircle size={14} className="mr-2" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1"
                        onClick={() => handleReject(verification.id)}
                      >
                        <XCircle size={14} className="mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Job Postings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Job Postings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobPostings.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.school}</p>
                        <p className="text-xs text-muted-foreground">{job.location}</p>
                      </div>
                      <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Posted: {job.postedDate}</span>
                      <span className="text-muted-foreground">{job.applications} applications</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
