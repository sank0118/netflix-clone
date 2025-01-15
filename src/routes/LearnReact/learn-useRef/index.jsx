import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const LearnUseRef = () => {
  //코드가 길어지지만 속도개선에 좋음
  //상수는 2번 실행하지만 useMemo는 한번만 실행하기 때문
  const initialState = useMemo(() => {
    return 0;
  }, []);
  //useState에 초기값을 넣을 때 많이 씀

  //예시

  const [state, setState] = useState(0);
  const counting = () => {
    setState((prev) => prev + 1);
  };

  //ref = reference => js = document.querySelctor()
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

  useEffect(() => {
    console.log(state, pRef.current?.innerText);
  });

  return (
    <div>
      <h1>adfdf</h1>
      <p ref={pRef}>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>check P Tag</button>

      <input type="text" ref={inputRef} />
      <button onClick={checkInput}>checkInput</button>
      <button onClick={focusInput}>focusInput</button>
    </div>
  );
};

export default LearnUseRef;
