import { useEffect } from "react";
import { useTextInput } from "../../components/ui/TextInput";
import styles from "./hom.css";
import OpenColor from "open-color";

const Home = () => {
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  useEffect(() => {
    console.log(Text.ref.current?.value);
  });

  return (
    <div>
      <h1 className={styles.h1}>Home</h1>
      <form action="" onSubmit={onSubmit}>
        <Text.Component
          id={"text"}
          placeholder={"이메일을 입력하세요."}
          divCn={styles.input.div}
          inputCn={styles.input.input}
        />

        <button>시작하기</button>
      </form>
    </div>
  );
};
export default Home;
