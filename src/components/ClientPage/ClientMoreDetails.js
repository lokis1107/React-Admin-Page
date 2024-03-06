import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { UserType } from "../../UserContaxt";
import { Link, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ClientMoreDetails = () => {
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  console.log("userId", userId);
  useEffect(() => {
    fetchAddresses();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `https://s2t-admin-page.onrender.com/moreDetails/${userId}`
      );
      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };
  //refresh the addresses when the component comes to the focus ie basically when we navigate back
  useCallback(() => {
    fetchAddresses();
  }, []);

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation("/clientAuth");
  };

  const navigation = useNavigate();

  const convertPdf = useRef();

  const generatePDF = useReactToPrint({
    content: () => convertPdf.current,
    documentTitle: "UserData",
    onAfterPrint: () => alert("PDF Saved Successfully"),
  });

  console.log("Diet Plan", addresses);
  return (
    <div>
      {addresses.map((item, index) => {
        return (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-lg"
            style={{ marginLeft: "70%", width: "100%" }}
          >
            <div
              onClick={logout}
              style={{ width: 100, cursor: "pointer" }}
              className="border p-2 bg-black rounded-lg ml-80"
            >
              <h1 className="text-center font-bold text-lg text-white">
                Sign Out
              </h1>
            </div>
            <div ref={convertPdf} style={{ width: "100%" }}>
              <h1 className="text-center font-bold text-xl mt-5 text-gray-900">
                Client Details
              </h1>
              <div className="flex-row flex items-center mt-8 ml-10">
                <div style={{ width: "50%" }}>
                  <h1 className="text-lg font-bold text-gray-900">Name</h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">Age</h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Date of Birth
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Parment Address
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Current Address
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Contact Number
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Profession Details
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Date of Joining
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Health Issues
                  </h1>

                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Blood Group
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Membership Details
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    Personal Trainer Details
                  </h1>
                </div>
                <div style={{ width: "50%" }}>
                  <h1 className="text-lg font-bold text-gray-900">
                    : {item.name}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.age}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.dob}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.permanent}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.current}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.contact}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.profession}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.doj}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.health}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.blood}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.memberShip}
                  </h1>
                  <h1 className="text-lg mt-2 font-bold text-gray-900">
                    : {item.personalTrainer}
                  </h1>
                </div>
              </div>
            </div>
            <Link to={"/home"}>
              <div className="p-2 mt-5 mx-24 border bg-black rounded-lg">
                <h1 className="text-center font-bold text-white">Done</h1>
              </div>
            </Link>

            <div
              onClick={generatePDF}
              style={{ cursor: "pointer" }}
              className="p-2 mt-5 mx-24 border border-black bg-white rounded-lg"
            >
              <h1 className="text-center font-bold text-black">Export Data</h1>
            </div>

            {/* <h1 className="text-lg font-bold text-black">Name: {item.name}</h1>
            <h1 className="text-lg font-bold text-black">Age: {item.age}</h1>
            <h1 className="text-lg font-bold text-black">DOB: {item.dob}</h1>
            <h1 className="text-lg font-bold text-black">
              Address: {item.permanent}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Current Address: {item.current}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Contact Numbers: {item.contact}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Profession Details: {item.profession}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Date Of Joining: {item.doj}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Health Issuse: {item.health}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Blood Group: {item.blood}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Membership Details: {item.memberShip}
            </h1>
            <h1 className="text-lg font-bold text-black">
              Personal Trainer Details: {item.personalTrainer}
            </h1> */}
          </div>
        );
      })}
    </div>
  );
};

export default ClientMoreDetails;
