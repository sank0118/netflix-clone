//리액트 컴포넌트에서 받는 props는 객체
const Item = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <input type="text" />
    </div>
  );
};

// 자바스크립트를 사용하는 리액트 컴포넌트는 컴포넌트를 만들고 인자값에 {}를 열어서 어떤 값에 불러올지 미리 정해두는 것이 좋다.
//해당 컴포넌트를 사용하는 곳에서 아따힌 깂을 입력해줘야 할지 자동완성 기능으로 확인할 수 있다.

export default Item;