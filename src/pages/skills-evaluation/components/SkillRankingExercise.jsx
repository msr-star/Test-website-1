import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillRankingExercise = ({ 
  skills, 
  onComplete, 
  maxSelections = 5 
}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [rankedSkills, setRankedSkills] = useState([]);

  const handleSkillToggle = (skill) => {
    if (selectedSkills?.find(s => s?.id === skill?.id)) {
      setSelectedSkills(selectedSkills?.filter(s => s?.id !== skill?.id));
    } else if (selectedSkills?.length < maxSelections) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRankSkills = () => {
    setRankedSkills(selectedSkills);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newRanked = [...rankedSkills];
      [newRanked[index - 1], newRanked[index]] = [newRanked?.[index], newRanked?.[index - 1]];
      setRankedSkills(newRanked);
    }
  };

  const handleMoveDown = (index) => {
    if (index < rankedSkills?.length - 1) {
      const newRanked = [...rankedSkills];
      [newRanked[index], newRanked[index + 1]] = [newRanked?.[index + 1], newRanked?.[index]];
      setRankedSkills(newRanked);
    }
  };

  const handleSubmit = () => {
    onComplete(rankedSkills);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          Rank Your Top Skills
        </h3>
        <p className="text-sm text-muted-foreground">
          Select your top {maxSelections} skills, then rank them from strongest to weakest
        </p>
      </div>
      {rankedSkills?.length === 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {skills?.map((skill) => {
              const isSelected = selectedSkills?.find(s => s?.id === skill?.id);
              return (
                <button
                  key={skill?.id}
                  onClick={() => handleSkillToggle(skill)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-250 text-left touch-target ${
                    isSelected
                      ? 'border-primary bg-primary/5' :'border-border hover:border-muted-foreground'
                  } ${selectedSkills?.length >= maxSelections && !isSelected ? 'opacity-50' : ''}`}
                  disabled={selectedSkills?.length >= maxSelections && !isSelected}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                  }`}>
                    {isSelected && <Icon name="Check" size={14} color="white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground">{skill?.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{skill?.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {selectedSkills?.length} of {maxSelections} selected
            </span>
            <Button
              variant="default"
              onClick={handleRankSkills}
              disabled={selectedSkills?.length !== maxSelections}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Proceed to Ranking
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-3 mb-6">
            {rankedSkills?.map((skill, index) => (
              <div
                key={skill?.id}
                className="flex items-center gap-3 p-4 bg-muted rounded-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground">{skill?.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">{skill?.description}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="w-8 h-8 rounded flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30 touch-target"
                    aria-label="Move up"
                  >
                    <Icon name="ChevronUp" size={18} />
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === rankedSkills?.length - 1}
                    className="w-8 h-8 rounded flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30 touch-target"
                    aria-label="Move down"
                  >
                    <Icon name="ChevronDown" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setRankedSkills([])}
              iconName="RotateCcw"
              fullWidth
            >
              Reselect Skills
            </Button>
            <Button
              variant="default"
              onClick={handleSubmit}
              iconName="Check"
              iconPosition="right"
              fullWidth
            >
              Confirm Ranking
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillRankingExercise;