import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/ui/AppImage';
import Button from '../../../components/ui/Button';

const CareerMatchCard = ({ career, rank }) => {
  const getMatchColor = (score) => {
    if (score >= 85) return 'var(--color-success)';
    if (score >= 70) return 'var(--color-primary)';
    if (score >= 60) return 'var(--color-accent)';
    return 'var(--color-warning)';
  };

  return (
    <div className="card hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden">
            <Image 
              src={career?.image} 
              alt={career?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            #{rank}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
            {career?.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            {career?.category}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Icon name="TrendingUp" size={16} color={getMatchColor(career?.matchScore)} />
              <span className="text-sm md:text-base font-semibold data-text" style={{ color: getMatchColor(career?.matchScore) }}>
                {career?.matchScore}% Match
              </span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm md:text-base text-muted-foreground">{career?.salaryRange}</span>
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base text-foreground mb-4 line-clamp-3">
        {career?.description}
      </p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground mb-2">Key Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {career?.requirements?.map((req, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-xs md:text-sm text-foreground"
            >
              {req}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="GraduationCap" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-muted-foreground">Education</span>
          </div>
          <p className="text-sm md:text-base font-medium text-foreground">{career?.educationLevel}</p>
        </div>
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="BarChart3" size={16} color="var(--color-success)" />
            <span className="text-xs md:text-sm text-muted-foreground">Growth</span>
          </div>
          <p className="text-sm md:text-base font-medium text-foreground">{career?.growthOutlook}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="default" fullWidth iconName="ExternalLink" iconPosition="right">
          Explore Career
        </Button>
        <Button variant="outline" size="default" iconName="Bookmark">
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>
    </div>
  );
};

export default CareerMatchCard;