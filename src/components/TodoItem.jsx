import styles from "./todoitem.module.css";
export default function Todoapplist({ item }) {
  return (
    <div clasname={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button className={styles.deletebutton}>X</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
