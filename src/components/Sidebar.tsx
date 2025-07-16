
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
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-sidebar/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0 border-r border-sidebar-border/50`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border/50 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-brand-primary-foreground font-bold text-lg">@</span>
            </div>
            <span className="text-2xl font-bold text-sidebar-foreground">Menu</span>
          </div>
          <button 
            onClick={onClose} 
            className="lg:hidden p-2 hover:bg-sidebar-accent/80 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <X size={22} className="text-sidebar-foreground" />
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
                  className="flex items-center space-x-4 p-4 rounded-xl text-sidebar-foreground hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-secondary/10 hover:text-brand-primary transition-all duration-300 group hover:scale-105 hover:shadow-lg border border-transparent hover:border-brand-primary/20"
                >
                  <item.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-base">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t border-sidebar-border/50 mt-auto">
          <div className="space-y-4">
            <Button className="w-full h-12 font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary">
              Post a Job
            </Button>
            <Button variant="outline" className="w-full h-12 text-base font-semibold rounded-xl border-2 border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Find Teachers
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-sm text-sidebar-foreground/70 border-t border-sidebar-border/50 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <p className="font-semibold">© 2024 शिक्षक Portal</p>
          <p className="text-xs mt-1">Connecting Teachers & Schools</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
