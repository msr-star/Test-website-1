import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const AutoSaveIndicator = ({ isSaving, lastSaved }) => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (isSaving) {
      setShowIndicator(true);
    } else if (lastSaved) {
      const timer = setTimeout(() => setShowIndicator(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSaving, lastSaved]);

  if (!showIndicator) return null;

  return (
    <div className="fixed top-20 right-6 z-[1400] animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-md flex items-center gap-2">
        {isSaving ? (
          <>
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm caption text-muted-foreground">Saving...</span>
          </>
        ) : (
          <>
            <Icon name="Check" size={16} color="var(--color-success)" />
            <span className="text-sm caption text-muted-foreground">
              Saved {new Date(lastSaved)?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default AutoSaveIndicator;