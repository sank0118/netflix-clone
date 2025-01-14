import { useTextInput } from "../../components/ui/TextInput";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState('')


  const Text = useTextInput();
  return (
    <div>
      <h1>home</h1>
      <Text.Input  value={text}
      onChangeText={setText}
      id="text/>
    </div>
  );
};
export default Home;
