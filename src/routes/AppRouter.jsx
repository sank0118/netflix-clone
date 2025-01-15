import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import Signin from "./Siginin";
import FaQ from "./FAQ";
import ContactUs from "./ContactUs";
import LearnReact from "./LEarnREact";
import UseState from "./LearnReact/LearnuseState";
import LearnUseEffect from "./LearnReact/learn-useEffect";
import LearnUseRef from "./LearnReact/learn-useRef";
import LearnUSeMemo from "./LearnReact/learn-useMemo";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Signin />} />
          <Route path="faq" element={<FaQ />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route path="/learn-react">
          <Route index element={<LearnReact />} />
          <Route path="useState" element={<UseState />} />
          <Route path="learnUse" element={<LearnUseEffect />} />
          <Route path="learnREf" element={<LearnUseRef />} />
          <Route path="learnMemo" element={<LearnUSeMemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
