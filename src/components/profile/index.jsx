import React from "react";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, isEmailUser, isGoogleUser, userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-700">
          You are not logged in
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">
          Profile Information
        </h2>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold">Name:</span>{" "}
            {currentUser.displayName}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold">Email:</span> {currentUser.email}
          </p>
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold">Login Type:</span>
            {isEmailUser
              ? "Email/Password"
              : isGoogleUser
              ? "Google"
              : "Unknown"}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/sign-in");
              });
            }}
            className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
