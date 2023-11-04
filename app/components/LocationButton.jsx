import { MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const LocationButton = ({ text }) => {
  // const [waitForAuth, setWaitForAuth] = useState(false);

  // useEffect(() => {
  //   getLocation();
  // }, [waitForAuth]);

  // auth.onAuthStateChanged((wait) => {
  //   if (wait) {
  //     setWaitForAuth(true);
  //   }
  // });

  // const [locData, setLocData] = useState(null);
  const [pincode, setPincode] = useState("New Delhi,110003");

  // const getLocation = async () => {
  //   if (auth.currentUser != null) {
  //     const docRef = doc(db, "users", auth.currentUser.uid);
  //     const docSnap = await getDoc(docRef);
  //     const userData = docSnap.data();
  //     const url = `https://india-pincode-api.p.rapidapi.com/v1/in/places/pincode?pincode=${userData.addresses[0].pincode}`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "25c8007504msh7d039ceec71cbf7p1849cejsn9bf705fbc257",
  //         "X-RapidAPI-Host": "india-pincode-api.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = JSON.parse(await response.text());
  //       setLocData(result.result);
  //     } catch (error) {}
  //   }
  // };

  return (
    <div
      className={`flex gap-2 ${
        // text != undefined ? "items-center" : "items-end"
        "items-center"
      }`}
    >
      <button>
        <MapPinIcon className="text-white w-6 h-6" />
      </button>
      {text != undefined && <p className="text-xs">{text}</p>}
      <p className="text-yellow-300 underline text-xs font-bold">
        {pincode}
        {/* {locData == null
          ? pincode
          : `${locData[0].taluk},${locData[0].pincode}`} */}
      </p>
    </div>
  );
};

export default LocationButton;
