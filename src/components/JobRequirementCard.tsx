
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, AlertCircle, CheckCircle, Star } from 'lucide-react';
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
    if (urgency === 'ASAP' || urgency === 'Immediate') return 'bg-red-500/10 text-red-600 border-red-500/30';
    if (urgency.includes('15 days')) return 'bg-brand-warning/10 text-brand-warning border-brand-warning/30';
    return 'bg-brand-warning/10 text-brand-warning border-brand-warning/30';
  };

  const handleApplyNow = () => {
    setIsApplying(true);
    setTimeout(() => {
      console.log(`Notification sent to ${school} for ${title} application`);
      setIsApplying(false);
      navigate(`/apply-now/${id}`);
    }, 1000);
  };

  const handleContact = () => {
    window.location.href = `mailto:${contactEmail}?subject=Inquiry about ${title} position`;
  };

  return (
    <Card className="group cursor-pointer h-full flex flex-col bg-card/80 backdrop-blur-sm border-2 border-brand-primary/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/50 overflow-hidden">
      <CardHeader className="pb-4 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <AlertCircle className="text-brand-primary-foreground" size={26} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-card-foreground group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
              <p className="text-muted-foreground font-semibold text-lg mt-1">{school}</p>
            </div>
          </div>
          
          <Badge className={`${getUrgencyColor(urgency)} font-bold text-sm px-4 py-2 rounded-xl shadow-sm`}>
            {urgency}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2 bg-muted/30 rounded-lg px-3 py-2">
            <MapPin size={18} className="text-brand-primary" />
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/30 rounded-lg px-3 py-2">
            <Clock size={18} className="text-brand-primary" />
            <span className="font-medium">{timePosted}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-xl p-5 border-l-4 border-brand-success flex-1">
          <h4 className="font-bold text-lg text-card-foreground mb-4 flex items-center">
            <CheckCircle size={20} className="text-brand-success mr-3" />
            Job Requirements:
          </h4>
          <ul className="space-y-3">
            {requirements.map((req, index) => (
              <li key={index} className="text-base text-muted-foreground flex items-start">
                <Star size={16} className="text-brand-primary mr-3 mt-0.5 shrink-0" />
                <span className="font-medium">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl p-5 border border-brand-primary/20">
          <p className="text-sm text-muted-foreground font-medium mb-2">Competitive Salary Package</p>
          <p className="text-3xl font-bold text-brand-primary">{salary}</p>
        </div>

        <div className="bg-muted/30 rounded-xl p-5 border border-border/30">
          <h4 className="font-bold text-lg text-card-foreground mb-4">Contact Information:</h4>
          <div className="space-y-3">
            <div className="flex items-center text-base text-muted-foreground">
              <Mail size={16} className="text-brand-primary mr-3" />
              <span className="font-medium">{contactEmail}</span>
            </div>
            <div className="flex items-center text-base text-muted-foreground">
              <Phone size={16} className="text-brand-primary mr-3" />
              <span className="font-medium">{contactPhone}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/30 mt-auto">
          <div className="flex space-x-4">
            <Button 
              className="flex-1 h-14 font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary"
              onClick={handleApplyNow}
              disabled={isApplying}
            >
              {isApplying ? 'Applying...' : 'Apply Now'}
            </Button>
            <Button 
              variant="outline" 
              className="px-8 h-14 text-base font-semibold rounded-xl border-2 border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
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
