import React from "react";
import TodoItem from "./TodoItem";

export default function Todolist({ todos, setTodos, setTodo }) {
  function handleEdit(item) {
    setTodo({ name: item.name, done: item.done, date: item.date, time: item.time });
  }

  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
      ))}
    </div>
  );
}