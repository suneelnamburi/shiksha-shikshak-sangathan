
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, Star, Award, Calendar, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeacherProfileCardProps {
  id: string;
  name: string;
  subject: string;
  experience: string;
  location: string;
  education: string;
  rating: number;
  totalRatings: number;
  school?: string;
  email: string;
  phone: string;
  specializations: string[];
  avatar?: string;
}

const TeacherProfileCard: React.FC<TeacherProfileCardProps> = ({
  id,
  name,
  subject,
  experience,
  location,
  education,
  rating,
  totalRatings,
  school,
  email,
  phone,
  specializations,
  avatar
}) => {
  return (
    <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-2xl object-cover" />
            ) : (
              <span className="text-brand-primary-foreground font-bold text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-bold text-card-foreground line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
              {name}
            </CardTitle>
            <p className="text-muted-foreground text-base font-semibold truncate mt-1">{subject} Teacher</p>
            <div className="flex items-center mt-2 bg-brand-warning/10 rounded-lg px-3 py-1 w-fit">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(rating) ? "fill-brand-warning text-brand-warning" : "text-muted"}
                  />
                ))}
                <span className="ml-2 text-sm font-bold text-brand-warning">
                  {rating.toFixed(1)} ({totalRatings})
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5 flex-1 flex flex-col">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
            <MapPin size={16} className="mr-3 text-brand-primary shrink-0" />
            <span className="truncate font-medium">{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
            <Calendar size={16} className="mr-3 text-brand-primary shrink-0" />
            <span className="truncate font-medium">{experience} of experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
            <Award size={16} className="mr-3 text-brand-primary shrink-0" />
            <span className="truncate font-medium">{education}</span>
          </div>
          {school && (
            <div className="flex items-center text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
              <BookOpen size={16} className="mr-3 text-brand-primary shrink-0" />
              <span className="truncate font-medium">Currently at {school}</span>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-xl p-4 border-l-4 border-brand-success flex-1">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 bg-brand-success rounded-full flex items-center justify-center mr-3 shrink-0">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="font-bold text-base text-card-foreground">Specializations:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec, index) => (
              <span key={index} className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-lg border border-brand-primary/20">
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-xl p-4 border border-border/30">
          <h4 className="font-bold text-base text-card-foreground mb-3">Contact Information:</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail size={14} className="mr-3 text-brand-primary shrink-0" />
              <span className="truncate font-medium">{email}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone size={14} className="mr-3 text-brand-primary shrink-0" />
              <span className="truncate font-medium">{phone}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 mt-auto">
          <Link to={`/teacher-profile/${id}`} className="flex-1">
            <Button className="w-full h-12 font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary">
              View Profile
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

export default TeacherProfileCard;
