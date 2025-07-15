
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, DollarSign, Clock, Users, BookOpen, MapPin } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    experience: '',
    salary: '',
    jobType: '',
    description: '',
    requirements: '',
    benefits: '',
    location: '',
    applicationDeadline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting data:', formData);
    // Handle job posting logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/school-profile" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Profile
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
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl">Post a New Job</CardTitle>
                  <p className="text-muted-foreground">Fill in the details to post a teaching position</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="e.g., Mathematics Teacher"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={(value) => handleSelectChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="social-studies">Social Studies</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade Level</Label>
                    <Select onValueChange={(value) => handleSelectChange('grade', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary (1-5)</SelectItem>
                        <SelectItem value="middle">Middle (6-8)</SelectItem>
                        <SelectItem value="secondary">Secondary (9-10)</SelectItem>
                        <SelectItem value="senior-secondary">Senior Secondary (11-12)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Required</Label>
                    <Select onValueChange={(value) => handleSelectChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary Range</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="salary"
                        name="salary"
                        type="text"
                        placeholder="e.g., ₹40,000 - ₹60,000"
                        value={formData.salary}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobType">Job Type</Label>
                    <Select onValueChange={(value) => handleSelectChange('jobType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g., New Delhi"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="applicationDeadline">Application Deadline</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="applicationDeadline"
                        name="applicationDeadline"
                        type="date"
                        value={formData.applicationDeadline}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="List the qualifications, skills, and experience required..."
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    name="benefits"
                    placeholder="Mention salary, benefits, professional development opportunities..."
                    value={formData.benefits}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-4 pt-6">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 px-8">
                    Post Job
                  </Button>
                  <Button type="button" variant="outline" asChild>
                    <Link to="/school-profile">Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
