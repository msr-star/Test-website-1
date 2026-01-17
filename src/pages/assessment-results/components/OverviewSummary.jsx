import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OverviewSummary = ({ summaryData }) => {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Assessment Complete!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Completed on {summaryData?.completionDate}
          </p>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
          <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
        </div>
      </div>
      <div className="bg-muted rounded-lg p-4 md:p-6 mb-6">
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          {summaryData?.overallSummary}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="User" size={20} color="var(--color-primary)" />
            <span className="text-sm text-muted-foreground caption">Personality Type</span>
          </div>
          <p className="text-lg md:text-xl font-semibold text-foreground">{summaryData?.personalityType}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Award" size={20} color="var(--color-accent)" />
            <span className="text-sm text-muted-foreground caption">Top Skill</span>
          </div>
          <p className="text-lg md:text-xl font-semibold text-foreground">{summaryData?.topSkill}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Briefcase" size={20} color="var(--color-success)" />
            <span className="text-sm text-muted-foreground caption">Career Matches</span>
          </div>
          <p className="text-lg md:text-xl font-semibold text-foreground data-text">{summaryData?.careerMatches}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Target" size={20} color="var(--color-secondary)" />
            <span className="text-sm text-muted-foreground caption">Overall Score</span>
          </div>
          <p className="text-lg md:text-xl font-semibold text-foreground data-text">{summaryData?.overallScore}%</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="default" iconName="Download" iconPosition="left">
          Download Full Report
        </Button>
        <Button variant="outline" iconName="Share2" iconPosition="left">
          Share Results
        </Button>
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Retake Assessment
        </Button>
      </div>
    </div>
  );
};

export default OverviewSummary;