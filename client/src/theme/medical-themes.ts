export type SpecialtyTheme = {
  id: string;
  name: string;
  displayName: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    card: string;
    text: string;
    textLight: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    card: string;
    button: string;
    header: string;
  };
  transitions: {
    default: string;
  };
  specialty: {
    icon: string;
    description: string;
    iconColor: string;
  };
};

export const medicalSpecialties = {
  general: {
    id: 'general',
    name: 'General Practice',
    displayName: 'General',
    description: 'Professional and versatile design for general healthcare services',
    colors: {
      primary: '#1a73e8',
      secondary: '#edf5ff',
      accent: '#34a853',
      success: '#0f9d58',
      warning: '#fbbc05',
      error: '#ea4335',
      background: '#ffffff',
      card: '#f8f9fa',
      text: '#202124',
      textLight: '#5f6368'
    },
    fonts: {
      heading: 'Helvetica Neue, Arial, sans-serif',
      body: 'Arial, sans-serif'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    },
    shadows: {
      card: '0 2px 5px rgba(0, 0, 0, 0.1)',
      button: '0 1px 3px rgba(0, 0, 0, 0.12)',
      header: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    transitions: {
      default: 'all 0.3s ease'
    },
    specialty: {
      icon: 'G',
      description: 'General healthcare services for all patients',
      iconColor: '#1a73e8'
    }
  },
  
  pediatrics: {
    id: 'pediatrics',
    name: 'Pediatrics',
    displayName: 'Kids',
    description: 'Bright, friendly design for pediatric care environments',
    colors: {
      primary: '#00bcd4',
      secondary: '#e0f7fa',
      accent: '#ffca28',
      success: '#26a69a',
      warning: '#ffa000',
      error: '#f44336',
      background: '#ffffff',
      card: '#f5f5f5',
      text: '#37474f',
      textLight: '#607d8b'
    },
    fonts: {
      heading: 'Comic Sans MS, Comic Sans, cursive',
      body: 'Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif'
    },
    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '20px'
    },
    shadows: {
      card: '0 3px 10px rgba(0, 188, 212, 0.15)',
      button: '0 2px 5px rgba(0, 188, 212, 0.2)',
      header: '0 2px 8px rgba(0, 188, 212, 0.1)'
    },
    transitions: {
      default: 'all 0.3s ease'
    },
    specialty: {
      icon: 'P',
      description: 'Specialized care for infants, children, and adolescents',
      iconColor: '#00bcd4'
    }
  },
  
  cardiology: {
    id: 'cardiology',
    name: 'Cardiology',
    displayName: 'Heart',
    description: 'Strong, vibrant design for cardiovascular care specialists',
    colors: {
      primary: '#e91e63',
      secondary: '#fce4ec',
      accent: '#ff5722',
      success: '#43a047',
      warning: '#ff9800',
      error: '#d50000',
      background: '#ffffff',
      card: '#fafafa',
      text: '#424242',
      textLight: '#757575'
    },
    fonts: {
      heading: 'Georgia, serif',
      body: 'Roboto, Helvetica, Arial, sans-serif'
    },
    borderRadius: {
      small: '4px',
      medium: '6px',
      large: '8px'
    },
    shadows: {
      card: '0 2px 8px rgba(233, 30, 99, 0.12)',
      button: '0 1px 5px rgba(233, 30, 99, 0.2)',
      header: '0 1px 4px rgba(233, 30, 99, 0.1)'
    },
    transitions: {
      default: 'all 0.3s ease'
    },
    specialty: {
      icon: 'C',
      description: 'Specialized care for heart and circulatory system',
      iconColor: '#e91e63'
    }
  },
  
  neurology: {
    id: 'neurology',
    name: 'Neurology',
    displayName: 'Brain',
    description: 'Sophisticated design for neurological care settings',
    colors: {
      primary: '#673ab7',
      secondary: '#ede7f6',
      accent: '#3f51b5',
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      background: '#ffffff',
      card: '#f5f5f5',
      text: '#212121',
      textLight: '#616161'
    },
    fonts: {
      heading: 'Palatino Linotype, Book Antiqua, Palatino, serif',
      body: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    },
    borderRadius: {
      small: '2px',
      medium: '4px',
      large: '6px'
    },
    shadows: {
      card: '0 2px 10px rgba(103, 58, 183, 0.1)',
      button: '0 1px 4px rgba(103, 58, 183, 0.2)',
      header: '0 1px 5px rgba(103, 58, 183, 0.08)'
    },
    transitions: {
      default: 'all 0.3s ease'
    },
    specialty: {
      icon: 'N',
      description: 'Specialized care for the brain and nervous system',
      iconColor: '#673ab7'
    }
  },
  
  dermatology: {
    id: 'dermatology',
    name: 'Dermatology',
    displayName: 'Skin',
    description: 'Warm, inviting design for dermatology practices',
    colors: {
      primary: '#ff9800',
      secondary: '#fff3e0',
      accent: '#ff5722',
      success: '#8bc34a',
      warning: '#ffc107',
      error: '#f44336',
      background: '#ffffff',
      card: '#fafafa',
      text: '#3e2723',
      textLight: '#795548'
    },
    fonts: {
      heading: 'Trebuchet MS, Lucida Grande, Lucida Sans Unicode, sans-serif',
      body: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    borderRadius: {
      small: '6px',
      medium: '10px',
      large: '16px'
    },
    shadows: {
      card: '0 2px 8px rgba(255, 152, 0, 0.15)',
      button: '0 1px 5px rgba(255, 152, 0, 0.2)',
      header: '0 1px 4px rgba(255, 152, 0, 0.1)'
    },
    transitions: {
      default: 'all 0.3s ease'
    },
    specialty: {
      icon: 'D',
      description: 'Specialized care for skin, hair, and nails',
      iconColor: '#ff9800'
    }
  }
};

export const defaultSpecialty: keyof typeof medicalSpecialties = 'general';

export function getSpecialtyTheme(specialty: keyof typeof medicalSpecialties): SpecialtyTheme {
  return medicalSpecialties[specialty] || medicalSpecialties[defaultSpecialty];
}

export function getSpecialtyOptions() {
  return Object.keys(medicalSpecialties).map(key => {
    const specialty = medicalSpecialties[key as keyof typeof medicalSpecialties];
    return {
      id: specialty.id,
      name: specialty.name,
      displayName: specialty.displayName,
      theme: specialty
    };
  });
}