import React from 'react';
import Icon from '../../../components/AppIcon';

const AdaptiveRecommendations = ({ 
  recommendations, 
  educationLevel, 
  careerInterests 
}) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-4 md:p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name="Sparkles" size={20} color="var(--color-primary)" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
            Personalized Recommendations
          </h3>
          <p className="text-sm text-muted-foreground">
            Based on your {educationLevel} level and interest in {careerInterests?.join(', ')}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {recommendations?.map((recommendation, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-4 border border-border"
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                recommendation?.priority === 'high' ?'bg-error/10' 
                  : recommendation?.priority === 'medium' ?'bg-warning/10' :'bg-success/10'
              }`}>
                <Icon 
                  name={recommendation?.icon} 
                  size={16} 
                  color={
                    recommendation?.priority === 'high' ?'var(--color-error)' 
                      : recommendation?.priority === 'medium' ?'var(--color-warning)' :'var(--color-success)'
                  } 
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {recommendation?.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  {recommendation?.description}
                </p>
                {recommendation?.actionItems && recommendation?.actionItems?.length > 0 && (
                  <ul className="space-y-1">
                    {recommendation?.actionItems?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Icon name="ChevronRight" size={12} className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Info" size={14} />
          <span>Recommendations update as you complete more assessments</span>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveRecommendations;