import React from 'react';
import FeatureCard from './FeatureCard';

const MyComponent = () => {
  const featuresData = [
    {
      id: 'CAM-7',
      title: 'Integrate Third-Party Payment Gateway',
      description: 'Feature Request',
      status: 'Feature Request',
      avatarUrl: 'https://example.com/avatar7.jpg'
    },
    {
      id: 'CAM-10',
      title: 'Upgrade Server Infrastructure',
      description: 'Feature Request',
      status: 'Feature Request',
      avatarUrl: 'https://example.com/avatar10.jpg'
    },
    {
      id: 'CAM-9',
      title: 'Implement Role-Based Access Control (RBAC)',
      description: 'Feature Request',
      status: 'Feature Request',
      avatarUrl: 'https://example.com/avatar9.jpg'
    }
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
