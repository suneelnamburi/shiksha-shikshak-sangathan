
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface JobRequirementCardProps {
  id: number;
  title: string;
  school: string;
  location: string;
  requirements: string[];
  salary: string;
  urgency: string;
  contactEmail: string;
  contactPhone: string;
  timePosted: string;
}

const JobRequirementCard: React.FC<JobRequirementCardProps> = ({
  id,
  title,
  school,
  location,
  requirements,
  salary,
  urgency,
  contactEmail,
  contactPhone,
  timePosted
}) => {
  const navigate = useNavigate();
  const [isApplying, setIsApplying] = useState(false);

  const getUrgencyColor = (urgency: string) => {
    if (urgency === 'ASAP' || urgency === 'Immediate') return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
    if (urgency.includes('15 days')) return 'bg-brand-warning/10 text-brand-warning border-brand-warning/20';
    return 'bg-brand-warning/10 text-brand-warning border-brand-warning/20';
  };

  const handleApplyNow = () => {
    setIsApplying(true);
    // Simulate notification to school/institution
    setTimeout(() => {
      console.log(`Notification sent to ${school} for ${title} application`);
      setIsApplying(false);
      navigate(`/apply-now/${id}`);
    }, 1000);
  };

  const handleContact = () => {
    // Open email client or show contact modal
    window.location.href = `mailto:${contactEmail}?subject=Inquiry about ${title} position`;
  };

  return (
    <Card className="group cursor-pointer card-standard hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-brand-primary/20 bg-card overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center">
              <AlertCircle className="text-brand-primary-foreground" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-brand-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground font-medium">{school}</p>
            </div>
          </div>
          
          <Badge className={`${getUrgencyColor(urgency)} font-bold text-xs px-3 py-1`}>
            {urgency}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-brand-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-brand-primary" />
            <span>{timePosted}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-muted/50 rounded-lg p-3">
            <h4 className="font-semibold text-card-foreground mb-2 flex items-center">
              <CheckCircle size={16} className="text-brand-primary mr-2" />
              Requirements:
            </h4>
            <ul className="space-y-1">
              {requirements.map((req, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Salary Range</p>
              <p className="text-lg font-bold text-brand-primary">{salary}</p>
            </div>
          </div>

          <div className="contact-section">
            <h4 className="font-semibold text-card-foreground mb-2">Contact Details:</h4>
            <div className="space-y-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail size={14} className="text-brand-primary mr-2" />
                <span>{contactEmail}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone size={14} className="text-brand-primary mr-2" />
                <span>{contactPhone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex space-x-3">
            <Button 
              className="flex-1 btn-primary transition-all duration-300 transform hover:scale-105"
              onClick={handleApplyNow}
              disabled={isApplying}
            >
              {isApplying ? 'Applying...' : 'Apply Now'}
            </Button>
            <Button 
              variant="outline" 
              className="px-6 btn-outline transition-all duration-300"
              onClick={handleContact}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobRequirementCard;
