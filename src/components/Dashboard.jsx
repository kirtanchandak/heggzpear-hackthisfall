import { account } from "../appwrite/appwrite";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Login from "./Login";
import { FormModal } from "./dashboard/FormModal.jsx";
import { Link, Nav, useNavigate } from "react-router-dom";
import { MdiDashboard } from "../icons/MdiDashboard";
import { MdiHistory } from "../icons/MdiHistory";
import { MdiNotifications } from "../icons/MdiNotifications";
import { MdiProfile } from "../icons/MdiProfile";

function Dashboard() {
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
          <FormModal />
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm bg-primary-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-5 py-4 overflow-y-auto bg-primary-500">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    activeClassName="is-active"
                    className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                  >
                    <MdiDashboard className="text-2xl" />
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                  >
                    <MdiHistory className="text-2xl" />
                    <h2 className="text-lg font-semibold">History</h2>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                  >
                    <MdiNotifications className="text-2xl" />
                    <h2 className="text-lg font-semibold">Notifications</h2>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex p-2 rounded space-x-2 text-white hover:bg-white hover:text-primary-500 hover"
                  >
                    <MdiProfile className="text-2xl" />
                    <h2 className="text-lg font-semibold">Profile</h2>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
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
