import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const Start = () => {
  const [loading, setLoading] = useState(false);

  const [clientId, setClientId] = useState("");
  const [Package, setPackage] = useState("");
  const [dateOfAss, setDateOfAss] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [workType, setWorkType] = useState("");
  const [healthIssues, setHealthIssues] = useState("");
  const [trainer, setTrainer] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // physical Assessment

  const [cardio, setCardio] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [balance, setBalance] = useState("");
  const [sholder, setSholder] = useState("");
  const [wall, setWall] = useState("");
  const [pushup, setPushup] = useState("");
  const [plank, setPlank] = useState("");
  const [benchPress, setBenchPress] = useState("");
  const [deathLift, setDeathLift] = useState("");
  const [squats, setSquats] = useState("");

  // Nutrition Assessment

  const [food, setFood] = useState("");
  const [total, setTotal] = useState("");
  const [snacks, setSnacks] = useState("");
  const [beverages, setBeverages] = useState("");
  const [meet, setMeet] = useState("");
  const [dairy, setDairy] = useState("");
  const [veggies, setVeggies] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://s2t-admin-page.onrender.com/assessment", {
        clientId,
        Package,
        dateOfAss,
        name,
        age,
        gender,
        workType,
        healthIssues,
        trainer,
        start,
        end,
        cardio,
        flexibility,
        balance,
        sholder,
        wall,
        pushup,
        plank,
        benchPress,
        deathLift,
        squats,
        food,
        total,
        snacks,
        beverages,
        meet,
        dairy,
        veggies,
        calorieIntake,
      })
      .then((result) => navigation("/assessment"))
      .catch((err) => console.log(err));
    setLoading(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Assessment Added Successfully",
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
        <div className="">
          {/* Assesment Form */}
          <div>
            <div>
              <h1 className=" text-lg font-bold text-gray-900 text-center">
                S2T FITNESS STUDIO
              </h1>
              <h1 className=" text-lg font-bold text-gray-900 text-center mt-1">
                FITNESS AND NUTRITION ASSESSMENT SHEET
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
                {/* Package Details */}

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

                {/* Date of Assessment */}

                <label className="font-bold text-lg text-gray-900">
                  Date of Assessment
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Assessment Data"
                  type="text"
                  onChange={(e) => setDateOfAss(e.target.value)}
                  required
                />

                {/* Name of the customer  */}

                <label className="font-bold text-lg text-gray-900">Name</label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                {/* Age of the user */}

                <label className="font-bold text-lg text-gray-900">Age</label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Age"
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                  required
                />

                {/* Genter  */}

                <label className="font-bold text-lg text-gray-900">
                  Gender
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Gender"
                  type="text"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />

                {/* Work type  */}

                <label className="font-bold text-lg text-gray-900">
                  Work type
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Work type"
                  type="text"
                  onChange={(e) => setWorkType(e.target.value)}
                  required
                />

                {/* Health issues  */}

                <label className="font-bold text-lg text-gray-900">
                  Health Issues
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Health Issues"
                  type="text"
                  onChange={(e) => setHealthIssues(e.target.value)}
                  required
                />

                {/* Trainer name  */}

                <label className="font-bold text-lg text-gray-900">
                  Allocated Trainer
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Trainer"
                  type="text"
                  onChange={(e) => setTrainer(e.target.value)}
                  required
                />

                {/* Start Date */}

                <label className="font-bold text-lg text-gray-900">
                  Start Date
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Start Date"
                  type="text"
                  onChange={(e) => setStart(e.target.value)}
                  required
                />

                {/* End Date */}

                <label className="font-bold text-lg text-gray-900">
                  End Date
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a End Date"
                  type="text"
                  onChange={(e) => setEnd(e.target.value)}
                  required
                />

                <div>
                  <h1 className=" text-lg font-bold text-gray-900 text-center mt-3 mb-4">
                    PHYSICAL ASSESSMENT
                  </h1>
                </div>

                {/* Cardio */}

                <label className="font-bold text-lg text-gray-900">
                  Cardio 3 M Step Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Cardio 3 M Step"
                  onChange={(e) => setCardio(e.target.value)}
                  required
                />

                {/* Flexibility */}

                <label className="font-bold text-lg text-gray-900">
                  Flexibility Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Flexibility"
                  onChange={(e) => setFlexibility(e.target.value)}
                  required
                />

                {/* Balance Test */}

                <label className="font-bold text-lg text-gray-900">
                  Balance Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Balance"
                  onChange={(e) => setBalance(e.target.value)}
                  required
                />

                {/* Sholder strength Test */}

                <label className="font-bold text-lg text-gray-900">
                  Shoulder Strength Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Shoulder Strength"
                  onChange={(e) => setSholder(e.target.value)}
                  required
                />

                {/* Maximum wall sit Test */}

                <label className="font-bold text-lg text-gray-900">
                  Maximum Wall Sit Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Maximum Wall Sit"
                  onChange={(e) => setWall(e.target.value)}
                  required
                />

                {/* Pushup Test */}

                <label className="font-bold text-lg text-gray-900">
                  Pushup Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Pushup Set"
                  onChange={(e) => setPushup(e.target.value)}
                  required
                />

                {/* Maximum plank Test */}

                <label className="font-bold text-lg text-gray-900">
                  Maximum Plank Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Plank Test"
                  onChange={(e) => setPlank(e.target.value)}
                  required
                />

                {/* Bench Press Test */}

                <label className="font-bold text-lg text-gray-900">
                  Bench Press Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Bench Press Set"
                  onChange={(e) => setBenchPress(e.target.value)}
                  required
                />

                {/* Death Lift Test */}

                <label className="font-bold text-lg text-gray-900">
                  Death Lift Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Death Lift Set"
                  onChange={(e) => setDeathLift(e.target.value)}
                  required
                />

                {/* Squats Test */}

                <label className="font-bold text-lg text-gray-900">
                  Squats Test
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Squats Set"
                  onChange={(e) => setSquats(e.target.value)}
                  required
                />

                <div>
                  <h1 className=" text-lg font-bold text-gray-900 text-center mt-3 mb-4">
                    NUTRITION ASSESSMENT
                  </h1>
                </div>

                {/* Food type */}

                <label className="font-bold text-lg text-gray-900">
                  Food Type
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Food Type"
                  onChange={(e) => setFood(e.target.value)}
                  required
                />

                {/* Total meal in a day */}

                <label className="font-bold text-lg text-gray-900">
                  Total Meal In Day
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Total Meal in Day"
                  onChange={(e) => setTotal(e.target.value)}
                  required
                />

                {/* Snacks in a day */}

                <label className="font-bold text-lg text-gray-900">
                  Snacks In Day
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Snacks in Day"
                  onChange={(e) => setSnacks(e.target.value)}
                  required
                />

                {/* Beverages in a day */}

                <label className="font-bold text-lg text-gray-900">
                  Beverages In Day
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Beverages in Day"
                  onChange={(e) => setBeverages(e.target.value)}
                  required
                />

                {/* Meet tacken in a week */}

                <label className="font-bold text-lg text-gray-900">
                  Meet Tacken in a Week
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Meet Tacken in a Week"
                  onChange={(e) => setMeet(e.target.value)}
                  required
                />
                {/* Dairy Products */}

                <label className="font-bold text-lg text-gray-900">
                  Dairy Products
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Dairy Products"
                  onChange={(e) => setDairy(e.target.value)}
                  required
                />
                {/* Veggies in a day */}

                <label className="font-bold text-lg text-gray-900">
                  Veggies In A Day
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Veggies in a day"
                  onChange={(e) => setVeggies(e.target.value)}
                  required
                />
                {/* Total calorie intake per */}

                <label className="font-bold text-lg text-gray-900">
                  Total Calorie Intake Per
                </label>
                <input
                  className="mt-1 mb-2 border-black p-2 rounded-lg w-96 border-b-0"
                  placeholder="Enter a Total Calorie Intake Per"
                  onChange={(e) => setCalorieIntake(e.target.value)}
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

export default Start;
