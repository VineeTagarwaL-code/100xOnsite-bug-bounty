import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  const handleToggleComplete = () => onToggleComplete(todo.id);
  const handleDelete = () => onDelete(todo.id);

  return (
    <div className="flex items-center justify-between p-4 border rounded-md shadow-md bg-white hover:bg-gray-50 transition-all duration-200 ease-in-out">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="mr-3 w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label
          className={`text-lg ${
            todo.completed ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
