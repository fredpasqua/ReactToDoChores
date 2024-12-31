import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import { nanoid } from "nanoid";
import TodoItem from "./todoItem";

function App() {
  const [todos, setTodos] = useState([]); 
  
 useEffect(() => {
    // getting stored value
    if (localStorage.getItem("todos") != -1) {
      const saved = localStorage.getItem("todos");
      if (saved.length > 0) {
        const initialValue = JSON.parse([saved]);
     
        setTodos(initialValue);
    
      }
    } else {
     
    
      setTodos([{}]);
    }
}, [todos]);
  const [newTodo, setNewTodo] = useState("");

  const handleRemoveTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  
  const handleMoveUp = (id, todos) => {
const object = (todos.find(todo => todo.id === id));
   console.log(object)
  const index = todos.indexOf(object);

  if (index !== -1) {
    // Remove the object from its current position
    todos.splice(index, 1);
    console.log(todos)

    // Insert the object at the beginning of the array
    todos.unshift(object);
localStorage.setItem("todos", JSON.stringify(todos));
setTodos(todos)
console.log("final after effect", todos)
  }

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
                todos={todos}
             
              ></TodoItem>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </>
  );
}
export default App;
