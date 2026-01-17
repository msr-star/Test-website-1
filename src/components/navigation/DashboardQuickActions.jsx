import React from 'react';
import Icon from '../AppIcon';

const DashboardQuickActions = ({ 
  onStartAssessment = () => {},
  onContinueAssessment = () => {},
  onViewResults = () => {},
  hasInProgressAssessment = false,
  hasCompletedAssessments = false
}) => {
  const quickActions = [
    {
      id: 'start-new',
      title: 'Start New Assessment',
      description: 'Begin a comprehensive career assessment to discover your ideal path',
      icon: 'PlayCircle',
      iconColor: 'var(--color-primary)',
      action: onStartAssessment,
      show: !hasInProgressAssessment,
    },
    {
      id: 'continue',
      title: 'Continue Assessment',
      description: 'Pick up where you left off and complete your assessment',
      icon: 'RefreshCw',
      iconColor: 'var(--color-accent)',
      action: onContinueAssessment,
      show: hasInProgressAssessment,
    },
    {
      id: 'view-results',
      title: 'View Results',
      description: 'Explore your completed assessments and career recommendations',
      icon: 'BarChart3',
      iconColor: 'var(--color-success)',
      action: onViewResults,
      show: hasCompletedAssessments,
    },
    {
      id: 'explore-careers',
      title: 'Explore Careers',
      description: 'Browse career paths and discover opportunities that match your profile',
      icon: 'Compass',
      iconColor: 'var(--color-secondary)',
      action: () => {},
      show: true,
    },
  ];

  const visibleActions = quickActions?.filter(action => action?.show);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleActions?.map((action) => (
        <div
          key={action?.id}
          className="quick-action-card"
          onClick={action?.action}
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${action?.iconColor}15` }}
            >
              <Icon name={action?.icon} size={24} color={action?.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">
                {action?.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {action?.description}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-primary text-sm font-medium">
            <span>Get Started</span>
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardQuickActions;