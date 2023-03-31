import { Box, Divider, List, Typography } from "@mui/material";
import React, { useState } from "react";
import BackwardArrow from "../NavigationArrows/BackwardArrow";
import ForwardArrow from "../NavigationArrows/ForwardArrow";

const ShopByBrands = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [brandsArr, setBrandsArr] = useState([
    {
      url: "https://evkharido.com/media/wysiwyg/jpeg_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/2.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/3.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/12.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/rbseva_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/9.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/13.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/14.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/1.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/17.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/sturdy_bikes_logo.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/kionic_mobility.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/10.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/21.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-scooter/6.jpg",
    },
    {
      url: "https://evkharido.com/media/wysiwyg/e-cycle/23.jpg",
    },
  ]);

  return (
    <Box className="brandsDiv">
      <Typography className="titleTypography">
        SHOP BY <span className="mainTitle">BRANDS</span>
      </Typography>
      <Typography className="titleDescription">
        SELECT FROM WIDE RANGE OF EV BRANDS
      </Typography>
      <Divider className="dividerWidth" />

      {/* brand images */}
      <div
        className="brandsListDiv"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {brandsArr.map((item, index) => {
          return (
            <Box
              key={index}
              component={"img"}
              src={item.url}
              alt={"image"}
              className="brandImage"
            />
          );
        })}

        {/* forward arrow */}
        {showArrows == true ? <ForwardArrow top={"35%"} right={"3%"} /> : null}

        {/* backward arrow */}
        {showArrows == true ? <BackwardArrow top={"35%"} left={"3%"} /> : null}
      </div>
    </Box>
  );
};

export default ShopByBrands;
