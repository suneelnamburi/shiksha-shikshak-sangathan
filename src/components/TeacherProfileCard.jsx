
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, Star, Award, Calendar, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherProfileCard = ({
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
    <Card className="card-standard h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-brand-primary-foreground font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-card-foreground line-clamp-2">
              {name}
            </CardTitle>
            <p className="text-muted-foreground text-sm font-medium truncate">{subject} Teacher</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(rating) ? "fill-brand-warning text-brand-warning" : "text-muted"}
                  />
                ))}
                <span className="ml-1 text-xs text-muted-foreground">
                  {rating.toFixed(1)} ({totalRatings} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={14} className="mr-2 text-brand-primary shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-2 text-brand-primary shrink-0" />
            <span className="truncate">{experience} experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award size={14} className="mr-2 text-brand-primary shrink-0" />
            <span className="truncate">{education}</span>
          </div>
          {school && (
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen size={14} className="mr-2 text-brand-primary shrink-0" />
              <span className="truncate">Currently at {school}</span>
            </div>
          )}
        </div>

        <div className="success-section flex-1">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-brand-success rounded-full flex items-center justify-center mr-2 shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="font-medium text-sm text-card-foreground">Specializations:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {specializations.map((spec, index) => (
              <span key={index} className="text-xs text-muted-foreground bg-card px-2 py-1 rounded truncate">
                • {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h4 className="font-medium text-sm text-card-foreground mb-2">Contact Details:</h4>
          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground">
              <Mail size={12} className="mr-2 text-brand-primary shrink-0" />
              <span className="truncate">{email}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Phone size={12} className="mr-2 text-brand-primary shrink-0" />
              <span className="truncate">{phone}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2 mt-auto">
          <Link to={`/teacher-profile/${id}`} className="flex-1">
            <Button className="w-full btn-primary text-sm">
              View Profile
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

export default TeacherProfileCard;
