
import React from 'react';
import { MapPin, Clock, AlertCircle, Star } from 'lucide-react';
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
    <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <AlertCircle className="text-brand-primary-foreground" size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-xl font-bold text-card-foreground line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
                {title}
              </CardTitle>
              <p className="text-muted-foreground text-base font-semibold truncate mt-1">{school}</p>
            </div>
          </div>
          <Badge className="bg-brand-accent/80 text-brand-primary border-brand-primary/30 font-bold text-xs whitespace-nowrap px-3 py-1 rounded-lg shadow-sm">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center min-w-0 bg-muted/30 rounded-lg px-3 py-2">
            <MapPin size={16} className="mr-2 text-brand-primary shrink-0" />
            <span className="truncate font-medium">{location}</span>
          </div>
          <div className="flex items-center shrink-0 bg-muted/30 rounded-lg px-3 py-2">
            <Clock size={16} className="mr-2 text-brand-primary" />
            <span className="font-medium">{timePosted}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-xl p-4 border-l-4 border-brand-success flex-1">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 bg-brand-success rounded-full flex items-center justify-center mr-3 shrink-0">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="font-bold text-base text-card-foreground">Requirements:</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-start text-sm text-muted-foreground">
              <Star size={14} className="mr-2 mt-0.5 text-brand-primary" />
              <span className="font-medium">{experience} experience required</span>
            </div>
            <div className="flex items-start text-sm text-muted-foreground">
              <Star size={14} className="mr-2 mt-0.5 text-brand-primary" />
              <span className="font-medium">{board} board curriculum knowledge</span>
            </div>
            <div className="flex items-start text-sm text-muted-foreground">
              <Star size={14} className="mr-2 mt-0.5 text-brand-primary" />
              <span className="font-medium">Subjects: {subjects.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl p-4 border border-brand-primary/20">
          <p className="text-sm text-muted-foreground font-medium mb-1">Competitive Salary</p>
          <p className="text-2xl font-bold text-brand-primary">{salary}</p>
        </div>

        <div className="bg-muted/30 rounded-xl p-4 border border-border/30">
          <h4 className="font-bold text-base text-card-foreground mb-3">Contact Information:</h4>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-brand-primary">School ID:</span> {schoolId}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-brand-primary">Institution ID:</span> {institutionId}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 mt-auto">
          <Link to={`/apply-now/${id}`} className="flex-1">
            <Button className="w-full h-12 font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary">
              Apply Now
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 h-12 text-base font-semibold rounded-xl border-2 border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
