import { useContext } from 'react';
import { ThemeProviderContext } from './theme-provider';
import { getSpecialtyOptions, medicalSpecialties } from './medical-themes';

// Hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Hook to get the current theme data
export const useCurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

// Hook for specialty-specific functionality
export const useSpecialty = () => {
  const { specialty, setSpecialty, theme } = useTheme();
  
  // Get all available specialties with their themes
  const specialties = getSpecialtyOptions();
  
  // Function to get specialty by name
  const getSpecialtyById = (id: string) => {
    return medicalSpecialties[id as keyof typeof medicalSpecialties] || null;
  };
  
  return {
    currentSpecialty: specialty,
    setSpecialty,
    specialties,
    getSpecialtyById
  };
};