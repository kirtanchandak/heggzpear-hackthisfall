import { account } from "../appwrite/appwrite";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Login from "./Login";
import { FormModal } from "./dashboard/FormModal.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { MdiDashboard } from "../icons/MdiDashboard";
import { MdiHistory } from "../icons/MdiHistory";
import { Logout } from "../icons/Logout";
import { MdiNotifications } from "../icons/MdiNotifications";
import { MdiProfile } from "../icons/MdiProfile";
import { User } from "../icons/User";

import logo from "../assets/logo.svg";
function Dashboard({ showModal }) {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setuserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div>
          {showModal ?? <FormModal />}
          <div>
            <aside
              id="default-sidebar"
              className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="h-full px-2 py-4 overflow-y-auto bg-primary-500">
                <ul className="space-y-2">
                  <div className="flex items-center justify-center">
                    <img src={logo} className="h-32 my-4" alt="logo" />
                  </div>

                  <li>
                    <NavLink
                      to="/dashboard"
                      className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                    >
                      <MdiDashboard className="text-2xl" />
                      <h2 className="text-lg font-semibold">Dashboard</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/notifications"
                      className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                    >
                      <MdiNotifications className="text-2xl" />
                      <h2 className="text-lg font-semibold">Notifications</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                    >
                      <MdiProfile className="text-2xl" />
                      <h2 className="text-lg font-semibold">Profile</h2>
                    </NavLink>
                  </li>
                  <li className="fixed bottom-2 w-48">
                    <NavLink
                      to="/"
                      className="flex justify-between items-center p-2 px-3 rounded space-x-2 text-white hover:bg-white bg-primary-400 hover:text-primary-500 hover"
                    >
                      <h2 className="text-lg font-semibold">Logout</h2>
                      <Logout className="text-2xl" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="flex justify-end p-3 bg-white w-full h-12 fixed top-0 shadow-md z-20">
            <div className="flex space-x-2 items-center">
              <User className="text-3xl text-gray-500" />
              <h2 className="text-sm font-semibold">{userDetails.email}</h2>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Dashboard;
