
import React from 'react';
import { MapPin, Clock, Building, DollarSign, BookOpen, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JobCard = ({
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
    <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="text-white" size={20} />
            </div>
            <div className="min-w-0">
              <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                {title}
              </CardTitle>
              <p className="text-gray-600 text-sm font-medium truncate">{school}</p>
            </div>
          </div>
          <Badge className="bg-red-50 text-red-700 border-red-200 font-medium text-xs whitespace-nowrap">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center min-w-0">
            <MapPin size={14} className="mr-1 text-red-500 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center shrink-0">
            <Clock size={14} className="mr-1 text-red-500" />
            <span>{timePosted}</span>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-3 flex-1">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2 shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="font-medium text-sm text-gray-800">Requirements:</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-start text-xs text-gray-600">
              <span className="mr-2 mt-1">•</span>
              <span>{experience} experience</span>
            </div>
            <div className="flex items-start text-xs text-gray-600">
              <span className="mr-2 mt-1">•</span>
              <span>{board} board knowledge</span>
            </div>
            <div className="flex items-start text-xs text-gray-600">
              <span className="mr-2 mt-1">•</span>
              <span>Subjects: {subjects.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-600">Salary Range</p>
            <p className="text-lg font-semibold text-red-600">{salary}</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-3">
          <h4 className="font-medium text-sm text-gray-800 mb-2">Contact Details:</h4>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">
              <span className="font-medium">School ID:</span> {schoolId}
            </div>
            <div className="text-xs text-gray-600">
              <span className="font-medium">Institution ID:</span> {institutionId}
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2 mt-auto">
          <Link to={`/apply-now/${id}`} className="flex-1">
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm">
              Apply Now
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 text-sm border-red-500 text-red-500 hover:bg-red-50">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
