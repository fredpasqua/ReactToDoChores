import { useState } from "react";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";

import "./App.css";
import TodoItem from "./todoItem";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleRemoveTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };


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
            onClick= {newTodo.length > 0
            ? () => {
                setTodos([...todos, { todo: newTodo, id: nanoid() }]);
                setNewTodo("");
              }
            : null}
              
            
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
