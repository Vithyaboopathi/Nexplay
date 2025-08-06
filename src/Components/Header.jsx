import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen p-4g-gradient-to-b from-black flex justify-between">
      <img className="w-20" src={logo} alt="logo" />
      {user && (
        <div className="flex items-center p-6">
          <img className="w-12 h-12" src={avatar} alt="avatar" />
          <button onClick={handleSignOut} className="text-white  font-bold p-6">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
