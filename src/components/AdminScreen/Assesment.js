import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Assesment = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://s2t-admin-page.onrender.com/getClient", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col ml-10 p-5" style={{ width: 1500 }}>
        <h1 className="text-center font-bold text-gray-900 mt-5 mb-5 text-xl">
          Assesment Page
        </h1>
        <div className="flex flex-row items-center space-x-5 flex-wrap">
          {data.map((user) => {
            return (
              <div
                className="border p-3 rounded-lg shadow-lg"
                style={{ width: 400 }}
              >
                <h1 className="text-center text-lg font-bold text-black">
                  Client Details
                </h1>
                <div className="mt-5">
                  <div className="flex flex-row items-center space-x-10">
                    <h1 className=" text-lg font-bold text-gray-900">Name:</h1>
                    <h1 className=" text-lg font-bold text-gray-900">
                      {user.name}
                    </h1>
                  </div>
                  <div className="flex flex-row items-center space-x-10">
                    <h1 className=" text-lg font-bold text-gray-900">
                      Client Id:
                    </h1>
                    <h1 className=" text-lg font-bold text-gray-900">
                      {user.clientId}
                    </h1>
                  </div>
                  <Link to={"/clientAssessment"}>
                    <div className="p-2 mt-5 mx-5 border bg-black rounded-lg">
                      <h1 className="text-center font-bold text-white">
                        Let's Get Started
                      </h1>
                    </div>
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

export default Assesment;
