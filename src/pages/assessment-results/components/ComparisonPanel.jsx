import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const ComparisonPanel = ({ comparisonData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: <span className="font-semibold data-text">{entry?.value}%</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Progress Comparison
        </h2>
        <Icon name="GitCompare" size={24} color="var(--color-primary)" />
      </div>
      <div className="bg-muted rounded-lg p-4 mb-6">
        <p className="text-sm md:text-base text-foreground">
          Track your assessment progress over time. This comparison shows how your skills and personality traits have evolved across multiple assessment attempts.
        </p>
      </div>
      <div className="w-full h-80 md:h-96 mb-6" aria-label="Progress Comparison Line Chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={comparisonData?.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              tick={{ fill: 'var(--color-foreground)', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 100]}
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="technical" 
              stroke="var(--color-primary)" 
              strokeWidth={2}
              name="Technical Skills"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="communication" 
              stroke="var(--color-accent)" 
              strokeWidth={2}
              name="Communication"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="leadership" 
              stroke="var(--color-success)" 
              strokeWidth={2}
              name="Leadership"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comparisonData?.insights?.map((insight, index) => (
          <div key={index} className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon 
                name={insight?.trend === 'up' ? 'TrendingUp' : insight?.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                size={20} 
                color={insight?.trend === 'up' ? 'var(--color-success)' : insight?.trend === 'down' ? 'var(--color-error)' : 'var(--color-muted-foreground)'}
              />
              <span className="text-sm font-medium text-foreground">{insight?.category}</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">{insight?.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-foreground data-text">
                {insight?.change > 0 ? '+' : ''}{insight?.change}%
              </span>
              <span className="text-xs text-muted-foreground">vs. previous</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonPanel;