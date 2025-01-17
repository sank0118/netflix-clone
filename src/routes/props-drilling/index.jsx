import { useState, useEffect } from "react";
import Item from "./Item";

//리액트에서 받는 인자값을 props라고 부른다.

const PropsDrilling2 = () => {
  const [people, setPeople] = useState([]);

  const [name, setName] = useState("");

  const onSubmit = () => {
    setPeople((prev) => [{ name, id: prev.length }, ...prev]);
  };

  return (
    <div>
      <h1>props-drilling</h1>
      <p>{fn("강", "산")}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>add</button>
      </form>

      {/* map할 때 주의할 점: key 속성에 넣는 값으로 index X 훨씬 더 정교하고 고유하고 반복되지 않을 값을 넣어야함. 
      타입은 무조건 문자열 */}
      {people.map((person, index) => {
        return <Item key={person.id} text={person.name} />;
      })}
    </div>
  );
};
export default PropsDrilling2;

//원시 타입 Primitive Types
// Number,String,Null,Undefined

//객체 타입 object // ++배열 Array
const fn = (a, b) => {
  //   console.log(typeof "");
  //   console.log(typeof 2);
  //   console.log(typeof null);
  //   console.log(typeof undefined);

  //   console.log(
  //     typeof {
  //       name: "강산",
  //     }
  //   );

  //   console.log(typeof ["a", "b"]);

  return a + b;
};
//원래 객체 이름을 선언해야하지만 객체 타입은 {}안에 객체 이름을 바로 꺼내올 수 있다
const { first, last } = {
  first: "산",
  last: "강",
};

// const { first, last } = name;

// console.log(name.last);
// console.log(name.first);

// console.log(first);
// console.log(last);
