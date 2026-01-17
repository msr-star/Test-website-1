import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfileStrengthCard = ({ 
  percentage, 
  completedSections,
  totalSections,
  missingSections,
  onComplete
}) => {
  const getStrengthLevel = () => {
    if (percentage >= 80) return { label: 'Excellent', color: 'var(--color-success)' };
    if (percentage >= 60) return { label: 'Good', color: 'var(--color-accent)' };
    if (percentage >= 40) return { label: 'Fair', color: 'var(--color-warning)' };
    return { label: 'Needs Work', color: 'var(--color-error)' };
  };

  const strength = getStrengthLevel();

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 font-heading">
            Profile Strength
          </h3>
          <p className="text-sm text-muted-foreground">
            Complete your profile to get better career recommendations
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold data-text" style={{ color: strength?.color }}>
            {percentage}%
          </div>
          <div className="text-sm font-medium" style={{ color: strength?.color }}>
            {strength?.label}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="progress-bar h-3">
          <div 
            className="progress-fill"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: strength?.color
            }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <span>{completedSections} of {totalSections} sections completed</span>
        </div>
      </div>
      {missingSections?.length > 0 && (
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-semibold text-foreground">Missing Sections:</h4>
          {missingSections?.map((section, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <Icon name="AlertCircle" size={16} color="var(--color-warning)" />
              <span className="text-muted-foreground flex-1">{section}</span>
              <Button
                variant="ghost"
                size="xs"
                iconName="Plus"
                onClick={() => onComplete(section)}
              >
                Add
              </Button>
            </div>
          ))}
        </div>
      )}
      <Button
        variant="default"
        fullWidth
        iconName="CheckCircle"
        iconPosition="left"
        onClick={onComplete}
      >
        Complete Profile
      </Button>
    </div>
  );
};

export default ProfileStrengthCard;