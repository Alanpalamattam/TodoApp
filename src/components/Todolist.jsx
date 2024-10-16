import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function Todolist({ todos, setTodos, setTodo }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const now = new Date();
    todos.forEach((todo) => {
      const dueDate = new Date(`${todo.date}T${todo.time}`);
      if (dueDate <= now && !todo.done) {
        alert(`Reminder: The task "${todo.name}" is due!`);
      }
    });
  }, [todos]);

  function handleEdit(item) {
    setTodo({ name: item.name, done: item.done, date: item.date, time: item.time, priority: item.priority, tags: item.tags });
  }

  function handleClearCompleted() {
    setTodos(todos.filter(todo => !todo.done)); // Clear completed todos
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClearCompleted}>Clear Completed</button>
      {todos
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filter todos by name
        .map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
      ))}
    </div>
  );
}