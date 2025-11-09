import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ 
  tasks, 
  filter,
  darkMode,
  draggedTask,
  onToggleTask,
  onEditTask,
  onDeleteTask,
  onDragStart,
  onDragOver,
  onDrop
}) => {
  if (tasks.length === 0) {
    return (
      <div className={`rounded-lg shadow p-8 text-center ${
        darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
      }`}>
        <p className="text-lg">No tasks found</p>
        <p className="text-sm mt-2">
          {filter === 'all' 
            ? 'Add your first task to get started!' 
            : `No ${filter} tasks yet.`}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          darkMode={darkMode}
          isDragging={draggedTask?.id === task.id}
          onToggle={() => onToggleTask(task.id)}
          onEdit={() => onEditTask(task)}
          onDelete={() => onDeleteTask(task.id)}
          onDragStart={(e) => onDragStart(e, task)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
