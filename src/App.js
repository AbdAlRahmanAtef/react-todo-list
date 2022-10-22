import Form from "./components/Form";
import Todo from "./components/Todo";
import { useTodos } from "./context/todoContext";

function App() {
  const { todos, todoscount } = useTodos();

  return (
    <div className={`app`}>
      <div className="title">
        <h1>Todo App</h1>
        <Form />
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
