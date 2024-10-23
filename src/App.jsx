import React, { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      <button onClick={toggleDarkMode} style={{ margin: "10px" }}>
        Toggle Dark Mode
      </button>
      <Todo />
    </div>
  );
}

export default App;