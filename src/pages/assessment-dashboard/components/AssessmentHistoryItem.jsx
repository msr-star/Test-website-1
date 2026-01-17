import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AssessmentHistoryItem = ({ 
  title, 
  completedDate, 
  score, 
  type,
  onViewResults,
  onRetake
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getTypeIcon = () => {
    switch(type) {
      case 'personality':
        return 'User';
      case 'skills':
        return 'Award';
      case 'career':
        return 'Briefcase';
      default:
        return 'FileText';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 hover:shadow-md transition-all duration-250">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name={getTypeIcon()} size={24} color="var(--color-primary)" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 font-heading">
                {title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Calendar" size={14} />
                <span>Completed on {formatDate(completedDate)}</span>
              </div>
            </div>
            {score && (
              <div className="text-right">
                <div className="text-2xl font-bold text-primary data-text">{score}%</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              onClick={onViewResults}
            >
              View Results
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="RefreshCw"
              iconPosition="left"
              onClick={onRetake}
            >
              Retake
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHistoryItem;