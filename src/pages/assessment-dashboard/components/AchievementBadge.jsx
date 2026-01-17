import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ 
  title, 
  description, 
  icon, 
  earned, 
  earnedDate,
  progress,
  total
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-4 transition-all duration-250 ${earned ? 'hover:shadow-md' : 'opacity-60'}`}>
      <div className="flex items-start gap-3">
        <div 
          className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
            earned 
              ? 'bg-gradient-to-br from-accent to-accent/70' :'bg-muted'
          }`}
        >
          <Icon 
            name={icon} 
            size={28} 
            color={earned ? 'white' : 'var(--color-muted-foreground)'} 
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-foreground mb-1 font-heading">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {description}
          </p>
          {earned ? (
            <div className="flex items-center gap-1 text-xs text-success">
              <Icon name="Check" size={14} />
              <span>Earned on {formatDate(earnedDate)}</span>
            </div>
          ) : (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-medium text-foreground data-text">{progress}/{total}</span>
              </div>
              <div className="progress-bar h-1.5">
                <div 
                  className="progress-fill"
                  style={{ width: `${(progress / total) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;