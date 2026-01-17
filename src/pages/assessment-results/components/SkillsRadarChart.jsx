import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const SkillsRadarChart = ({ skillsData }) => {
  const chartData = skillsData?.map(skill => ({
    skill: skill?.name,
    score: skill?.score,
    fullMark: 100
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">{payload?.[0]?.payload?.skill}</p>
          <p className="text-sm text-primary font-semibold">{payload?.[0]?.value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
        Skills Assessment Overview
      </h2>
      <div className="w-full h-80 md:h-96" aria-label="Skills Radar Chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ fill: 'var(--color-foreground)', fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 10 }}
            />
            <Radar 
              name="Skills" 
              dataKey="score" 
              stroke="var(--color-primary)" 
              fill="var(--color-primary)" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6">
        {skillsData?.map((skill, index) => (
          <div key={index} className="bg-muted rounded-lg p-3 md:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm md:text-base font-medium text-foreground">{skill?.name}</span>
              <span className="text-sm md:text-base font-semibold text-primary data-text">{skill?.score}%</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500"
                style={{ 
                  width: `${skill?.score}%`,
                  backgroundColor: skill?.score >= 75 ? 'var(--color-success)' : skill?.score >= 50 ? 'var(--color-accent)' : 'var(--color-warning)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsRadarChart;