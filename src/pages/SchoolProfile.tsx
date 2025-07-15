
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, MapPin, Globe, Phone, Mail, Calendar, Users, BookOpen, Plus, Edit, Trash2 } from 'lucide-react';

const SchoolProfile = () => {
  const [activeJobs, setActiveJobs] = useState([
    {
      id: 1,
      title: 'Mathematics Teacher',
      subject: 'Mathematics',
      experience: '3-5 years',
      salary: '₹40,000 - ₹60,000',
      type: 'Full-time',
      postedDate: '2024-01-15',
      applications: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'English Teacher',
      subject: 'English',
      experience: '2-4 years',
      salary: '₹35,000 - ₹50,000',
      type: 'Part-time',
      postedDate: '2024-01-10',
      applications: 8,
      status: 'Active'
    }
  ]);

  const schoolInfo = {
    name: 'Delhi Public School',
    principalName: 'Dr. Rajesh Kumar',
    email: 'info@dpsdelhi.edu.in',
    phone: '+91 98765 43210',
    address: '123 Education Street, New Delhi',
    website: 'https://dpsdelhi.edu.in',
    board: 'CBSE',
    establishedYear: '1990',
    totalStudents: 1200,
    totalTeachers: 85,
    schoolId: 'SCH_LMN789_XYZ12'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">@</span>
              </div>
              <span className="text-2xl font-bold text-foreground">शिक्षक Portal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* School Info Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Building className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{schoolInfo.name}</CardTitle>
                    <p className="text-muted-foreground">Principal: {schoolInfo.principalName}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" size={16} />
                  <span className="text-sm">{schoolInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" size={16} />
                  <span className="text-sm">{schoolInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" size={16} />
                  <span className="text-sm">{schoolInfo.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="text-primary" size={16} />
                  <a href={schoolInfo.website} className="text-sm text-primary hover:underline">
                    {schoolInfo.website}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-primary" size={16} />
                  <span className="text-sm">Board: {schoolInfo.board}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-sm">Established: {schoolInfo.establishedYear}</span>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{schoolInfo.totalStudents}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{schoolInfo.totalTeachers}</div>
                      <div className="text-sm text-muted-foreground">Teachers</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Badge variant="secondary" className="w-full justify-center">
                    ID: {schoolInfo.schoolId}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="jobs">Job Postings</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>School Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {schoolInfo.name} is a prestigious educational institution established in {schoolInfo.establishedYear}. 
                        We are affiliated with {schoolInfo.board} board and committed to providing quality education.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Our Vision</h4>
                          <p className="text-sm text-muted-foreground">
                            To nurture young minds and prepare them for a bright future through innovative teaching methods.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Our Mission</h4>
                          <p className="text-sm text-muted-foreground">
                            To provide holistic education that develops intellectual, emotional, and social capabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Active Job Postings</h3>
                  <Link to="/post-job">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="mr-2" size={16} />
                      Post New Job
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <h4 className="font-semibold">{job.title}</h4>
                              <Badge variant="outline">{job.type}</Badge>
                              <Badge variant="secondary">{job.status}</Badge>
                            </div>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p>Subject: {job.subject}</p>
                              <p>Experience: {job.experience}</p>
                              <p>Salary: {job.salary}</p>
                              <p>Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">{job.applications}</div>
                              <div className="text-xs text-muted-foreground">Applications</div>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="outline" size="sm">
                                <Edit size={14} />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Priya Sharma</h4>
                          <p className="text-sm text-muted-foreground">Applied for Mathematics Teacher</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button size="sm">Contact</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Amit Kumar</h4>
                          <p className="text-sm text-muted-foreground">Applied for English Teacher</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button size="sm">Contact</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
