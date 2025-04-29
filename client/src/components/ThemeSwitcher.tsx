import React, { useState } from 'react';
import { useTheme, useSpecialty } from '@/theme/use-theme';
import { Button } from '@/components/ui/button';

const ThemeSwitcher: React.FC = () => {
  const { baseTheme, setBaseTheme } = useTheme();
  const { currentSpecialty, setSpecialty, specialties } = useSpecialty();
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle specialty dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  // Handle specialty change
  const handleSpecialtyChange = (specialtyId: string) => {
    setSpecialty(specialtyId as any);
    setIsOpen(false);
  };
  
  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = baseTheme === 'light' ? 'dark' : 'light';
    setBaseTheme(newTheme);
  };
  
  // Get the current specialty name
  const currentSpecialtyName = specialties.find(s => s.id === currentSpecialty)?.name || 'General Practice';
  
  // Style based on current specialty
  const buttonStyle = {
    backgroundColor: `var(--specialty-primary)`,
    color: 'white'
  };
  
  return (
    <div className="flex flex-col items-end space-y-2 relative">
      {/* Base Theme Switcher (Light/Dark) */}
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="text-sm"
      >
        {baseTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Button>
      
      {/* Specialty Selector */}
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleDropdown}
          className="flex items-center space-x-1 text-sm min-w-[180px]"
          style={buttonStyle}
        >
          <span>Medical Specialty: {currentSpecialtyName}</span>
          <span className="ml-1">▼</span>
        </Button>
        
        {/* Dropdown for specialty selection */}
        {isOpen && (
          <div
            className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50 min-w-[200px] border border-gray-200 dark:border-gray-700"
          >
            <div className="p-1">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => handleSpecialtyChange(specialty.id)}
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    currentSpecialty === specialty.id ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }`}
                  style={{ color: currentSpecialty === specialty.id ? specialty.theme.colors.primary : undefined }}
                >
                  <span>{specialty.name}</span>
                  {currentSpecialty === specialty.id && (
                    <span className="text-specialty-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;