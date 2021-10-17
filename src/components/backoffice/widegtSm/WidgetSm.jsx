import React from "react";
import "./widgetSm.css";
import faker from "faker";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Users</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={faker.image.avatar()} className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {faker.name.firstName()}</span>
            <span className="widgetSmUserTitle"> {faker.name.jobTitle()}</span>
          </div>
          <button className="widgetSmButton">
            <lord-icon
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              stroke="51"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={faker.image.avatar()} className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {faker.name.firstName()}</span>
            <span className="widgetSmUserTitle"> {faker.name.jobTitle()}</span>
          </div>
          <button className="widgetSmButton">
            <lord-icon
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              stroke="51"
              style={{ width: "38px", height: "38px" }}
            ></lord-icon>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={faker.image.avatar()} className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {faker.name.firstName()}</span>
            <span className="widgetSmUserTitle"> {faker.name.jobTitle()}</span>
          </div>
          <button className="widgetSmButton">
            <lord-icon
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              stroke="51"
              style={{ width: "38px", height: "38px" }}
            ></lord-icon>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={faker.image.avatar()} className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {faker.name.firstName()}</span>
            <span className="widgetSmUserTitle"> {faker.name.jobTitle()}</span>
          </div>
          <button className="widgetSmButton">
            <lord-icon
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              stroke="51"
              style={{ width: "38px", height: "38px" }}
            ></lord-icon>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={faker.image.avatar()} className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> {faker.name.firstName()}</span>
            <span className="widgetSmUserTitle"> {faker.name.jobTitle()}</span>
          </div>
          <button className="widgetSmButton">
            <lord-icon
              className="widgetSmIcon"
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              stroke="51"
              style={{ width: "38px", height: "38px" }}
            ></lord-icon>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
