import React, { createContext, useEffect, useState } from 'react';
import { medicalSpecialties, defaultSpecialty, getSpecialtyTheme, SpecialtyTheme } from './medical-themes';
import './theme-styles.css';

type BaseTheme = "light" | "dark" | "system";
type MedicalSpecialty = keyof typeof medicalSpecialties;

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: BaseTheme;
  defaultSpecialty?: MedicalSpecialty;
  storageKey?: string;
}

export interface ThemeProviderState {
  baseTheme: BaseTheme;
  specialty: MedicalSpecialty;
  theme: SpecialtyTheme; // Combined theme data
  setBaseTheme: (theme: BaseTheme) => void;
  setSpecialty: (specialty: MedicalSpecialty) => void;
}

const initialState: ThemeProviderState = {
  baseTheme: "system",
  specialty: defaultSpecialty,
  theme: getSpecialtyTheme(defaultSpecialty),
  setBaseTheme: () => null,
  setSpecialty: () => null
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultSpecialty = "general",
  storageKey = "gogetwell-theme"
}: ThemeProviderProps) {
  const [baseTheme, setBaseTheme] = useState<BaseTheme>(
    () => (localStorage.getItem(`${storageKey}-mode`) as BaseTheme) || defaultTheme
  );

  const [specialty, setSpecialty] = useState<MedicalSpecialty>(
    () => (localStorage.getItem(`${storageKey}-specialty`) as MedicalSpecialty) || defaultSpecialty
  );

  // Get current specialty theme
  const theme = getSpecialtyTheme(specialty);

  // Function to set base theme (light/dark/system)
  const setThemeValue = (newBaseTheme: BaseTheme) => {
    localStorage.setItem(`${storageKey}-mode`, newBaseTheme);
    setBaseTheme(newBaseTheme);
  };

  // Function to set medical specialty
  const setSpecialtyValue = (newSpecialty: MedicalSpecialty) => {
    localStorage.setItem(`${storageKey}-specialty`, newSpecialty);
    setSpecialty(newSpecialty);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all previous theme classes
    Object.keys(medicalSpecialties).forEach(key => {
      root.classList.remove(`theme-${key}`);
    });
    
    // Add current specialty theme class
    root.classList.add(`theme-${specialty}`);
    
    // Handle light/dark mode
    root.classList.remove("light-theme", "dark-theme");
    
    if (baseTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(`${systemTheme}-theme`);
    } else {
      root.classList.add(`${baseTheme}-theme`);
    }
  }, [baseTheme, specialty]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (baseTheme === "system") {
        const root = window.document.documentElement;
        root.classList.remove("light-theme", "dark-theme");
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(`${systemTheme}-theme`);
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [baseTheme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        baseTheme,
        specialty,
        theme,
        setBaseTheme: setThemeValue,
        setSpecialty: setSpecialtyValue
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}