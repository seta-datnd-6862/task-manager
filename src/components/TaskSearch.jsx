import React, { memo } from 'react';
import { Search, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * TaskSearch component
 * Search input for filtering tasks by keyword
 */
const TaskSearch = memo(({ searchQuery, onSearchChange }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-lg shadow-lg p-4 mb-6 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="relative">
        <Search 
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`} 
          size={20} 
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className={`w-full pl-10 pr-10 py-3 border rounded-lg outline-none transition-colors ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500'
              : 'bg-white border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          }`}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
});

TaskSearch.displayName = 'TaskSearch';

export default TaskSearch;
