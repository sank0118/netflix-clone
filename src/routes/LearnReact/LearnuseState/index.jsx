import { useEffect, useState } from "react";

const UseState = () => {
  const [string, setString] = useState("");

  //함수 이름은 버튼의 이름을 따서 앞에 on만 붙여서 적을 수도 있다
  const onChangeString = () => {
    //1. 직접 입력하기
    //초기 값과 동일한 타입의 값을 입력한다.
    // setString("강 산");

    //2.이전값을 가져와서 가공처리 하기
    setString((prev) => {
      return `${prev} 산`;
    });
  };

  const [number, setNumber] = useState(0);

  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };
  const onReset = () => {
    //1. 값을 직접 넣는다 초기값과 같은 타입
    setNumber(0);
  };
  const onPlus = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);

  const onSwitch1 = () => {
    setBoolean((prev) => {
      // boolean 타입은 참/거짓
      //!boolean => boolean의 반대값

      return !prev;
    });
  };
  const onSwitch2 = () => {
    setBoolean2((prev) => {
      // boolean 타입은 참/거짓
      //!boolean => boolean의 반대값

      return !prev;
    });
  };
  const onSwitch3 = () => {
    setBoolean3((prev) => {
      // boolean 타입은 참/거짓
      //!boolean => boolean의 반대값

      return !prev;
    });
  };

  const onMasterSwitch = () => {
    if (!boolean && !boolean2 && !boolean3) {
      setBoolean(true);
      setBoolean2(true);
      setBoolean3(true);
      return;
    }

    setBoolean(false);
    setBoolean2(false);
    setBoolean3(false);
  };

  const [obj, setObj] = useState({ last: "강", first: "산" });
  const onSubmitObj = () => {
    const newFirstName = "빈";
    const newLastName = "원";

    //1. 이름만 개명

    // setObj((prev) => {
    //   return { ...prev, first: newFirstName };
    // });

    //2. 성만 개명

    setObj((prev) => {
      return { ...prev, last: newLastName };
    });

    //3. 이름,성 개명
    // const newName = {
    //   last: newLastName,
    //   first: newFirstName,
    // };
    // setObj(newName); //바로 새로운 값을 입력
  };

  const [first, setFirst] = useState(obj.first);
  const [last, setLast] = useState(obj.last);

  const onLast = () => {
    if (last.length === 0) {
      return alert("입력 ㄱ");
    }
    if (last === obj.last) {
      return alert("달라진게 없어");
    }
    setObj((prev) => {
      return { ...prev, last };
    });
    alert("성을 개명하였습니다.");
  };

  const onFirst = () => {
    if (first.length === 0) {
      return alert("입력 해");
    }
    if (first === obj.first) {
      return alert("다르게 해");
    }
    setObj((prev) => {
      return { ...prev, first };
    });
    alert("이름을 개명했습니다.");
  };

  const [array, setArray] = useState(["a", "b", "c,'d"]);

  const onAddArray = () => {
    console.log(string.length);

    //만약에 string이라는 변수가 길이가 0일때가 아무것도 입력하지 않을때인데 이때는 안됨

    if (string.length === 0) {
      return alert("적어 좀");
    }

    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }

    setArray((prev) => {
      console.log(prev);
      let copy = [string, ...prev];

      console.log(copy);

      return [...prev, string];
    });
  };

  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "산" },
  ]);

  const onObjArray = () => {
    setObjArray((prev) => {
      console.log;
      return prev;
    });
  };

  useEffect(() => {
    console.log({
      objArray,
      array,
    });
  });
  [objArray, array];

  return (
    <div>
      <h1>Learn useState</h1>
      <input
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <p
        style={{
          fontSize: 100,
          color: "blue",
        }}
      >
        {string}
      </p>
      <button onChange={onChangeString}>Change String</button>

      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>

      <div>
        <p>Switch is {boolean ? "on" : "off"}</p>
        <button onClick={onSwitch1}>Switch</button>
      </div>

      <div>
        <p>Switch is {boolean2 ? "on" : "off"}</p>
        <button onClick={onSwitch2}>Switch</button>
      </div>

      <div>
        <p>Switch is {boolean3 ? "on" : "off"}</p>
        <button onClick={onSwitch3}>Switch</button>
      </div>

      <button onClick={onMasterSwitch}>Master Switch</button>

      <div>
        <p>
          {obj.last}
          {obj.first}
        </p>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder="새로운 성을 입력해주세요"
        />
        <button onClick={onLast}>성 개명</button>
      </div>

      <div>
        <p>
          {obj.last}
          {obj.first}
        </p>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="새로운 이름을 입력해주세요"
        />
        <button onClick={onFirst}>이름 개명</button>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={onAddArray}>Add to Array</button>
      </div>
      <button>Check obj array</button>
    </div>
  );
};
export default UseState;
