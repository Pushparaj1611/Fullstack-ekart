/**
 * Represents the status of a task
 * @enum {string}
 */
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

/**
 * Represents a task in the system
 * @interface Task
 */
export interface Task {
  /** Unique identifier for the task */
  id: string;
  /** Title of the task */
  title: string;
  /** Detailed description of the task */
  description: string;
  /** Current status of the task */
  status: TaskStatus;
  /** Creation timestamp */
  createdAt: Date;
  /** Last updated timestamp */
  updatedAt: Date;
}