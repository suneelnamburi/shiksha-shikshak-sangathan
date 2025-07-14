
import React, { useState } from 'react';
import { MapPin, Clock, Heart, Briefcase, GraduationCap, IndianRupee, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  id: number;
  title: string;
  school: string;
  location: string;
  category: string;
  timePosted: string;
  experience: string;
  salary: string;
  board: string;
  subjects: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  school,
  location,
  category,
  timePosted,
  experience,
  salary,
  board,
  subjects
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#D32F2F] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 font-medium">{school}</p>
            </div>
          </div>
          
          <button
            onClick={handleLike}
            className={`p-2 rounded-full transition-all duration-300 ${
              isLiked 
                ? 'bg-[#D32F2F] text-white shadow-lg' 
                : 'bg-gray-100 text-gray-400 hover:bg-[#FCE4EC] hover:text-[#D32F2F]'
            }`}
          >
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-[#D32F2F]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-[#D32F2F]" />
            <span>{timePosted}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-[#FCE4EC] text-[#D32F2F] hover:bg-[#F8BBD9]">
              {category}
            </Badge>
            <Badge variant="outline" className="border-[#D32F2F] text-[#D32F2F]">
              {board}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Briefcase size={16} className="text-[#D32F2F]" />
              <span className="text-gray-600">{experience}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IndianRupee size={16} className="text-[#D32F2F]" />
              <span className="text-gray-600 font-medium">{salary}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BookOpen size={16} className="text-[#D32F2F]" />
              <span className="text-sm font-medium text-gray-700">Subjects:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border-gray-300 hover:border-[#D32F2F] hover:text-[#D32F2F] transition-colors duration-200"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex space-x-3">
            <Button 
              className="flex-1 bg-[#D32F2F] hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="px-6 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
            >
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
