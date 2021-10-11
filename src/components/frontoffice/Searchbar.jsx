import React from "react";
import { CartState } from "../context/Context";
import { FormControl } from "react-bootstrap";
import "./searchbar.css";
export default function Searchbar() {
  const {
    state: { products, cart },
    dispatch,
    productDispatch,
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  return (
    <div className="searchcontainer">
      <FormControl
        style={{ width: 600 }}
        type="search"
        placeholder="search a product you are looking for..."
        className=" searchbar"
        onChange={(e) => {
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
}
