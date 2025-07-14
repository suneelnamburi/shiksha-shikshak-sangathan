
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeacherGallery = () => {
  const teacherImages = [
    {
      src: '/lovable-uploads/a5f8fbbb-73d9-4a6d-8d2c-ca540fedff71.png',
      alt: 'Male teacher writing on blackboard',
      title: 'Mathematics Excellence',
      description: 'Inspiring mathematical thinking in students'
    },
    {
      src: '/lovable-uploads/ffa9b30a-9d95-4f55-a93b-fd36ffbe1c2e.png',
      alt: 'Female teacher with book',
      title: 'Literature & Language',
      description: 'Nurturing communication and creativity'
    },
    {
      src: '/lovable-uploads/70c7d7ed-a1b0-4dec-ae68-2976b53cc07b.png',
      alt: 'Female teacher teaching students',
      title: 'Interactive Learning',
      description: 'Engaging students in active participation'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Inspiring Educators Making a Difference
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of passionate teachers who are shaping the future through education. 
            See how our community of educators brings learning to life every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacherImages.map((image, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D32F2F] transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <span>Join Our Teaching Community</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherGallery;
