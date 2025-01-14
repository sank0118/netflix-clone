import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import Signin from "./Siginin";
import FaQ from "./FAQ";
import ContactUs from "./ContactUs";

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
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
