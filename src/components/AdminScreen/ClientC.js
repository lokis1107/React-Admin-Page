import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const ClientC = () => {
  const [clientId, setClientId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://s2t-admin-page.onrender.com/clientsCreation", {
        name,
        clientId,
        password,
      })
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Client Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigation("/home");
      })
      .catch((err) => console.log(err));
    setLoading(true);
  };

  const navigation = useNavigate();
  return (
    <>
      <div className="flex flex-1 border items-center justify-center p-5 rounded-lg shadow-lg">
        <div>
          <h1 className="text-xl font-bold text-center text-gray-900">
            Client Creation
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 flex flex-col">
              <label className="font-bold text-lg mt-3 text-gray-900">
                Name
              </label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-gray-900">
                Client Id
              </label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Client Id"
                type="text"
                onChange={(e) => setClientId(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-gray-900">
                Password
              </label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Button Part */}

              <button
                type="submit"
                className="font-bold border p-2 text-center mt-3 text-white"
                style={{
                  backgroundColor: "#000000",
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
      </div>
    </>
  );
};

export default ClientC;
