import React from 'react';

const EnvironmentBadge = () => {
  const env = import.meta.env.VITE_APP_ENV;
  
  // Don't show badge in production
  if (env === 'production') {
    return null;
  }

  const badgeConfig = {
    development: {
      bg: 'bg-blue-500',
      text: 'DEV',
      icon: '🔧'
    },
    staging: {
      bg: 'bg-yellow-500',
      text: 'STAGING',
      icon: '🚧'
    }
  };

  const config = badgeConfig[env] || badgeConfig.development;

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className={`${config.bg} text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-bold`}>
        <span>{config.icon}</span>
        <span>{config.text}</span>
      </div>
    </div>
  );
};

export default EnvironmentBadge;
