import React from 'react';

const StatCard = ({ value, label, color, darkMode }) => (
  <div className={`rounded-lg shadow p-4 text-center ${
    darkMode ? 'bg-gray-800' : 'bg-white'
  }`}>
    <div className={`text-2xl font-bold ${color}`}>
      {value}
    </div>
    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      {label}
    </div>
  </div>
);

const Statistics = ({ stats, darkMode }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard 
        value={stats.total} 
        label="Total Tasks" 
        color={darkMode ? 'text-indigo-400' : 'text-indigo-600'}
        darkMode={darkMode}
      />
      <StatCard 
        value={stats.completed} 
        label="Completed" 
        color={darkMode ? 'text-green-400' : 'text-green-600'}
        darkMode={darkMode}
      />
      <StatCard 
        value={stats.active} 
        label="Active" 
        color={darkMode ? 'text-orange-400' : 'text-orange-600'}
        darkMode={darkMode}
      />
      <StatCard 
        value={`${stats.percentage}%`} 
        label="Progress" 
        color={darkMode ? 'text-purple-400' : 'text-purple-600'}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Statistics;
