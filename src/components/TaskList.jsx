import React, { memo } from 'react';
import TaskItem from './TaskItem';
import { useTheme } from '../context/ThemeContext';

/**
 * EmptyState component
 * Displayed when no tasks match the filter/search
 */
const EmptyState = memo(({ filter, searchQuery }) => {
  const { darkMode } = useTheme();

  const getMessage = () => {
    if (searchQuery) {
      return {
        title: 'No tasks found',
        subtitle: `No tasks match "${searchQuery}"`
      };
    }
    
    switch (filter) {
      case 'active':
        return {
          title: 'No active tasks',
          subtitle: 'All tasks are completed! 🎉'
        };
      case 'completed':
        return {
          title: 'No completed tasks',
          subtitle: 'Start completing tasks to see them here'
        };
      default:
        return {
          title: 'No tasks yet',
          subtitle: 'Add your first task to get started!'
        };
    }
  };

  const { title, subtitle } = getMessage();

  return (
    <div className={`rounded-lg shadow p-8 text-center ${
      darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
    }`}>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm mt-2">{subtitle}</p>
    </div>
  );
});

EmptyState.displayName = 'EmptyState';

/**
 * TaskList component
 * Renders list of tasks with drag-and-drop support
 * Memoized to prevent unnecessary re-renders
 */
const TaskList = memo(({ 
  tasks, 
  filter,
  searchQuery,
  draggedTask,
  onToggleTask,
  onEditTask,
  onDeleteTask,
  onDragStart,
  onDragOver,
  onDrop
}) => {
  if (tasks.length === 0) {
    return <EmptyState filter={filter} searchQuery={searchQuery} />;
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          isDragging={draggedTask?.id === task.id}
          onToggle={onToggleTask}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
