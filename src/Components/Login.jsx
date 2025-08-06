import React, { useRef } from "react";
import Header from "../Components/Header";
import { useState } from "react";
import { useNavigate, useDispatch } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    let message;

    if (isSignInForm) {
      message = checkValidData(email.current.value, password.current.value);
      if (message) {
        setErrorMessage(message);
        return; // Stop if validation fails
      }

      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed in:", user);
          setErrorMessage(null); // Clear error if sign-in is successful
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        userName.current.value
      );
      if (message) {
        setErrorMessage(message);
        return; // Stop if validation fails
      }

      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log("User created:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }

    setErrorMessage(null); // Clear error if everything is valid
  };

  const toggleSignInForm = () => {
    setErrorMessage(null);

    if (userName.current) userName.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    // Toggle the form state

    setSignInForm(!isSignInForm);
  };
  console.log("hello");
  console.log("Validation message:");
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
              ref={userName}
              type="text"
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
