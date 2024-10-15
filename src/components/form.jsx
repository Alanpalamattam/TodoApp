import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false, date: "", time: "", priority: "Medium", tags: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const tagsArray = todo.tags.split(',').map(tag => tag.trim()); // Split tags by comma
    setTodos([...todos, { ...todo, tags: tagsArray }]); // Add tags to todo
    setTodo({ name: "", done: false, date: "", time: "", priority: "Medium", tags: "" }); // Reset all fields
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
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          type="date"
          value={todo.date}
        />
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, time: e.target.value })}
          type="time"
          value={todo.time}
        />
        <select
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          value={todo.priority}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, tags: e.target.value })}
          type="text"
          value={todo.tags}
          placeholder="Enter tags (comma separated)"
        />
        <button className={styles.modernButton} type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
}