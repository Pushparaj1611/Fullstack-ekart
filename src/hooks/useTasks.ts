import { useState, useCallback } from 'react';
import { Task, TaskStatus } from '../types/task';

/**
 * Custom hook for managing tasks
 * @returns {Object} Task management methods and state
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  /**
   * Creates a new task
   * @param {string} title - Task title
   * @param {string} description - Task description
   * @returns {void}
   */
  const createTask = useCallback((title: string, description: string): void => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  /**
   * Updates a task's status
   * @param {string} taskId - Task identifier
   * @param {TaskStatus} status - New status
   * @returns {void}
   */
  const updateTaskStatus = useCallback((taskId: string, status: TaskStatus): void => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, status, updatedAt: new Date() }
        : task
    ));
  }, []);

  /**
   * Deletes a task
   * @param {string} taskId - Task identifier
   * @returns {void}
   */
  const deleteTask = useCallback((taskId: string): void => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, []);

  return {
    tasks,
    createTask,
    updateTaskStatus,
    deleteTask
  };
}