import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import BikeDescription from "./BikeDescription";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ForwardArrow from "../NavigationArrows/ForwardArrow";
import BackwardArrow from "../NavigationArrows/BackwardArrow";

const NewArrivals = () => {
  const [showArrows, setShowArrows] = useState(false);

  const [newArrivalArr, setNewArrivalArr] = useState([
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/h/e/hero_vida_v1-plus_images_reviews_-price_-range_-charging-time_-accessories_.jpg",
      name: "HERO VIDA V1 PLUS ELECTRIC SCOOTER",
      ratings: 0,
      price: "149,818",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/h/e/hero_vida_v1-pro_images_reviews_-price_-range_-charging-time_-accessories.jpg",
      name: "HERO VIDA V1 PRO ELECTRIC SCOOTER",
      ratings: 0,
      price: "164,045",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/3/e/3e1ca817-4bea-40ff-8f9a-7dd61ce1fea1_3.jpg",
      name: "S-ONE VICTORY LITHIUM ION 60V 35AH ELECTRIC SCOOTER",
      ratings: 4,
      price: "92,400",
    },
    {
      url: "https://evkharido.com/media/catalog/product/cache/f4037cf015b06dc984582ea64882dd84/3/e/3e1ca817-4bea-40ff-8f9a-7dd61ce1fea1.jpg",
      name: "S-ONE VICTORY LITHIUM ION 48V 27AH ELECTRIC SCOOTER",
      ratings: 4.5,
      price: "74,400",
    },
  ]);

  return (
    <Box className="newArrivalMainDiv">
      <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
        NEW{" "}
        <span
          style={{
            fontSize: "40px",
            color: "rgb(56,160,34)",
            fontWeight: "bold",
          }}
        >
          ARRIVALS
        </span>
      </Typography>
      <Typography sx={{ fontWeight: 100 }}>
        CHOOSE FROM OUR LATEST COLLECTION OF ELECTRIC BIKES, SCOOTERS & CYCLES
      </Typography>
      <Divider
        sx={{ borderBottom: "3px solid rgb(56,160,34)", width: "10%" }}
      />
      <div
        className="productList"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {newArrivalArr.map((item, index) => {
          return <BikeDescription key={index} item={item} />;
        })}

        {/* forward arrow */}
        {showArrows == true ? <ForwardArrow top={"50%"} right={"3%"} /> : null}

        {/* backward arrow */}
        {showArrows == true ? <BackwardArrow top={"50%"} left={"3%"} /> : null}
      </div>
    </Box>
  );
};

export default NewArrivals;
