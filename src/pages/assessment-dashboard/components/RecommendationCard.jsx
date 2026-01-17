import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationCard = ({ 
  title, 
  description, 
  type, 
  priority,
  actionLabel,
  onAction
}) => {
  const getPriorityConfig = () => {
    switch(priority) {
      case 'high':
        return {
          icon: 'AlertCircle',
          iconColor: 'var(--color-error)',
          borderColor: 'border-l-error'
        };
      case 'medium':
        return {
          icon: 'Info',
          iconColor: 'var(--color-accent)',
          borderColor: 'border-l-accent'
        };
      default:
        return {
          icon: 'Lightbulb',
          iconColor: 'var(--color-primary)',
          borderColor: 'border-l-primary'
        };
    }
  };

  const config = getPriorityConfig();

  return (
    <div className={`bg-card border border-border ${config?.borderColor} border-l-4 rounded-lg p-4 md:p-5 hover:shadow-md transition-all duration-250`}>
      <div className="flex items-start gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${config?.iconColor}15` }}
        >
          <Icon name={config?.icon} size={20} color={config?.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 font-heading">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mt-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {type}
        </span>
        <Button
          variant="ghost"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

export default RecommendationCard;