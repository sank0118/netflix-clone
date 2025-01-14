import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        className="bg-gray-900 text-gray-100 h-screen"
        style={{
          paddingTop: 60,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
