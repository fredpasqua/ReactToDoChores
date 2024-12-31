import {Button} from 'react-bootstrap';
import "./todoItem.css";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, id, handleRemoveTodo, handleMoveUp, todos }) 
    {
      
  return (
    <>
      <div className="todoItem">
        {" "}
        <p key={id}>{todo}</p>
        <div className='buttonscontainer'>
        <Button className="todoButton" onClick={() => handleMoveUp(id, todos)}>
          MOVE TO TOP
        </Button>{" "}
        <Button className="todoButton" onClick={() => handleRemoveTodo(id)}>
          X
        </Button>{" "}
        </div>
      </div>
    </>
  );
  }