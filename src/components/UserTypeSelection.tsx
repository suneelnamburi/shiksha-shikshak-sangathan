
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, GraduationCap, Users } from 'lucide-react';

interface UserTypeSelectionProps {
  onSelectType: (type: 'teacher' | 'school' | 'institution') => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelectType }) => {
  const userTypes = [
    {
      type: 'teacher' as const,
      icon: GraduationCap,
      title: 'Teacher',
      description: 'Individual educator looking for teaching opportunities',
      color: 'bg-blue-500'
    },
    {
      type: 'school' as const,
      icon: Building,
      title: 'School',
      description: 'Educational institution seeking qualified teachers',
      color: 'bg-green-500'
    },
    {
      type: 'institution' as const,
      icon: Users,
      title: 'Institution',
      description: 'Educational organization or academy',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select User Type</h2>
        <p className="text-muted-foreground">Choose the option that best describes you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userTypes.map((userType) => (
          <Card 
            key={userType.type} 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
            onClick={() => onSelectType(userType.type)}
          >
            <CardHeader className="text-center">
              <div className={`w-16 h-16 ${userType.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <userType.icon className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl">{userType.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">{userType.description}</p>
              <Button 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectType(userType.type);
                }}
              >
                Select {userType.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelection;
