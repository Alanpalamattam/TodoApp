import Todoapplist from "./todoapplist";
export default function Todolist({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <Todoapplist key={item} item={item} />
      ))}
    </div>
  );
}
