import { useState } from "react";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";

import "./App.css";
import TodoItem from "./todoItem";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [todos, setTodos] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todos");
    if (saved.length > 0) {
      const initialValue = JSON.parse([saved]);
      return initialValue;
    } else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");

  const handleRemoveTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <h1 className="center">TODOS</h1>
      <div className="addTodoContainer">
        <form className="center">
          <label>New Todo:</label>
          <input
            type="text"
            name="todoInput"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />

          {"  "}
          <Button
            variant="primary"
            type="submit"
            onClick={
              newTodo.length > 0
                ? (e) => {
                    e.preventDefault();
                    setTodos([...todos, { todo: newTodo, id: nanoid() }]);

                    setNewTodo("");
                  }
                : (e) => {
                    e.preventDefault();
                  }
            }
          >
            Add
          </Button>
        </form>
      </div>
      <div className="center list">
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo.todo}
            id={todo.id}
            handleRemoveTodo={handleRemoveTodo}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
export default App;
