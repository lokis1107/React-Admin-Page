import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CommonWorkout = () => {
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation("/workout");
  };
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-5">
        <h1
          className="text-xl font-bold text-gray-900 text-center"
          style={{ width: "100%" }}
        >
          Workout Adding Screen
        </h1>
        <div
          onClick={logout}
          style={{ width: 100 }}
          className="border p-2 bg-black rounded-lg"
        >
          <h1 className="text-center font-bold text-lg text-white">Sign Out</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-10 space-x-5">
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            First Day Order
          </h1>
          <Link to={"/firstWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            Second Day Order
          </h1>
          <Link to={"/secondWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            Third Day Order
          </h1>
          <Link to={"/thirdWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Next Page of the user */}

      <div className="flex flex-row items-center justify-center mt-10 space-x-5">
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            Fourth Day Order
          </h1>
          <Link to={"/fourthWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            Fifth Day Order
          </h1>
          <Link to={"/fifthWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
        <div className="border rounded-lg shadow-lg p-5 w-96 items-center">
          <h1 className="text-center text-lg font-bold text-black">
            Sixth Day Order
          </h1>
          <Link to={"/sixthWorkout"}>
            <div
              style={{ cursor: "pointer" }}
              className="mt-5 rounded-lg bg-black p-2 mx-10"
            >
              <h1 className="text-center font-bold text-white text-lg">
                Add Workout
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonWorkout;
