import React, { useRef } from "react";
import Header from "../Components/Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-3/12 p-12 bg-black/40 my-36 mx-auto text-white rounded-lg  backdrop-blur-sm right-0 left-0  "
        >
          <h1 className="font-bold text-3xl py-4 cursor-pointer">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-600  placeholder-white rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full  bg-gray-500 placeholder-white rounded-lg"
          />

          {!isSignInForm && (
            <input
              type="password"
              placeholder="Full Name"
              className="p-4 my-4 w-full  bg-gray-500 placeholder-white rounded-lg"
            />
          )}
          <p className="text-red-500 text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 m-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Nexplay? Sign Up Now"
              : "Already Registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
