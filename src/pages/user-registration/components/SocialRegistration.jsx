import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialRegistration = () => {
  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
  };

  const handleMicrosoftSignup = () => {
    console.log('Microsoft signup clicked');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs md:text-sm">
          <span className="bg-background px-4 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <Button
          variant="outline"
          fullWidth
          onClick={handleGoogleSignup}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon name="Chrome" size={18} />
            <span>Google</span>
          </div>
        </Button>

        <Button
          variant="outline"
          fullWidth
          onClick={handleMicrosoftSignup}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon name="Box" size={18} />
            <span>Microsoft</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SocialRegistration;