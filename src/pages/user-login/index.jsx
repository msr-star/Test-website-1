import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import LoginForm from './components/LoginForm';
import SocialLoginOptions from './components/SocialLoginOptions';
import MotivationalSection from './components/MotivationalSection';
import TrustIndicators from './components/TrustIndicators';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const UserLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <MotivationalSection />
            </div>

            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="bg-card rounded-2xl border border-border shadow-lg p-6 md:p-8 lg:p-10 space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon name="LogIn" size={32} color="var(--color-primary)" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                      Sign In to Your Account
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Continue your career discovery journey
                    </p>
                  </div>

                  <LoginForm />

                  <SocialLoginOptions />

                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <button
                        onClick={() => navigate('/user-registration')}
                        className="font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Create New Account
                      </button>
                    </p>
                  </div>

                  <TrustIndicators />
                </div>

                <div className="mt-6 bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">
                        New to CareerCompass?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Take our free assessment to discover your ideal career path and get personalized recommendations.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        onClick={() => navigate('/user-registration')}
                        className="mt-2"
                      >
                        Get Started Free
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground caption">
              © {new Date()?.getFullYear()} CareerCompass. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserLogin;