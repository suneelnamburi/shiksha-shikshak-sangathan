
import React from 'react';
import { X, Home, User, Briefcase, Users, Settings, BookOpen, Award, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About Us', href: '#about' },
    { icon: Briefcase, label: 'Jobs', href: '#jobs' },
    { icon: Users, label: 'For Schools', href: '#schools' },
    { icon: BookOpen, label: 'Services', href: '#services' },
    { icon: Award, label: 'Testimonials', href: '#testimonials' },
    { icon: MessageSquare, label: 'Blog', href: '#blog' },
    { icon: Phone, label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-brand-primary-foreground font-bold">@</span>
            </div>
            <span className="text-xl font-bold text-sidebar-foreground">Menu</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg transition-colors">
            <X size={20} className="text-sidebar-foreground" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 p-3 rounded-lg text-sidebar-foreground hover:bg-brand-accent hover:text-brand-primary transition-all duration-200 group"
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t border-sidebar-border mt-auto">
          <div className="space-y-3">
            <Button className="w-full btn-primary transition-all duration-300">
              Post a Job
            </Button>
            <Button variant="outline" className="w-full btn-outline transition-all duration-300">
              Find Teachers
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-sm text-sidebar-foreground/70 border-t border-sidebar-border">
          <p>© 2024 शिक्षक Portal</p>
          <p>Connecting Teachers & Schools</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
