import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserType } from "../../UserContaxt";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipLoader from "react-spinners/ClipLoader";

const SixthWorkout = () => {
  const [title, setTitle] = useState("");
  const [dayOrder, setDayOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const [sixthDayfirstWorkoutName, setSixthDayfirstWorkoutName] = useState("");
  const [sixthDayfirstSets, setSixthDayfirstSets] = useState("");
  const [sixthDayfirstReps, setSixthDayfirstReps] = useState("");

  const [sixthDaySecondWorkoutName, setSixthDaySecondWorkoutName] =
    useState("");
  const [sixthDaySecondSets, setSixthDaySecondSets] = useState("");
  const [sixthDaySecondReps, setSixthDaySecondReps] = useState("");

  const [sixthDayThirdWorkoutName, setSixthDayThirdWorkoutName] = useState("");
  const [sixthDayThirdSets, setSixthDayThirdSets] = useState("");
  const [sixthDayThirdReps, setSixthDayThirdReps] = useState("");

  const [sixthDayFourthWorkoutName, setSixthDayFourthWorkoutName] =
    useState("");
  const [sixthDayFourthSets, setSixthDayFourthSets] = useState("");
  const [sixthDayFourthReps, setSixthDayFourthReps] = useState("");

  const [sixthDayFifthWorkoutName, setSixthDayFifthWorkoutName] = useState("");
  const [sixthDayFifthSets, setSixthDayFifthSets] = useState("");
  const [sixthDayFifthReps, setSixthDayFifthReps] = useState("");

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
      sixthDayfirstWorkoutName,
      sixthDayfirstSets,
      sixthDayfirstReps,
      sixthDaySecondWorkoutName,
      sixthDaySecondSets,
      sixthDaySecondReps,
      sixthDayThirdWorkoutName,
      sixthDayThirdSets,
      sixthDayThirdReps,
      sixthDayFourthWorkoutName,
      sixthDayFourthSets,
      sixthDayFourthReps,
      sixthDayFifthWorkoutName,
      sixthDayFifthSets,
      sixthDayFifthReps,
    };

    if (
      title &&
      dayOrder &&
      sixthDayfirstWorkoutName &&
      sixthDayfirstSets &&
      sixthDayfirstReps &&
      sixthDaySecondWorkoutName &&
      sixthDaySecondSets &&
      sixthDaySecondReps &&
      sixthDayThirdWorkoutName &&
      sixthDayThirdSets &&
      sixthDayThirdReps &&
      sixthDayFourthWorkoutName &&
      sixthDayFourthSets &&
      sixthDayFourthReps &&
      sixthDayFifthWorkoutName &&
      sixthDayFifthSets &&
      sixthDayFifthReps
    ) {
      axios
        .post("https://s2t-admin-page.onrender.com/daysix", { userId, address })
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sixth Day workout addedd successfully",
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
          First Day Workout List
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
          <label className="font-bold text-lg text-black">Workout Name</label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Name"
            type="text"
            onChange={(e) => setSixthDayfirstWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSixthDayfirstSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSixthDayfirstReps(e.target.value)}
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
            onChange={(e) => setSixthDaySecondWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSixthDaySecondSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSixthDaySecondReps(e.target.value)}
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
            onChange={(e) => setSixthDayThirdWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSixthDayThirdSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSixthDayThirdReps(e.target.value)}
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
            onChange={(e) => setSixthDayFourthWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSixthDayFourthSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSixthDayFourthReps(e.target.value)}
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
            onChange={(e) => setSixthDayFifthWorkoutName(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Sets
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Sets"
            type="text"
            onChange={(e) => setSixthDayFifthSets(e.target.value)}
            required
          />
          <label className="font-bold text-lg mt-3 text-black">
            Workout Reps
          </label>
          <input
            className="mt-1 border-b mb-2 border-black p-1 w-96"
            placeholder="Enter a Workout Reps"
            type="text"
            onChange={(e) => setSixthDayFifthReps(e.target.value)}
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

export default SixthWorkout;
