import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import { nanoid } from "nanoid";
import TodoItem from "./todoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    // getting stored value
    if (localStorage.getItem("todos") != null) {
      const saved = localStorage.getItem("todos");
      if (saved.length > 0) {
        const initialValue = JSON.parse([saved]);
        return initialValue;
      }
    } else {
      return [{ todo: "do something", id: 293847 }];
    }
  });
  const [newTodo, setNewTodo] = useState("");

  const handleRemoveTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  
    const handleMoveUp = (id, todos) => {
      const newTodos = [...todos];
      console.log(newTodos);
      // const index = newTodos.findIndex(id);

      // if (index > 0) {
      //   // Swap the current todo with the one above it
      //   const temp = newTodos[index];
      //   newTodos[index] = newTodos[index - 1];
      //   newTodos[index - 1] = temp;
      // }

      // setTodos(newTodos);
    }
   

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <h1 className="center">TODOS</h1>
      <div className="addTodoContainer">
        <form className="center">
          <input
            className="inputBox"
            type="text"
            name="todoInput"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <Button
            className="submitButton"
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
                    alert("Please Add a Todo First!")
                  }
            }
          >
            Add
          </Button>
          {"  "}
        </form>
      </div>

      <div className="center">
        {todos?.map((todo) => (
          <ListGroup key="listKey">
            <ListGroup.Item>
              {" "}
              <TodoItem
                key={todo.id}
                todo={todo.todo}
                id={todo.id}
                handleRemoveTodo={handleRemoveTodo}
                handleMoveUp={handleMoveUp}
              ></TodoItem>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </>
  );
}
export default App;
