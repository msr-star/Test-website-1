import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AssessmentProgressCard = ({ 
  title, 
  description, 
  progress, 
  status, 
  estimatedTime, 
  icon, 
  iconColor,
  onContinue,
  onStart,
  onRetake
}) => {
  const getStatusConfig = () => {
    switch(status) {
      case 'completed':
        return {
          badge: 'Completed',
          badgeColor: 'bg-success/10 text-success',
          action: 'Retake',
          actionVariant: 'outline',
          actionIcon: 'RefreshCw',
          onAction: onRetake
        };
      case 'in-progress':
        return {
          badge: 'In Progress',
          badgeColor: 'bg-accent/10 text-accent',
          action: 'Continue',
          actionVariant: 'default',
          actionIcon: 'PlayCircle',
          onAction: onContinue
        };
      default:
        return {
          badge: 'Not Started',
          badgeColor: 'bg-muted text-muted-foreground',
          action: 'Start',
          actionVariant: 'default',
          actionIcon: 'PlayCircle',
          onAction: onStart
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="card hover:shadow-lg transition-all duration-250">
      <div className="flex items-start gap-4 mb-6">
        <div 
          className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon name={icon} size={28} color={iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-foreground font-heading">
              {title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusConfig?.badgeColor}`}>
              {statusConfig?.badge}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      {status !== 'not-started' && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-medium text-primary">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-4">
        {estimatedTime && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>{estimatedTime}</span>
          </div>
        )}
        <Button
          variant={statusConfig?.actionVariant}
          size="sm"
          iconName={statusConfig?.actionIcon}
          iconPosition="left"
          onClick={statusConfig?.onAction}
          className="ml-auto"
        >
          {statusConfig?.action}
        </Button>
      </div>
    </div>
  );
};

export default AssessmentProgressCard;