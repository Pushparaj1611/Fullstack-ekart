import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';
import { ClipboardList } from 'lucide-react';

/**
 * Main Application Component
 * Manages the task management application's layout and state
 */
function App() {
  const { tasks, createTask, updateTaskStatus, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center justify-center mb-8">
          <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
        </div>
        
        <div className="space-y-8">
          <TaskForm onCreateTask={createTask} />
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Tasks</h2>
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No tasks yet. Add your first task above!
              </p>
            ) : (
              <TaskList
                tasks={tasks}
                onUpdateStatus={updateTaskStatus}
                onDeleteTask={deleteTask}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;