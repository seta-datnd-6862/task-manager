import React, { memo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * FilterButton component
 * Individual filter button
 */
const FilterButton = memo(({ value, label, count, activeColor, isActive, onClick }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
        isActive
          ? `${activeColor} text-white`
          : darkMode
          ? 'text-gray-300 hover:bg-gray-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label} ({count})
    </button>
  );
});

FilterButton.displayName = 'FilterButton';

/**
 * TaskFilters component
 * Filter buttons and clear completed action
 */
const TaskFilters = memo(({ filter, setFilter, tasks, onClearCompleted }) => {
  const { darkMode } = useTheme();

  const completedCount = tasks.filter(t => t.completed).length;
  const activeCount = tasks.filter(t => !t.completed).length;

  const handleClearCompleted = useCallback(() => {
    if (completedCount > 0 && window.confirm('Clear all completed tasks?')) {
      onClearCompleted();
    }
  }, [completedCount, onClearCompleted]);

  return (
    <div className="mb-6 space-y-3">
      <div className={`flex gap-2 rounded-lg shadow p-2 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <FilterButton 
          value="all" 
          label="All" 
          count={tasks.length}
          activeColor="bg-indigo-600"
          isActive={filter === 'all'}
          onClick={() => setFilter('all')}
        />
        <FilterButton 
          value="active" 
          label="Active" 
          count={activeCount}
          activeColor="bg-orange-600"
          isActive={filter === 'active'}
          onClick={() => setFilter('active')}
        />
        <FilterButton 
          value="completed" 
          label="Completed" 
          count={completedCount}
          activeColor="bg-green-600"
          isActive={filter === 'completed'}
          onClick={() => setFilter('completed')}
        />
      </div>

      {completedCount > 0 && (
        <button
          onClick={handleClearCompleted}
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            darkMode
              ? 'bg-red-900/30 text-red-300 hover:bg-red-900/50'
              : 'bg-red-50 text-red-600 hover:bg-red-100'
          }`}
        >
          Clear {completedCount} Completed Task{completedCount > 1 ? 's' : ''}
        </button>
      )}
    </div>
  );
});

TaskFilters.displayName = 'TaskFilters';

export default TaskFilters;
