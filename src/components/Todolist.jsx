import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"; // Import styles

export default function Todolist({ todos, setTodos, setTodo }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date"); // Default sorting by date

  useEffect(() => {
    // Request notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const now = new Date();
    todos.forEach((todo) => {
      const dueDate = new Date(`${todo.date}T${todo.time}`);
      if (dueDate <= now && !todo.done) {
        notifyUser(`Reminder: The task "${todo.name}" is due!`);
      }

      // Check for reminders
      if (todo.reminder) {
        const reminderDate = new Date(todo.reminder);
        const timeUntilReminder = reminderDate - now;
        if (timeUntilReminder > 0) {
          setTimeout(() => {
            notifyUser(`Reminder: The task "${todo.name}" is due soon!`);
          }, timeUntilReminder);
        }
      }
    });
  }, [todos]);

  // Function to send notifications
  const notifyUser = (message) => {
    if (Notification.permission === "granted") {
      new Notification(message);
    }
  };

  function handleEdit(item) {
    setTodo({ ...item }); // Populate the form with the selected todo's details
  }

  function handleClearCompleted() {
    setTodos(todos.filter(todo => !todo.done)); // Clear completed todos
  }

  // Sorting function
  const sortedTodos = [...todos].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
    } else if (sortBy === "priority") {
      return a.priority.localeCompare(b.priority);
    } else {
      return 0;
    }
  });

  return (
    <div className={styles.list}>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ textAlign: "center", marginBottom: "20px", width: "80%" }} // Center the search bar
      />
      <select onChange={(e) => setSortBy(e.target.value)} style={{ marginBottom: "20px" }}>
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
      <button onClick={handleClearCompleted} style={{ marginBottom: "20px" }}>Clear Completed</button>
      {sortedTodos
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filter todos by name
        .map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
      ))}
    </div>
  );
}