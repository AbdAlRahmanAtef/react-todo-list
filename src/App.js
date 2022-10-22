import Todo from "./components/Todo";
import { useTodos } from "./context/todoContext";
import { IoMdAdd } from "react-icons/io";
function App() {
  const { todos, todoscount } = useTodos();
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
    <div className={`app`}>
      <div className="title">
        <h1>Todo App</h1>
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
      </div>
      <div className="todos-container">
        {todos?.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <div className="count">
        Todos: {todos.length} & completed: {todoscount}
      </div>
    </div>
  );
}

export default App;
