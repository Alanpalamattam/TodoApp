import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
        placeholder="Enter todo item"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
