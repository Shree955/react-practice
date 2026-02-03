import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    { name: "Buy Milk", dueDate: "4/10/2023" },
    { name: "Go to College", dueDate: "4/10/2023" },
    { name: "Like this video", dueDate: "right now" },
  ]);

  const addNewTodo = (name, dueDate) => {
    setTodoItems((prev) => [
      ...prev,
      { name, dueDate }
    ]);
  };

  const deleteTodo = (name) => {
    setTodoItems((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddTodo={addNewTodo} />
      <TodoItems todoItems={todoItems} onDelete={deleteTodo} />
    </center>
  );
}
export default App;
