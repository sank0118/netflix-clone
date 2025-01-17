import { useEffect } from "react";
import { useTextInput } from "../../components/ui/TextInput";
import OpenColor from "open-color";
import styles from "./hom.css";
import { anotherReasons } from "../../assets/fakebase";
import AnotherREasonItem from "./AnotherREasonItem";
import More from "./More";
import FAQ from "./FAQ";

const Home = () => {
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  // useEffect(() => {
  //   console.log(Text.ref.current?.value);
  // });

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}> home</h1>
      <More />
      <div className={styles.container.div}>
        <p className={styles.container.p}>가입해야하는 또 다른 이유</p>

        <ul className={styles.container.ul}>
          {
            //함수를 사용한다 = 호출 call/fire=>()까지 적어줌
            anotherReasons.map((reason) => {
              return <AnotherREasonItem key={reason.title} {...reason} />;
            })
          }
        </ul>
      </div>
      <FAQ />
    </div>
  );
};
export default Home;

{
  /* <h1 className={styles.h1}>Home</h1>
<form action="" onSubmit={onSubmit}>
  <Text.Component
    id={"text"}
    placeholder={"이메일을 입력하세요."}
    divCn={styles.input.div}
    inputCn={styles.input.input}
  />

  <button>시작하기</button>
</form> */
}
