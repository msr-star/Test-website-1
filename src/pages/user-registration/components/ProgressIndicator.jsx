import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = () => {
  const steps = [
    { number: 1, label: 'Registration', status: 'active' },
    { number: 2, label: 'Profile Setup', status: 'pending' },
    { number: 3, label: 'Assessment', status: 'pending' }
  ];

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.number}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step?.status === 'active' ?'bg-primary text-primary-foreground shadow-lg'
                    : step?.status === 'completed' ?'bg-success text-success-foreground' :'bg-muted text-muted-foreground'
                }`}
              >
                {step?.status === 'completed' ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <span className="text-sm md:text-base">{step?.number}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-medium text-center ${
                  step?.status === 'active' ?'text-foreground' :'text-muted-foreground'
                }`}
              >
                {step?.label}
              </span>
            </div>
            {index < steps?.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 md:mx-4 bg-muted relative top-[-20px] md:top-[-24px]">
                <div
                  className={`h-full transition-all duration-300 ${
                    step?.status === 'completed' ? 'bg-success' : 'bg-muted'
                  }`}
                  style={{ width: step?.status === 'completed' ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;