import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PauseConfirmationModal = ({ 
  isOpen, 
  onConfirm, 
  onCancel,
  progress 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="card max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warning/10 flex items-center justify-center">
            <Icon name="Pause" size={32} color="var(--color-warning)" />
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Pause Assessment?
          </h2>
          
          <p className="text-base text-muted-foreground mb-6">
            Your progress has been saved. You can resume this assessment anytime from your dashboard.
          </p>

          <div className="mb-6 p-4 rounded-lg bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm caption text-muted-foreground">Current Progress</span>
              <span className="text-sm caption font-medium text-foreground">{progress}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onCancel}
            >
              Continue Assessment
            </Button>
            <Button
              variant="default"
              fullWidth
              onClick={onConfirm}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Save & Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseConfirmationModal;