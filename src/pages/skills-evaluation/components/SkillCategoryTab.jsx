import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCategoryTab = ({ 
  category, 
  isActive, 
  onClick, 
  completionPercentage = 0,
  estimatedTime = 0 
}) => {
  const getIconName = () => {
    switch(category?.id) {
      case 'technical': return 'Code';
      case 'communication': return 'MessageSquare';
      case 'leadership': return 'Users';
      case 'creative': return 'Palette';
      case 'analytical': return 'BarChart3';
      case 'interpersonal': return 'Heart';
      default: return 'CheckSquare';
    }
  };

  const getStatusColor = () => {
    if (completionPercentage === 100) return 'var(--color-success)';
    if (completionPercentage > 0) return 'var(--color-accent)';
    return 'var(--color-muted-foreground)';
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-250 w-full text-left ${
        isActive 
          ? 'bg-primary text-primary-foreground shadow-md' 
          : 'bg-card hover:bg-muted text-foreground'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isActive ? 'bg-white/20' : 'bg-muted'
      }`}>
        <Icon 
          name={getIconName()} 
          size={20} 
          color={isActive ? 'white' : getStatusColor()} 
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold truncate">{category?.name}</h3>
          <span className="text-xs font-medium ml-2">{completionPercentage}%</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-xs opacity-80 whitespace-nowrap">
            {estimatedTime} min
          </span>
        </div>
      </div>
      {completionPercentage === 100 && (
        <Icon name="CheckCircle2" size={18} color="var(--color-success)" />
      )}
    </button>
  );
};

export default SkillCategoryTab;