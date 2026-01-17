import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgressSidebar = ({ 
  categories, 
  currentCategory, 
  onCategoryChange,
  overallProgress = 0,
  estimatedTimeRemaining = 0,
  onSave,
  onComplete 
}) => {
  const completedCategories = categories?.filter(c => c?.completionPercentage === 100)?.length;
  const totalCategories = categories?.length;

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6 sticky top-20">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Evaluation Progress
        </h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Overall Progress</span>
              <span className="text-sm font-semibold text-foreground">{overallProgress}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
                <span className="text-xs text-muted-foreground">Completed</span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {completedCategories}/{totalCategories}
              </p>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock" size={16} color="var(--color-accent)" />
                <span className="text-xs text-muted-foreground">Time Left</span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {estimatedTimeRemaining} min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Categories</h4>
        <div className="space-y-2">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-250 text-left touch-target ${
                currentCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{category?.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{ width: `${category?.completionPercentage}%` }}
                    />
                  </div>
                  <span className="text-xs opacity-80">{category?.completionPercentage}%</span>
                </div>
              </div>
              {category?.completionPercentage === 100 && (
                <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2 pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={onSave}
          iconName="Save"
          fullWidth
        >
          Save Progress
        </Button>
        <Button
          variant="default"
          onClick={onComplete}
          disabled={overallProgress < 100}
          iconName="CheckCircle2"
          iconPosition="right"
          fullWidth
        >
          Complete Evaluation
        </Button>
      </div>
      <div className="mt-4 bg-accent/5 rounded-lg p-3 border border-accent/20">
        <div className="flex gap-2">
          <Icon name="Lightbulb" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs text-foreground">
            Complete all categories to receive personalized career recommendations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSidebar;