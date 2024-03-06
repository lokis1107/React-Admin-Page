import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../CSS/style.css";
import ClientWorkout from "../../components/ClientPage/ClientWorkout";

const ClientWorkoutScreen = () => {
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
      <div className="mt-10 ml-10">
        <ClientWorkout />
      </div>
    </div>
  );
};

export default ClientWorkoutScreen;
