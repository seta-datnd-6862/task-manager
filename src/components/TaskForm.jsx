import React from 'react';
import { Plus, Check } from 'lucide-react';

const TaskForm = ({ 
  isFormVisible, 
  setIsFormVisible,
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  errors,
  setErrors,
  editingTask,
  onSubmit,
  onCancel,
  darkMode 
}) => {
  if (!isFormVisible) {
    return (
      <button
        onClick={() => setIsFormVisible(true)}
        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
          darkMode
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
      >
        <Plus size={20} />
        Add New Task
      </button>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className={`text-xl font-semibold ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {editingTask ? 'Edit Task' : 'New Task'}
      </h2>
      
      <div>
        <label htmlFor="task-title" className={`block text-sm font-medium mb-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Task Title *
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) setErrors({...errors, title: null});
          }}
          placeholder="Enter task title"
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-indigo-500'
              : 'bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          } ${errors.title ? 'border-red-500' : ''}`}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="task-description" className={`block text-sm font-medium mb-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Description
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (errors.description) setErrors({...errors, description: null});
          }}
          placeholder="Enter task description (optional)"
          rows="3"
          className={`w-full px-4 py-2 border rounded-lg outline-none resize-none transition-colors ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-indigo-500'
              : 'bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          } ${errors.description ? 'border-red-500' : ''}`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
        <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {description.length}/500 characters
        </p>
      </div>

      <div>
        <label htmlFor="task-priority" className={`block text-sm font-medium mb-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Priority
        </label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-indigo-500'
              : 'bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          }`}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onSubmit}
          className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          {editingTask ? (
            <>
              <Check size={18} />
              Update Task
            </>
          ) : (
            <>
              <Plus size={18} />
              Add Task
            </>
          )}
        </button>
        <button
          onClick={onCancel}
          className={`px-6 py-2 rounded-lg transition-colors ${
            darkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
