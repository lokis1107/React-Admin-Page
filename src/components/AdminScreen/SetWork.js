import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const SetWork = () => {
  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [Package, setPackage] = useState("");
  const [dayOrder, setDayOrder] = useState("");
  const [title, setTitle] = useState("");

  // First Workout Details

  const [firstWorkoutName, setFirstWorkoutName] = useState("");
  const [firstSets, setFirstSets] = useState("");
  const [firstReps, setFirstReps] = useState("");

  // Second Workout Details

  const [secondWorkoutName, setSecondWorkoutName] = useState("");
  const [secondSets, setSecondSets] = useState("");
  const [secondReps, setSecondReps] = useState("");

  // Third Workout Details

  const [thirdworkoutName, setThirdworkoutName] = useState("");
  const [thirdSets, setThirdSets] = useState("");
  const [thirsReps, setThirsReps] = useState("");

  // Fourth Workout Details

  const [fourthWorkoutName, setFourthWorkoutName] = useState("");
  const [fourthSets, setFourthSets] = useState("");
  const [fourthReps, setFourthReps] = useState("");

  // Fifth Workout Details

  const [fifthWorkoutName, setFifthWorkoutName] = useState("");
  const [fifthSets, setFifthSets] = useState("");
  const [fifthReps, setFifthReps] = useState("");

  // Sixth Workout Details

  const [sixthWorkoutName, setSixthWorkoutName] = useState("");
  const [sixthSets, setSixthSets] = useState("");
  const [sixthReps, setSixthReps] = useState("");

  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://s2t-admin-page.onrender.com/setWorkout", {
        clientId,
        name,
        Package,
        dayOrder,
        title,
        firstWorkoutName,
        firstSets,
        firstReps,
        secondWorkoutName,
        secondSets,
        secondReps,
        thirdworkoutName,
        thirdSets,
        thirsReps,
        fourthWorkoutName,
        fourthSets,
        fourthReps,
        fifthWorkoutName,
        fifthSets,
        fifthReps,
        sixthWorkoutName,
        sixthSets,
        sixthReps,
      })
      .then((result) => navigation("/day"))
      .catch((err) => console.log(err));
    setLoading(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Workout Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div
        style={{ marginLeft: "90%", width: 500 }}
        className="mt-5 rounded-lg p-5 mb-10 items-center justify-center bg-gray-100"
      >
        <div>
          {/* Assesment Form */}
          <div>
            <div>
              <h1 className=" text-lg font-bold text-gray-900 text-center">
                S2T FITNESS STUDIO
              </h1>
              <h1 className=" text-lg font-bold text-gray-900 text-center mt-1">
                WORKOUT DETAILS SHEET
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-8 flex flex-col ml-8">
                <label className="font-bold text-lg text-gray-900">
                  Client Id
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Client Id"
                  type="text"
                  onChange={(e) => setClientId(e.target.value)}
                  required
                />
                {/* Name */}

                <label className="font-bold text-lg text-gray-900">Name</label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                {/* Package */}

                <label className="font-bold text-lg text-gray-900">
                  Package
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Package"
                  type="text"
                  onChange={(e) => setPackage(e.target.value)}
                  required
                />

                {/* Day Order  */}

                <label className="font-bold text-lg text-gray-900">
                  Day Order
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Day Order"
                  type="text"
                  onChange={(e) => setDayOrder(e.target.value)}
                  required
                />

                {/* Title */}

                <label className="font-bold text-lg text-gray-900">Title</label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                {/* Upload the image */}

                {/* <label className="font-bold text-lg text-gray-900">
                  Workout Gif
                </label>
                <div className="border w-96 rounded-lg border-gray-400">
                  <input
                    className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                    placeholder="Enter a First Workout Name"
                    type="file"
                    onChange={(e) => setFile(e.target.value)}
                    required
                  />
                </div> */}

                {/* <input type="file" name="image" /> */}
                {/* First Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setFirstWorkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setFirstSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setFirstReps(e.target.value)}
                  required
                />

                {/* Second Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setSecondWorkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setSecondSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setSecondReps(e.target.value)}
                  required
                />

                {/* Third Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setThirdworkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setThirdSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setThirsReps(e.target.value)}
                  required
                />

                {/* Fourth Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setFourthWorkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setFourthSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setFourthReps(e.target.value)}
                  required
                />

                {/* Fifth Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setFifthWorkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setFifthSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setFifthReps(e.target.value)}
                  required
                />

                {/* Sixth Workout Details */}

                <h1 className=" text-lg font-bold text-gray-900 text-center mt-2 mb-2">
                  Workout Details
                </h1>

                <label className="font-bold text-lg text-gray-900">
                  Workout Name
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Name"
                  type="text"
                  onChange={(e) => setSixthWorkoutName(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Sets
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Sets"
                  type="text"
                  onChange={(e) => setSixthSets(e.target.value)}
                  required
                />

                <label className="font-bold text-lg text-gray-900">
                  Workout Reps
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a First Workout Reps"
                  type="text"
                  onChange={(e) => setSixthReps(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default SetWork;
