
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, BookOpen, DollarSign } from 'lucide-react';
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
  subjects
}) => {
  return (
    <Card className="border-2 border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
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
        
        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to={`/apply-now/${id}`}>Apply Now</Link>
          </Button>
          <Button variant="outline" className="flex-1">
            Save Job
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
