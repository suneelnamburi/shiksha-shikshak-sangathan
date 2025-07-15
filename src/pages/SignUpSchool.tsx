import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Home, Building, MapPin, Globe, ArrowLeft } from 'lucide-react';

const SignUpSchool = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    board: '',
    website: '',
    establishedYear: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [schoolId, setSchoolId] = useState('');

  const generateSchoolId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return `SCH_${timestamp}_${randomStr}`.toUpperCase();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSchoolId = generateSchoolId();
    setSchoolId(newSchoolId);
    console.log('School registration:', { ...formData, schoolId: newSchoolId });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-2xl shadow-2xl bg-card border-2 border-border">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">@</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">शिक्षक Portal</h1>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">School Registration</h2>
            <p className="text-muted-foreground">Register your educational institution</p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School/Institution Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="schoolName"
                  name="schoolName"
                  type="text"
                  placeholder="School name"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="principalName">Principal/Director Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="principalName"
                  name="principalName"
                  type="text"
                  placeholder="Principal name"
                  value={formData.principalName}
                  onChange={handleInputChange}
                  className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="school@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
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
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Full address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="board">Board</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="board"
                    name="board"
                    type="text"
                    placeholder="CBSE, ICSE, State Board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="establishedYear">Established Year</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="establishedYear"
                    name="establishedYear"
                    type="number"
                    placeholder="1990"
                    value={formData.establishedYear}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website (Optional)</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://school.com"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="pl-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
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
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
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
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-11 border-2 border-border focus:border-primary focus:ring-primary"
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

            <div className="flex items-start space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary mt-1"
                required
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{' '}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 h-11 text-primary-foreground font-semibold transition-all duration-300"
            >
              Create School Account
            </Button>

            {schoolId && (
              <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-md">
                <p className="text-green-800 font-semibold">Registration Successful!</p>
                <p className="text-green-700">Your School ID: <span className="font-bold">{schoolId}</span></p>
              </div>
            )}

            <div className="text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary hover:underline font-semibold">
                  Sign in here
                </Link>
              </p>
              <p className="text-muted-foreground mt-2">
                Are you a teacher?{' '}
                <Link to="/signup" className="text-primary hover:underline font-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpSchool;
