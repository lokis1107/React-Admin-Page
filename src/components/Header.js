import React, { useEffect, useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./Model/Modal.css";
import { useNavigate } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Header({ OpenSidebar }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://s2t-admin-page.onrender.com/getAdmin", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const information = data.userInfo;

  const searchUser = async (text) => {
    const url = `https://s2t-admin-page.onrender.com/search/${text}`;
    let result = await fetch(url);
    result = await result.json();
    console.log(result);
    if (result) {
      setData(result);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation("/");
  };

  return (
    <>
      <header className="header">
        <div className="menu-icon">
          <BsJustify className="icon" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <BsSearch className="icon" />
        </div>
        <div className="header-right">
          <div style={{ cursor: "pointer" }} className="ml-3">
            <BsFillBellFill className="icon" />
          </div>
          <div style={{ cursor: "pointer" }} className="ml-3">
            <BsFillEnvelopeFill className="icon" />
          </div>

          <div
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
            className="ml-3"
          >
            <BsPersonCircle className="icon" />
          </div>
        </div>
      </header>
      {data.map((user) => {
        return (
          <div>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <div className="flex flex-row">
                    <BsPersonCircle
                      className="icon"
                      size={26}
                      color={"black"}
                    />
                    <h1 className="text-lg font-bold text-gray-900 ml-5">
                      Name: {user.name}
                    </h1>
                  </div>
                  <div className="flex flex-row mt-3">
                    <BsFillEnvelopeFill
                      className="icon"
                      size={26}
                      color={"black"}
                    />
                    <h1 className="text-lg font-bold text-gray-900 ml-5">
                      Email: {user.emails}
                    </h1>
                  </div>
                  <div
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                    className="p-2 rounded-lg mt-2 mx-10 items-center bg-black"
                  >
                    <h1 className="text-center font-bold text-white">Logout</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Header;
