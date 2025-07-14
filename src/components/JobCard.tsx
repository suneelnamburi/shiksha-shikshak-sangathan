
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
    <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-3 sm:pb-4 flex-shrink-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-white" size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#D32F2F] transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base truncate">{school}</p>
            </div>
          </div>
          
          <button
            onClick={handleLike}
            className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
              isLiked 
                ? 'bg-[#D32F2F] text-white shadow-lg' 
                : 'bg-gray-100 text-gray-400 hover:bg-[#FCE4EC] hover:text-[#D32F2F]'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin size={14} className="text-[#D32F2F] flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Clock size={14} className="text-[#D32F2F]" />
            <span>{timePosted}</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 flex-1">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="bg-[#FCE4EC] text-[#D32F2F] hover:bg-[#F8BBD9] text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className="border-[#D32F2F] text-[#D32F2F] text-xs">
              {board}
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <Briefcase size={14} className="text-[#D32F2F] flex-shrink-0" />
              <span className="text-gray-600 truncate">{experience}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IndianRupee size={14} className="text-[#D32F2F] flex-shrink-0" />
              <span className="text-gray-600 font-medium text-xs sm:text-sm">{salary}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BookOpen size={14} className="text-[#D32F2F] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Subjects:</span>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
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

        <div className="pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button 
              className="flex-1 bg-[#D32F2F] hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base py-2 sm:py-2.5"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="sm:px-6 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5"
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
