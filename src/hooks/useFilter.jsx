import { useMemo } from 'react';

/**
 * Custom hook for filtering and searching items
 * @param {Array} items - array of items to filter
 * @param {string} filterType - filter type (all, active, completed)
 * @param {string} searchQuery - search keyword
 * @returns {Array} filtered items
 */
const useFilter = (items, filterType, searchQuery = '') => {
  return useMemo(() => {
    let filtered = items;

    // Apply filter type
    switch (filterType) {
      case 'active':
        filtered = filtered.filter(item => !item.completed);
        break;
      case 'completed':
        filtered = filtered.filter(item => item.completed);
        break;
      default:
        // 'all' - no filtering
        break;
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [items, filterType, searchQuery]);
};

export default useFilter;
