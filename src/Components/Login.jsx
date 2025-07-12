import React from "react";
import Header from "../Components/Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 ">
        <form className=" w-3/12 p-12 bg-black/40 my-36 mx-auto text-white rounded-lg  backdrop-blur-sm right-0 left-0  ">
          <h1 className="font-bold text-3xl py-4 cursor-pointer">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-600  placeholder-white rounded-lg"
          />
          <input
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
          <button className="p-4 my-6 bg-red-700 w-full">
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
