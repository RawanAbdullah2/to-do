import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
const ToDoList = (props) => {
  return (
    <ul className="goal-list">

      {props.items.map((goal) => (
        <ToDoItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </ToDoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
