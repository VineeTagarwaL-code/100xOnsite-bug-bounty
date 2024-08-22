"use client";

import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}
