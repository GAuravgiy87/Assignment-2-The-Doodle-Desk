import React from 'react';
import { useCurrentTheme } from '@/theme/use-theme';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const theme = useCurrentTheme();
  
  // Sample patient data for demonstration
  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 45,
      appointmentDate: '2023-05-15',
      appointmentTime: '09:30 AM',
      status: 'scheduled',
      reason: 'Annual check-up',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      age: 32,
      appointmentDate: '2023-05-15',
      appointmentTime: '11:00 AM',
      status: 'confirmed',
      reason: 'Follow-up consultation',
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 58,
      appointmentDate: '2023-05-16',
      appointmentTime: '02:15 PM',
      status: 'pending',
      reason: 'New patient consultation',
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Welcome Banner */}
      <div 
        className="p-6 mb-8 rounded-lg"
        style={{ 
          backgroundColor: theme.colors.card,
          boxShadow: theme.shadows.card,
          borderRadius: theme.borderRadius.large
        }}
      >
        <h2 
          className="text-2xl font-bold mb-2"
          style={{ 
            color: theme.colors.primary,
            fontFamily: theme.fonts.heading
          }}
        >
          Welcome to {theme.name} Dashboard
        </h2>
        <p 
          className="mb-4"
          style={{ color: theme.colors.textLight }}
        >
          GoGetWell.ai provides specialized care tailored to your medical specialty.
        </p>
        
        <Button
          className="text-white"
          style={{ backgroundColor: theme.colors.primary }}
        >
          View Today's Schedule
        </Button>
        
        <div 
          className="flex items-center mt-4 p-3 rounded-md"
          style={{ backgroundColor: theme.colors.background }}
        >
          <div 
            className="mr-4 text-2xl"
            style={{ color: theme.colors.primary }}
          >
            <i className={`fas fa-${theme.specialty.icon}`}></i>
          </div>
          <div>
            <div className="font-bold">{theme.name} Mode Active</div>
            <p className="text-sm" style={{ color: theme.colors.textLight }}>
              {theme.specialty.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Today's Appointments */}
      <h3 
        className="text-xl font-semibold mb-4 pb-2 border-b-2"
        style={{ 
          color: theme.colors.text,
          borderColor: theme.colors.secondary,
          fontFamily: theme.fonts.heading
        }}
      >
        Today's Appointments
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {patients.map(patient => (
          <div 
            key={patient.id}
            className="p-5 transition-transform hover:-translate-y-1"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.medium
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 
                className="font-bold flex items-center"
                style={{ color: theme.colors.primary }}
              >
                <i className="fas fa-user-circle mr-2"></i>
                {patient.name}
              </h4>
              <span 
                className="text-xs px-2 py-1 rounded font-medium text-white"
                style={{ 
                  backgroundColor: 
                    patient.status === 'confirmed' ? theme.colors.success : 
                    patient.status === 'pending' ? theme.colors.warning : 
                    theme.colors.secondary,
                  borderRadius: theme.borderRadius.small
                }}
              >
                {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
              </span>
            </div>
            
            <div className="text-sm mb-1" style={{ color: theme.colors.textLight }}>
              <span className="font-medium">Age:</span> {patient.age} years
            </div>
            
            <div className="text-sm mb-3" style={{ color: theme.colors.textLight }}>
              <span className="font-medium">Reason:</span> {patient.reason}
            </div>
            
            <div 
              className="flex items-center p-3 mb-3 rounded"
              style={{ 
                backgroundColor: theme.colors.background,
                borderRadius: theme.borderRadius.small
              }}
            >
              <i 
                className="fas fa-calendar-day mr-3"
                style={{ color: theme.colors.primary }}
              ></i>
              <div>
                <div>{new Date(patient.appointmentDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                <div>{patient.appointmentTime}</div>
              </div>
            </div>
            
            <div className="flex justify-between space-x-3">
              <Button
                size="sm"
                className="flex-1 text-white"
                style={{ backgroundColor: theme.colors.primary }}
              >
                View Details
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                style={{ 
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Actions */}
      <h3 
        className="text-xl font-semibold mb-4 pb-2 border-b-2 mt-8"
        style={{ 
          color: theme.colors.text,
          borderColor: theme.colors.secondary,
          fontFamily: theme.fonts.heading
        }}
      >
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Schedule Appointment', icon: 'calendar-plus', desc: 'Create a new appointment for a patient in your system.' },
          { title: 'Patient Records', icon: 'clipboard-list', desc: 'Access and manage electronic health records for your patients.' },
          { title: 'Prescriptions', icon: 'pills', desc: 'Write and manage prescriptions for your patients.' },
          { title: 'Analytics', icon: 'chart-line', desc: 'View metrics and statistics for your medical practice.' }
        ].map((action, index) => (
          <div 
            key={index}
            className="p-5 transition-transform hover:-translate-y-1"
            style={{ 
              backgroundColor: theme.colors.card,
              boxShadow: theme.shadows.card,
              borderRadius: theme.borderRadius.medium
            }}
          >
            <h4 
              className="font-bold text-lg mb-2 flex items-center"
              style={{ color: theme.colors.primary }}
            >
              <i className={`fas fa-${action.icon} mr-2`}></i>
              {action.title}
            </h4>
            <p 
              className="mb-4 text-sm"
              style={{ color: theme.colors.textLight }}
            >
              {action.desc}
            </p>
            <Button
              variant="secondary"
              className="w-full"
              style={{ 
                backgroundColor: theme.colors.secondary,
                color: theme.colors.text
              }}
            >
              {action.title.split(' ')[0]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;