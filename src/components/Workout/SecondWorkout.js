import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserType } from "../../UserContaxt";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipLoader from "react-spinners/ClipLoader";

const SecondWorkout = () => {
  const [title, setTitle] = useState("");
  const [dayOrder, setDayOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const [secondDayfirstWorkoutName, setSecondDayfirstWorkoutName] =
    useState("");
  const [secondDayfirstSets, setSecondDayfirstSets] = useState("");
  const [secondDayfirstReps, setSecondDayfirstReps] = useState("");

  const [secondDaySecondWorkoutName, setSecondDaySecondWorkoutName] =
    useState("");
  const [secondDaySecondSets, setSecondDaySecondSets] = useState("");
  const [secondDaySecondReps, setSecondDaySecondReps] = useState("");

  const [secondDayThirdWorkoutName, setSecondDayThirdWorkoutName] =
    useState("");
  const [secondDayThirdSets, setSecondDayThirdSets] = useState("");
  const [secondDayThirdReps, setSecondDayThirdReps] = useState("");

  const [secondDayFourthWorkoutName, setSecondDayFourthWorkoutName] =
    useState("");
  const [secondDayFourthSets, setSecondDayFourthSets] = useState("");
  const [secondDayFourthReps, setSecondDayFourthReps] = useState("");

  const [secondDayFifthWorkoutName, setSecondDayFifthWorkoutName] =
    useState("");
  const [secondDayFifthSets, setSecondDayFifthSets] = useState("");
  const [secondDayFifthReps, setSecondDayFifthReps] = useState("");

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

  const handleSubmit = () => {
    const address = {
      title,
      dayOrder,
      secondDayfirstWorkoutName,
      secondDayfirstSets,
      secondDayfirstReps,
      secondDaySecondWorkoutName,
      secondDaySecondSets,
      secondDaySecondReps,
      secondDayThirdWorkoutName,
      secondDayThirdSets,
      secondDayThirdReps,
      secondDayFourthWorkoutName,
      secondDayFourthReps,
      secondDayFifthWorkoutName,
      secondDayFourthSets,
      secondDayFifthSets,
      secondDayFifthReps,
    };

    if (
      title &&
      dayOrder &&
      secondDayfirstWorkoutName &&
      secondDayfirstSets &&
      secondDayfirstReps &&
      secondDaySecondWorkoutName &&
      secondDaySecondSets &&
      secondDaySecondReps &&
      secondDayThirdWorkoutName &&
      secondDayThirdSets &&
      secondDayThirdReps &&
      secondDayFourthWorkoutName &&
      secondDayFourthReps &&
      secondDayFifthWorkoutName &&
      secondDayFourthSets &&
      secondDayFifthSets &&
      secondDayFifthReps
    ) {
      axios
        .post("https://s2t-admin-page.onrender.com/daytwo", { userId, address })
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Second Day workout addedd successfully",
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
      setLoading(true);
    } else {
      alert(
        "Please Enter some valid data",
        "Please enter the all details for the form"
      );
    }
  };

  const navigation = useNavigate();
  return (
    <div className="flex  p-5" style={{ marginLeft: "50%" }}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg font-bold text-center text-gray-900">
          Second Day Workout List
        </h1>
        <div className="mt-8 flex flex-col ml-10 border p-10 rounded-lg shadow-lg">
          <h1 className="text-center font-bold text-gray-900 text-xl mb-5">
            Client Verification
          </h1>
          <label className="font-bold text-lg mt-3 text-black">
            Workout Title
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">Day Order</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Day Order"
            type="text"
            onChange={(e) => setDayOrder(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Name
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSecondDayfirstWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSecondDayfirstSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSecondDayfirstReps(e.target.value)}
            required
          />

          <h1 className="text-lg font-bold text-center text-gray-900">
            ------------ ** --------------------- ** ------------------
          </h1>

          <label className="font-bold text-lg text-black">Workout Name</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSecondDaySecondWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSecondDaySecondSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter Workout Reps"
            type="text"
            onChange={(e) => setSecondDaySecondReps(e.target.value)}
            required
          />

          <h1 className="text-lg font-bold text-center text-gray-900">
            ------------ ** --------------------- ** ------------------
          </h1>

          <label className="font-bold text-lg text-black">Workout Name</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSecondDayThirdWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSecondDayThirdSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSecondDayThirdReps(e.target.value)}
            required
          />

          <h1 className="text-lg font-bold text-center text-gray-900">
            ------------ ** --------------------- ** ------------------
          </h1>

          <label className="font-bold text-lg text-black">Workout Name</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSecondDayFourthWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSecondDayFourthSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSecondDayFourthReps(e.target.value)}
            required
          />

          <h1 className="text-lg font-bold text-center text-gray-900">
            ------------ ** --------------------- ** ------------------
          </h1>

          <label className="font-bold text-lg text-black">Workout Name</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSecondDayFifthWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSecondDayFifthSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSecondDayFifthReps(e.target.value)}
            required
          />

          <h1 className="text-lg font-bold text-center text-gray-900">
            ------------ ** --------------------- ** ------------------
          </h1>

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

export default SecondWorkout;
