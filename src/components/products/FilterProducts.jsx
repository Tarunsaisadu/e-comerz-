import React, { useState } from "react";
import { Button, Form, Badge } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./filterproducts.css";
import { FilterAlt } from "@material-ui/icons";

const FilterProducts = ({ product }) => {
  const [rate, setRate] = useState(3);

  const {
    productState: { forReturn, byStock, byFastDelivery, sort, byRating },
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, sort, byRating);
  return (
    <div className="filters ">
      <div className="filterwrapper"></div>
      <div className="filtermenu"></div>
      <h3 className="filterTitle">
        <img
          className="filtericons"
          src="https://img.icons8.com/windows/24/000000/filter.png"
        />
        Filters{" "}
      </h3>
      <br />
      <ul className="filterList">
        <li className="filterlistitems">
          <img
            className="filtericons"
            src="https://img.icons8.com/ios-filled/24/000000/generic-sorting-2.png"
          />
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
          <img
            className="filtericons"
            src="https://img.icons8.com/ios-filled/24/000000/generic-sorting.png"
          />
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
          <img
            className="filtericons"
            src="https://img.icons8.com/ios/24/000000/out-of-stock.png"
          />
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
          <img
            className="filtericons"
            src="https://img.icons8.com/ios/24/000000/product--v2.png"
          />
          <Form.Check
            inline
            label="Available for Return"
            name="group1"
            type="checkbox"
            id={"inline-4"}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_RETURN",
              })
            }
            checked={forReturn}
          />
        </li>

        <li className="filterlistitems">
          <img
            className="filtericons"
            src="https://img.icons8.com/cotton/24/000000/fast-delivery--v1.png"
          />
          <Form.Check
            inline
            label="Fast Delivery"
            name="group1"
            type="checkbox"
            id={"inline-5"}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
        </li>

        <li className="filterlistitems nohover">
          <img
            className="filtericons"
            src="https://img.icons8.com/material-outlined/24/000000/rating.png"
          />
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
          <img
            className="filtericons"
            src="https://img.icons8.com/ios/24/000000/clear-filters.png"
          />
          <Button
            variant="outline-dark"
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
