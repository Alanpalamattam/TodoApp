import { useState } from "react";
import Todoapplist from "./todoapplist";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
  }
  return (
    <div>
      {todos.map((item) => (
        <Todoapplist key={item} item={item} />
      ))}
    </div>
  );
}
