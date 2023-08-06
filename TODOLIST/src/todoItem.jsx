import {Button} from 'react-bootstrap';
// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, id, handleRemoveTodo }) 
    {
      
  return (
    <>
      <div className="todoItem">
        {" "}
        <p key={id}>{todo}</p>
        <Button className="todoButton" onClick={() => handleRemoveTodo(id)}>
          X
        </Button>{" "}
      </div>
    </>
  );
  }