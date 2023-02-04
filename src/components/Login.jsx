import React from "react";
import { account } from "../appwrite/appwrite";
import { Link, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg"
import {Google} from "../icons/Google"
import {Gmail} from "../icons/Gmail"
import {Password} from "../icons/Password"
import {Logout} from "../icons/Logout"
import {Right} from "../icons/Right"


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="bg-primary-500 flex flex-col lg:flex-row  h-full lg:h-screen p-3">
      <div className=" w-full lg:w-1/2 bg-grey-lighter flex rounded flex-col order-2 lg:order-1 bg-white">
        <div className="flex justify-start space-x-2 p-3 items-center">
          <div className="bg-primary-500 h-9 w-9 rounded-full"></div>
          <h2 className="text-xl font-bold font-Caveat">Ayurveda</h2>
        </div>
        <div className="container w-full lg:w-4/6 mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-semibold">Welcome Back</h1>
            <div className="flex space-x-2 p-2 shadow-md px-5 border rounded my-4 items-center">
              <Google className="text-xl"/>
              <h2 className="text-lg font-medium text-gray-600">Sign In with Google</h2>
            </div>
            <div className="flex my-10 w-1/2 mx-auto items-center">
              <div className="h-[1px] w-full bg-gray-500"></div>
              <h2 className="mx-5">OR</h2>
              <div className="h-[1px] w-full bg-gray-500"></div>
            </div>
            <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
              <Gmail className="text-2xl text-gray-500"/>
            <input
              type="text"
              id="name"
              className="outline-none bg-transparent"
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
            <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
            <Password className="text-2xl text-gray-500"/>
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
              onClick={loginUser}
            >
              <h2>Login</h2>
              <Logout className="text-2xl"/>
            </button>
              <div className=" my-4 flex w-full justify-between">
                <h2>Don't have account?</h2>
                <Link to="/signup" className="flex text-lg font-medium text-blue-700 items-center space-x-2">
                  <h2>Register</h2>
                  <Right className="text-lg"/>
                </Link>
              </div>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 order-1 flex items-center lg:order-2 justify-center">
              <img src={logo} className=" w-48 my-5 lg:w-80"/>
      </div>
    </div>
    </>
  );
}

export default Login;
