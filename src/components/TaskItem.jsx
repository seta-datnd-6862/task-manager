import React from 'react';
import { Trash2, Check, Edit2, GripVertical } from 'lucide-react';

const TaskItem = ({ 
  task, 
  darkMode,
  onToggle,
  onEdit,
  onDelete,
  onDragStart,
  onDragOver,
  onDrop,
  isDragging
}) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300'
  };

  const priorityColorsDark = {
    high: 'bg-red-900/30 text-red-300 border-red-700',
    medium: 'bg-yellow-900/30 text-yellow-300 border-yellow-700',
    low: 'bg-green-900/30 text-green-300 border-green-700'
  };

  return (
    <article
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`rounded-lg shadow hover:shadow-md transition-all p-4 cursor-move ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } ${task.completed ? 'opacity-75' : ''} ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 cursor-grab active:cursor-grabbing ${
          darkMode ? 'text-gray-600' : 'text-gray-400'
        }`}>
          <GripVertical size={20} />
        </div>

        <button
          onClick={onToggle}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : darkMode
              ? 'border-gray-600 hover:border-indigo-500'
              : 'border-gray-300 hover:border-indigo-500'
          }`}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed && <Check size={16} className="text-white" />}
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`text-lg font-medium ${
              task.completed
                ? darkMode ? 'line-through text-gray-500' : 'line-through text-gray-500'
                : darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {task.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded border ${
              darkMode ? priorityColorsDark[task.priority] : priorityColors[task.priority]
            }`}>
              {task.priority.toUpperCase()}
            </span>
          </div>
          
          {task.description && (
            <p className={`text-sm mt-1 ${
              task.completed 
                ? darkMode ? 'text-gray-500' : 'text-gray-400'
                : darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {task.description}
            </p>
          )}
          
          <time className={`text-xs mt-2 block ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {new Date(task.createdAt).toLocaleDateString('vi-VN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </time>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
              darkMode
                ? 'text-blue-400 hover:text-blue-300 hover:bg-gray-700'
                : 'text-blue-500 hover:text-blue-700 hover:bg-blue-50'
            }`}
            aria-label="Edit task"
          >
            <Edit2 size={18} />
          </button>
          
          <button
            onClick={onDelete}
            className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
              darkMode
                ? 'text-red-400 hover:text-red-300 hover:bg-gray-700'
                : 'text-red-500 hover:text-red-700 hover:bg-red-50'
            }`}
            aria-label="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default TaskItem;
