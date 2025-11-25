import React, { memo, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * StatCard component - Individual stat display
 */
const StatCard = memo(({ value, label, color }) => {
  const { darkMode } = useTheme();
  
  return (
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
});

StatCard.displayName = 'StatCard';

/**
 * Statistics component
 * Displays task statistics dashboard
 */
const Statistics = memo(({ tasks }) => {
  const { darkMode } = useTheme();

  // Memoize statistics calculation
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, active, percentage };
  }, [tasks]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard 
        value={stats.total} 
        label="Total Tasks" 
        color={darkMode ? 'text-indigo-400' : 'text-indigo-600'}
      />
      <StatCard 
        value={stats.completed} 
        label="Completed" 
        color={darkMode ? 'text-green-400' : 'text-green-600'}
      />
      <StatCard 
        value={stats.active} 
        label="Active" 
        color={darkMode ? 'text-orange-400' : 'text-orange-600'}
      />
      <StatCard 
        value={`${stats.percentage}%`} 
        label="Progress" 
        color={darkMode ? 'text-purple-400' : 'text-purple-600'}
      />
    </div>
  );
});

Statistics.displayName = 'Statistics';

export default Statistics;
