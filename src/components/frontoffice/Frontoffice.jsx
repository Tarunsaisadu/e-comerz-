import React from "react";
import FilterProducts from "../products/FilterProducts";

import "./frontoffice.css";
import Productpage from "./Productpage";

function Frontoffice() {
  return (
    <div>
      <div className="f-container">
        <FilterProducts />
        <Productpage />
      </div>
    </div>
  );
}

export default Frontoffice;
