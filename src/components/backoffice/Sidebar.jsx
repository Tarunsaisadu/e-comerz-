import React from "react";
import "./sidebar.css";
import { Feedback, Chat } from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <br />
          <ul className="sidebarList">
            <li className="sidebarlistitems active ">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/gmzxduhd.json"
                trigger="loop"
                colors="primary:#000000,secondary:#109173"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Home
            </li>
            <li className="sidebarlistitems ">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="loop"
                colors="primary:#0a2e5c,secondary:#08a88a"
                stroke="31"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Statistics
            </li>
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/wfkxiwtw.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarlistitems">
              <lord-icon
                src="https://cdn.lordicon.com/dxjqoygy.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Users
            </li>
            <li className="sidebarlistitems ">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/dnoiydox.json"
                trigger="loop"
                colors="primary:#0a2e5c,secondary:#08a88a"
                stroke="31"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              products
            </li>
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/qhviklyi.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Transactions
            </li>
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/nocovwne.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reviews</h3>
          <ul className="sidebarList">
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/uukerzzv.json"
                trigger="loop"
                colors="primary:#000000,secondary:#109173"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Manage
            </li>
            <li className="sidebarlistitems ">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="loop"
                colors="primary:#0a2e5c,secondary:#08a88a"
                stroke="31"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Analytics
            </li>
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/wfkxiwtw.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarlistitems">
              <lord-icon
                className="sidebarIcons"
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="loop"
                colors="primary:#000000,secondary:#109173"
                style={{ width: "30px", height: "37px" }}
              ></lord-icon>
              Mail
            </li>
            <li className="sidebarlistitems ">
              <Feedback />
              Feedback
            </li>
            <li className="sidebarlistitems">
              <Chat />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
