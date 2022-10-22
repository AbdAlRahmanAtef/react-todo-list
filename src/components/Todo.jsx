import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { useTodos } from "../context/todoContext";

const Todo = ({ todo: { title, id, completed } }) => {
  const { removeTodo, handleComplete, handleInputValue } = useTodos();

  return (
    <div className={`todo ${completed && "done"}`}>
      <p>{title}</p>
      <div>
        {" "}
        <div
          className="check"
          onClick={() => {
            handleComplete(id);
          }}
        >
          <GoCheck size={20} className={`${completed && "done"}`} />
        </div>
        <BsPencilSquare
          size={20}
          onClick={() => {
            handleInputValue(id);
          }}
        />
        <FaRegTrashAlt size={20} onClick={() => removeTodo(id)} />
      </div>
    </div>
  );
};

export default Todo;
