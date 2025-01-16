import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const TodoForm = ({ todos, setTodos, initialTodo, isAdd }) => {
  const ref = useRef();
  const [text, setText] = useState(initialTodo ?? "");
  const message = useMemo(() => {
    if (text.length === 0) {
      return "할일 입력";
    }

    const found = todos.find((todo) => {
      if (todo === text) {
        return todo;
      }
    });
    if (found) {
      return "중복된 값";
    }
    return null;
  }, [text, text]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (message) {
        alert(message);
        return setTimeout(() => {
          ref.current?.focus();
        }, 10);
      }

      setTodos((prev) => {
        return [text, ...prev];
      });
      console.log(text);
    },
    [ref, message, text]
  );

  //   const TodoItem = useCallback(({ todo }) => {
  //     return <li>{todo}</li>;
  //   }, []);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button> {isAdd ? "추가" : "수정"}</button>
    </form>
  );
};
export default TodoForm;
