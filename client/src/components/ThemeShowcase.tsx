import React from 'react';
import { useCurrentTheme, useSpecialty } from '@/theme/use-theme';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from './ThemeSwitcher';
import Header from './Header';
import Footer from './Footer';

const ThemeShowcase: React.FC = () => {
  const theme = useCurrentTheme();
  const { specialties } = useSpecialty();
  
  return (
    <>
      <Header />
      <div className="pt-24 pb-20">
        <div 
          className="max-w-6xl mx-auto px-4"
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.body
          }}
        >
          <div 
            className="p-6 mb-8 rounded-lg"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.large
            }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h1 
                  className="text-3xl font-bold mb-2"
                  style={{ 
                    color: theme.colors.primary,
                    fontFamily: theme.fonts.heading
                  }}
                >
                  GoGetWell.ai Multi-Theme System
                </h1>
                <p 
                  className="mb-4 text-lg"
                  style={{ color: theme.colors.textLight }}
                >
                  Currently viewing: <span style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{theme.name}</span> theme
                </p>
              </div>
              <div>
                <ThemeSwitcher />
              </div>
            </div>
            
            <div 
              className="flex items-center p-5 mb-6 rounded-md"
              style={{ 
                backgroundColor: theme.colors.secondary,
                borderRadius: theme.borderRadius.medium
              }}
            >
              <div>
                <p className="font-medium mb-2" style={{ color: theme.colors.primary }}>
                  Your medical practice deserves a unique look that matches your specialty
                </p>
                <p style={{ color: theme.colors.text }}>
                  This showcase demonstrates how GoGetWell.ai adapts its interface to different medical specialties.
                  Try switching between themes using the selector above to see how the entire application transforms.
                </p>
              </div>
            </div>
          </div>
      
          {/* Color Palette */}
          <div 
            className="p-6 mb-8 rounded-lg"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.large
            }}
          >
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
                borderColor: theme.colors.secondary 
              }}
            >
              Color Palette
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {Object.entries(theme.colors).map(([name, color]) => (
                <div 
                  key={name} 
                  className="p-3 rounded flex flex-col items-center"
                  style={{ 
                    backgroundColor: color,
                    color: name === 'background' || name === 'card' || name === 'secondary' ? theme.colors.text : '#fff',
                    borderRadius: theme.borderRadius.medium
                  }}
                >
                  <div className="font-bold">{name}</div>
                  <div className="text-xs opacity-80">{color}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Typography */}
          <div 
            className="p-6 mb-8 rounded-lg"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.large 
            }}
          >
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
                borderColor: theme.colors.secondary 
              }}
            >
              Typography
            </h2>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium" style={{ color: theme.colors.textLight }}>Heading Font</h5>
                <p className="text-lg" style={{ fontFamily: theme.fonts.heading }}>{theme.fonts.heading}</p>
              </div>
              
              <div>
                <h5 className="text-sm font-medium" style={{ color: theme.colors.textLight }}>Body Font</h5>
                <p className="text-lg" style={{ fontFamily: theme.fonts.body }}>{theme.fonts.body}</p>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2" style={{ color: theme.colors.textLight }}>Heading Examples</h5>
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: theme.fonts.heading, color: theme.colors.text }}>H1 Heading</h1>
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: theme.fonts.heading, color: theme.colors.text }}>H2 Heading</h2>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: theme.fonts.heading, color: theme.colors.text }}>H3 Heading</h3>
                <h4 className="text-xl font-bold mb-2" style={{ fontFamily: theme.fonts.heading, color: theme.colors.text }}>H4 Heading</h4>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2" style={{ color: theme.colors.textLight }}>Body Text Example</h5>
                <p className="mb-3" style={{ fontFamily: theme.fonts.body, color: theme.colors.text }}>
                  This is a sample paragraph that demonstrates the body text styling for the {theme.name} theme. 
                  Each specialty has its own unique typography settings to match the visual identity of the specialty.
                </p>
                <p style={{ fontFamily: theme.fonts.body, color: theme.colors.textLight }}>
                  This is secondary text that uses a lighter color to indicate less importance.
                </p>
              </div>
            </div>
          </div>
          
          {/* UI Components */}
          <div 
            className="p-6 mb-8 rounded-lg"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.large 
            }}
          >
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
                borderColor: theme.colors.secondary 
              }}
            >
              UI Components
            </h2>
            
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading 
              }}
            >
              Buttons
            </h3>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                className="text-white"
                style={{ backgroundColor: theme.colors.primary }}
              >
                Primary Button
              </Button>
              
              <Button
                variant="secondary"
                style={{ 
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary 
                }}
              >
                Secondary Button
              </Button>
              
              <Button
                variant="outline"
                style={{ 
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary 
                }}
              >
                Outline Button
              </Button>
            </div>
            
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading 
              }}
            >
              Cards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="p-4"
                  style={{ 
                    backgroundColor: theme.colors.background,
                    borderRadius: theme.borderRadius.medium,
                    boxShadow: theme.shadows.card
                  }}
                >
                  <h4 
                    className="font-bold mb-2"
                    style={{ 
                      color: theme.colors.primary,
                      fontFamily: theme.fonts.heading 
                    }}
                  >
                    Card Title {i}
                  </h4>
                  <p 
                    className="text-sm mb-3"
                    style={{ color: theme.colors.textLight }}
                  >
                    This is an example card that adapts to the {theme.name} theme styling.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ 
                        borderColor: theme.colors.primary,
                        color: theme.colors.primary 
                      }}
                    >
                      Action
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading 
              }}
            >
              Alerts
            </h3>
            
            <div className="space-y-4">
              <div 
                className="p-4 border-l-4"
                style={{ 
                  backgroundColor: theme.colors.background,
                  borderLeftColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.small 
                }}
              >
                <div 
                  className="font-bold mb-1"
                  style={{ color: theme.colors.primary }}
                >
                  Primary Alert
                </div>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.text }}
                >
                  This is a primary alert message for the {theme.name} theme.
                </p>
              </div>
              
              <div 
                className="p-4 border-l-4"
                style={{ 
                  backgroundColor: theme.colors.background,
                  borderLeftColor: theme.colors.success,
                  borderRadius: theme.borderRadius.small 
                }}
              >
                <div 
                  className="font-bold mb-1"
                  style={{ color: theme.colors.success }}
                >
                  Success Alert
                </div>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.text }}
                >
                  This is a success alert message for the {theme.name} theme.
                </p>
              </div>
              
              <div 
                className="p-4 border-l-4"
                style={{ 
                  backgroundColor: theme.colors.background,
                  borderLeftColor: theme.colors.warning,
                  borderRadius: theme.borderRadius.small 
                }}
              >
                <div 
                  className="font-bold mb-1"
                  style={{ color: theme.colors.warning }}
                >
                  Warning Alert
                </div>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.text }}
                >
                  This is a warning alert message for the {theme.name} theme.
                </p>
              </div>
              
              <div 
                className="p-4 border-l-4"
                style={{ 
                  backgroundColor: theme.colors.background,
                  borderLeftColor: theme.colors.error,
                  borderRadius: theme.borderRadius.small 
                }}
              >
                <div 
                  className="font-bold mb-1"
                  style={{ color: theme.colors.error }}
                >
                  Error Alert
                </div>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.text }}
                >
                  This is an error alert message for the {theme.name} theme.
                </p>
              </div>
            </div>
          </div>
          
          {/* Available Specialties */}
          <div 
            className="p-6 rounded-lg"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.large 
            }}
          >
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
                borderColor: theme.colors.secondary 
              }}
            >
              Available Medical Specialties
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialties.map((specialty) => (
                <div 
                  key={specialty.id}
                  className="p-4 flex items-start gap-3"
                  style={{ 
                    backgroundColor: theme.colors.background,
                    borderRadius: theme.borderRadius.medium,
                    boxShadow: theme.shadows.card
                  }}
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center rounded-full"
                    style={{ 
                      backgroundColor: specialty.theme.colors.primary,
                      color: '#fff'
                    }}
                  >
                    {specialty.name.charAt(0)}
                  </div>
                  <div>
                    <h4 
                      className="font-bold mb-1"
                      style={{ 
                        color: specialty.theme.colors.primary,
                        fontFamily: specialty.theme.fonts.heading 
                      }}
                    >
                      {specialty.name}
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ color: theme.colors.textLight }}
                    >
                      {specialty.theme.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div 
            className="p-8 rounded-lg my-10 text-center"
            style={{ 
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.large,
              boxShadow: theme.shadows.card
            }}
          >
            <h2 
              className="text-2xl font-bold mb-3"
              style={{ 
                color: 'white',
                fontFamily: theme.fonts.heading
              }}
            >
              Ready to customize your medical practice's digital experience?
            </h2>
            <p 
              className="mb-6 max-w-2xl mx-auto"
              style={{ 
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              GoGetWell.ai's multi-theme system gives your medical practice a unique, professional look that matches your specialty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="px-6 py-3 text-md font-medium"
                style={{ 
                  backgroundColor: 'white',
                  color: theme.colors.primary,
                  borderRadius: theme.borderRadius.medium,
                  boxShadow: theme.shadows.button
                }}
              >
                Request Demo
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-md font-medium"
                style={{ 
                  borderColor: 'white',
                  color: 'white',
                  borderRadius: theme.borderRadius.medium,
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThemeShowcase;