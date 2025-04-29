// Exports the theme system components

// Theme Provider - core context provider for the theme system
export { ThemeProvider } from './theme-provider';

// Theme Hooks - utilities for accessing and using themes
export { useTheme, useCurrentTheme, useSpecialty } from './use-theme';

// Theme Types - type definitions for the theme system
export type { ThemeProviderState } from './theme-provider';

// Specialty Themes - export medical specialties and related functions
export { 
  medicalSpecialties,
  defaultSpecialty,
  getSpecialtyTheme,
  getSpecialtyOptions
} from './medical-themes';
export type { SpecialtyTheme } from './medical-themes';