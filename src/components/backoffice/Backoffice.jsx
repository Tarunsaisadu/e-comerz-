import React from "react";
import faker from "faker";
import { CartState } from "../context/Context";
import Sidebar from "./Sidebar";
import "./backoffice.css";
import Home from "./Home";
const Backoffice = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />

        <Home />
      </div>
    </div>
  );
};

export default Backoffice;
