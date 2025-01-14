//props Drilling
//다른 곳에서 아래의 컴포넌트를 불러 쓸 때 전달해주는 값

const Button = ({ onClick, type, children, style }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "Button"}
      style={{
        padding: "5px 10px",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style, // ...변수명 복사 객체 복사시 {...}, 배열복사시 [...]
      }}
    >
      {/* 조건 ?? 연산자 <===> 조건 && 연산자 */}
      {/* 앞의 조건이 부합하지 않을 때 실행하는 코드를 ?? 오른쪽에 작성 */}
      {children ?? "Button"}
    </button>
  );
};

export { Button };
