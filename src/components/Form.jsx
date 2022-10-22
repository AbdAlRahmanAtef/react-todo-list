import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useTodos } from "../context/todoContext";

const Form = () => {
  const {
    mood,
    setMood,
    inputRef,
    addTodo,
    todo,
    inputValue,
    setInputValue,
    updateTodo,
    theId,
  } = useTodos();

  window.onkeyup = (e) => {
    if (e.key === "Enter") {
      if (inputValue !== "") {
        if (mood === "add") {
          addTodo({
            ...todo,
            id: new Date().getTime().toString(),
            title: inputValue,
          });
        } else {
          updateTodo(theId, inputValue);
        }
        inputRef.current.value = "";
        setInputValue("");
        inputRef.current.focus();
        setMood("add");
      }
    }
  };

  return (
    <div className="form">
      <div className="inputs">
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          ref={inputRef}
        />
        <button
          onClick={() => {
            if (inputValue !== "") {
              if (mood === "add") {
                addTodo({
                  ...todo,
                  id: new Date().getTime().toString(),
                  title: inputValue,
                });
              } else {
                updateTodo(theId, inputValue);
              }
            }
            inputRef.current.value = "";
            setInputValue("");
            inputRef.current.focus();
            setMood("add");
          }}
        >
          <IoMdAdd size={30} />
        </button>
      </div>
    </div>
  );
};

export default Form;
