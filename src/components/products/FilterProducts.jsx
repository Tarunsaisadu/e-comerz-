import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./filterproducts.css";
import { FilterAlt } from "@material-ui/icons";
const FilterProducts = () => {
  const [rate, setRate] = useState(3);

  const {
    productState: { byStock, byFastDelivery, sort, byRating },

    productDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, sort, byRating);
  return (
    <div className="filters ">
      <div className="filterwrapper"></div>
      <div className="filtermenu"></div>
      <h3 className="filterTitle">Filters</h3>
      <br />
      <ul className="filterList">
        <li className="filterlistitems">
          <Form.Check
            inline
            label="Lower to Higher"
            name="group1"
            type="radio"
            id={"inline-1"}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowtoHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </li>
        <li className="filterlistitems">
          <Form.Check
            inline
            label="Higher to Lower"
            name="group1"
            type="radio"
            id={"inline-2"}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </li>
        <li className="filterlistitems">
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={"inline-3"}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
        </li>
        <li className="filterlistitems">
          <Form.Check
            inline
            label="Fast Delivery"
            name="group1"
            type="checkbox"
            id={"inline-4"}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
        </li>
        <li className="filterlistitems nohover">
          <label style={{ paddingRight: 10 }}></label>
          <Rating
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </li>
        <li className="filterlistitemsnohover">
          <Button
            variant="light"
            onClick={() =>
              productDispatch({
                type: "CLEAR_FILTERS",
              })
            }
          >
            Clear filters
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default FilterProducts;
