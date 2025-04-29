import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from './ThemeSwitcher';
import { useCurrentTheme } from '@/theme/use-theme';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const specialtyTheme = useCurrentTheme();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="font-bold text-2xl">
              <span style={{ color: specialtyTheme.colors.primary }}>Get</span>
              <span style={{ color: specialtyTheme.colors.accent }}>Well</span>
              <span style={{ color: specialtyTheme.colors.primary }}>.ai</span>
              <span className="ml-2 text-xs px-2 py-1 rounded-full" 
                style={{ 
                  backgroundColor: specialtyTheme.colors.secondary,
                  color: specialtyTheme.colors.primary 
                }}>
                {specialtyTheme.name}
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-text hover:text-specialty-primary transition-colors font-medium"
              style={{ color: 'var(--specialty-text)' }}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="hover:text-specialty-primary transition-colors font-medium"
              style={{ color: 'var(--specialty-text)' }}
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="hover:text-specialty-primary transition-colors font-medium"
              style={{ color: 'var(--specialty-text)' }}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="hover:text-specialty-primary transition-colors font-medium"
              style={{ color: 'var(--specialty-text)' }}
            >
              Pricing
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Switcher */}
            <ThemeSwitcher />
            
            <Button 
              onClick={() => scrollToSection('demo')} 
              variant="outline" 
              className="px-5 py-2 border-specialty-primary text-specialty-primary hover:bg-specialty-accent hover:text-white transition-colors"
              style={{ 
                borderColor: specialtyTheme.colors.primary,
                color: specialtyTheme.colors.primary
              }}
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => scrollToSection('demo')} 
              className="px-5 py-2 text-white hover:opacity-90 transition-colors"
              style={{ backgroundColor: specialtyTheme.colors.primary }}
            >
              Request Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="pt-2 pb-4 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-specialty-secondary rounded-md transition-colors"
                style={{ color: 'var(--specialty-text)' }}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-specialty-secondary rounded-md transition-colors"
                style={{ color: 'var(--specialty-text)' }}
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-specialty-secondary rounded-md transition-colors"
                style={{ color: 'var(--specialty-text)' }}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-specialty-secondary rounded-md transition-colors"
                style={{ color: 'var(--specialty-text)' }}
              >
                Pricing
              </button>
              <div className="flex space-x-2 pt-2">
                <Button
                  onClick={() => scrollToSection('demo')}
                  variant="outline"
                  className="flex-1"
                  style={{ 
                    borderColor: specialtyTheme.colors.primary,
                    color: specialtyTheme.colors.primary
                  }}
                >
                  Contact
                </Button>
                <Button
                  onClick={() => scrollToSection('demo')}
                  className="flex-1 text-white"
                  style={{ backgroundColor: specialtyTheme.colors.primary }}
                >
                  Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
