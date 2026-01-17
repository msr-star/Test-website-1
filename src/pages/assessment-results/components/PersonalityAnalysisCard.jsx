import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalityAnalysisCard = ({ personalityData }) => {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {personalityData?.type}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {personalityData?.subtitle}
          </p>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${personalityData?.color}20` }}>
          <Icon name={personalityData?.icon} size={32} color={personalityData?.color} />
        </div>
      </div>
      <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed">
        {personalityData?.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
            Key Strengths
          </h3>
          <ul className="space-y-2">
            {personalityData?.strengths?.map((strength, index) => (
              <li key={index} className="flex items-start gap-2 text-sm md:text-base text-foreground">
                <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Icon name="Target" size={20} color="var(--color-accent)" />
            Development Areas
          </h3>
          <ul className="space-y-2">
            {personalityData?.developmentAreas?.map((area, index) => (
              <li key={index} className="flex items-start gap-2 text-sm md:text-base text-foreground">
                <Icon name="ArrowUpRight" size={16} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-muted rounded-lg p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
          Career Implications
        </h3>
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          {personalityData?.careerImplications}
        </p>
      </div>
    </div>
  );
};

export default PersonalityAnalysisCard;