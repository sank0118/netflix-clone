import { useCallback, useMemo, useState } from "react";

const LearnUseMemo = () => {
  //const 변수명  = useMemo()
  //const 변수명  = useMemo()
  // ()=>{},[] // () 안에 콜백함수와 의존성을 넣어줘야한다
  // 쉼표로 구분

  const initialState = useMemo(() => {
    return 0;
  }, []);

  const [state, setState] = useState(initialState);

  const stateMessage = useMemo(() => {
    if (state === 0) {
      return "상품 담아 ";
    }
    if (state > 10) {
      return "10개 이상 제품 구매ㄴ";
    }
    return null;
  }, [state]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (stateMessage) {
      alert(stateMessage);
      setTimeout(() => {
        ref.current.ShowPicker();
      }, 500);
      return;
    }
  });

  return (
    <div>
      <h1>useMemo</h1>
      <form action="" onSubmit={onSubmit}>
        <select onChange={(e) => setState(Number)} ref={ref}>
          <option value="">수량 선택</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form>
    </div>
  );
};

export default LearnUseMemo;
