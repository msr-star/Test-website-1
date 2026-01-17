import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/AppImage';

const CareerMatchCard = ({ 
  title, 
  matchScore, 
  category,
  salary,
  growth,
  image,
  imageAlt,
  onExplore
}) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-250">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold data-text">
          {matchScore}% Match
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 font-heading line-clamp-1">
          {title}
        </h4>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
            {category}
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="DollarSign" size={16} />
            <span>{salary}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="TrendingUp" size={16} />
            <span>{growth} growth</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onExplore}
        >
          Explore Career
        </Button>
      </div>
    </div>
  );
};

export default CareerMatchCard;