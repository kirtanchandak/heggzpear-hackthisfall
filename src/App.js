import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Notification from "./components/Notification";

import Home from "./components/Home";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />

        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
