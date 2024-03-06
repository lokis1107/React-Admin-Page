import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../CSS/style.css";
import Main from "../components/AdminScreen/Main";

const Home = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Main />
    </div>
  );
};

export default Home;
