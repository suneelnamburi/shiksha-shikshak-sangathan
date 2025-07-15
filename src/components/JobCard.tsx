
import React from 'react';
import { MapPin, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: string;
  title: string;
  school: string;
  location: string;
  category: string;
  timePosted: string;
  experience: string;
  salary: string;
  board: string;
  subjects: string[];
  schoolId: string;
  institutionId: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  school,
  location,
  category,
  timePosted,
  experience,
  salary,
  board,
  subjects,
  schoolId,
  institutionId
}) => {
  return (
    <Card className="card-standard h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="text-brand-primary-foreground" size={20} />
            </div>
            <div className="min-w-0">
              <CardTitle className="text-lg font-semibold text-card-foreground line-clamp-2">
                {title}
              </CardTitle>
              <p className="text-muted-foreground text-sm font-medium truncate">{school}</p>
            </div>
          </div>
          <Badge className="bg-brand-accent text-brand-primary border-brand-primary/20 font-medium text-xs whitespace-nowrap">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center min-w-0">
            <MapPin size={14} className="mr-1 text-brand-primary shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center shrink-0">
            <Clock size={14} className="mr-1 text-brand-primary" />
            <span>{timePosted}</span>
          </div>
        </div>

        <div className="success-section flex-1">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-brand-success rounded-full flex items-center justify-center mr-2 shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="font-medium text-sm text-card-foreground">Requirements:</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="mr-2 mt-1">•</span>
              <span>{experience} experience</span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="mr-2 mt-1">•</span>
              <span>{board} board knowledge</span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="mr-2 mt-1">•</span>
              <span>Subjects: {subjects.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-xs text-muted-foreground">Salary Range</p>
            <p className="text-lg font-semibold text-brand-primary">{salary}</p>
          </div>
        </div>

        <div className="contact-section">
          <h4 className="font-medium text-sm text-card-foreground mb-2">Contact Details:</h4>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">School ID:</span> {schoolId}
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Institution ID:</span> {institutionId}
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2 mt-auto">
          <Link to={`/apply-now/${id}`} className="flex-1">
            <Button className="w-full btn-primary text-sm">
              Apply Now
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 text-sm btn-outline">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
