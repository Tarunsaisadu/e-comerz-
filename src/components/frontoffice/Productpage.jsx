import React from "react";
import Products from "../products/Products";
import Searchbar from "./Searchbar";
export default function Productpage() {
  return (
    <div className="productpage">
      <Searchbar />
      <Products />
    </div>
  );
}
