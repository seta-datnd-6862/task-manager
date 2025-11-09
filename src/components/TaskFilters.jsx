import React from 'react';

const TaskFilters = ({ filter, setFilter, stats, darkMode, tasks }) => {
  const FilterButton = ({ value, label, count, activeColor }) => (
    <button
      onClick={() => setFilter(value)}
      className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
        filter === value
          ? `${activeColor} text-white`
          : darkMode
          ? 'text-gray-300 hover:bg-gray-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label} ({count})
    </button>
  );

  return (
    <div className={`flex gap-2 mb-6 rounded-lg shadow p-2 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <FilterButton 
        value="all" 
        label="All" 
        count={tasks.length}
        activeColor="bg-indigo-600"
      />
      <FilterButton 
        value="active" 
        label="Active" 
        count={stats.active}
        activeColor="bg-orange-600"
      />
      <FilterButton 
        value="completed" 
        label="Completed" 
        count={stats.completed}
        activeColor="bg-green-600"
      />
    </div>
  );
};

export default TaskFilters;
