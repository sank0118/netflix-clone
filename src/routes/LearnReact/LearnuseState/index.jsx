import { useEffect, useState, useCallback } from "react";

const UseState = () => {
  const [string, setString] = useState("");

  const onChangeString = () => {
    setString((prev) => {
      return `${prev} 덕현`;
    });
  };

  const [number, setNumber] = useState(0);

  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };

  const onReset = () => {
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
      return !prev;
    });
  };
  const onSwitch2 = () => {
    setBoolean2((prev) => {
      return !prev;
    });
  };
  const onSwitch3 = () => {
    setBoolean3((prev) => {
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

  const [first, setFirst] = useState(obj.first);
  const [last, setLast] = useState(obj.last);

  const onLast = () => {
    if (last.length === 0) {
      return alert("입력해라, 쫌");
    }
    if (last === obj.last) {
      return alert("달라진게 없다.");
    }

    setObj((prev) => {
      return { ...prev, last };
    });
    alert("성을 개명하였습니다.");
  };

  const onFirst = () => {
    if (first.length === 0) {
      return alert("입력해라, 쫌");
    }
    if (first === obj.first) {
      return alert("변경사항이 없습니다.");
    }

    setObj((prev) => {
      return { ...prev, first };
    });
    alert("이름을 개명하였습니다.");
  };

  const [array, setArray] = useState(["a", "b", "c", "d"]);

  const ㄱ = () => {
    console.log(string.length);
    if (string.length === 0) {
      return alert("적어라 좀");
    }

    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }

    setArray((prev) => {
      return [...prev, string];
    });
  };

  //객체와 객체 비교는 다른 비교 할 수 있는 다른 고유값

  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "찬희" },
  ]);

  const onObjArray = () => {
    const kyh = objArray[0];
    const lhj = objArray[1];

    const newPerson = { l: last, f: first };

    const found = objArray.find((person) => {
      const isSame = isSamePerson(newPerson, person);

      if (isSame) {
        return person;
      }
    });

    if (found) {
      return alert("동일한 인물이 존재합니다.");
    }
    alert("새로운 인물입니다.");

    setObjArray((prev) => {
      return [newPerson, ...prev];
    });
  };

  useEffect(() => {
    console.log({
      objArray,
      array,
    });
  }, [objArray, array]);

  return (
    <div>
      <h1>Learn useState</h1>
      <input
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <button onClick={onChangeString}>Change String</button>

      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>

      <div>
        <p>Switch is {boolean ? "On" : "Off"}</p>
        <button onClick={onSwitch1}>Switch</button>
      </div>

      <div>
        <p>Switch is {boolean2 ? "On" : "Off"}</p>
        <button onClick={onSwitch2}>Switch</button>
      </div>

      <div>
        <p>Switch is {boolean3 ? "On" : "Off"}</p>
        <button onClick={onSwitch3}>Switch</button>
      </div>

      <button onClick={onMasterSwitch}>Master Switch</button>

      <div>
        <p>
          {obj.last} {obj.first}
        </p>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          className="bg-gray-100 outline-none border-none border rounded hover:bg-gray-900 hover:text-white"
          placeholder="새로운 성을 입력해주세요."
        />
        <button onClick={onLast} className="active:text-red-900">
          성 개명
        </button>
      </div>

      <div>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          className="bg-gray-100 outline-none border-none border rounded hover:bg-gray-900 hover:text-white"
          placeholder="새로운 이름을 입력해주세요."
        />
        <button onClick={onFirst} className="active:text-red-900">
          이름 개명
        </button>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={ㄱ}>Add to Array</button>
      </div>

      <button onClick={onObjArray}>Check Obj Array</button>
    </div>
  );
};

export default UseState;

const isSamePerson = (p1, p2) => {
  const name1 = `${p1.l} ${p1.f}`;
  const name2 = `${p2.l} ${p2.f}`;

  if (name1 === name2) {
    return true;
  }

  return false;
};

const email = "fckiller@naver.com";
const xxEmail = {
  first: "fckiller",
  last: {
    domain: "naver",
    surfix: "co.kr",
  },
};
