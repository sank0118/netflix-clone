import { useState, useEffect, useRef, useCallback } from "react";

//React ver 19 이상 {}props drilling에서 ref라는 속성 전달이 가능
const TextInput = (inputRef, value, onChangeText, id, placeholder) => {
  const onChange = (e) => {
    onChangeText(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

const useTextInput = () => {
  const ref = useRef();

  const Input = useCallback(({ value, onChangeText, id, placeholder }) => {
    //props를 받는 컴포넌트가 속성으로 많은 객체들을 요구할 때
    // 문자열이 아닐 때

    const props = {
      value,
      onChangeText,
      id,
      placeholder,
    };
    return <TextInput {...props} inputRef={ref} />;
  }
[ref]);

  const focus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return {
    Input,
    focus,
    ref,
  };
};

export { TextInput, useTextInput };
