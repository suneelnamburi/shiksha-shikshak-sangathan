
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">@</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">शिक्षक Portal</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting educators with opportunities across India. Your trusted partner in education career growth.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>123 Education Hub, New Delhi - 110001</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@shikshakportal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Locations</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-foreground text-sm">Delhi Office</h5>
                <p className="text-xs text-muted-foreground">Connaught Place, New Delhi</p>
              </div>
              <div>
                <h5 className="font-medium text-foreground text-sm">Mumbai Office</h5>
                <p className="text-xs text-muted-foreground">Bandra West, Mumbai</p>
              </div>
              <div>
                <h5 className="font-medium text-foreground text-sm">Bangalore Office</h5>
                <p className="text-xs text-muted-foreground">Koramangala, Bangalore</p>
              </div>
              <div>
                <h5 className="font-medium text-foreground text-sm">Chennai Office</h5>
                <p className="text-xs text-muted-foreground">Anna Nagar, Chennai</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/help" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Help & Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 शिक्षक Portal. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
