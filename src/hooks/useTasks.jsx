import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

/**
 * Custom hook for task management
 * Encapsulates all task-related logic
 */
const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  /**
   * Add a new task
   * @param {Object} taskData - task properties (title, description, priority)
   */
  const addTask = useCallback((taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title.trim(),
      description: taskData.description.trim(),
      priority: taskData.priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  }, [setTasks]);

  /**
   * Update an existing task
   * @param {number} id - task id
   * @param {Object} updates - properties to update
   */
  const updateTask = useCallback((id, updates) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  }, [setTasks]);

  /**
   * Toggle task completion status
   * @param {number} id - task id
   */
  const toggleTask = useCallback((id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  /**
   * Delete a task
   * @param {number} id - task id
   */
  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  /**
   * Reorder tasks (for drag and drop)
   * @param {number} draggedId - id of dragged task
   * @param {number} targetId - id of target task
   */
  const reorderTasks = useCallback((draggedId, targetId) => {
    setTasks(prevTasks => {
      const draggedIndex = prevTasks.findIndex(t => t.id === draggedId);
      const targetIndex = prevTasks.findIndex(t => t.id === targetId);
      
      if (draggedIndex === -1 || targetIndex === -1) return prevTasks;
      
      const newTasks = [...prevTasks];
      const [removed] = newTasks.splice(draggedIndex, 1);
      newTasks.splice(targetIndex, 0, removed);
      
      return newTasks;
    });
  }, [setTasks]);

  /**
   * Clear all completed tasks
   */
  const clearCompleted = useCallback(() => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  }, [setTasks]);

  return {
    tasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    reorderTasks,
    clearCompleted
  };
};

export default useTasks;
