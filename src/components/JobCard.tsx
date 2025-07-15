
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, BookOpen, DollarSign, Building2, Hash } from 'lucide-react';
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
  schoolId?: string;
  institutionId?: string;
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
    <Card className="border-2 border-gray-300 hover:shadow-xl transition-all duration-300 hover:border-primary/70 group bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin size={16} className="mr-1" />
          <span className="font-medium">{school}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span>{timePosted}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <BookOpen size={14} className="mr-1" />
            <span>{experience}</span>
          </div>
        </div>
        
        <div className="flex items-center text-primary font-semibold">
          <DollarSign size={16} className="mr-1" />
          <span>{salary}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-muted">
            {board}
          </Badge>
          <div className="flex flex-wrap gap-1">
            {subjects.slice(0, 2).map((subject, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
            {subjects.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{subjects.length - 2}
              </Badge>
            )}
          </div>
        </div>

        {/* Institution and School IDs */}
        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center text-muted-foreground">
              <Hash size={12} className="mr-1 text-primary" />
              <span>Job ID: {id}</span>
            </div>
          </div>
          {schoolId && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Building2 size={12} className="mr-1 text-primary" />
              <span>School ID: {schoolId}</span>
            </div>
          )}
          {institutionId && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Building2 size={12} className="mr-1 text-primary" />
              <span>Institution ID: {institutionId}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to={`/apply-now/${id}`}>Apply Now</Link>
          </Button>
          <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Save Job
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
