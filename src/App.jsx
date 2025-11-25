import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import useTasks from './hooks/useTasks';
import useFilter from './hooks/useFilter';
import Header from './components/Header';
import Statistics from './components/Statistics';
import TaskSearch from './components/TaskSearch';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import EnvironmentBadge from './components/EnvironmentBadge';
import { useTheme } from './context/ThemeContext';

/**
 * AppContent component
 * Main application logic
 */
const AppContent = () => {
  const { darkMode } = useTheme();
  
  // Task management hook
  const { 
    tasks, 
    addTask, 
    updateTask, 
    toggleTask, 
    deleteTask, 
    reorderTasks,
    clearCompleted 
  } = useTasks();

  // Local state
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);

  // Filter and search tasks with useMemo optimization
  const filteredTasks = useFilter(tasks, filter, searchQuery);

  /**
   * Handle form submission for add/edit
   * Memoized with useCallback
   */
  const handleFormSubmit = useCallback((taskData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
    setIsFormVisible(false);
    setEditingTask(null);
  }, [editingTask, addTask, updateTask]);

  /**
   * Start editing a task
   * Memoized with useCallback
   */
  const handleStartEdit = useCallback((task) => {
    setEditingTask(task);
    setIsFormVisible(true);
  }, []);

  /**
   * Cancel form (add/edit)
   * Memoized with useCallback
   */
  const handleFormCancel = useCallback(() => {
    setIsFormVisible(false);
    setEditingTask(null);
  }, []);

  /**
   * Handle task deletion with confirmation
   * Memoized with useCallback
   */
  const handleDeleteTask = useCallback((id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  }, [deleteTask]);

  /**
   * Drag and drop handlers
   * Memoized with useCallback
   */
  const handleDragStart = useCallback((e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetTask) => {
    e.preventDefault();
    if (draggedTask && draggedTask.id !== targetTask.id) {
      reorderTasks(draggedTask.id, targetTask.id);
    }
    setDraggedTask(null);
  }, [draggedTask, reorderTasks]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    } p-4 md:p-8`}>
      <EnvironmentBadge />
      
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <Statistics tasks={tasks} />
        
        <TaskSearch 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <div className={`rounded-lg shadow-lg p-6 mb-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <TaskForm
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
            editingTask={editingTask}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </div>
        
        <TaskFilters 
          filter={filter} 
          setFilter={setFilter} 
          tasks={tasks}
          onClearCompleted={clearCompleted}
        />
        
        <TaskList
          tasks={filteredTasks}
          filter={filter}
          searchQuery={searchQuery}
          draggedTask={draggedTask}
          onToggleTask={toggleTask}
          onEditTask={handleStartEdit}
          onDeleteTask={handleDeleteTask}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
};

/**
 * Main App component wrapped with ThemeProvider
 */
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
