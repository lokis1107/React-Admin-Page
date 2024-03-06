import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserType } from "../../UserContaxt";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipLoader from "react-spinners/ClipLoader";

const ClientDiet = () => {
  const [clientId, setClientId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation("/dietPage");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      clientId: clientId,
      password: password,
    };

    axios
      .post("https://s2t-admin-page.onrender.com/ulogin", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation("/dietPage");
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(true);
  };

  const navigation = useNavigate();

  return (
    <div className="flex items-center p-5" style={{ marginLeft: "50%" }}>
      <form onSubmit={handleSubmit}>
        <div className="mt-8 flex flex-col ml-10 border p-10 rounded-lg shadow-lg">
          <h1 className="text-center font-bold text-gray-900 text-xl mb-5">
            Client Verification
          </h1>
          <label className="font-bold text-lg text-black">Client Id</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a client id"
            type="text"
            onChange={(e) => setClientId(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">Password</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
            Submit
          </button>
          {loading ? (
            <div className="flex flex-row items-center mt-5 ml-48">
              <ClipLoader color={"#000000"} loading={loading} size={50} />
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ClientDiet;
