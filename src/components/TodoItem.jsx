import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos, handleEdit }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleToggleComplete() {
    const updatedTodos = todos.map((todo) =>
      todo === item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className={styles.item} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleToggleComplete}
      />
      <div className={styles.itemName}>
        {item.name} - {item.date} {item.time} - {item.priority} {/* Display priority */}
        <div>Tags: {item.tags.join(', ')}</div> {/* Display tags */}
        {item.reminder && <div>Reminder: {new Date(item.reminder).toLocaleString()}</div>} {/* Display reminder */}
        <span>
          <button onClick={() => handleEdit(item)} className={styles.editButton}>
            Edit
          </button>
        </span>
      </div>
      <hr className={styles.line} />
      <button onClick={handleDelete} className={styles.deletebutton}>Delete</button>
    </div>
  );
}