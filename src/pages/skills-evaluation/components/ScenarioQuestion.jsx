import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ScenarioQuestion = ({ 
  scenario, 
  onAnswer, 
  currentAnswer = null 
}) => {
  const [selectedOption, setSelectedOption] = useState(currentAnswer);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setShowExplanation(false);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(scenario?.id, selectedOption);
      setShowExplanation(true);
    }
  };

  const getOptionIcon = (optionId) => {
    if (!showExplanation) return null;
    const option = scenario?.options?.find(o => o?.id === optionId);
    if (option?.isOptimal) return <Icon name="CheckCircle2" size={18} color="var(--color-success)" />;
    if (selectedOption === optionId) return <Icon name="AlertCircle" size={18} color="var(--color-warning)" />;
    return null;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Lightbulb" size={20} color="var(--color-accent)" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              Scenario-Based Question
            </h3>
            <p className="text-sm text-muted-foreground">
              {scenario?.context}
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            {scenario?.question}
          </p>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {scenario?.options?.map((option) => {
          const isSelected = selectedOption === option?.id;
          const showOptimal = showExplanation && option?.isOptimal;
          const showSuboptimal = showExplanation && isSelected && !option?.isOptimal;

          return (
            <button
              key={option?.id}
              onClick={() => handleOptionSelect(option?.id)}
              disabled={showExplanation}
              className={`w-full flex items-start gap-3 p-4 rounded-lg border-2 transition-all duration-250 text-left touch-target ${
                isSelected
                  ? showOptimal
                    ? 'border-success bg-success/5'
                    : showSuboptimal
                    ? 'border-warning bg-warning/5' :'border-primary bg-primary/5' :'border-border hover:border-muted-foreground'
              } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isSelected
                  ? showOptimal
                    ? 'border-success bg-success'
                    : showSuboptimal
                    ? 'border-warning bg-warning' :'border-primary bg-primary' :'border-muted-foreground'
              }`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm md:text-base text-foreground">{option?.text}</p>
                  {getOptionIcon(option?.id)}
                </div>
                {showExplanation && isSelected && (
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 pt-2 border-t border-border">
                    {option?.explanation}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
      {!showExplanation ? (
        <Button
          variant="default"
          onClick={handleSubmit}
          disabled={!selectedOption}
          iconName="ArrowRight"
          iconPosition="right"
          fullWidth
        >
          Submit Answer
        </Button>
      ) : (
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon 
              name={scenario?.options?.find(o => o?.id === selectedOption)?.isOptimal ? "CheckCircle2" : "Info"} 
              size={20} 
              color={scenario?.options?.find(o => o?.id === selectedOption)?.isOptimal ? "var(--color-success)" : "var(--color-accent)"} 
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground mb-1">
                {scenario?.options?.find(o => o?.id === selectedOption)?.isOptimal ? "Excellent Choice!" : "Good Attempt"}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                {scenario?.feedback}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioQuestion;