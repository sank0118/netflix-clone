import { useState, useEffect } from "react";

const PDSample = () => {
  const [text, setText] = useState("");
  const name = {
    first: "강",
    last: "산",
  };

  return (
    <div>
      <h1>sample 1</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* 2. 컴포넌트를 불러오는 곳에서 정확한 속성을 입력해준다. */}
      <SampleInput text="너는 개가 되어라" />
      <SampleInput text="너는 병아리다" />
      <SampleObj
        //  first={name.first}
        //     last={name.last}
        {...name}
        middle="세바스찬"
      />
    </div>
  );
};

export default PDSample;
// 1. 컴포넌트를 만드는 곳에서 인자값으로 받아올 속성을 정해준다.

//4. 인자값의 이름을 고유하게 유지한다. 그리고 불러오는 곳에서도 고유하게 작명한다
const SampleInput = ({ text }) => {
  //3. 컴포넌트의 인자를 정할 떄 js에서는 타입을 지정할 수 없음.
  return <div>{text}</div>;
};

const Item = ({ text }) => {
  return <p>{text}</p>;
};

//내가 받아야할 인자값과 전달해야 할 값이 동일한 객체 형태일 때에만 {...값}으로 전달받을 수 있다
//내가 필요한 것을 꺼내오면 됨
const SampleObj = (name) => {
  //객체를 받아올 떼는 {}가 아닌 ()안에다가 바로 인자를 선언해서 가져오면 됨

  return (
    <div>
      {name.first}
      {name.last}
    </div>
  );
};

//prop-Drilling
