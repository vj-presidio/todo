import React from 'react';
import TodoItem from './TodoItem'; // Assuming TodoItem.tsx is in the same directory

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
