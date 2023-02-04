import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
