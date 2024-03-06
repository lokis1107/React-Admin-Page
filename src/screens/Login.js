import React, { useState } from "react";
import gym from "../images/gym.jpg";
import s2t from "../images/s2t.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://s2t-admin-page.onrender.com/login", { emails, password })
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome Back! Admin",
          showConfirmButton: false,
          timer: 1500,
        });
        if (result.data === "Success") {
          navigation("/home");
        }
      })
      .catch((err) => console.log(err));
    setLoading(true);
  };

  const navigation = useNavigate();
  return (
    <div className="w-full h-screen flex items-start">
      {/* Left Panel */}
      <div className="relative lg:w-1/2 md:w-0 h-full flex flex-col">
        <img src={gym} alt="img" className="h-full w-full object-cover" />
      </div>
      {/* Right Panel */}
      <div className="lg:w-1/2 sm:w-full bg-white h-full flex flex-col items-center">
        <img src={s2t} alt="S2T" className="h-36 w-44" />
        <div
          className="flex flex-col mt-5 items-start ml-20"
          style={{ width: 475 }}
        >
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
          <p className="text-sm text-gray-900 font-bold">
            Welcome back admin! Please fill your details
          </p>

          {/* Form Part */}
          <form onSubmit={handleSubmit}>
            <div className="mt-8 flex flex-col">
              <label className="font-bold text-lg text-black">Email</label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a mail"
                type="text"
                onChange={(e) => setEmails(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-black">
                Password
              </label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex flex-row items-center justify-end mb-3 cursor-pointer">
                <h6 className="font-bold mt-2 text-sm">Forgot Password?</h6>
              </div>
              {/* Button Part */}
              <button
                type="submit"
                className="font-bold border p-2 text-center mt-3 text-white"
                style={{
                  backgroundColor: "#2828a1",
                  marginLeft: 80,
                  width: 240,
                  borderRadius: 10,
                }}
              >
                Login
              </button>
              <div
                style={{ backgroundColor: "#FFFFFF" }}
                className="p-2 border mt-3 border-gray-600 items-center w-60 ml-20 rounded-lg cursor-pointer"
              >
                <h1 className="font-bold text-center text-black">
                  <Link to="/signup">Register</Link>
                </h1>
              </div>
              {loading ? (
                <div className="flex flex-row items-center mt-5 ml-48">
                  <ClipLoader color={"#000000"} loading={loading} size={50} />
                </div>
              ) : null}
              {/* Don't have an account part */}
              <div className="flex-row flex items-center mt-10 space-x-2">
                <h6 className="text-center ml-24">Don't have an account?</h6>
                <h6
                  style={{ color: "#2828a1" }}
                  className="font-bold text-center cursor-pointer"
                >
                  <Link to="/signup">Signup</Link>
                </h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
