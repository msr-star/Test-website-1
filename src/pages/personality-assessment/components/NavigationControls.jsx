import React from 'react';
import Button from '../../../components/ui/Button';

const NavigationControls = ({ 
  onPrevious, 
  onNext, 
  onPause,
  canGoPrevious, 
  canGoNext,
  isLastQuestion,
  isSaving 
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          iconName="ChevronLeft"
          iconPosition="left"
          className="min-w-[120px]"
        >
          Previous
        </Button>

        <Button
          variant="ghost"
          onClick={onPause}
          iconName="Pause"
          size="sm"
        >
          <span className="hidden sm:inline">Save & Exit</span>
          <span className="sm:hidden">Pause</span>
        </Button>

        <Button
          variant="default"
          onClick={onNext}
          disabled={!canGoNext}
          loading={isSaving}
          iconName={isLastQuestion ? "Check" : "ChevronRight"}
          iconPosition="right"
          className="min-w-[120px]"
        >
          {isLastQuestion ? 'Complete' : 'Next'}
        </Button>
      </div>

      {isSaving && (
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground caption">
            Saving your progress...
          </p>
        </div>
      )}
    </div>
  );
};

export default NavigationControls;