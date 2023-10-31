import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const FullLogin = ({ setShowLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  function loginWithEmail() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        setShowLogin(false);
        router.push("/");
        // ...
      })
      .catch((error) => {
        alert("Email or Password is incorrect");
      });
  }

  function loginWithNumber() {
    alert("Method Doesn't Work. Try Email")
    // if (number.length == 10) {
    //   const appVerifier = window.recaptchaVerifier;
    //   signInWithPhoneNumber(getAuth(), number, appVerifier)
    //     .then((confirmationResult) => {
    //       // SMS sent. Prompt user to type the code from the message, then sign the
    //       // user in with confirmationResult.confirm(code).
    //       setShowOTP(true);
    //       window.confirmationResult = confirmationResult;
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Error; SMS not sent
    //       console.log(error)
    //     });
    // } else alert("Number is incorrect");
  }

  function confirmOTP() {
    confirmationResult
      .confirm(OTP)
      .then((result) => {
        alert("LOGGED IN");
        setShowOTP(false);
        setShowLogin(false);
      })
      .catch((error) => {
        alert("Incorrect OTP");
      });
  }

  return (
    <div className="fixed inset-0 bg-neutral-800/80 z-50 my-auto grid  place-content-center text-white">
      <div className="bg-neutral-900 p-4 rounded-md bg">
        {showOTP ? (
          <>
            <div>
              <p className="text-xl font-bold">LOGIN</p>
              <input
                type="number"
                placeholder="Enter OTP"
                onChange={(e) => setNumber(e.target.value)}
              />
              <button
                className="text-black rounded-md bg-yellow-300 w-full py-2 px-4 font-bold my-2"
                onClick={confirmOTP}
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-xl font-bold">LOGIN</p>
              <button onClick={() => setShowLogin(false)}>
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <hr className="border mb-2" />
            <div className="flex flex-col gap-2">
              <label className="text-sm">Login with Email & Password</label>
              <input
                id="login1"
                className="rounded-md py-2 px-4 text-black focus:outline-none"
                type="text"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="login1"
                className="rounded-md py-2 px-4 text-black focus:outline-none"
                type="text"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="text-black rounded-md bg-yellow-300 w-full py-2 px-4 font-bold my-2"
              onClick={loginWithEmail}
            >
              LOGIN
            </button>
            <div className="flex my-2 gap-2 items-center">
              <hr className="border w-full border-neutral-800" />
              <p>OR</p>
              <hr className="border w-full border-neutral-800" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Login with Phone Number</label>
              <div className="rounded-md p-2 text-black bg-white flex gap-2 items-center">
                <span>+91</span>
                <hr className="py-2 border border-neutral-800" />
                <input
                  className="text-black focus:outline-none"
                  type="number"
                  placeholder="phone number"
                  onChange={(e)=>setNumber(e.target.value)}
                />
              </div>
            </div>
            <button
              className="text-black rounded-md bg-yellow-300 w-full py-2 px-4 font-bold my-2"
              onClick={loginWithNumber}
            >
              Get OTP
            </button>
            <br />
            <p className="text-red-600 text-xs">FOR TEST USER</p>
            <p className="text-red-600 text-xs">Email: test123@email.com</p>
            <p className="text-red-600 text-xs">Password: test123</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FullLogin;
