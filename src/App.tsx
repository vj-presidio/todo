import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css'; // Assuming you have some basic styling

// Define the Task interface
interface Task {
  id: number; // Using number for simplicity, Date.now()
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // State for tasks, try to load from local storage
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks from local storage:", error);
      return [];
    }
  });

  // Effect to save tasks to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to local storage:", error);
    }
  }, [tasks]);

  // Function to add a new task
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(), // Simple unique ID
      text,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to toggle task completion
  const toggleComplete = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
