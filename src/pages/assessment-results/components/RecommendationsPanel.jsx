import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationsPanel = ({ recommendations }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'Skill Development': 'Award',
      'Education': 'GraduationCap',
      'Career Exploration': 'Compass',
      'Networking': 'Users',
      'Experience': 'Briefcase'
    };
    return icons?.[category] || 'Lightbulb';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Skill Development': 'var(--color-accent)',
      'Education': 'var(--color-primary)',
      'Career Exploration': 'var(--color-secondary)',
      'Networking': 'var(--color-success)',
      'Experience': 'var(--color-warning)'
    };
    return colors?.[category] || 'var(--color-primary)';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Personalized Recommendations
        </h2>
        <Icon name="Sparkles" size={24} color="var(--color-accent)" />
      </div>
      <div className="space-y-4 md:space-y-6">
        {recommendations?.map((rec, index) => (
          <div key={index} className="bg-muted rounded-lg p-4 md:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${getCategoryColor(rec?.category)}20` }}
              >
                <Icon name={getCategoryIcon(rec?.category)} size={24} color={getCategoryColor(rec?.category)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground caption">
                    {rec?.category}
                  </span>
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: `${rec?.priority === 'High' ? 'var(--color-error)' : rec?.priority === 'Medium' ? 'var(--color-accent)' : 'var(--color-success)'}20`,
                      color: rec?.priority === 'High' ? 'var(--color-error)' : rec?.priority === 'Medium' ? 'var(--color-accent)' : 'var(--color-success)'
                    }}
                  >
                    {rec?.priority} Priority
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {rec?.title}
                </h3>
                <p className="text-sm md:text-base text-foreground mb-4">
                  {rec?.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-foreground">Action Steps:</h4>
                  <ul className="space-y-2">
                    {rec?.actionSteps?.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-2 text-sm md:text-base text-foreground">
                        <Icon name="CheckCircle2" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {rec?.resources && rec?.resources?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {rec?.resources?.map((resource, resIndex) => (
                      <Button 
                        key={resIndex}
                        variant="outline" 
                        size="sm"
                        iconName="ExternalLink"
                        iconPosition="right"
                      >
                        {resource}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;