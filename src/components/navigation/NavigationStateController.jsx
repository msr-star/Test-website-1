import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationStateContext = createContext();

export const useNavigationState = () => {
  const context = useContext(NavigationStateContext);
  if (!context) {
    throw new Error('useNavigationState must be used within NavigationStateProvider');
  }
  return context;
};

export const NavigationStateProvider = ({ children }) => {
  const location = useLocation();
  const [isMinimalMode, setIsMinimalMode] = useState(false);
  const [showProgressTracker, setShowProgressTracker] = useState(false);

  useEffect(() => {
    const assessmentPaths = ['/personality-assessment', '/skills-evaluation'];
    const isAssessmentPage = assessmentPaths?.includes(location?.pathname);
    
    setShowProgressTracker(isAssessmentPage);
    setIsMinimalMode(isAssessmentPage);
  }, [location?.pathname]);

  const value = {
    isMinimalMode,
    showProgressTracker,
    setIsMinimalMode,
    setShowProgressTracker,
  };

  return (
    <NavigationStateContext.Provider value={value}>
      {children}
    </NavigationStateContext.Provider>
  );
};

export default NavigationStateProvider;