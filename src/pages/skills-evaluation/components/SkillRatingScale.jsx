import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillRatingScale = ({ 
  skill, 
  value, 
  onChange, 
  disabled = false 
}) => {
  const levels = [
    { value: 1, label: 'Beginner', description: 'Limited experience', color: 'var(--color-error)' },
    { value: 2, label: 'Basic', description: 'Some experience', color: 'var(--color-warning)' },
    { value: 3, label: 'Intermediate', description: 'Moderate experience', color: 'var(--color-accent)' },
    { value: 4, label: 'Advanced', description: 'Strong experience', color: 'var(--color-success)' },
    { value: 5, label: 'Expert', description: 'Extensive experience', color: 'var(--color-primary)' }
  ];

  const handleClick = (levelValue) => {
    if (!disabled) {
      onChange(skill?.id, levelValue);
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6 transition-all duration-250 hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
            {skill?.name}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {skill?.description}
          </p>
        </div>
        {value > 0 && (
          <div 
            className="ml-3 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${levels?.[value - 1]?.color}15` }}
          >
            <Icon name="Star" size={20} color={levels?.[value - 1]?.color} />
          </div>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Rate your proficiency</span>
          {value > 0 && (
            <span className="font-medium" style={{ color: levels?.[value - 1]?.color }}>
              {levels?.[value - 1]?.label}
            </span>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {levels?.map((level) => (
            <button
              key={level?.value}
              onClick={() => handleClick(level?.value)}
              disabled={disabled}
              className={`relative h-12 md:h-14 rounded-lg border-2 transition-all duration-250 touch-target ${
                value === level?.value
                  ? 'border-current shadow-md scale-105'
                  : 'border-border hover:border-muted-foreground'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              style={{ 
                borderColor: value === level?.value ? level?.color : undefined,
                backgroundColor: value === level?.value ? `${level?.color}10` : undefined
              }}
              aria-label={`${level?.label} - ${level?.description}`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <span 
                  className="text-lg md:text-xl font-bold"
                  style={{ color: value === level?.value ? level?.color : 'var(--color-muted-foreground)' }}
                >
                  {level?.value}
                </span>
                <span className="text-xs hidden md:block mt-1 text-muted-foreground">
                  {level?.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-between text-xs text-muted-foreground pt-2">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
};

export default SkillRatingScale;