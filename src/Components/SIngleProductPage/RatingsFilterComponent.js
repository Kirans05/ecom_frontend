import { Rating, Typography } from "@mui/material";
import React from "react";

const RatingsFilterComponent = ({ ratings, qty }) => {
  return (
    <div className="ratingsMainDiv">
      <Rating name="read-only" value={ratings} readOnly className="ratingsStar"/>
      <Typography className="divSubtitle">({qty})</Typography>
    </div>
  );
};

export default RatingsFilterComponent;
