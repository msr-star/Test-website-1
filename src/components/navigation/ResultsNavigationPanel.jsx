import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from '../ui/Button';

const ResultsNavigationPanel = ({ 
  onTabChange = () => {},
  onExport = () => {},
  onShare = () => {},
  onCompare = () => {}
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'personality', label: 'Personality', icon: 'User' },
    { id: 'skills', label: 'Skills', icon: 'Award' },
    { id: 'careers', label: 'Career Matches', icon: 'Briefcase' },
    { id: 'recommendations', label: 'Recommendations', icon: 'Lightbulb' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="results-tabs overflow-x-auto flex-1">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => handleTabClick(tab?.id)}
                className={`results-tab flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab?.id ? 'active' : ''
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="hidden sm:inline">{tab?.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              onClick={onExport}
              className="hidden md:flex"
            >
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share2"
              onClick={onShare}
              className="hidden sm:flex"
            >
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="GitCompare"
              onClick={onCompare}
            >
              <span className="hidden lg:inline">Compare</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsNavigationPanel;