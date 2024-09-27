import React from 'react';
import FeatureCard from './FeatureCard';

const MyComponent = () => {
  const featuresData = [
    {
      id: 'CAM-3',
      title: 'Optimize Database Queries for Performance',
      description: 'Feature Request',
      status: 'In Progress',
      avatarUrl: 'https://example.com/avatar.jpg'
    },
    // ... other feature data
  ];

  return (
    <div>
      {featuresData.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  );
};

export default MyComponent;
