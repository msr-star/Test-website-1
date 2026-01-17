import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStatsCard = ({ 
  label, 
  value, 
  icon, 
  iconColor,
  trend,
  trendValue
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-md transition-all duration-250">
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon name={icon} size={24} color={iconColor} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${
            trend === 'up' ? 'text-success' : trend === 'down' ? 'text-error' : 'text-muted-foreground'
          }`}>
            <Icon 
              name={trend === 'up' ? 'TrendingUp' : trend === 'down' ? 'TrendingDown' : 'Minus'} 
              size={14} 
            />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 data-text">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export default QuickStatsCard;