import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: 'Shield',
      text: 'Bank-level encryption',
      color: 'var(--color-success)'
    },
    {
      id: 2,
      icon: 'Lock',
      text: 'Secure data storage',
      color: 'var(--color-primary)'
    },
    {
      id: 3,
      icon: 'Eye',
      text: 'Privacy protected',
      color: 'var(--color-accent)'
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: 'Harvard University',
      logo: 'GraduationCap'
    },
    {
      id: 2,
      name: 'MIT',
      logo: 'BookOpen'
    },
    {
      id: 3,
      name: 'Stanford',
      logo: 'Award'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {securityFeatures?.map((feature) => (
          <div
            key={feature?.id}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon name={feature?.icon} size={16} color={feature?.color} />
            <span className="caption">{feature?.text}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6">
        <p className="text-xs text-center text-muted-foreground caption mb-4">
          Trusted by leading educational institutions
        </p>
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {partnerships?.map((partner) => (
            <div
              key={partner?.id}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center">
                <Icon name={partner?.logo} size={20} />
              </div>
              <span className="text-xs caption hidden sm:inline">{partner?.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground caption">
          By signing in, you agree to our{' '}
          <button className="text-primary hover:underline">Terms of Service</button>
          {' '}and{' '}
          <button className="text-primary hover:underline">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
};

export default TrustIndicators;