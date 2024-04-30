import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api/todosApi";

export const TodoApp = () => {
  const [getTodoId, setGetTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(getTodoId);

  const handlePrevTodo = () => {
    if (getTodoId === 1) return;
    setGetTodoId(getTodoId - 1);
  };

  const handleNextTodo = () => {
    setGetTodoId(getTodoId + 1);
  };

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}.</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <ul>
        {/* {todo.map((todo) => (
          <div key={todo.id}>
            <li>
              {" "}
              <strong>{todo.completed ? "Done: " : "Pending: "}</strong>
              {todo.title}
            </li>
          </div>
        ))} */}
      </ul>
      <button onClick={() => handlePrevTodo()}>prev Todo</button>
      <button onClick={() => handleNextTodo()}>Next Todo</button>
    </>
  );
};
