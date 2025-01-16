import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todo = () => {
  const initialTodos = useMemo(() => {
    return ["리액트 배우기", "강아지 산책하기", "깃허브 커밋하기"];
  });

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <h1>To do</h1>
      <TodoForm todos={todos} setTodos={setTodos} isAdd={true} />
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={`${index}${index}`}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
