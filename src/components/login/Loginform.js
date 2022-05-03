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
            <label htmlFor="email" className="label">
              Email :{" "}
            </label>
            <input
              placeholder="abc@example.com"
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
            <label htmlFor="password" className="label">
              Password :{" "}
            </label>
            <input
              placeholder="12345"
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
        </div>
      </form>
      <div className="caution">
        <h3>Enter same login details as show in input fields</h3>
      </div>
    </div>
  );
}

export default Loginform;
