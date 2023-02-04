import React from "react";
import { account } from "../appwrite/appwrite";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { Google } from "../icons/Google";
import { Gmail } from "../icons/Gmail";
import { Password } from "../icons/Password";
import { Account } from "../icons/Account";
import { Logout } from "../icons/Logout";
import { Right } from "../icons/Right";

function SignUp() {
  const googleAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session("google", "http://localhost:3000/dashboard");
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // SignUp
  const signUpUser = async (e) => {
    e.preventDefault();
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name,
      "password"
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate("/dashboard"); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  return (
    <>
      <div className="bg-primary-500 flex flex-col lg:flex-row  h-full lg:h-screen p-3">
        <div className=" w-full lg:w-1/2 bg-grey-lighter flex rounded flex-col order-2 lg:order-1 bg-white">
          <div className=" w-full lg:w-4/6 mx-auto flex-1 flex flex-col items-center justify-center px-5">
            <h1 className="mb-8 text-3xl text-center font-semibold">
              Create Your Account
            </h1>
            <div className="flex w-full space-x-2 p-2 shadow-md px-5 border rounded my-4 items-center cursor-pointer hover:shadow-lg">
              <Google className="text-xl" />
              <h2
                className="text-lg font-medium text-gray-600  "
                onClick={(e) => googleAuth(e)}
              >
                Sign Up with Google
              </h2>
            </div>
            <div className="flex my-7 w-1/2 mx-auto items-center">
              <div className="h-[1px] w-full bg-gray-500"></div>
              <h2 className="mx-5">OR</h2>
              <div className="h-[1px] w-full bg-gray-500"></div>
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Account className="text-2xl text-gray-500" />
              <input
                type="text"
                className="outline-none w-full bg-transparent"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
              />
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Gmail className="text-2xl text-gray-500" />
              <input
                type="text"
                className="outline-none w-full bg-transparent"
                id="name"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>

            <div className="w-full flex my-2 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Password className="text-2xl text-gray-500" />
              <input
                type="password"
                id="password"
                className="outline-none w-full bg-transparent"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full font-medium flex justify-between p-3 items-center  bg-primary-500 text-center py-3 rounded bg-green text-white hover:bg-primary-600 focus:outline-none my-1"
              onClick={signUpUser}
            >
              <h2>Create Account</h2>
              <Logout className="text-2xl" />
            </button>
            <div className="w-full my-4 flex justify-between">
              <h2>Already have account?</h2>
              <Link
                to="/login"
                className="flex text-lg font-medium text-blue-700 items-center space-x-2"
              >
                <h2>Sign In</h2>
                <Right className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 order-1 flex items-center lg:order-2 justify-center">
          <img src={logo} className=" w-48 my-5 lg:w-80" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
