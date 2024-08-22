import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id || index}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
