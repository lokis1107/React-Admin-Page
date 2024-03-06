import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import AssessmentScreen from "./screens/AssessmentScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import DietScreen from "./screens/DietScreen";
import PackageScreen from "./screens/PackageScreen";
import StartAssessment from "./screens/StartAssessment";
import DayWorkout from "./screens/DayWorkout";
import SetWorkoutScreen from "./screens/SetWorkoutScreen";
import ClientCreation from "./screens/ClientCreation";
import ClientDetailsScreen from "./screens/ClientScreen/ClientDetailsScreen";
import ClientAssessmentScreen from "./screens/ClientScreen/ClientAssessmentScreen";
import ClientWorkoutScreen from "./screens/ClientScreen/ClientWorkoutScreen";
import ClientDietScreen from "./screens/ClientScreen/ClientDietScreen";
import { UserContext } from "./UserContaxt";
import StartingWorkoutScreen from "./screens/WorkoutScreen/StartingWorkoutScreen";
import CommonWorkoutScreen from "./screens/CommonWorkoutScreen/CommonWorkoutScreen";
import SecondWorkoutScreen from "./screens/WorkoutScreen/SecondWorkoutScreen";
import ThirdWorkoutScreen from "./screens/WorkoutScreen/ThirdWorkoutScreen";
import FifithWorkoutScreen from "./screens/WorkoutScreen/FifithWorkoutScreen";
import FourthWorkoutScreen from "./screens/WorkoutScreen/FourthWorkoutScreen";
import SixthWorkoutScreen from "./screens/WorkoutScreen/SixthWorkoutScreen";
import AssessmentScreens from "./screens/AssessmentScreen/AssessmentScreens";
import DietScreens from "./screens/DietScreen/DietScreens";
import ClientAuth from "./components/ClientPage/ClientAuth";
import ClientMoreDetailsScreen from "./screens/ClientScreen/ClientMoreDetailsScreen";

const App = () => {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assessment" element={<AssessmentScreen />} />
        <Route path="/workout" element={<WorkoutScreen />} />
        <Route path="/diet" element={<DietScreen />} />
        <Route path="/package" element={<PackageScreen />} />
        <Route path="/start" element={<StartAssessment />} />
        <Route path="/day" element={<DayWorkout />} />
        <Route path="/set" element={<SetWorkoutScreen />} />
        <Route path="/clientcreation" element={<ClientCreation />} />
        <Route path="/clientDetails" element={<ClientDetailsScreen />} />
        <Route path="/clientAssessment" element={<ClientAssessmentScreen />} />
        <Route path="/clientWorkout" element={<ClientWorkoutScreen />} />
        <Route path="/clientdiet" element={<ClientDietScreen />} />
        <Route path="/firstWorkout" element={<StartingWorkoutScreen />} />
        <Route path="/common" element={<CommonWorkoutScreen />} />
        <Route path="/secondWorkout" element={<SecondWorkoutScreen />} />
        <Route path="/thirdWorkout" element={<ThirdWorkoutScreen />} />
        <Route path="/fourthWorkout" element={<FourthWorkoutScreen />} />
        <Route path="/fifthWorkout" element={<FifithWorkoutScreen />} />
        <Route path="/sixthWorkout" element={<SixthWorkoutScreen />} />
        <Route path="/assessmentfit" element={<AssessmentScreens />} />
        <Route path="/dietPage" element={<DietScreens />} />
        <Route path="/clientAuth" element={<ClientAuth />} />
        <Route
          path="/clientMoreDetails"
          element={<ClientMoreDetailsScreen />}
        />
      </Routes>
    </UserContext>
  );
};

export default App;
