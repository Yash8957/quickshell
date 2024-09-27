import React from 'react';
import FeatureCard from './FeatureCard';

const MyComponent = () => {
  const featuresData = [
    {
      id: 'CAM-4',
      title: 'Add Multi-Language Support',
      description: 'Feature Request',
      avatarUrl: 'https://example.com/avatar.jpg'
    },
    {
      id: 'CAM-2',
      title: 'Implement Email Notification System',
      description: 'Feature Request',
      avatarUrl: 'https://example.com/avatar2.jpg'
    },
    {
      id: 'CAM-1',
      title: 'Update User Profile Page UI',
      description: 'Feature Request',
      avatarUrl: 'https://example.com/avatar3.jpg'
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
