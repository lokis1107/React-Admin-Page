import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { UserType } from "../../UserContaxt";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipLoader from "react-spinners/ClipLoader";

const AssessmentPage = () => {
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

  // Physical Assessment

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
  const [snack, setSnack] = useState("");
  const [beverages, setBeverages] = useState("");
  const [meet, setMeet] = useState("");
  const [dairy, setDairy] = useState("");
  const [veggies, setVeggies] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");

  const { userId, setUserId } = useContext(UserType);

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation("/assessment");
  };

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
      snack,
      beverages,
      meet,
      dairy,
      veggies,
      calorieIntake,
    };

    if (
      clientId &&
      Package &&
      dateOfAss &&
      name &&
      age &&
      gender &&
      workType &&
      healthIssues &&
      trainer &&
      start &&
      end &&
      cardio &&
      flexibility &&
      balance &&
      sholder &&
      wall &&
      pushup &&
      plank &&
      benchPress &&
      deathLift &&
      squats &&
      food &&
      total &&
      snack &&
      beverages &&
      meet &&
      dairy &&
      veggies &&
      calorieIntake
    ) {
      axios
        .post("https://s2t-admin-page.onrender.com/assessment", {
          userId,
          address,
        })
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assessment addedd successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(true);

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

  return (
    <div>
      <div className=" items-center" style={{ marginLeft: "50%" }}>
        <form
          onSubmit={handleSubmit}
          className=" border p-5 rounded-xl shadow-xl"
          style={{ width: 600 }}
        >
          <div className="flex flex-row items-center space-x-8">
            <h1 className="text-center font-bold text-gray-900 text-xl ml-8 mb-5">
              Assessment Details for the Indiviual User
            </h1>
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

          <div className="mt-8 flex flex-col ml-16">
            <label className="font-bold text-lg text-black">Client Id:</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Client Id"
              type="text"
              onChange={(e) => setClientId(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Package</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Package Details"
              onChange={(e) => setPackage(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Date of Assessment
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Date of Assessment"
              onChange={(e) => setDateOfAss(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Name</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Age</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Gender</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Gender"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Work Type
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Work Type"
              onChange={(e) => setWorkType(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Health Issues
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Health Issues"
              onChange={(e) => setHealthIssues(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Trainer Name
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Trainer Name"
              onChange={(e) => setTrainer(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Starting Name
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Starting Name"
              onChange={(e) => setStart(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Ending Date
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Ending Date"
              onChange={(e) => setEnd(e.target.value)}
              required
            />

            {/* Physical Assessment */}

            <h1 className="text-center font-bold text-gray-900 text-xl mt-5 mb-5">
              Physical Assessment fot the Client
            </h1>

            <label className="font-bold text-lg mt-3 text-black">
              Cardio Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Cardio Test"
              onChange={(e) => setCardio(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Flexibility Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Flexibility Test"
              onChange={(e) => setFlexibility(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Balance Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a  Balance Test"
              onChange={(e) => setBalance(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Sholder Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Sholder Test"
              onChange={(e) => setSholder(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Wall Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Wall Test"
              onChange={(e) => setWall(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Pushup Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a pushup"
              onChange={(e) => setPushup(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Plank Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Plank Test"
              onChange={(e) => setPlank(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              BenchPress Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a BenchPress Test"
              onChange={(e) => setBenchPress(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              DeathLift Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a DeathLift Test"
              onChange={(e) => setDeathLift(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Squats Test
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Squats Test"
              onChange={(e) => setSquats(e.target.value)}
              required
            />

            {/* Nutrition Assessment */}

            <h1 className="text-center font-bold text-gray-900 text-xl mt-5 mb-5">
              Nutrition Assessment fot the Client
            </h1>

            <label className="font-bold text-lg mt-3 text-black">
              Food Type
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Food Type"
              onChange={(e) => setFood(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Total Food
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Total Food"
              onChange={(e) => setTotal(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Snack</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Snack"
              onChange={(e) => setSnack(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Beverages
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Beverages"
              onChange={(e) => setBeverages(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Meet</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Meet"
              onChange={(e) => setMeet(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Dairy</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Dairy"
              onChange={(e) => setDairy(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">Veggies</label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Veggies"
              onChange={(e) => setVeggies(e.target.value)}
              required
            />
            <label className="font-bold text-lg mt-3 text-black">
              Calorie in Take
            </label>
            <input
              className="mt-1 border-b mb-2 border-black p-1 w-96"
              placeholder="Enter a Calorie in Take"
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
  );
};

export default AssessmentPage;
