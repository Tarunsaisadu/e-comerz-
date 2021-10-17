import React, { useState } from "react";
import "./login.css";
import bgvideo from "../video/bg-video -login.mp4";
import { Button, Card } from "react-bootstrap";

function Loginform({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="logindiv">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            {/* <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            /> */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <Button type="submit" className="loginbtn">
            Login
          </Button>
          {/* <div className="socialicons">
            <img
              className="socialitems"
              src="https://img.icons8.com/fluency/48/000000/facebook.png"
            />
            <img
              className="socialitems"
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
            />
            <img
              className="socialitems"
              src="https://img.icons8.com/color/48/000000/twitter--v2.png"
            />
            <img
              className="socialitems"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default Loginform;
