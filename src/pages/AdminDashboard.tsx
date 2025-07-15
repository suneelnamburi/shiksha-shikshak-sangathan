
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building, GraduationCap, CheckCircle, XCircle, Eye, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const [pendingVerifications, setPendingVerifications] = useState({
    teachers: [
      { id: 'TCH_001', name: 'Dr. Priya Sharma', email: 'priya@example.com', status: 'pending', documents: 'CV, Certificates' },
      { id: 'TCH_002', name: 'Amit Kumar', email: 'amit@example.com', status: 'pending', documents: 'CV, ID Proof' }
    ],
    schools: [
      { id: 'SCH_001', name: 'Delhi Public School', email: 'info@dps.edu', status: 'pending', documents: 'License, Registration' },
      { id: 'SCH_002', name: 'Modern School', email: 'admin@modern.edu', status: 'pending', documents: 'Certificate, NOC' }
    ],
    instructions: [
      { id: 'INS_001', name: 'Excellence Coaching', email: 'info@excellence.edu', status: 'pending', documents: 'License, Tax Certificate' }
    ]
  });

  const [jobPostings, setJobPostings] = useState([
    { id: 'JOB_001', title: 'Mathematics Teacher', school: 'Delhi Public School', status: 'pending_approval', posted: '2024-01-15' },
    { id: 'JOB_002', title: 'English Teacher', school: 'Modern School', status: 'approved', posted: '2024-01-10' }
  ]);

  const handleApprove = (type: string, id: string) => {
    setPendingVerifications(prev => ({
      ...prev,
      [type]: prev[type as keyof typeof prev].map(item => 
        item.id === id ? { ...item, status: 'approved' } : item
      )
    }));
  };

  const handleReject = (type: string, id: string) => {
    setPendingVerifications(prev => ({
      ...prev,
      [type]: prev[type as keyof typeof prev].map(item => 
        item.id === id ? { ...item, status: 'rejected' } : item
      )
    }));
  };

  const handleJobApproval = (jobId: string, action: string) => {
    setJobPostings(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: action === 'approve' ? 'approved' : 'rejected' } : job
    ));
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
              <span className="text-primary-foreground font-bold text-lg">@</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Admin Dashboard</span>
          </div>
        </div>

        <Tabs defaultValue="verifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="verifications">Profile Verifications</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>

          <TabsContent value="verifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Teachers Verification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="text-blue-600" size={20} />
                    <span>Teachers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVerifications.teachers.map((teacher) => (
                      <div key={teacher.id} className="border rounded-lg p-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{teacher.name}</h4>
                          <p className="text-sm text-muted-foreground">{teacher.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {teacher.id}</p>
                          <p className="text-xs text-muted-foreground">Documents: {teacher.documents}</p>
                          <Badge variant={teacher.status === 'pending' ? 'secondary' : 'default'}>
                            {teacher.status}
                          </Badge>
                        </div>
                        {teacher.status === 'pending' && (
                          <div className="flex space-x-2 mt-3">
                            <Button 
                              size="sm" 
                              onClick={() => handleApprove('teachers', teacher.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleReject('teachers', teacher.id)}
                            >
                              <XCircle size={14} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Schools Verification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="text-green-600" size={20} />
                    <span>Schools</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVerifications.schools.map((school) => (
                      <div key={school.id} className="border rounded-lg p-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{school.name}</h4>
                          <p className="text-sm text-muted-foreground">{school.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {school.id}</p>
                          <p className="text-xs text-muted-foreground">Documents: {school.documents}</p>
                          <Badge variant={school.status === 'pending' ? 'secondary' : 'default'}>
                            {school.status}
                          </Badge>
                        </div>
                        {school.status === 'pending' && (
                          <div className="flex space-x-2 mt-3">
                            <Button 
                              size="sm" 
                              onClick={() => handleApprove('schools', school.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleReject('schools', school.id)}
                            >
                              <XCircle size={14} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Instructions Verification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="text-purple-600" size={20} />
                    <span>Instructions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVerifications.instructions.map((instruction) => (
                      <div key={instruction.id} className="border rounded-lg p-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{instruction.name}</h4>
                          <p className="text-sm text-muted-foreground">{instruction.email}</p>
                          <p className="text-xs text-muted-foreground">ID: {instruction.id}</p>
                          <p className="text-xs text-muted-foreground">Documents: {instruction.documents}</p>
                          <Badge variant={instruction.status === 'pending' ? 'secondary' : 'default'}>
                            {instruction.status}
                          </Badge>
                        </div>
                        {instruction.status === 'pending' && (
                          <div className="flex space-x-2 mt-3">
                            <Button 
                              size="sm" 
                              onClick={() => handleApprove('instructions', instruction.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleReject('instructions', instruction.id)}
                            >
                              <XCircle size={14} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Postings Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobPostings.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.school}</p>
                        <p className="text-xs text-muted-foreground">ID: {job.id} | Posted: {job.posted}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={job.status === 'approved' ? 'default' : 'secondary'}>
                          {job.status.replace('_', ' ')}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye size={14} />
                          </Button>
                          {job.status === 'pending_approval' && (
                            <>
                              <Button 
                                size="sm" 
                                onClick={() => handleJobApproval(job.id, 'approve')}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Approve
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleJobApproval(job.id, 'reject')}
                              >
                                Reject
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="outline">
                            <Edit size={14} />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    Manage Services
                  </Button>
                  <Button className="w-full" variant="outline">
                    System Settings
                  </Button>
                  <Button className="w-full" variant="outline">
                    User Reports
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    View Analytics
                  </Button>
                  <Button className="w-full" variant="outline">
                    Generate Reports
                  </Button>
                  <Button className="w-full" variant="outline">
                    Export Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    Send Notifications
                  </Button>
                  <Button className="w-full" variant="outline">
                    Backup System
                  </Button>
                  <Button className="w-full" variant="outline">
                    View Logs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
