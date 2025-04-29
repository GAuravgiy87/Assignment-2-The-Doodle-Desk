# GoGetWell.ai Multi-Theme System

This directory contains the implementation of a multi-theme system for GoGetWell.ai that adapts the UI across different medical specialties.

## Overview

The theme system supports:
- Base themes (light/dark mode)
- Medical specialty themes (General Practice, Pediatrics, Cardiology, Neurology, Dermatology)
- Theme persistence via local storage
- Dynamic CSS variable injection
- Component-level access to theme properties

## Directory Structure

- `medical-themes.ts` - Contains the specialty theme definitions and utility functions
- `theme-provider.tsx` - React context provider for the theme system 
- `use-theme.ts` - Custom hooks for accessing theme values
- `theme-styles.css` - CSS variables and specialty-specific styles
- `theme-toggle.tsx` - Component for toggling between light and dark mode
- `theme-utils.ts` - Utility functions for theme-related operations
- `index.ts` - Exports all theme components and utilities

## Medical Specialties

The system currently supports five medical specialties:

1. **General Practice**
   - Calm blue color scheme
   - Professional and approachable design

2. **Pediatrics**
   - Bright teal color scheme
   - Rounded corners and playful typography

3. **Cardiology**
   - Vibrant pink/red color scheme
   - Modern and professional design

4. **Neurology**
   - Deep purple color scheme
   - Clean and focused design

5. **Dermatology**
   - Warm orange color scheme
   - Soft and inviting design

Each specialty includes:
- Unique color palette
- Typography settings
- Border radius styling
- Shadow effects
- Specialty icon and description

## Using the Theme System

### Accessing Theme Values

```jsx
import { useCurrentTheme } from '@/theme/use-theme';

const MyComponent = () => {
  const theme = useCurrentTheme();
  
  return (
    <div style={{ 
      color: theme.colors.primary,
      fontFamily: theme.fonts.heading
    }}>
      Themed content for {theme.name}
    </div>
  );
};
```

### Switching Specialties

```jsx
import { useSpecialty } from '@/theme/use-theme';

const SpecialtySelector = () => {
  const { specialties, currentSpecialty, setSpecialty } = useSpecialty();
  
  return (
    <select 
      value={currentSpecialty}
      onChange={(e) => setSpecialty(e.target.value)}
    >
      {specialties.map(specialty => (
        <option key={specialty.id} value={specialty.id}>
          {specialty.name}
        </option>
      ))}
    </select>
  );
};
```

### Using Theme CSS Variables

```css
.my-button {
  background-color: var(--specialty-primary);
  color: white;
  border-radius: var(--radius-medium);
  font-family: var(--font-body);
  box-shadow: var(--shadow-button);
}
```

## Implementation Details

The theme system uses React Context for state management, CSS variables for styling, and localStorage for persistence. When a specialty theme is selected:

1. Theme-specific CSS variables are injected into the document root
2. Theme-specific classes are applied to the document root
3. Components can access theme values via React hooks
4. User preferences are stored in localStorage

## Extending the System

To add a new medical specialty:

1. Add a new theme definition to `medical-themes.ts`
2. Add corresponding CSS variables to `theme-styles.css`
3. The new specialty will automatically be available in the theme selector

## Components

- `ThemeSwitcher` - UI component for switching between themes
- `ThemeShowcase` - Demo page showcasing all theme elements
- `Dashboard` - Example implementation of a themed dashboard

## Future Improvements

- Add animation for theme transitions
- Support for custom theme creation
- Add more specialty options
- Implement theme presets for different hospital departments
- Add automated color contrast checking for accessibility