import React from "react";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./topnav.css";
const Topnav = ({ Logout }) => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light  py-3 shadow-sm  topnav">
        <div class="container">
          <Link to="/">
            <a className="navbar-brand  mx-5 px-5" href="#">
              Maya shopping
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li class="nav-item active px-3">
                <Link to="/">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="products">
                  <a class="nav-link" href="#">
                    Products
                  </a>
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="sale">
                  <a class="nav-link" href="#">
                    New Sale
                  </a>
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="backoffice">
                  <a class="nav-link" href="#">
                    Back Office
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navbuttons ">
              <a
                href="#"
                className="btn btn-outline-dark px-1 mx-2"
                onClick={Logout}
              >
                <i class="fa fa-sign-out me-1" aria-hidden="true"></i> signout
              </a>

              {/* <span>
                <a href="#" className="btn btn-outline-dark px-1">
                  <i class="fa fa-shopping-cart me-1" aria-hidden="true"></i>{" "}
                  cart(0)
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;
