import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const LearnUseRef = () => {
  const initialState = useMemo(() => {
    return 0;
  }, []);

  const [state, setState] = useState(initialState);
  const counting = () => {
    setState((prev) => prev + 1);
  };

  const pRef = useRef();

  const checkP = () => {
    if (pRef.current) {
      console.log(pRef.current.innerText);
    }
  };

  const inputRef = useRef();

  const checkInput = () => {
    console.log(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const ref = useRef();

  useEffect(() => {
    console.log(state, pRef.current?.innerText);
  });

  return (
    <div>
      <h1>useRef</h1>

      <p ref={pRef}>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>Check P Tag</button>

      <input type="text" ref={inputRef} />
      <button onClick={checkInput}>Check Input</button>
      <button onClick={focusInput}>Focus Input</button>

      <select name="" id="" ref={ref}>
        <option value="">선택하세요.</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <div
        style={{
          height: "200vh",
        }}
      ></div>
      <button
        onClick={() => {
          ref.current.focus();
          setTimeout(() => {
            ref.current.showPicker();
          }, 1000);
        }}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default LearnUseRef;
