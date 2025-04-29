/**
 * Get the current theme from document or localStorage
 */
export function getTheme(): string {
  // Check if we're in a browser environment
  if (typeof window === "undefined") return "light";
  
  // First check if theme is stored in the document root
  const dataTheme = document.documentElement.getAttribute("data-theme");
  if (dataTheme) return dataTheme;
  
  // Then check local storage
  const storedTheme = localStorage.getItem("doodle-desk-theme");
  if (storedTheme) return storedTheme;
  
  // Finally check system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Check if the current theme is dark
 */
export function isDarkTheme(): boolean {
  return getTheme() === "dark";
}