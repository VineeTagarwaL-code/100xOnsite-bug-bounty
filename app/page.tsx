//@ts-nocheck
"use client";

import TodoForm from "../component/TodoForm.jsx";
import TodoList from "../component/TodoList.jsx";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const isDuplicate = todos.some((todo) => todo.text === text);

    if (isDuplicate) {
      alert("This todo item already exists.");
      return;
    }

    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">
        Your Todo List
      </h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}