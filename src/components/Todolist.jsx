import Todoapplist from "./TodoItem";
import styles from "./todolist.module.css";
export default function Todolist({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <Todoapplist key={item} item={item} />
      ))}
    </div>
  );
}
