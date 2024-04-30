import { useGetTodosQuery } from "./store/api/todosApi";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}.</h4>
      <pre>...</pre>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>
              {" "}
              <strong>{todo.completed ? "Done: " : "Pending: "}</strong>
              {todo.title}
            </li>
          </div>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  );
};
