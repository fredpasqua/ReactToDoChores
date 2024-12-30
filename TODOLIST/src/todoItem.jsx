import {Button} from 'react-bootstrap';
import "./todoItem.css";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, id, handleRemoveTodo, handleMoveUp }) 
    {
      
  return (
    <>
      <div className="todoItem">
        {" "}
        <p key={id}>{todo}</p>
        <Button className="todoButton" onClick={() => handleMoveUp(id)}>
          MOVE UP
        </Button>{" "}
        <Button className="todoButton" onClick={() => handleRemoveTodo(id)}>
          X
        </Button>{" "}
      </div>
    </>
  );
  }