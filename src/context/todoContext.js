import { createContext, useContext, useRef, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();

const saveJSON = (items) =>
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
const initial = JSON.parse(localStorage.getItem("TODO_ITEMS"));

export const TodosProvider = ({ children }) => {
  const [mood, setMood] = useState("add");
  const [theId, settheId] = useState("");
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initial);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const addTodo = (todo) => {
    if (todo.title !== "" && mood === "add") {
      setTodos([...todos, todo]);
    }
    saveJSON([...todos, todo]);
    toast(`${todo.title}: added successfully`, {
      type: "success",
    });
  };

  const removeTodo = (id) => {
    const todo = todos.find((item) => item.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    saveJSON(todos.filter((todo) => todo.id !== id));
    toast(`${todo.title}: deleted `, {
      type: toast.TYPE.ERROR,
    });
  };

  const handleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(newTodos);
    saveJSON(newTodos);
    if (todo.completed === true) {
      toast(`${todo.title}: is not completed`, {
        type: "info",
      });
    } else {
      toast(`${todo.title}: completed successfully`, {
        type: "success",
      });
    }
  };

  const handleInputValue = (id) => {
    setMood("update");
    settheId(id);
    const index = todos.findIndex((item) => item.id === id);
    inputRef.current.value = todos[index].title;
    setInputValue(inputRef.current.value);
    inputRef.current.focus();
  };

  const updateTodo = (id, title) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos[todoIndex].title = title;
    saveJSON(todos);
    toast(`${todos[todoIndex].title}: updated successfully`, {
      type: "info",
    });
  };

  const todoscount = todos.length && todos.map((todo) => {
      return todo.completed === true ? 1 : 0;
    })
    ?.reduce((acc, current) => acc + current);
  return (
    <Context.Provider
      value={{
        todoscount,
        mood,
        setMood,
        theId,
        inputRef,
        inputValue,
        setInputValue,
        todo,
        setTodo,
        todos,
        setTodos,
        addTodo,
        removeTodo,
        handleComplete,
        updateTodo,
        handleInputValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTodos = () => useContext(Context);
