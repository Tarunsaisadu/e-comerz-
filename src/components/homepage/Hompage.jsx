import React from "react";
import { Button } from "react-bootstrap";
import "./homepage.css";
import { Link } from "react-router-dom";
import homebg from "../video/homebg.mp4";
export default function Hompage({ name, Logout }) {
  return (
    <div className="backgroundimg">
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "480%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={homebg} type="video/mp4" />
      </video> */}

      <div className="titlecontainer">
        <h1 className="herotitle text-center">Shop some weird products</h1>
      </div>
      <div className="buttoncontainer">
        <Link to="/products">
          <button className="shopbtn">Start Shopping</button>
        </Link>
      </div>
      <div>
        <img src="../video/headerbg.jpeg" alt="" />
      </div>
    </div>
  );
}
