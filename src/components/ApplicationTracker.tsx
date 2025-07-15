
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Mail, Phone, Calendar, FileText, CheckCircle, XCircle, Clock, UserCheck, Briefcase } from 'lucide-react';

interface Application {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  appliedDate: string;
  jobTitle: string;
  status: 'pending' | 'in-review' | 'accepted' | 'rejected' | 'interview' | 'offer-rolled-out';
  cvUrl?: string;
}

interface ApplicationTrackerProps {
  applications: Application[];
  onStatusChange: (applicationId: string, newStatus: Application['status']) => void;
}

const ApplicationTracker: React.FC<ApplicationTrackerProps> = ({ applications, onStatusChange }) => {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'interview': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'offer-rolled-out': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'pending': return <Clock size={16} />;
      case 'in-review': return <FileText size={16} />;
      case 'accepted': return <CheckCircle size={16} />;
      case 'rejected': return <XCircle size={16} />;
      case 'interview': return <UserCheck size={16} />;
      case 'offer-rolled-out': return <Briefcase size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const getNextStatusOptions = (currentStatus: Application['status']) => {
    switch (currentStatus) {
      case 'pending':
        return [
          { value: 'in-review', label: 'Move to In Review' },
          { value: 'rejected', label: 'Reject Application' }
        ];
      case 'in-review':
        return [
          { value: 'accepted', label: 'Accept Application' },
          { value: 'rejected', label: 'Reject Application' }
        ];
      case 'accepted':
        return [
          { value: 'interview', label: 'Schedule Interview' },
          { value: 'rejected', label: 'Reject Application' }
        ];
      case 'interview':
        return [
          { value: 'offer-rolled-out', label: 'Roll Out Offer' },
          { value: 'rejected', label: 'Reject Application' }
        ];
      case 'offer-rolled-out':
        return [];
      case 'rejected':
        return [
          { value: 'in-review', label: 'Reconsider Application' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Application Tracker</h2>
        <p className="text-muted-foreground">Manage and track job applications</p>
      </div>

      <div className="grid gap-4">
        {applications.map((application) => (
          <Card key={application.id} className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{application.applicantName}</CardTitle>
                    <p className="text-sm text-muted-foreground">Applied for: {application.jobTitle}</p>
                  </div>
                </div>
                
                <Badge className={`${getStatusColor(application.status)} font-medium px-3 py-1`}>
                  {getStatusIcon(application.status)}
                  <span className="ml-2 capitalize">{application.status.replace('-', ' ')}</span>
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-muted-foreground" />
                  <span>{application.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-muted-foreground" />
                  <span>{application.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span>Applied: {application.appliedDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex space-x-2">
                  {application.cvUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={application.cvUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={16} className="mr-2" />
                        View CV
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Mail size={16} className="mr-2" />
                    Contact
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Select
                    value=""
                    onValueChange={(newStatus) => onStatusChange(application.id, newStatus as Application['status'])}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {getNextStatusOptions(application.status).map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {applications.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Applications Yet</h3>
            <p className="text-muted-foreground">Applications will appear here when teachers apply for your posted jobs.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ApplicationTracker;
