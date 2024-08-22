import React, { useState, FormEvent, ChangeEvent } from 'react'

interface TodoFormProps {
  onAddTodo: (todo: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTodo !== '') {
      onAddTodo(newTodo)
      setNewTodo('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-4">
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Add a new todo"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
