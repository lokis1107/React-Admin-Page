import React from "react";
import { Link } from "react-router-dom";

const Day = () => {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center mt-5 mb-5 text-gray-900">
        Day Vice Workout Page
      </h1>
      <div className="flex-row items-center flex space-x-8">
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Monday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Tuesday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Wednesday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Another 3 day workout */}

      <div className="flex-row mt-10 items-center flex space-x-8">
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Thursday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Friday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="p-3 w-80 border rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-lg font-bold text-gray-900">
              Saturday Workout List
            </h1>
          </div>
          <Link to={"/set"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-2 border p-2 rounded-lg mx-5 bg-black"
            >
              <h1 className="text-center text-lg font-bold text-white">
                Set Workout
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Day;
