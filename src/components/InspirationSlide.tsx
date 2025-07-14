
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InspirationSlide = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const content = [
    {
      language: 'English',
      title: 'Step into the Teacher Job Portal',
      message: "Step into the Teacher Job Portal, where passion fuels purpose! Teaching is a noble calling to shape minds, spark curiosity, and build a brighter future. Whether a novice or veteran, find opportunities across India to inspire change. Embrace challenges with resilience, turning classrooms into canvases of creativity. Mentor, guide, and empower the next generation, joining a community of educators to grow together. Your lessons plant seeds of knowledge and compassion. Start today, leave a lasting legacy, and illuminate paths for countless souls. Together, let's craft a future where education echoes through generations!"
    },
    {
      language: 'हिंदी',
      title: 'शिक्षकों के लिए प्रेरणादायक संदेश',
      message: 'शिक्षक जॉब पोर्टल में कदम रखें, जहां जुनून और उद्देश्य मिलते हैं! शिक्षण एक पवित्र कर्तव्य है, जो युवा मन को आकार देता, जिज्ञासा जगाता और उज्जवल भविष्य बनाता है। नौसिखिया हों या अनुभवी, भारत के विविध क्षेत्रों में अवसर पाएं और परिवर्तन प्रेरित करें। चुनौतियों को साहस से स्वीकार करें, कक्षा को रचनात्मकता का कैनवास बनाएं। अगली पीढ़ी का मार्गदर्शन करें, शिक्षकों के समुदाय से जुड़ें और साथ में बढ़ें। आपके पाठ ज्ञान और करुणा के बीज बोते हैं। आज शुरू करें, एक स्थायी विरासत छोड़ें, और अनगिनत आत्माओं के मार्ग प्रकाशित करें।'
    },
    {
      language: 'मराठी',
      title: 'शिक्षकांसाठी प्रेरणादायक संदेश',
      message: 'शिक्षक जॉब पोर्टलमध्ये पाऊल टाका, जिथे उत्साह आणि उद्देश्य एकत्र येतात! शिक्षण हे एक पवित्र कर्तव्य आहे, जे तरुण मनांना आकार देते, उत्सुकता जागवते आणि उज्ज्वल भविष्य घडवते. नवशिक्या असो वा अनुभवी, भारताच्या विविध भागांत संधी शोधा आणि बदल प्रेरित करा. आव्हानांना धैर्याने सामोरे जा, वर्गाला सर्जनशीलतेचा कॅनव्हास बनवा. पुढील पिढीचे मार्गदर्शन करा, शिक्षकांच्या समुदायात सामील व्हा आणि एकत्र वाढा. तुमचे धडे ज्ञान आणि करुणेचे बीज पेरतात. आज सुरुवात करा, कायमस्वरूपी वारसा सोडा आणि अनेक आत्म्यांचे मार्ग उजळवा!'
    },
    {
      language: 'தமிழ்',
      title: 'ஆசிரியர்களுக்கான உத்வேகமளிக்கும் செய்தி',
      message: 'ஆசிரியர் வேலைவாய்ப்பு போர்டலில் பங்கேற்கவும், அங்கு ஆர்வமும் நோக்கமும் சேரும்! கற்பித்தல் ஒரு தூய கடமையாகும், இது இளம் மனங்களை வடிவமைக்கிறது, ஆர்வத்தைத் தூண்டுகிறது மற்றும் பிரகாசமான எதிர்காலத்தை உருவாக்குகிறது. புதுமுகராக இருந்தாலும் அல்லது அனுபவம் வாய்ந்தவராக இருந்தாலும், இந்தியாவின் பல்வேறு பகுதிகளில் வாய்ப்புகளை அறிந்து மாற்றத்தை ஊக்குவிக்கவும். சவால்களை தைரியத்துடன் எதிர்கொள்ளுங்கள், வகுப்பறையை படைப்பாற்றலின் ஓவியப்பலகையாக மாற்றுங்கள். அடுத்த தலைமுறையை வழிநடத்தி, ஆசிரியர் சமூகத்தில் இணைந்து வளருங்கள். உங்கள் பாடங்கள் அறிவு மற்றும் இரக்கத்தின் விதைகளை விதைக்கின்றன. இன்று தொடங்கி, நிலையான பாரம்பரியத்தை உருவாக்கி, பல ஆத்மாக்களின் பாதைகளை ஒளிரச் செய்யுங்கள்!'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % content.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentLanguage((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentLanguage((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#2D3748] to-[#1A252F] rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#D32F2F] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FCE4EC] rounded-full opacity-10 blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Globe className="text-[#D32F2F]" size={24} />
            <span className="text-lg font-semibold">Inspiration in Your Language</span>
          </div>
          
          {/* Language Indicator */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">Language:</span>
            <span className="px-3 py-1 bg-[#D32F2F] rounded-full text-sm font-medium">
              {content[currentLanguage].language}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="min-h-[300px] flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#FCE4EC]">
            {content[currentLanguage].title}
          </h3>
          
          <p className="text-gray-200 leading-relaxed text-lg">
            {content[currentLanguage].message}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLanguage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentLanguage 
                    ? 'bg-[#D32F2F] scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-white hover:bg-white/10 h-10 w-10"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-white hover:bg-white/10 h-10 w-10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSlide;
