import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RegistrationForm from './components/RegistrationForm';
import ProgressIndicator from './components/ProgressIndicator';
import TrustSignals from './components/TrustSignals';
import SocialRegistration from './components/SocialRegistration';

const UserRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4 md:mb-6">
              <Icon name="Compass" size={32} color="var(--color-primary)" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Start Your Career Journey
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Create your account to access personalized career assessments and discover your ideal career path
            </p>
          </div>

          <ProgressIndicator />

          <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-sm p-6 md:p-8 lg:p-10 mb-8 md:mb-12">
            <RegistrationForm />

            <div className="mt-6 md:mt-8">
              <SocialRegistration />
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <p className="text-sm md:text-base text-muted-foreground">
                Already have an account?{' '}
                <Button
                  variant="link"
                  onClick={() => navigate('/user-login')}
                  className="p-0 h-auto font-semibold"
                >
                  Sign in
                </Button>
              </p>
            </div>
          </div>

          <TrustSignals />

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">
              By creating an account, you agree to our{' '}
              <button className="text-primary hover:underline">Terms of Service</button>
              {' '}and{' '}
              <button className="text-primary hover:underline">Privacy Policy</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;