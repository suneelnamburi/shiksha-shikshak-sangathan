
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, Star, Award, Calendar, Mail, Phone } from 'lucide-react';

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
    <Card className="border-2 border-gray-300 hover:shadow-xl transition-all duration-300 hover:border-primary/70 group bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-primary-foreground font-bold text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <p className="text-primary font-semibold text-lg">{subject} Teacher</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {rating.toFixed(1)} ({totalRatings} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={14} className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-2 text-primary" />
            <span>{experience} experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award size={14} className="mr-2 text-primary" />
            <span>{education}</span>
          </div>
          {school && (
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen size={14} className="mr-2 text-primary" />
              <span>Currently at {school}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground">Specializations:</h4>
          <div className="flex flex-wrap gap-1">
            {specializations.map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <div className="flex items-center">
              <Mail size={12} className="mr-1" />
              <span className="truncate">{email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={12} className="mr-1" />
              <span>{phone}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-sm">
              View Profile
            </Button>
            <Button variant="outline" className="flex-1 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            ID: {id}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherProfileCard;
