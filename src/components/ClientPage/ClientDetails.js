import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ClientDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://s2t-admin-page.onrender.com/getClient", {
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

  return (
    <>
      <div className="flex flex-1 flex-col ml-10 p-5">
        <div>
          <input
            placeholder="Search..."
            className="p-3 border w-96 rounded-lg shadow-lg mb-5"
            onChange={searchUser}
          />
        </div>
        <div className="flex flex-col">
          <div
            className="flex flex-row space-x-20 p-2"
            style={{ width: "30%" }}
          >
            <h1 className="font-bold text-gray-900 text-lg">Name</h1>
            <h1 className="font-bold text-gray-900 text-lg">Client Id</h1>
            <h1 className="font-bold text-gray-900 text-lg">Password</h1>
          </div>
          {data.map((user) => {
            return (
              // <div
              //   className="border p-3 rounded-lg shadow-lg"
              //   style={{ width: 400 }}
              // >
              //   <h1 className="text-center text-lg font-bold text-black">
              //     Client Details
              //   </h1>
              //   <div className="mt-5">
              //     <div className="flex flex-row items-center space-x-10">
              //       <h1 className=" text-lg font-bold text-gray-900">Name:</h1>
              //       <h1 className=" text-lg font-bold text-gray-900">
              //         {user.name}
              //       </h1>
              //     </div>
              //     <div className="flex flex-row items-center space-x-10">
              //       <h1 className=" text-lg font-bold text-gray-900">
              //         Client Id:
              //       </h1>
              //       <h1 className=" text-lg font-bold text-gray-900">
              //         {user.clientId}
              //       </h1>
              //     </div>
              //     <div className="flex flex-row items-center space-x-10">
              //       <h1 className=" text-lg font-bold text-gray-900">
              //         Password:
              //       </h1>
              //       <h1 className=" text-lg font-bold text-gray-900">
              //         {user.password}
              //       </h1>
              //     </div>

              //     <Link to={"/home"}>
              //       <div className="p-2 mt-5 mx-5 border bg-black rounded-lg">
              //         <h1 className="text-center font-bold text-white">Done</h1>
              //       </div>
              //     </Link>
              //     <Link to={"/clientAuth"}>
              //       <div className="p-2 mt-3 mx-5 border bg-white rounded-lg">
              //         <h1 className="text-center font-bold text-black">
              //           More Details
              //         </h1>
              //       </div>
              //     </Link>
              //   </div>
              // </div>
              <div
                className="flex flex-row items-center border rounded-lg shadow-sm p-3"
                style={{ width: 600 }}
              >
                <div
                  className="flex flex-row items-center space-x-20"
                  style={{ width: "50%" }}
                >
                  <h1 className="text-lg font-bold text-black">
                    {user.name.substr(0, 4) + "..."}
                  </h1>
                  <h1 className="text-lg font-bold text-black">
                    {user.clientId}
                  </h1>
                  <h1 className="text-lg font-bold text-black">
                    {user.password}
                  </h1>
                  <Link to={"/clientAuth"}>
                    <h1
                      className="text-lg font-bold text-black"
                      style={{ cursor: "pointer" }}
                    >
                      More Details
                    </h1>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientDetails;
