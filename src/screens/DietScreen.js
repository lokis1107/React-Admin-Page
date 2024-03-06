import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../CSS/style.css";
import Diet from "../components/AdminScreen/Diet";

const DietScreen = () => {
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
      <Diet />
    </div>
  );
};

export default DietScreen;
