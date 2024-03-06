import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../CSS/style.css";
import FirstWorkout from "../../components/Workout/FirstWorkout";

const StartingWorkoutScreen = () => {
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
      <FirstWorkout />
    </div>
  );
};

export default StartingWorkoutScreen;
