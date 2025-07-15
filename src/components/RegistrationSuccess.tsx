
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Copy, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RegistrationSuccessProps {
  userType: 'teacher' | 'school' | 'institution';
  uniqueId: string;
  email: string;
  name: string;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ 
  userType, 
  uniqueId, 
  email, 
  name 
}) => {
  const [countdown, setCountdown] = useState(15);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uniqueId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getUserTypeLabel = () => {
    switch (userType) {
      case 'teacher': return 'Teacher';
      case 'school': return 'School';
      case 'institution': return 'Institution';
      default: return '';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="text-white" size={40} />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-green-800">
          Registration Successful!
        </CardTitle>
        <p className="text-gray-600 text-lg">
          Welcome to शिक्षक Portal, {name}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Clock className="mr-2 text-green-600" size={20} />
            Your Unique {getUserTypeLabel()} ID
          </h3>
          
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
            <div className="flex items-center justify-between">
              <code className="text-2xl font-mono font-bold text-primary bg-primary/10 px-4 py-2 rounded">
                {uniqueId}
              </code>
              <Button 
                onClick={copyToClipboard}
                variant="outline"
                className="ml-4"
              >
                <Copy size={16} className="mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800 font-medium">
              <Clock className="inline mr-1" size={14} />
              This ID will be hidden in {countdown} seconds. Please save it now!
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
            <Mail className="mr-2" size={16} />
            Login Details Sent
          </h4>
          <p className="text-sm text-blue-700">
            Your login credentials have been sent to <strong>{email}</strong>
          </p>
          <p className="text-xs text-blue-600 mt-2">
            Please check your inbox and spam folder for the login details.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Important Notes:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Keep your unique ID safe - you'll need it for verification</li>
            <li>• Check your email for login credentials</li>
            <li>• You can now sign in to access your dashboard</li>
            <li>• Complete your profile for better job matching</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to="/signin" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Sign In Now
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button variant="outline" className="w-full">
              Go to Home
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationSuccess;
