import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false, date: "", time: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false, date: "", time: "" }); // Reset all fields
    console.log(todos);
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo"
        />
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })} // Add date input
          type="date"
          value={todo.date}
        />
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, time: e.target.value })} // Add time input
          type="time"
          value={todo.time}
        />
        <button className={styles.modernButton} type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
}