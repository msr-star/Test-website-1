import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HelpPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const helpTopics = [
    {
      title: "How to Answer",
      icon: "HelpCircle",
      content: "Answer honestly based on your natural tendencies, not how you think you should be. There are no right or wrong answers."
    },
    {
      title: "Time Commitment",
      icon: "Clock",
      content: "The assessment takes approximately 15-20 minutes to complete. You can pause and resume at any time."
    },
    {
      title: "Privacy",
      icon: "Shield",
      content: "Your responses are confidential and used only to generate your personalized career recommendations."
    },
    {
      title: "Accuracy Tips",
      icon: "Target",
      content: "Don\'t overthink your answers. Your first instinct is usually the most accurate reflection of your personality."
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[1500] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-250 hover:scale-105 touch-target"
        aria-label="Toggle help panel"
      >
        <Icon name={isOpen ? "X" : "HelpCircle"} size={24} />
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[1500] w-full max-w-sm">
          <div className="card shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Assessment Help
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {helpTopics?.map((topic, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={topic?.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {topic?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {topic?.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                fullWidth
                iconName="MessageCircle"
                size="sm"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpPanel;