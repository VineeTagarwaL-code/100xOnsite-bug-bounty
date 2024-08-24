import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
   <div className="bg-black">

<div className="w-[20rem] flex items-center justify-around p-4 border rounded-md shadow-sm bg-black mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="mr-2 w-5 h-5 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <label
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        ❌
      </button>
    </div>

   </div>
  );
};

export default TodoItem;
