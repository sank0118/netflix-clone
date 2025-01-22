import { useState, useEffect } from "react";

const RandomNumber = () => {
  const initialMembers = [
    "유경환",
    "강산",
    "최한나",
    "허승이",
    "김영화",
    "이형진",
    "강찬희",
  ];

  const [members, setMembers] = useState(initialMembers);
  const [selectedMembars, setSelectedMembars] = useState([[]]);
  //뽑힌 멤버는 배연안의 배열에 들어갑니다.

  const [teams, setTeams] = useState([]);

  const [isMakingMTeam, setIsMakingTeam] = useState(false);

  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    //max 최대팀의 크기
    if (max <= 0) {
      return alert("팀 크기를 선택해주세요.");
    }

    if (count <= 0) {
      return alert("팀원을 모두 뽑았습니다");
    }

    let number = Math.floor(Math.random() * members.length);
    const member = members[number];
    //found 셀렉티드 넘버즈에서 selectedMembars 배열을 잡아서 찾는다
    const found = selectedMembars[currentIndex].find((person) => {
      if (person === member) {
        return person;
      }
    });
    if (found) {
      return alert("중복된 사람입니다.");
    }
    //중복되지 않을 떄 하나씩 뺀다
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    //멤버를 하니씩 추가
    setSelectedMembars((prev) => {
      let copy = [...prev];

      return copy;
    });
    setTimeout(() => {
      //하나씩 빼기
      setMembers((prev) => {
        let copy = [...prev];
        copy.splice(number, 1);
        return copy;
      });
    }, 100);
  };

  const onReset = () => {
    setMax(0);
    setCount(0);
  };

  useEffect(() => {
    console.log({ members, max, count, selectedMembars });
  }, [members, max, count, selectedMembars]);

  useEffect(() => {
    if (max > 0) {
      console.log(selectedMembars.length);

      //   setCurrentIndex(selectedMembars.length);
    }
  }, [selectedMembars, max]);

  return (
    <div>
      <h1>팀짜기 프로젝트</h1>
      <h3>남은 팀원</h3>
      <ul>
        {members.map((member, index) => {
          return <li key={member}>{member}</li>;
        })}
      </ul>

      <form onSubmit={onSubmit}>
        <select onChange={(e) => setMax(Number(e.target.value))} value={max}>
          <option>팀 크기를 선택하세요.</option>
          {members.map((member, index) => {
            return (
              <option key={member} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
        <button>팀원 뽑기</button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>

      <ul>
        {currentIndex >= 0 &&
          selectedMembars[currentIndex].map((member) => {
            return <li key={member}>{member}</li>;
          })}
      </ul>
    </div>
  );
};
export default RandomNumber;
