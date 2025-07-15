
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Building, GraduationCap, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestCredentials = () => {
  const credentials = [
    {
      type: 'Teacher',
      icon: GraduationCap,
      id: 'TCHR_ABC123_DEF45',
      email: 'teacher@example.com',
      password: 'teacher123',
      name: 'Priya Sharma',
      color: 'bg-blue-500'
    },
    {
      type: 'School',
      icon: Building,
      id: 'SCH_XYZ789_GHI01',
      email: 'school@example.com',
      password: 'school123',
      name: 'Delhi Public School',
      color: 'bg-green-500'
    },
    {
      type: 'Institution',
      icon: Building,
      id: 'INST_LMN456_JKL23',
      email: 'institution@example.com',
      password: 'institution123',
      name: 'Ryan International School',
      color: 'bg-purple-500'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Test Login Credentials</h2>
        <p className="text-muted-foreground">Use these credentials to test different user types</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {credentials.map((cred, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${cred.color} rounded-full flex items-center justify-center`}>
                  <cred.icon className="text-white" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">{cred.type}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cred.name}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">User ID</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cred.id)}
                      className="h-6 w-6 p-0"
                    >
                      <Copy size={12} />
                    </Button>
                  </div>
                  <Badge variant="outline" className="w-full justify-center font-mono text-xs">
                    {cred.id}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Email</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cred.email)}
                      className="h-6 w-6 p-0"
                    >
                      <Copy size={12} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{cred.email}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Password</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cred.password)}
                      className="h-6 w-6 p-0"
                    >
                      <Copy size={12} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{cred.password}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Click the copy icons to copy credentials to clipboard
        </p>
      </div>
    </div>
  );
};

// Label component for internal use
const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={className} {...props} />
);

export default TestCredentials;
