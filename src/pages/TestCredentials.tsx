
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TestCredentials from '@/components/TestCredentials';

const TestCredentialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">@</span>
              </div>
              <span className="text-2xl font-bold text-foreground">शिक्षक Portal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <TestCredentials />
      </div>
    </div>
  );
};

export default TestCredentialsPage;
