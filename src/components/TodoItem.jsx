import styles from "./todoitem.module.css";
export default function Todoapplist({ item, todos, setTodos }) {
  function handleDelete() {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div clasname={styles.item}>
      <div className={styles.itemName}>
        {item.name}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
