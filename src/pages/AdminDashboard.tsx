
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  const registeredTeachers = [
    { id: 1, name: "Dr. Priya Sharma", email: "priya@email.com", registrationId: "TCH_001_2024", status: "Approved", joinDate: "2024-01-10" },
    { id: 2, name: "Mr. Amit Singh", email: "amit@email.com", registrationId: "TCH_002_2024", status: "Approved", joinDate: "2024-01-12" },
    { id: 3, name: "Ms. Neha Gupta", email: "neha@email.com", registrationId: "TCH_003_2024", status: "Pending", joinDate: "2024-01-15" }
  ];

  const registeredSchools = [
    { id: 1, name: "Delhi Public School", email: "admin@dps.edu.in", registrationId: "SCH_001_2024", status: "Approved", joinDate: "2024-01-05" },
    { id: 2, name: "St. Xavier's School", email: "admin@stxaviers.edu.in", registrationId: "SCH_002_2024", status: "Approved", joinDate: "2024-01-08" },
    { id: 3, name: "Modern School", email: "admin@modernschool.edu.in", registrationId: "SCH_003_2024", status: "Pending", joinDate: "2024-01-14" }
  ];

  const registeredInstructions = [
    { id: 1, name: "Brilliant Coaching", email: "info@brilliant.com", registrationId: "INS_001_2024", status: "Approved", joinDate: "2024-01-07" },
    { id: 2, name: "Excel Academy", email: "info@excel.com", registrationId: "INS_002_2024", status: "Approved", joinDate: "2024-01-09" },
    { id: 3, name: "Prime Institute", email: "info@prime.com", registrationId: "INS_003_2024", status: "Pending", joinDate: "2024-01-13" }
  ];

  const handleApprove = (id: number) => {
    console.log(`Approving verification for ID: ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting verification for ID: ${id}`);
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

        {/* Admin Tabs */}
        <Tabs defaultValue="approvals" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="approvals">
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
                <div className="space-y-4">
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
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye size={14} className="mr-2" />
                          Review
                        </Button>
                        <Button size="sm" variant="default" className="flex-1" onClick={() => handleApprove(verification.id)}>
                          <CheckCircle size={14} className="mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive" className="flex-1" onClick={() => handleReject(verification.id)}>
                          <XCircle size={14} className="mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachers">
            <Card>
              <CardHeader>
                <CardTitle>Registered Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registeredTeachers.map((teacher) => (
                    <div key={teacher.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <UserCheck className="text-blue-600" size={20} />
                        <div>
                          <h4 className="font-semibold">{teacher.name}</h4>
                          <p className="text-sm text-muted-foreground">{teacher.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {teacher.registrationId}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={teacher.status === 'Approved' ? 'default' : 'secondary'}>
                          {teacher.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Joined: {teacher.joinDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schools">
            <Card>
              <CardHeader>
                <CardTitle>Registered Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registeredSchools.map((school) => (
                    <div key={school.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Building className="text-green-600" size={20} />
                        <div>
                          <h4 className="font-semibold">{school.name}</h4>
                          <p className="text-sm text-muted-foreground">{school.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {school.registrationId}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={school.status === 'Approved' ? 'default' : 'secondary'}>
                          {school.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Joined: {school.joinDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions">
            <Card>
              <CardHeader>
                <CardTitle>Registered Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registeredInstructions.map((instruction) => (
                    <div key={instruction.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="text-purple-600" size={20} />
                        <div>
                          <h4 className="font-semibold">{instruction.name}</h4>
                          <p className="text-sm text-muted-foreground">{instruction.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {instruction.registrationId}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={instruction.status === 'Approved' ? 'default' : 'secondary'}>
                          {instruction.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Joined: {instruction.joinDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
