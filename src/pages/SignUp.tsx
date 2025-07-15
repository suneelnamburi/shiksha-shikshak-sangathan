
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, GraduationCap, BookOpen, ArrowLeft } from 'lucide-react';
import UserTypeSelection from '@/components/UserTypeSelection';
import RegistrationSuccess from '@/components/RegistrationSuccess';

const SignUp = () => {
  const [userType, setUserType] = useState<'teacher' | 'school' | 'institution' | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [uniqueId, setUniqueId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    qualification: '',
    experience: '',
    subjects: '',
    about: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const generateUniqueId = (type: 'teacher' | 'school' | 'institution') => {
    const prefix = type === 'teacher' ? 'TCH' : type === 'school' ? 'SCH' : 'INS';
    const randomNum = Math.floor(Math.random() * 900000) + 100000;
    const timestamp = Date.now().toString().slice(-4);
    return `${prefix}${randomNum}${timestamp}`;
  };

  const handleUserTypeSelect = (type: 'teacher' | 'school' | 'institution') => {
    setUserType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Generate unique ID
    const id = generateUniqueId(userType!);
    setUniqueId(id);
    
    // Simulate sending email
    console.log('Sending login details to:', formData.email);
    console.log('User registration:', { ...formData, userType, uniqueId: id });
    
    // Show success screen
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
        <RegistrationSuccess 
          userType={userType!}
          uniqueId={uniqueId}
          email={formData.email}
          name={formData.fullName}
        />
      </div>
    );
  }

  if (!userType) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
        <Link 
          to="/" 
          className="absolute top-4 left-4 flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <Card className="w-full max-w-4xl shadow-lg bg-card border-2 border-border">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex items-center justify-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">@</span>
                </div>
                <h1 className="text-2xl font-bold text-foreground">शिक्षक Portal</h1>
              </Link>
            </div>
          </CardHeader>
          
          <CardContent>
            <UserTypeSelection onSelectType={handleUserTypeSelect} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>

      <Card className="w-full max-w-2xl shadow-lg bg-card border-2 border-border">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex items-center justify-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">@</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">शिक्षक Portal</h1>
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Create {userType === 'teacher' ? 'Teacher' : userType === 'school' ? 'School' : 'Institution'} Account
            </h2>
            <p className="text-muted-foreground">
              {userType === 'teacher' ? 'Join our community of educators' : 'Join our network of educational institutions'}
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {userType === 'teacher' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Qualification</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="qualification"
                        name="qualification"
                        type="text"
                        placeholder="e.g., M.A. Mathematics, B.Ed"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="text"
                      placeholder="e.g., 5 years"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}
            </div>

            {userType === 'teacher' && (
              <div className="space-y-2">
                <Label htmlFor="subjects">Subjects</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="subjects"
                    name="subjects"
                    type="text"
                    placeholder="e.g., Mathematics, Physics, Chemistry"
                    value={formData.subjects}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="about">About {userType === 'teacher' ? 'Yourself' : 'Your Institution'}</Label>
              <Textarea
                id="about"
                name="about"
                placeholder={userType === 'teacher' ? 'Tell us about your teaching experience and philosophy...' : 'Tell us about your institution...'}
                value={formData.about}
                onChange={handleInputChange}
                rows={3}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-primary border-2 border-border rounded focus:ring-primary"
                required
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 h-12 text-primary-foreground font-semibold"
            >
              Create Account
            </Button>

            <div className="text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary hover:underline font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
