import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsPersonVcardFill,
  BsPersonCircle,
  BsFillGearFill,
} from "react-icons/bs";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link to={"/home"}>
            <img src={logo} />
          </Link>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={"/home"}>
            <a href="">
              <BsGrid1X2Fill className="icon" />
              <h3>Dashboard</h3>
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/clientcreation"}>
            <a href="">
              <BsPersonCircle size={25} className="icon" />
              <h3>Client Creation</h3>
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/clientDetails"}>
            <a href="">
              <BsPersonVcardFill size={28} className="icon" />
              <h3>Client Details</h3>
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/assessment"}>
            <a href="">
              <BsFillArchiveFill className="icon" /> Assesment
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/workout"}>
            <a href="">
              <BsFillGrid3X3GapFill className="icon" /> Workout
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/diet"}>
            <a href="">
              <BsPeopleFill className="icon" /> Diet Chart
            </a>
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to={"/package"}>
            <a href="">
              <BsListCheck className="icon" /> Package
            </a>
          </Link>
        </li> */}
        {/* <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
