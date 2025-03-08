import React from 'react';
import { Task, TaskStatus } from '../types/task';
import { CheckCircle, Circle, Clock, Trash2 } from 'lucide-react';

interface TaskListProps {
  /** Array of tasks to display */
  tasks: Task[];
  /** Callback function to handle status updates */
  onUpdateStatus: (taskId: string, status: TaskStatus) => void;
  /** Callback function to handle task deletion */
  onDeleteTask: (taskId: string) => void;
}

/**
 * TaskList Component
 * Renders a list of tasks with status controls
 */
export function TaskList({ tasks, onUpdateStatus, onDeleteTask }: TaskListProps) {
  /**
   * Gets the appropriate icon for a task status
   * @param {TaskStatus} status - Current task status
   * @returns {JSX.Element} Status icon component
   */
  const getStatusIcon = (status: TaskStatus): JSX.Element => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600">{task.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => onUpdateStatus(task.id, 'pending')}
                className={`px-3 py-1 rounded-full ${
                  task.status === 'pending'
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => onUpdateStatus(task.id, 'in-progress')}
                className={`px-3 py-1 rounded-full ${
                  task.status === 'in-progress'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => onUpdateStatus(task.id, 'completed')}
                className={`px-3 py-1 rounded-full ${
                  task.status === 'completed'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Completed
              </button>
            </div>
            {getStatusIcon(task.status)}
          </div>
          <div className="text-sm text-gray-500">
            Created: {task.createdAt.toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}