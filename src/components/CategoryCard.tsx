
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  positions: number;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, name, positions, color }) => {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 h-full">
      <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <div 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={24} className="sm:w-8 sm:h-8" style={{ color }} />
          </div>
          
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#D32F2F] transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {positions} open positions
            </p>
          </div>

          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D32F2F] to-[#FF5722] rounded-full transition-all duration-500 group-hover:w-full"
              style={{ width: '60%' }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
