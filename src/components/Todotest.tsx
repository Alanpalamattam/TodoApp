import React from "react";

export function test() {
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter todo"
        />
        <button className={styles.modernButton} type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
}
