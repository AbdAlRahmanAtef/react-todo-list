import Todo from "./components/Todo";
import { IoMdAdd } from "react-icons/io";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
function App() {
  // const saveJSON = (items) =>
  //   localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
  // const initial = JSON.parse(localStorage.getItem("TODO_ITEMS"));
  // const [mood, setMood] = useState("add");
  // const [theId, settheId] = useState("");
  // const inputRef = useRef();
  // const [inputValue, setInputValue] = useState("");
  // const [todos, setTodos] = useState(initial);

  // const addTodo = (todo) => {
  //   if (todo.title !== "" && mood === "add") {
  //     setTodos([...todos, todo]);
  //   }
  //   saveJSON([...todos, todo]);
  //   toast(`${todo.title}: added successfully`, {
  //     type: "success",
  //   });
  // };

  // const removeTodo = (id) => {
  //   const todo = todos.find((item) => item.id === id);
  //   setTodos(todos.filter((todo) => todo.id !== id));
  //   saveJSON(todos.filter((todo) => todo.id !== id));
  //   toast(`${todo.title}: deleted `, {
  //     type: toast.TYPE.ERROR,
  //   });
  // };

  // const handleComplete = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);
  //   const newTodos = todos.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, completed: !item.completed };
  //     }
  //     return item;
  //   });
  //   setTodos(newTodos);
  //   saveJSON(newTodos);
  //   if (todo.completed === true) {
  //     toast(`${todo.title}: is not completed`, {
  //       type: "info",
  //     });
  //   } else {
  //     toast(`${todo.title}: completed successfully`, {
  //       type: "success",
  //     });
  //   }
  // };

  // const handleInputValue = (id) => {
  //   setMood("update");
  //   settheId(id);
  //   const index = todos.findIndex((item) => item.id === id);
  //   inputRef.current.value = todos[index].title;
  //   setInputValue(inputRef.current.value);
  //   inputRef.current.focus();
  // };

  // const updateTodo = (id, title) => {
  //   const todoIndex = todos.findIndex((todo) => todo.id === id);
  //   todos[todoIndex].title = title;
  //   saveJSON(todos);
  //   toast(`${todos[todoIndex].title}: updated successfully`, {
  //     type: "info",
  //   });
  // };

  // const todoscount =
  //   todos.length &&
  //   todos
  //     .map((todo) => {
  //       return todo.completed === true ? 1 : 0;
  //     })
  //     ?.reduce((acc, current) => acc + current);

  // window.onkeyup = (e) => {
  //   if (e.key === "Enter") {
  //     if (inputValue !== "") {
  //       if (mood === "add") {
  //         addTodo({
  //           ...todo,
  //           id: new Date().getTime().toString(),
  //           title: inputValue,
  //         });
  //       } else {
  //         updateTodo(theId, inputValue);
  //       }
  //       inputRef.current.value = "";
  //       setInputValue("");
  //       inputRef.current.focus();
  //       setMood("add");
  //     }
  //   }
  // };

  return (
    <div className={`app`}>
      <div className="title">
        <h1>Todo App</h1>
        <div className="form">
          <div className="inputs">
            <input
              type="text"
              placeholder="Add Task"
              // onChange={(e) => {
              //   setInputValue(e.target.value);
              // }}
              // ref={inputRef}
            />
            <button
            // onClick={() => {
            //   if (inputValue !== "") {
            //     if (mood === "add") {
            //       addTodo({
            //         ...todo,
            //         id: new Date().getTime().toString(),
            //         title: inputValue,
            //       });
            //     } else {
            //       updateTodo(theId, inputValue);
            //     }
            //   }
            //   inputRef.current.value = "";
            //   setInputValue("");
            //   inputRef.current.focus();
            //   setMood("add");
            // }}
            >
              <IoMdAdd size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="todos-container">
        {/* {todos?.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            handleComplete={handleComplete}
            removeTodo={removeTodo}
            handleInputValue={handleInputValue}
          />
        ))} */}
      </div>
      <div className="count">
        {/* Todos: {todos.length} & completed: {todoscount} */}
      </div>
    </div>
  );
}

export default App;
