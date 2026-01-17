import React from 'react';
import Icon from '../AppIcon';

const AssessmentProgressTracker = ({ 
  currentStep = 1, 
  totalSteps = 5, 
  stepLabels = [],
  onStepClick = null 
}) => {
  const progress = (currentStep / totalSteps) * 100;

  const defaultLabels = Array.from({ length: totalSteps }, (_, i) => `Step ${i + 1}`);
  const labels = stepLabels?.length === totalSteps ? stepLabels : defaultLabels;

  const getStepStatus = (stepIndex) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  const handleStepClick = (stepIndex) => {
    if (onStepClick && stepIndex < currentStep) {
      onStepClick(stepIndex);
    }
  };

  return (
    <div className="progress-tracker">
      <div className="max-w-4xl mx-auto">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          />
        </div>

        <div className="progress-steps hidden md:flex">
          {labels?.map((label, index) => {
            const stepNumber = index + 1;
            const status = getStepStatus(stepNumber);
            const isClickable = onStepClick && stepNumber < currentStep;

            return (
              <div
                key={stepNumber}
                className={`progress-step ${status} ${isClickable ? 'cursor-pointer' : ''}`}
                onClick={() => handleStepClick(stepNumber)}
              >
                <div className="progress-step-indicator">
                  {status === 'completed' ? (
                    <Icon name="Check" size={14} />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>
                <span className="hidden lg:inline text-muted-foreground">{label}</span>
              </div>
            );
          })}
        </div>

        <div className="flex md:hidden items-center justify-between mt-3">
          <span className="text-sm caption text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm caption font-medium text-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssessmentProgressTracker;