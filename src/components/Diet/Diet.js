import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserType } from "../../UserContaxt";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Diet = () => {
  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [Package, setPackage] = useState("");

  // Diet Chart Part
  const [dietType, setDietType] = useState("");
  const [goal, setGoal] = useState("");
  const [breakFast, setBreakFast] = useState("");
  const [morningSnack, setMorningSnack] = useState("");
  const [lunch, setLunch] = useState("");
  const [lunchSnack, setLunchSnack] = useState("");
  const [dinner, setDinner] = useState("");

  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  console.log(userId);

  const handleWorkoutSubmit = () => {
    const address = {
      clientId,
      name,
      Package,
    };

    if (clientId && name && Package) {
      axios
        .post("https://s2t-admin-page.onrender.com/workDetails", {
          userId,
          address,
        })
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "First Day workout addedd successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            navigation("/home");
          }, 500);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert(
        "Please Enter some valid data",
        "Please enter the all details for the form"
      );
    }
  };

  const handleDietSubmit = () => {
    const address = {
      dietType,
      goal,
      breakFast,
      morningSnack,
      lunch,
      lunchSnack,
      dinner,
    };

    if (
      dietType &&
      goal &&
      breakFast &&
      morningSnack &&
      lunch &&
      lunchSnack &&
      dinner
    ) {
      axios
        .post("https://s2t-admin-page.onrender.com/dietPlan", {
          userId,
          address,
        })
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "First Day workout addedd successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            navigation("/home");
          }, 500);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert(
        "Please Enter some valid data",
        "Please enter the all details for the form"
      );
    }
  };

  const navigation = useNavigate();

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation("/diet");
  };

  return (
    <>
      <div className="mr-20 mt-10">
        <div className="border w-full items-center p-5 rounded-lg shadow-lg">
          <div className=" flex flex-row items-end">
            <div
              onClick={logout}
              style={{ width: 100 }}
              className="border p-2 bg-black rounded-lg"
            >
              <h1 className="text-center font-bold text-lg text-white">
                Sign Out
              </h1>
            </div>
          </div>
          <form onSubmit={handleWorkoutSubmit}>
            <div className="mt-2 flex flex-col">
              <h1 className="text-lg font-bold text-gray-900 text-center mb-5">
                Client Workout Details
              </h1>
              <label className="font-bold text-lg text-black">Client Id</label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Client Id"
                type="text"
                onChange={(e) => setClientId(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-black">Name</label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-black">
                Package
              </label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Package"
                type="text"
                onChange={(e) => setPackage(e.target.value)}
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
            </div>
          </form>
        </div>
      </div>
      <div className="ml-20 mt-10">
        <div className="border w-full items-center p-5 rounded-lg shadow-lg">
          <form onSubmit={handleDietSubmit}>
            <div className="mt-2 flex flex-col">
              <h1 className="text-lg font-bold text-gray-900 text-center mb-5">
                Client Diet Chart Details
              </h1>
              <label className="font-bold text-lg text-black">Diet Type</label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Diet Type"
                type="text"
                onChange={(e) => setDietType(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-black">Goal</label>
              <input
                className="mt-1 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Goal"
                type="text"
                onChange={(e) => setGoal(e.target.value)}
                required
              />
              <label className="font-bold text-lg mt-3 text-black">
                Break Fast
              </label>
              <textarea
                className="mt-1 border-b mb-2 h-20 border-black p-1 w-96"
                placeholder="Enter a Break Fast"
                type="text"
                onChange={(e) => setBreakFast(e.target.value)}
                required
              />

              <label className="font-bold text-lg mt-3 text-black">
                Morning Snack
              </label>
              <textarea
                className="mt-1 border-b mb-2 h-20 border-black p-1 w-96"
                placeholder="Enter a Morning Snack"
                type="text"
                onChange={(e) => setMorningSnack(e.target.value)}
                required
              />

              <label className="font-bold text-lg mt-3 text-black">Lunch</label>
              <textarea
                className="mt-1 border-b h-20 mb-2 border-black p-1 w-96"
                placeholder="Enter a Lunch"
                type="text"
                onChange={(e) => setLunch(e.target.value)}
                required
              />

              <label className="font-bold text-lg mt-3 text-black">
                Lunch Snack
              </label>
              <textarea
                className="mt-1 border-b mb-2 h-20 border-black p-1 w-96"
                placeholder="Enter a Lunch Snack"
                type="text"
                onChange={(e) => setLunchSnack(e.target.value)}
                required
              />

              <label className="font-bold text-lg mt-3 text-black">
                Dinner
              </label>
              <textarea
                className="mt-1 h-20 border-b mb-2 border-black p-1 w-96"
                placeholder="Enter a Dinner"
                type="text"
                onChange={(e) => setDinner(e.target.value)}
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Diet;
