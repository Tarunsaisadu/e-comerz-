import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./cart.css";
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span style={{ marginTop: "10px" }} key={i} onClick={() => onClick(i)}>
          {rating > i ? <AiFillStar fontSize="15px" /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
