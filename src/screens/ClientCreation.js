import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../CSS/style.css";
import ClientC from "../components/AdminScreen/ClientC";

const ClientCreation = () => {
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
      <div className="w-full ml-80 mt-20">
        <ClientC />
      </div>
    </div>
  );
};

export default ClientCreation;
