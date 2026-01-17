import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SectionCompletionModal = ({ 
  isOpen, 
  sectionName, 
  questionsCompleted,
  onContinue 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="card max-w-md w-full animate-in fade-in zoom-in duration-250">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
            <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Section Complete!
          </h2>
          
          <p className="text-base text-muted-foreground mb-6">
            Great job! You've completed the <span className="font-medium text-foreground">{sectionName}</span> section with {questionsCompleted} questions answered.
          </p>

          <div className="space-y-3">
            <Button
              variant="default"
              fullWidth
              onClick={onContinue}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Continue to Next Section
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCompletionModal;